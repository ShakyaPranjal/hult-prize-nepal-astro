// All site content lives here, so the team can update facts without touching layout.
// Every figure is tagged with where it came from; see `sources` at the bottom.

export const season = {
  name: '2026–27',
  challenge: 'Unlimited',
  nationals: 'Last week of April 2027',
  qualifiersClose: '2027-02-28T23:59:59+05:45',
  register: 'https://www.hultprize.org/apply-now',
  official: 'https://www.hultprize.org',
  instagram: 'https://www.instagram.com/hultprizenepal/',
};

// EF Hult Prize 2026 global season (PR Newswire, 9 Sep 2026; also in the approved proposal)
export const globalStats = [
  { n: 55000, suffix: '+', label: 'young entrepreneurs' },
  { n: 18000, suffix: '', label: 'startups registered' },
  { n: 2200, suffix: '', label: 'universities' },
  { n: 131, suffix: '', label: 'countries' },
];

// Hult Prize Nepal 2025–26 qualifiers report (both proposals)
export const nepalStats = [
  { n: 550, suffix: '+', label: 'startups registered' },
  { n: 280, suffix: '+', label: 'OnCampus events' },
  { n: 350, suffix: '+', label: 'organizing committee members' },
  { n: 180, suffix: '+', label: 'OnCampus finals judges' },
  { n: 300, suffix: '+', label: 'OnCampus sponsors' },
  { n: 500, suffix: '+', label: 'media appearances' },
];

export const presence = [
  { city: 'Kathmandu', x: 67, y: 60 },
  { city: 'Pokhara', x: 46, y: 45 },
  { city: 'Dharan', x: 87, y: 84 },
  { city: 'Birgunj', x: 61, y: 84 },
  { city: 'Chitwan', x: 53, y: 70 },
  { city: 'Rupandehi', x: 31, y: 72 },
  { city: 'Kanchanpur', x: 7, y: 42 },
];

export const globalHistory = [
  { y: '2010', t: 'MBA students at Hult International Business School, inspired by a One Laptop per Child talk, launch the Hult Global Case Challenge across Boston, London and Dubai.' },
  { y: '2011', t: 'President Bill Clinton begins announcing the winner, and later the yearly challenge: clean water, energy, food security, health, education.' },
  { y: '2010s', t: 'Winners are crowned in New York, with the 2018 finals hosted at the United Nations. By 2018, 250,000+ students from 100+ countries take part.' },
  { y: '2023', t: 'Global Finals move to Paris. Runner-up teams receive US$100,000 each for the first time.' },
  { y: 'Today', t: 'The EF Hult Prize. Top startups spend a month at Ashridge House, a 700-year-old estate outside London, before the Global Finals.' },
];

export const leaders = [
  { mono: 'LvD', role: 'Chief Executive Officer', name: 'Lori van Dam', text: 'CEO of the Hult Prize Foundation, now the EF Hult Prize. She champions for-profit startups as a more efficient engine for social change than many NGOs.' },
  { mono: 'EF', role: 'Founding family · Title sponsor', name: 'The Hult family & EF', text: 'The prize is named after Bertil Hult, the Swedish entrepreneur who founded EF Education First in 1965. The Hult family still funds the US$1M prize; EF, chaired by Philip Hult, became title sponsor in 2026.' },
  { mono: '2010', role: 'Where it began', name: 'Hult International Business School', text: 'A group of MBA students, led by Ahmad Ashkar, launched the first challenge in March 2010. Hult Ashridge, EF’s executive-education campus, now hosts the Global Accelerator.' },
];

export const globalWinners = [
  { y: 2026, name: 'Flow Guard Solutions', where: 'KAUST, Saudi Arabia', what: 'AI-powered smart water meters that catch leaks.' },
  { y: 2025, name: "Stick 'Em", where: 'Singapore (SUTD, NUS, Singapore Polytechnic alumni)', what: 'Hands-on STEAM learning kits for schools.' },
  { y: 2024, name: 'Korion Health', where: 'Pittsburgh & Maryland, USA', what: 'A low-cost electronic stethoscope for home heart and lung screening.' },
  { y: 2023, name: 'Banofi Leather', where: 'Yale University', what: 'Plant-based leather made from banana waste.' },
  { y: 2022, name: 'EcoBana', where: "St. Paul's University, Kenya", what: 'Biodegradable sanitary pads made from banana fibre.' },
  { y: 2019, name: 'Rutopía', where: 'Tec de Monterrey, Mexico', what: 'Community-run rural tourism.' },
  { y: 2018, name: 'SunRice (now Rice Inc.)', where: 'University College London', what: 'Affordable rice drying for farmers in Southeast Asia.' },
  { y: 2017, name: 'Roshni Rides', where: 'Rutgers University', what: 'Shared transport for refugee communities.' },
  { y: 2013, name: 'Aspire Food', where: 'McGill University', what: 'Edible-insect protein to tackle the food crisis.' },
];

export const sdgs = [
  'No poverty', 'Zero hunger', 'Good health and well-being', 'Quality education', 'Gender equality',
  'Clean water and sanitation', 'Affordable and clean energy', 'Decent work and economic growth',
  'Industry, innovation and infrastructure', 'Reduced inequalities', 'Sustainable cities and communities',
  'Responsible consumption and production', 'Climate action', 'Life below water', 'Life on land',
  'Peace, justice and strong institutions', 'Partnerships for the goals',
];

export const journey = [
  { n: '01', when: 'Sep 2026 – Feb 2027', title: 'Qualifiers', text: "Win your campus's OnCampus Program, or apply through the online Open Application and pass two online reviews.", now: true },
  { n: '02', when: 'Last week of April 2027', title: 'Nepal Nationals', text: 'Qualified teams from across Nepal pitch at the National Competition. The winner represents Nepal.' },
  { n: '03', when: 'Jun – Jul 2027', title: 'Digital Incubator', text: 'National winners and top online applicants get world-class mentors to validate their market and build a proof of concept.' },
  { n: '04', when: 'Aug 2027', title: 'Global Accelerator', text: 'Selected teams spend a month of intensive mentoring at Ashridge House, outside London.' },
  { n: '05', when: 'Sep 2027', title: 'Global Finals', text: "The world's top student startups pitch for US$1,000,000 in seed funding." },
];

export const story = [
  { y: '2016–17', big: true, h: 'The first OnCampus rounds', t: 'IOE Pulchowk Campus and Kathmandu University bring Hult Prize OnCampus to Nepal: 82 teams and 300+ students on the theme "Refugees: Reawakening Human Potential", supported by UNHCR Nepal and Nepal Innovation Lab.' },
  { y: 'Apr 2021', h: 'Impact Summit in Kathmandu', t: 'The first Hult Prize Impact Summit in Kathmandu, hosted by AITM College, Satdobato, brings together around 90 OnCampus winners from 63 OnCampus events across Nepal.' },
  { y: '2022', big: true, h: 'MeasureMe.AI goes global', t: 'MeasureMe.AI, a team from IOE Pulchowk and Advanced College of Engineering, wins Hult Prize at IOE 2021–22, then Hult Prize Regionals, and joins the Global Accelerator in Boston.' },
  { y: '2023', h: 'A national team', t: 'Hult Prize Nepal builds a 16-member core committee working with Campus Directors across the country.' },
  { y: '2024', h: 'Nepal at the regional summit', t: "Kagaji Duniya from Little Angels' College of Management, which makes products from waste paper with workers with disabilities, is selected for the regional summit in Bangkok." },
  { y: 'May 2025', big: true, h: 'National Competition, AITM College', t: '48 teams and 148 students in Lalitpur, with AIESEC Nepal. Champion: Team Vayudristi, Saraswati Multiple Campus.' },
  { y: 'May 2026', big: true, h: "National Competition, St. Xavier's Jawalakhel", t: 'Presented by British Council Nepal: 46 teams, 160+ students from 45+ colleges, 14 judges. Champion: Team Fluxelle, Khwopa College of Engineering.' },
  { y: '2026–27', h: 'The Unlimited season', t: 'A new national team, workshops on business models and pitching for qualified teams, and Nationals in the last week of April 2027.' },
];

export const team = [
  { badge: 'NC', role: 'National Coordinator 2027', name: 'Lakki Thapa', email: 'lakkithaapa8@gmail.com', photo: 'nc-lakki-thapa' },
  { badge: 'NCC', role: 'National Community Coordinator 2027', name: 'Pranjal Man Shakya', email: 'pranjal.m.shakya@gmail.com', photo: 'ncc-pranjal-shakya' },
];

export const pastLeadership = [
  { season: '2026 season', people: [['Riyaj Nepal', 'National Coordinator'], ['Saisha Shrestha', 'National Community Coordinator'], ['Subi Kafle', 'National Advisor']], note: '2026 Nationals presented by British Council Nepal: 46 teams, 160+ students, 14 judges. Champion: Team Fluxelle.' },
  { season: '2024 – 2025 seasons', people: [['Subi Kafle', 'Country Coordinator'], ['Garima Shrestha', 'National Community Leader']], note: 'Built a 16-member core committee. 2025 Nationals with AIESEC Nepal: 48 teams. Champion: Team Vayudristi.' },
];

export const champions = [
  { y: 2026, team: 'Team Fluxelle', college: 'Khwopa College of Engineering, Bhaktapur', text: 'Turns discarded coffee waste into organic, edible mushrooms: a circular-economy business for SDG 12.', meta: ['46 teams', '160+ students', '14 judges', "St. Xavier's, Jawalakhel"] },
  { y: 2025, team: 'Team Vayudristi', college: 'Saraswati Multiple Campus', text: 'AI that monitors and forecasts air quality, built on 30 years of environmental data, for SDGs 3 and 11.', meta: ['48 teams', '148 students', 'AITM College, Lalitpur'], alt: true },
];

export const campusCards = [
  { yr: 'IOE Pulchowk · since 2016', h: 'Hult Prize at IOE', p: "Nepal's longest-running program. 2026: nine finalists competed for Campus Champion, presented by Hima Aus Offshore. 2024: Team Drishya won with smart glasses for visually impaired people. 2021–22: MeasureMe.AI won from 104 registered teams.", src: ['Edusanjal', 'https://edusanjal.com/post/hult-prize-at-ioe-pulchowk-campus-finals/'] },
  { yr: 'Shanker Dev Campus · 2024', h: 'Team Digo', p: 'Won a finale held in partnership with the Nepal Tourism Board. Runners-up: Triaikyam and SuperSquad.', src: ['The Himalayan Times', 'https://thehimalayantimes.com/kathmandu/hult-prize-at-shanker-dev-campus-concludes'] },
  { yr: 'Khwopa College of Engineering · 2024', h: 'Team Visions', p: "12 teams pitched. Team Visions won with a platform connecting skilled homemakers with businesses. In 2026 Khwopa's Team Fluxelle went on to win Nationals.", src: ['Technology Khabar', 'https://www.technologykhabar.com/?p=162325'] },
  { yr: "Little Angels' College · 2024", h: 'Kagaji Duniya', p: 'Accessories and art from waste paper, made by a team of workers with disabilities. Selected for the Hult Prize regional summit in Bangkok.', src: ['The Kathmandu Post', 'https://kathmandupost.com/art-culture/2024/06/17/kagaji-duniya-aims-for-hult-prize-victory'] },
  { yr: 'The British College · 2023', h: 'Team Makhmal', p: "Won the OnCampus final under that year's Recycled Fashion challenge. Runners-up: Team Zero and Team Nyano.", src: ['Edusanjal', 'https://edusanjal.com/news/hult-prize-at-the-british-college-on-campus-finals/'] },
  { yr: 'Purwanchal Campus, Dharan · 2022', h: 'Vishwa Adarsha College', p: 'Eight teams from Dharan, Itahari and Biratnagar. VAC won with a job-search portal; Green Grain (IOE Dharan) and Udaan (Mahendra Multiple Campus) followed.', src: ['B360', 'https://b360nepal.com/vac-bags-hult-prize-at-purwanchal-campus-with-job-search-portal-ideas/'] },
];

export const pastPartners = ['British Council Nepal', 'UBA Solutions', 'AIESEC Nepal', 'CNI Young Entrepreneurs Forum', 'Draper Startup House', 'National Youth Entrepreneurs Forum', 'Nepal Italy Chamber of Commerce and Industry', 'American Learning Centre', 'BYD', 'Classic Tech', 'Embark College', 'FAO Nepal', 'World Food Forum', 'Global IME Bank', 'The Kathmandu Post', 'eKantipur', 'Edusanjal'];

export const summits = [
  { img: 'summit-2', city: 'Taipei' },
  { img: 'summit-1', city: 'Monterrey' },
  { img: 'summit-3', city: 'Melbourne' },
  { img: 'summit-4', city: 'Boston' },
  { img: 'summit-5', city: 'Mumbai' },
  { img: 'summit-6', city: 'Dubai' },
];

// Photos from the Hult Prize Nepal proposals (gallery page and campus-network page)
export const gallery = [
  { img: 'g-trophy', cap: 'OnCampus winners lift the trophy' },
  { img: 'event-speaker', cap: 'A speaker session for OnCampus teams' },
  { img: 'g-panel', cap: 'Panel discussion at a Hult Prize Nepal event' },
  { img: 'g-tv', cap: 'Hult Prize IOE on Good Morning Nepal' },
  { img: 'event-panelists', cap: 'Panelists in conversation' },
  { img: 'g-group', cap: 'Startup session at IMS College' },
  { img: 'event-hall', cap: 'A full hall for an OnCampus session' },
  { img: 'g-banner', cap: 'OnCampus participants' },
  { img: 'g-bouquet', cap: 'Guests at an OnCampus event' },
  { img: 'hpn-team', cap: 'The Hult Prize Nepal community' },
  { img: 'global-flags', cap: 'Hult Prize participants from around the world' },
  { img: 'global-workshop', cap: 'A Hult Prize workshop' },
  { img: 'global-pitch', cap: 'Pitching at a Hult Prize event' },
  { img: 'global-celebrate', cap: 'Celebrating at a Hult Prize summit' },
  { img: 'global-hp23', cap: 'Hult Prize 2023 summit' },
];

export const faqs = [
  ['Does it cost anything to enter?', 'No. Registration for the EF Hult Prize at hultprize.org is free.'],
  ['What can we pitch this season?', 'Anything. The 2026–27 challenge is Unlimited: any for-profit startup that creates measurable social impact and serves at least one UN Sustainable Development Goal.'],
  ['Can team members come from different colleges?', 'Yes, but the team represents one college. Every member must be enrolled in a degree program and be 18 or over by 28 February 2027.'],
  ['What if my college has no OnCampus Program?', 'Apply through the Open Application at hultprize.org and pass the online review rounds, or ask your college to host one. We will help them set it up.'],
  ['What do national winners get?', 'National recognition, workshops with mentors and industry experts, and a place in the Hult Prize Digital Incubator, with a shot at the UK Accelerator and the Global Finals.'],
  ['How do I become a Campus Director?', 'Campus Directors for 2026–27 are being appointed now. Email the National Coordinator or follow @hultprizenepal for the call.'],
];

export const sources: [string, string][] = [
  ['Hult Prize Nepal: OnCampus University Guide 2026–27 and 2026–27 national proposal', ''],
  ['EF Hult Prize: register for 2026–27', 'https://www.hultprize.org/apply-now'],
  ['PR Newswire: $1 Million Awarded at 2026 EF Hult Prize (9 Sep 2026)', 'https://www.prnewswire.com/news-releases/1-million-awarded-to-social-impact-student-start-up-at-2026-ef-hult-prize-302872716.html'],
  ['Business Wire: 2025 Global Hult Prize winner', 'https://www.businesswire.com/news/home/20250908214286/en/$1-Million-Awarded-To-Social-Impact-Student-Start-Up-At-Global-2025-Hult-Prize'],
  ['EF Impact: 15 years of the Hult Prize', 'https://impact.ef.com/stories/the-hult-prize-social-entrepreneurship/'],
  ['Hult: a discussion with Lori van Dam, CEO', 'https://www.hult.edu/blog/a-discussion-with-lori-van-dam-hult-prize-foundation-ceo/'],
  ['Wikipedia: Hult Prize', 'https://en.wikipedia.org/wiki/Hult_Prize'],
  ['Wikipedia: EF Education First', 'https://en.wikipedia.org/wiki/EF_Education_First'],
  ['SUTD: Stick ’Em wins the 2025 Hult Prize', 'https://www.sutd.edu.sg/media-releases-listing/singapore-start-up-founded-by-sutd-graduate-wins-prestigious-1m-hult-prize'],
  ['Hult Prize: 2024 winner Korion Health', 'https://hultprize.org/hult-prize-winners/2024/korion-health'],
  ['Hult Prize: 2022 winner EcoBana', 'https://www.hultprize.org/hult-prize-winners/2022/ecobana'],
  ['UCL: SunRice / Rice Inc., 2018 Hult Prize', 'https://www.ucl.ac.uk/enterprise/news/2018/sep/ucl-social-enterprise-rice-inc-through-hult-prize-final'],
  ['The Kathmandu Post: first OnCampus rounds in Nepal (2016)', 'https://kathmandupost.com/miscellaneous/2016/12/14/over-300-nepali-students-competing-for-hult-prize'],
  ['ICT Frame: Hult Prize Impact Summit Kathmandu (2021)', 'https://ictframe.com/hult-prize-2021-impact-summit-kathmandu/'],
  ['Nepali Telecom: Hult Prize at IOE 2021–22 winners', 'https://www.nepalitelecom.com/2022/02/hult-prize-grand-finals-concludes-find-out-the-winners.html'],
  ['The Himalayan Times: Team Vayudristi wins Hult Prize Nepal 2025', 'https://thehimalayantimes.com/kathmandu/team-vayudristi-wins-hult-prize-nepal-2025'],
  ['Educast Nepal: Team Fluxelle wins Hult Prize Nepal 2026', 'https://www.educastnepal.com/english/education-news/team-fluxelle-of-khwopa-college-of-engineering-wins-hult-prize-nepal-2026-national-finals/'],
  ['ICT Frame: Hult Prize Nepal 2026', 'https://ictframe.com/hult-prize-nepal-2026/'],
  ['Edusanjal: 2025 season orientation at IOE (Dec 2025)', 'https://edusanjal.com/news/orientation-program-by-hult-prize-at-ioe/'],
  ['CollegeNP: KU OnCampus finale, Jan 2025', 'https://www.collegenp.com/news/hult-prize-at-kathmandu-university-hosts-the-first-on-campus-finale-of-2025-in-nepal'],
  ['The Kathmandu Post: Kagaji Duniya (2024)', 'https://kathmandupost.com/art-culture/2024/06/17/kagaji-duniya-aims-for-hult-prize-victory'],
  ['The Himalayan Times: Team Drishya wins Hult Prize at IOE (2024)', 'https://thehimalayantimes.com/kathmandu/hult-prize-crowns-team-drishya-as-winner-spotlights-innovation-for-social-impact'],
  ['The Himalayan Times: Hult Prize at Shanker Dev Campus (2024)', 'https://thehimalayantimes.com/kathmandu/hult-prize-at-shanker-dev-campus-concludes'],
  ['Technology Khabar: Team Visions, Khwopa (2024)', 'https://www.technologykhabar.com/?p=162325'],
  ['Edusanjal: Hult Prize at The British College (2023)', 'https://edusanjal.com/news/hult-prize-at-the-british-college-on-campus-finals/'],
  ['B360: VAC wins at Purwanchal Campus (2022)', 'https://b360nepal.com/vac-bags-hult-prize-at-purwanchal-campus-with-job-search-portal-ideas/'],
];

// Campus Directors 2026–27: not yet appointed. Add people here once announced:
// { name: 'Full Name', campus: 'College name', photo: 'file-name-in-assets-photos' }
export const campusDirectors: { name: string; campus: string; photo?: string }[] = [];

export const cdRole = [
  ['Lead the OnCampus Program', 'Set the vision and lead an Organizing Committee of 8 to 15 students.'],
  ['Run the events', 'Launch, workshops, community events, mock pitches and the Grand Finale.'],
  ['Work with the college', 'Be the link to administration and a faculty supporter.'],
  ['Build the startups', 'Recruit teams from every department and connect them with mentors.'],
  ['Represent the campus', 'Join a national network of Campus Directors from 40+ campuses.'],
  ['Send a team to Nationals', 'Your winning team pitches at the National Competition in April 2027.'],
];

export const workshops = [
  ['Business models', 'From idea to a business that pays for itself.'],
  ['Pitching', "Tell the story in four minutes and handle judges' questions."],
  ['Customer discovery', 'Talk to real users and test the problem before building.'],
  ['Design thinking', 'Empathise, define, ideate, prototype and test.'],
  ['Startup finance', 'Costs, pricing, revenue and a path to sustainability.'],
  ['SDG impact', 'Measure the change your startup creates.'],
];
