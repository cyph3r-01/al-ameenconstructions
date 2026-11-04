import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import { homeStats, equipment, projects, news, images, demoContent, contact, telHref } from '../data/siteData'

const reasons = [
  { icon: 'clock', title: 'Always on', text: 'Our office takes enquiries day and night, every day of the week.' },
  { icon: 'trophy', title: 'Proven experience', text: 'Road and civil works delivered, with the equipment to back them.' },
  { icon: 'draft', title: 'Engineering driven', text: 'Jobs planned and supervised by people who understand the work.' },
  { icon: 'globe', title: 'Built to travel', text: 'Ready to serve projects across West Africa and beyond.' },
  { icon: 'handshake', title: 'Partnership approach', text: 'We work with you from first quote to final handover.' },
]

const quickLinks = [
  { to: '/construction', icon: 'road', label: 'Construction' },
  { to: '/equipment', icon: 'grader', label: 'Equipment rental' },
  { to: '/materials', icon: 'bitumen', label: 'Materials & supply' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <Photo src={images.hero} alt="An AL-AMEEN paver at work on a road" icon="paver" eager className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h1 className="text-5xl md:text-7xl mb-6">
              We build. We engineer progress.
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-xl">
              Road construction, civil works and building infrastructure, with the equipment and materials to deliver them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button to="/projects" variant="accent">View projects</Button>
              <Button to="/equipment" variant="white">Rent equipment</Button>
              <Button to="/contact" variant="outline">Contact us</Button>
            </div>
          </div>
          <ul className="md:col-span-2 space-y-3">
            {quickLinks.map((q) => (
              <li key={q.to}>
                <Link to={q.to} className="flex items-center gap-4 p-4 bg-black/55 border border-white/20 rounded hover:bg-black/70 transition-colors duration-150">
                  <Icon name={q.icon} className="text-4xl text-primary-orange shrink-0" />
                  <span className="text-xl font-display font-bold">{q.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-secondary-border" aria-label="Company figures">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {homeStats.map((st, i) => (
            <Reveal key={st.label} delay={i * 70} className="text-center">
              <p className="text-5xl font-display font-bold text-accent">{st.value}</p>
              <p className="text-sm text-secondary-text mt-1">{st.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary-light py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="section-title">Construction first. Everything else supports it.</h2>
            <p className="text-lg text-secondary-text">
              We build roads and civil works, then back them with equipment you can rent and materials you can order.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal><ServiceCard icon="road" image={images.construction.road} title="Construction & civil engineering" description="Roads, civil works and building infrastructure." items={['Road construction', 'Civil engineering works', 'Building infrastructure', 'Site development']} to="/construction" /></Reveal>
            <Reveal delay={80}><ServiceCard icon="grader" image={equipment[1].image} title="Equipment & machinery" description="Machines for paving, grading, loading and compaction." items={['Paver machines', 'Graders and rollers', 'Payloaders and backhoes', 'Tarboilers']} to="/equipment" /></Reveal>
            <Reveal delay={160}><ServiceCard icon="bitumen" image={images.materials.bitumen} title="Materials & supply" description="Bitumen, trucks and machines, available in bulk." items={['Bitumen 60/70, MCI, Emotion', 'Truck sales', 'Machine and auto sales', 'Bulk ordering']} to="/materials" /></Reveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-10">
            <h2 className="section-title mb-0">Recent projects</h2>
            <Button to="/projects" variant="secondary">View all projects</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.slice(0, 4).map((p, i) => (
              <Reveal key={p.title} delay={i * 70}><ProjectCard {...p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-secondary-light border-t border-secondary-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="section-title">Reliable, modern, ready.</h2>
            <p className="text-lg text-secondary-text">Rent the machine you need, when you need it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {equipment.map((item, i) => (
              <Reveal key={item.name} delay={i * 50}>
                <Link to="/equipment" className="card card-lift block h-full">
                  <div className="card-photo overflow-hidden">
                    <Photo src={item.image} alt={item.name} icon={item.icon} className="w-full h-32" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg">{item.name}</h3>
                    <p className="text-xs text-secondary-text">{item.specs}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/equipment">View full fleet</Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Why choose AL-AMEEN</h2>
            <Photo src={images.aboutTeam} alt="The AL-AMEEN team on site" icon="helmet" className="w-full h-80 rounded mt-6" />
          </div>
          <ul className="space-y-6">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-4">
                <Icon name={r.icon} className="text-3xl text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl">{r.title}</h3>
                  <p className="text-secondary-text">{r.text}</p>
                </div>
              </li>
            ))}
            <li><Button to="/contact" variant="accent">Start your project</Button></li>
          </ul>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-10">Latest news & insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 70}>
                <article className="card card-lift h-full">
                  <div className="card-photo overflow-hidden relative">
                    <Photo src={n.image} alt={n.title} icon="tools" className="w-full h-44" />
                    {demoContent && <span className="absolute top-3 right-3 bg-white text-primary-black text-xs font-semibold px-2 py-1 rounded">Sample</span>}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-secondary-text mb-1">{n.tag} · {n.date}</p>
                    <h3 className="text-xl mb-2">{n.title}</h3>
                    <p className="text-sm text-secondary-text">{n.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Ready to start your project?</h2>
          <p className="text-lg text-gray-300 mb-8">Tell us what you need. We answer day and night.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button to="/contact" variant="accent">Request a quote</Button>
            <Button href={telHref(contact.phones[0])} variant="outline">Call now</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
