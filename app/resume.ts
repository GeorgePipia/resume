export type Entry = { title: string; place: string; dates: string; details: string };
export type Resume = { name: string; headline: string; location: string; email: string; secondaryEmail?: string; phone: string; summary: string; photo: string; photoX?: number; photoY?: number; photoZoom?: number; sections: { title: string; entries: Entry[] }[] };
export const initialResume: Resume = {
name: 'George Odyssey Pipia', headline: 'Accounting major · Rutgers Business School', location: 'South Amboy, New Jersey', email: 'george.pipia@rutgers.edu', secondaryEmail: 'tskali0zamboni@gmail.com', phone: '(908) 565-4192', photo: '',
summary: 'Accounting major at Rutgers Business School with a Bachelor of Laws (LL.B.) from a civil law jurisdiction and experience in operations, grant-funded projects, team coordination, and public-sector organizations. Seeking an entry-level opportunity in accounting to apply this foundation, support business goals, and simultaneously continue building professional expertise.',
sections: [
{ title: 'Education', entries: [
{title:'BS, Accounting',place:'Rutgers University · New Brunswick, NJ',dates:'Expected May 2028',details:''},
{title:'Bachelor of Laws (LL.B.), Civil Law',place:'Ivane Javakhishvili Tbilisi State University · Tbilisi, Georgia',dates:'December 2022',details:''}]},
{title:'Experience', entries:[
{title:'Associate · Part-time',place:'Amazon · Edison, NJ',dates:'Sep 2021 — Present',details:'Support fast-paced fulfillment operations while following quality, productivity and workplace-safety procedures.'},
{title:'Legislative Department Intern',place:'Parliament of Georgia · Tbilisi, Georgia',dates:'Oct 2016 — Feb 2017',details:''},
{title:'Trainer and Coordinator',place:'Sunny House NGO · Tbilisi, Georgia',dates:'Oct 2013 — Jul 2016',details:'Coordinated six grant-funded projects and worked across teams on project planning, new initiatives, and service development.\nDelivered international and Erasmus+ training to adults and young professionals from Europe, Asia, and Africa.'},
{title:'Small-Business Owner',place:'Pay-Box · Tbilisi, Georgia',dates:'Nov 2012 — Feb 2014',details:'Operated payment terminals, managed daily cash reconciliation, audited transaction logs, and optimized machine uptime across three high-volume locations.'}]},
{title:'Leadership & projects',entries:[
{title:'Student Government President',place:'Public School #2 · Zugdidi, Georgia',dates:'2010 — 2011',details:'Elected to represent approximately 1,500 students and led student-government initiatives supporting school life and student interests.\nReceived an academic excellence award from the President of Georgia as one of seven students selected from approximately 1,500 candidates.'},
{title:'Founder and Leader',place:'Youth Club Collaboration · Zugdidi, Georgia',dates:'Nov 2010 — Jul 2012',details:'Led a nine-member team in designing and implementing two community grant projects serving 330 beneficiaries.\nSecured support from more than 10 local business owners and the Bank of Georgia; coordinated training for 180 students across three public schools.'}]},
{title:'Professional development & certifications',entries:[
{title:'LinkedIn Learning Certifications',place:'Online',dates:'',details:'Preparing for an Audit · Excel Essential Training · Supply Chain Foundations · Blockchain Technology'},
{title:'Front-End Development',place:'Full Stack Academy · Brooklyn, NY',dates:'Jul 2023 — Apr 2024',details:''},
{title:'Graphic Design Fundamentals',place:'Smart Academy · Tbilisi, Georgia',dates:'Nov 2020 — Feb 2021',details:''},
{title:'Design Science Global Solutions Lab (GSL/UN)',place:'Chestnut Hill College · Philadelphia, PA',dates:'Nov 2016',details:''},
{title:'Intercultural Training: Conflict Transformation',place:'European Youth Centre · Strasbourg, France',dates:'Jun 2014',details:''}]},
{title:'Skills',entries:[{title:'Relevant coursework',place:'',dates:'',details:'Financial Accounting · Accounting for Entrepreneurs · Intermediate Accounting · Managerial Accounting · Business Statistics · Corporate Finance · Micro/Macroeconomics'},{title:'Software & tools',place:'',dates:'',details:'MS Excel · MS Office Suite · Adobe Photoshop & Illustrator'},{title:'Analytical & collaborative',place:'',dates:'',details:'Critical Thinking · Analytical & Problem-Solving · Training & Development · Team Leadership & Management · Planning & Coordination · Interpersonal Communication'}]},
{title:'Languages',entries:[{title:'English',place:'Upper Intermediate',dates:'',details:''},{title:'Georgian',place:'Native',dates:'',details:''},{title:'Russian',place:'Elementary Proficiency',dates:'',details:''}]}
]};
