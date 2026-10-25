const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s);

/* Countdown to the end of the qualifier window */
const cd = $('[data-deadline]');
if (cd) {
  const end = new Date(cd.dataset.deadline!).getTime();
  const pad = (n: number) => String(n).padStart(2, '0');
  const set = (k: string, v: string) => { const el = cd.querySelector(`[data-cd="${k}"]`); if (el) el.textContent = v; };
  const tick = () => {
    const ms = Math.max(0, end - Date.now());
    set('d', String(Math.floor(ms / 864e5)));
    set('h', pad(Math.floor(ms / 36e5) % 24));
    set('m', pad(Math.floor(ms / 6e4) % 60));
    set('s', pad(Math.floor(ms / 1e3) % 60));
  };
  tick(); setInterval(tick, 1000);
}

/* Count-up numbers; the final value is already in the HTML */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count), suf = el.dataset.suffix || '';
  if (reduce || !target) return;
  let t0 = 0;
  const step = (ts: number) => {
    if (!t0) t0 = ts;
    const k = Math.min(1, (ts - t0) / 1600), e = 1 - Math.pow(1 - k, 4);
    el.textContent = Math.round(target * e).toLocaleString('en-US') + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Reveal on scroll, journey line, counters, active nav */
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const el = e.target as HTMLElement;
    el.classList.add('in');
    if (el.dataset.count) countUp(el);
    io.unobserve(el);
  }
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, [data-count], #journey-line').forEach((el) => io.observe(el));

const links = new Map<string, HTMLAnchorElement>();
document.querySelectorAll<HTMLAnchorElement>('nav.main a').forEach((a) => links.set(a.hash.slice(1), a));
const nio = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) links.forEach((a, id) => a.classList.toggle('active', id === e.target.id));
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((_, id) => { const s = document.getElementById(id); if (s) nio.observe(s); });

/* Header state, progress bar, story line, back-to-top */
const bar = $('#progress'), top = $('#top-bar'), tt = $('#to-top'), story = $('#story'), fill = $('#story-fill');
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  top?.classList.toggle('scrolled', y > 40);
  tt?.classList.toggle('show', y > 900);
  if (story && fill) {
    const r = story.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
    fill.style.height = `${p * (r.height - 16)}px`;
  }
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();
tt?.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

/* Mobile menu */
const mb = $('#menu-btn');
mb?.addEventListener('click', () => { const open = document.body.classList.toggle('menu-open'); mb.setAttribute('aria-expanded', String(open)); });
links.forEach((a) => a.addEventListener('click', () => { document.body.classList.remove('menu-open'); mb?.setAttribute('aria-expanded', 'false'); }));

/* 3D tilt on team cards */
if (!reduce && matchMedia('(hover: hover)').matches) {
  document.querySelectorAll<HTMLElement>('.tilt').forEach((c) => {
    c.addEventListener('mousemove', (e) => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    c.addEventListener('mouseleave', () => { c.style.transform = ''; });
  });
}

/* Gallery lightbox */
const lb = $<HTMLDialogElement>('#lb');
const shots = Array.from(document.querySelectorAll<HTMLButtonElement>('#gallery-grid button'));
if (lb && shots.length) {
  const img = $<HTMLImageElement>('#lb-img')!, cap = $('#lb-cap')!;
  let cur = 0;
  const show = (i: number) => { cur = (i + shots.length) % shots.length; const b = shots[cur]; img.src = b.dataset.full!; img.alt = b.dataset.cap!; cap.textContent = b.dataset.cap!; };
  shots.forEach((b, i) => b.addEventListener('click', () => { show(i); lb.showModal(); }));
  $('#lb-prev')!.addEventListener('click', () => show(cur - 1));
  $('#lb-next')!.addEventListener('click', () => show(cur + 1));
  $('#lb-close')!.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(cur - 1); if (e.key === 'ArrowRight') show(cur + 1); });
}

/* ---------- Motion layer ---------- */
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* Confetti sparks in the hero, in brand colours */
const canvas = document.getElementById('sparks') as HTMLCanvasElement | null;
if (canvas && !reduce) {
  const ctx = canvas.getContext('2d')!;
  const colors = ['#e8107f', '#ff7a1a', '#ffd400', '#7ad65a', '#18b5e8', '#ffffff', '#ff8cc2'];
  let w = 0, h = 0, dpr = Math.min(2, devicePixelRatio || 1);
  type P = { x: number; y: number; r: number; vx: number; vy: number; c: string; a: number; spin: number; shape: number };
  let parts: P[] = [];
  const resize = () => {
    const r = canvas.getBoundingClientRect(); w = r.width; h = r.height;
    canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(90, w / 14));
    parts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, r: 1.5 + Math.random() * 3.5, vx: (Math.random() - 0.5) * 0.3, vy: -0.15 - Math.random() * 0.45, c: colors[(Math.random() * colors.length) | 0], a: Math.random() * 6.28, spin: (Math.random() - 0.5) * 0.04, shape: Math.random() < 0.5 ? 0 : 1 }));
  };
  resize(); addEventListener('resize', resize);
  let mx = 0, my = 0, running = true;
  canvas.parentElement!.addEventListener('mousemove', (e) => { const r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  new IntersectionObserver(([e]) => { running = e.isIntersecting; if (running) requestAnimationFrame(draw); }).observe(canvas);
  function draw() {
    if (!running) return;
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      const dx = p.x - mx, dy = p.y - my, d2 = dx * dx + dy * dy;
      if (d2 < 9000) { p.vx += dx / 9000; p.vy += dy / 9000; }
      p.x += p.vx; p.y += p.vy; p.a += p.spin; p.vx *= 0.99;
      if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; p.vy = -0.15 - Math.random() * 0.45; }
      if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.globalAlpha = 0.85;
      if (p.shape) ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); else { ctx.beginPath(); ctx.arc(0, 0, p.r, 0, 6.283); ctx.fill(); }
      ctx.restore();
    }
    requestAnimationFrame(draw);
  }
}

/* Cursor spotlight on dark sections + glow cursor + magnetic buttons */
if (finePointer && !reduce) {
  document.querySelectorAll<HTMLElement>('.spot-glow').forEach((s) => {
    s.addEventListener('mousemove', (e) => { const r = s.getBoundingClientRect(); s.style.setProperty('--mx', `${e.clientX - r.left}px`); s.style.setProperty('--my', `${e.clientY - r.top}px`); });
  });
  const dot = document.getElementById('cursor-dot');
  if (dot) {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; dot.classList.add('on'); });
    document.addEventListener('mouseleave', () => dot.classList.remove('on'));
    const loop = () => { cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18; dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`; requestAnimationFrame(loop); };
    loop();
    document.querySelectorAll('a, button, .cd-flip, .sdg-img').forEach((el) => {
      el.addEventListener('mouseenter', () => dot.classList.add('big'));
      el.addEventListener('mouseleave', () => dot.classList.remove('big'));
    });
  }
  document.querySelectorAll<HTMLElement>('.btn').forEach((b) => {
    b.addEventListener('mousemove', (e) => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`; });
    b.addEventListener('mouseleave', () => { b.style.transform = ''; });
  });
  /* Hero parallax */
  const hero = document.querySelector<HTMLElement>('.hero');
  const layers = Array.from(document.querySelectorAll<HTMLElement>('.hero .arch, .hero .ring, .hero .orb'));
  hero?.addEventListener('mousemove', (e) => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    layers.forEach((l, i) => { l.style.translate = `${x * (12 + i * 8)}px ${y * (12 + i * 8)}px`; });
  });
}

/* Tap to flip Campus Director cards on touch screens */
document.querySelectorAll<HTMLElement>('.cd-flip').forEach((c) => {
  c.addEventListener('click', () => { if (!finePointer) c.classList.toggle('flipped'); });
  c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.classList.toggle('flipped'); } });
});
