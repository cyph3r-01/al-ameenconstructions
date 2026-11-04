// ============================================================
// AL-AMEEN: EDIT EVERYTHING HERE
// Change a value below and it updates on every page.
// Delete a line (or an array item) to hide it.
// TODO marks placeholders waiting for your real information.
// Photos: drop files into public/images/ using the names below.
// Until a photo exists, the site shows a clean dark panel instead.
// ============================================================

// Set both to false when your real content is in and the legal pages are reviewed.
export const demoContent = true // shows a "Sample" tag on project and news cards
export const legalDraft = true // shows a "draft, under review" notice on Privacy and Terms
export const legalLastUpdated = 'October 2026'

export const company = {
  name: 'AL-AMEEN Construction Company',
  tagline: 'Civil Building Engineers',
  motto: "Celebrating God's Faithfulness",
  copyrightYear: 2026,
}

// Shown in the footer and legal pages. Leave a value empty to hide it.
export const business = {
  cacNumber: '', // TODO: CAC registration number, e.g. 'RC 1234567'
  responsiblePerson: '', // TODO: name of the director or owner
}

export const contact = {
  // TODO: replace with your real details
  phones: ['+234 000 000 0000', '+234 000 000 0001'],
  whatsapp: '2340000000000', // digits only, with country code, no + or spaces
  email: 'info@example.com',
  addressLines: ['Beside AP Filling Station', 'Idowu Egba Bus Stop', 'Isheri Igando, Lagos'],
  mapUrl: '', // optional: a Google Maps link. Adds a "Get directions" button on Contact.
}

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`

// Delete any platform you don't use. Leave '#' until you have the link.
export const social = [
  { name: 'LinkedIn', url: '#' },
  { name: 'X', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'YouTube', url: '#' },
]

// Home page stats strip. TODO: replace every value with your real figures.
export const homeStats = [
  { value: 'XX+', label: 'Years experience' },
  { value: 'XX+', label: 'Projects completed' },
  { value: 'XX+', label: 'Equipment units' },
  { value: '24/7', label: 'Always available' },
]

// Projects page stats. TODO: replace or delete.
export const projectStats = [
  { value: 'XX+', label: 'Projects completed', note: 'Delivered to date' },
  { value: 'XX km', label: 'Roads built', note: 'Total length' },
  { value: 'XX+', label: 'Jobs created', note: 'People employed' },
]

// Materials page badges. Add only certifications you really hold, for example:
// { title: 'CAC registered', text: 'RC 1234567' }
export const credentials = []

// Images. Put your files at these paths (JPG or WebP, under 400 KB each).
export const images = {
  hero: '/images/hero/hero.jpg', // 1920x1080, a paver or crew at work
  aboutOffice: '/images/about/office.jpg', // 1200x900
  aboutTeam: '/images/about/team.jpg', // 1200x900
  construction: {
    road: '/images/construction/road.jpg',
    infrastructure: '/images/construction/infrastructure.jpg',
    building: '/images/construction/building.jpg',
    site: '/images/construction/site.jpg',
  },
  materials: {
    bitumen: '/images/materials/bitumen.jpg',
    trucks: '/images/materials/trucks.jpg',
    machines: '/images/materials/machines.jpg',
  },
}

// Equipment. TODO: confirm rates and specs. Photo size 1200x900.
export const equipment = [
  { name: 'Paver machine', icon: 'paver', image: '/images/equipment/paver.jpg', specs: '8m to 10m paving width', rate: 'From ₦18,000/day' },
  { name: 'Grader', icon: 'grader', image: '/images/equipment/grader.jpg', specs: '14ft to 18ft blade', rate: 'From ₦25,000/day' },
  { name: 'Payloader', icon: 'payloader', image: '/images/equipment/payloader.jpg', specs: '2.5m to 4.5m bucket', rate: 'From ₦35,000/day' },
  { name: 'Roller', icon: 'roller', image: '/images/equipment/roller.jpg', specs: '8 to 12 ton', rate: 'From ₦15,000/day' },
  { name: 'Backhoe', icon: 'backhoe', image: '/images/equipment/backhoe.jpg', specs: '0.2m to 1.3m bucket', rate: 'From ₦16,000/day' },
  { name: 'Tarboiler', icon: 'tarboiler', image: '/images/equipment/tarboiler.jpg', specs: '10,000 to 30,000 litres', rate: 'From ₦35,000/day' },
]

// SAMPLE projects taken from the design mockup. TODO: replace with your real
// projects (name, location, date, category, photo). Delete any you did not build.
export const projects = [
  { title: 'Lagos-Ibadan Expressway (Phase 2)', category: 'Road construction', icon: 'road', image: '/images/projects/project-1.jpg', date: 'Mar 2024', location: 'Lagos', status: 'Completed' },
  { title: 'Lekki Coastal Bridge', category: 'Bridge construction', icon: 'bridge', image: '/images/projects/project-2.jpg', date: 'Dec 2023', location: 'Lagos', status: 'Completed' },
  { title: 'Third Mainland Bridge (Rehabilitation)', category: 'Road rehabilitation', icon: 'road', image: '/images/projects/project-3.jpg', date: 'Aug 2022', location: 'Lagos', status: 'Completed' },
  { title: 'Site Development Project', category: 'Site development', icon: 'site', image: '/images/projects/project-4.jpg', date: 'Jan 2023', location: 'Abuja', status: 'Completed' },
]

// SAMPLE news from the design mockup. TODO: replace with real posts or delete.
export const news = [
  { tag: 'Project update', date: 'Apr 28, 2025', title: 'New Road Project Commences in Lagos', text: 'Add a one or two line summary of this update.', image: '/images/news/news-1.jpg' },
  { tag: 'Company news', date: 'Apr 18, 2025', title: 'Expansion of Equipment Fleet Enhances Capacity', text: 'Add a one or two line summary of this update.', image: '/images/news/news-2.jpg' },
  { tag: 'Insight', date: 'Apr 10, 2025', title: 'The Future of Road Construction in West Africa', text: 'Add a one or two line summary of this update.', image: '/images/news/news-3.jpg' },
]

// About page copy. Edit freely.
export const about = {
  story: [
    'AL-AMEEN Construction Company is a civil engineering and construction firm based in Isheri Igando, Lagos. We build roads and civil works, rent out paving and earthmoving equipment, and supply bitumen, trucks and machines.',
    'Our office is open for enquiries around the clock, so a stalled machine or an urgent order never has to wait until morning.',
  ],
  mission: 'To deliver dependable road, civil and building works, backed by well-maintained equipment and quality materials.',
  vision: 'To be a trusted engineering partner across West Africa and beyond.',
  values: ['Quality work', 'Honest dealing', 'Safety on site', 'Always reachable'],
}

// Leadership. TODO: add real people to show the section, for example:
// { name: 'Full Name', role: 'Managing Director', image: '/images/team/leader-1.jpg' }
export const leaders = []
