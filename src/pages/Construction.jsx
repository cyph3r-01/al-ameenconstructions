import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import { images } from '../data/siteData'

const steps = [
  { title: 'Plan', text: 'We review your drawings, site and schedule, then quote.' },
  { title: 'Prepare', text: 'Equipment, materials and crew are lined up for the start date.' },
  { title: 'Build', text: 'Work proceeds with supervision and regular updates from site.' },
  { title: 'Hand over', text: 'Final checks, then handover of the finished works.' },
]

export default function Construction() {
  return (
    <div>
      <PageHero title="Construction services" text="Civil engineering and construction for roads, infrastructure and buildings." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-10">What we build</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal><ServiceCard icon="road" image={images.construction.road} title="Road construction" description="Road building from base preparation to asphalt paving." items={['Highways and urban roads', 'Drainage works', 'Asphalt paving', 'Road rehabilitation']} /></Reveal>
            <Reveal delay={70}><ServiceCard icon="bridge" image={images.construction.infrastructure} title="Civil engineering works" description="Structures and services that keep communities connected." items={['Bridges and culverts', 'Retaining walls', 'Underground utilities']} /></Reveal>
            <Reveal><ServiceCard icon="building" image={images.construction.building} title="Building construction" description="Commercial and residential building projects." items={['Commercial buildings', 'Residential buildings', 'Industrial structures']} /></Reveal>
            <Reveal delay={70}><ServiceCard icon="site" image={images.construction.site} title="Site development" description="Getting land ready for construction." items={['Land clearing', 'Earthworks', 'Grading', 'Utility installation']} /></Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-10">How a project runs</h2>
          <ol className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="card p-7">
                <p className="text-4xl font-display font-bold text-accent mb-2">{i + 1}</p>
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-secondary-text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">Need a construction partner?</h2>
          <p className="text-lg text-secondary-text mb-8">Send us your project details and we will respond with a quote.</p>
          <Button to="/contact?form=inquiry" variant="accent">Request a quote</Button>
        </div>
      </section>
    </div>
  )
}
