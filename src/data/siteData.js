export const demoContent = true
export const legalDraft = true
export const legalLastUpdated = 'October 2026'

export const company = {
  name: 'AL-AMEEN Construction Company',
  tagline: 'Civil Building Engineers',
  motto: "Celebrating God's Faithfulness",
  copyrightYear: 2026,
}

export const business = {
  cacNumber: '',
  responsiblePerson: '',
}

export const contact = {
  phones: ['+234 000 000 0000', '+234 000 000 0001'],
  whatsapp: '2340000000000',
  email: 'info@example.com',
  addressLines: ['Beside AP Filling Station', 'Idowu Egba Bus Stop', 'Isheri Igando, Lagos'],
  mapUrl: '',
}

export const telHref = (phone) => `tel:${phone.replace(/\s/g, '')}`

export const social = [
  { name: 'LinkedIn', url: '#' },
  { name: 'X', url: '#' },
  { name: 'Facebook', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'YouTube', url: '#' },
]

export const homeStats = [
  { value: 'XX+', label: 'Years experience' },
  { value: 'XX+', label: 'Projects completed' },
  { value: 'XX+', label: 'Equipment units' },
  { value: '24/7', label: 'Always available' },
]

export const projectStats = [
  { value: 'XX+', label: 'Projects completed', note: 'Delivered to date' },
  { value: 'XX km', label: 'Roads built', note: 'Total length' },
  { value: 'XX+', label: 'Jobs created', note: 'People employed' },
]

export const credentials = []

export const images = {
  hero: '/images/hero/hero.jpg',
  aboutWork: '/images/about/work.jpg',
  aboutTeam: '/images/about/team.jpg',
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

export const equipment = [
  { name: 'Paver machine', icon: 'paver', image: '/images/equipment/paver.jpg', specs: '8m to 10m paving width', rate: 'From ₦180,000/day' },
  { name: 'Grader', icon: 'grader', image: '/images/equipment/grader.jpg', specs: '14ft to 18ft blade', rate: 'From ₦250,000/day' },
  { name: 'Payloader', icon: 'payloader', image: '/images/equipment/payloader.jpg', specs: '2.5m to 4.5m bucket', rate: 'From ₦350,000/day' },
  { name: 'Roller', icon: 'roller', image: '/images/equipment/roller.jpg', specs: '8 to 12 ton', rate: 'From ₦150,000/day' },
  { name: 'Backhoe', icon: 'backhoe', image: '/images/equipment/backhoe.jpg', specs: '0.2m to 1.3m bucket', rate: 'From ₦160,000/day' },
  { name: 'Tarboiler', icon: 'tarboiler', image: '/images/equipment/tarboiler.jpg', specs: '10,000 to 30,000 litres', rate: 'From ₦350,000/day' },
]

export const projects = [
  { title: 'Road works with bitumen tanker', category: 'Road construction', icon: 'road', image: '/images/projects/project-1.jpg', location: '', date: '' },
  { title: 'Asphalt paving at a commercial forecourt', category: 'Asphalt paving', icon: 'road', image: '/images/projects/project-2.jpg', location: '', date: '' },
  { title: 'Grading and site preparation', category: 'Site development', icon: 'site', image: '/images/projects/project-3.jpg', location: '', date: '' },
  { title: 'Road base and surfacing', category: 'Road construction', icon: 'road', image: '/images/projects/project-4.jpg', location: '', date: '' },
  { title: 'Newly surfaced road', category: 'Road construction', icon: 'road', image: '/images/projects/project-5.jpg', location: '', date: '' },
  { title: 'Earthworks with a backhoe loader', category: 'Site development', icon: 'site', image: '/images/projects/project-6.jpg', location: '', date: '' },
  { title: 'Asphalt compaction behind a paver', category: 'Asphalt paving', icon: 'road', image: '/images/projects/project-7.jpg', location: '', date: '' },
]

export const news = [
  { tag: 'Project update', date: 'Apr 28, 2025', title: 'New Road Project Commences in Lagos', text: 'Add a one or two line summary of this update.', image: '/images/news/news-1.jpg', alt: 'A freshly surfaced road beside a fenced boundary', sample: true },
  { tag: 'Company news', date: 'Apr 18, 2025', title: 'Expansion of Equipment Fleet Enhances Capacity', text: 'Add a one or two line summary of this update.', image: '/images/news/news-2.jpg', alt: 'A crane truck with a green flatbed', sample: true },
  { tag: 'Insight', date: 'Apr 10, 2025', title: 'The Future of Road Construction in West Africa', text: 'Add a one or two line summary of this update.', image: '/images/news/news-3.jpg', alt: 'An asphalt paver loaded on a trailer', sample: true },
]

export const about = {
  story: [
    'AL-AMEEN Construction Company is a civil engineering and construction firm based in Isheri Igando, Lagos. We build roads and civil works, rent out paving and earthmoving equipment, and supply bitumen, trucks and machines.',
    'Our office is open for enquiries around the clock, so a stalled machine or an urgent order never has to wait until morning.',
  ],
  mission: 'To deliver dependable road, civil and building works, backed by well-maintained equipment and quality materials.',
  vision: 'To be a trusted engineering partner across West Africa and beyond.',
  values: ['Quality work', 'Honest dealing', 'Safety on site', 'Always reachable'],
}

export const leaders = []
