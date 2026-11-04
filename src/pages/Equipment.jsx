import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import { equipment, contact, telHref } from '../data/siteData'

const steps = [
  'Tell us the machine, dates and site location.',
  'We confirm availability, rate and terms.',
  'You get the machine on the agreed date.',
]

export default function Equipment() {
  return (
    <div>
      <PageHero title="Equipment & machinery" text="Machines for paving, grading, loading and compaction. Our office is open 24/7." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Reliable, modern, ready.</h2>
          <p className="text-lg text-secondary-text mb-10">Rates start from the figures below. Your quote depends on duration and site.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 70}>
                <article className="card card-lift h-full flex flex-col">
                  <div className="card-photo overflow-hidden">
                    <Photo src={item.image} alt={item.name} icon={item.icon} className="w-full h-52" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl mb-1">{item.name}</h3>
                    <p className="text-sm text-secondary-text mb-3">{item.specs}</p>
                    <p className="font-display text-2xl font-bold text-accent mb-5">{item.rate}</p>
                    <Button to="/contact?form=equipment" className="mt-auto w-full">Inquire now</Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-title">How rental works</h2>
            <ol className="space-y-4 mt-6">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 items-start">
                  <span className="font-display text-3xl font-bold text-accent leading-none">{i + 1}</span>
                  <span className="text-lg">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="card p-8 self-start">
            <h3 className="text-2xl mb-2">Need a machine today?</h3>
            <p className="text-secondary-text mb-4">Call us for urgent requests. We are open 24/7.</p>
            <a href={telHref(contact.phones[0])} className="link-text text-xl">{contact.phones[0]}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
