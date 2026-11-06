import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import ServiceCard from '../components/ServiceCard'
import { images, credentials, contact, telHref } from '../data/siteData'

const steps = [
  'Send your product, quantity and delivery location.',
  'We reply with a quote and availability.',
  'Confirm the order and agree payment and delivery.',
]

export default function Materials() {
  return (
    <div>
      <PageHero title="Materials & supply" text="Bitumen, trucks and machines, available in bulk." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title mb-10">What we supply</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Reveal><ServiceCard icon="bitumen" image={images.materials.bitumen} title="Bitumen" description="Bitumen for road construction and maintenance." items={['Bitumen 60/70', 'Bitumen MCI', 'Bitumen Emotion', 'Bulk orders']} /></Reveal>
            <Reveal delay={70}><ServiceCard icon="truck" image={images.materials.trucks} title="Truck sales" description="Trucks for construction and haulage." items={['Tippers and dump trucks', 'Trailers and lowbeds', 'Ask about current stock']} /></Reveal>
            <Reveal delay={140}><ServiceCard icon="machines" image={images.materials.machines} title="Machines & autos" description="Construction machines and vehicles for sale." items={['Construction machines', 'Vehicles', 'Ask about current stock']} /></Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-title">How to order</h2>
            <ol className="space-y-4 mt-6">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 items-start">
                  <span className="font-display text-3xl font-bold text-accent leading-none w-6 shrink-0">{i + 1}</span>
                  <span className="text-lg">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-8 self-start">
            <h3 className="text-2xl mb-2">Ready to order?</h3>
            <p className="text-secondary-text mb-5">Send an order request or call us.</p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact?form=materials" variant="accent">Place an order request</Button>
              <Button href={telHref(contact.phones[0])} variant="secondary">Call now</Button>
            </div>
          </div>
        </div>
      </section>

      {credentials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="card p-6 text-center">
                <Icon name="check" className="text-3xl text-accent mx-auto mb-2" />
                <h3 className="text-xl">{c.title}</h3>
                <p className="text-sm text-secondary-text">{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
