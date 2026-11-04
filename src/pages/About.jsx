import Button from '../components/Button'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { about, company, images, leaders } from '../data/siteData'

export default function About() {
  return (
    <div>
      <PageHero title="About AL-AMEEN" text={`${company.tagline}, based in Lagos.`} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Who we are</h2>
            <div className="space-y-4 text-lg text-secondary-text">
              {about.story.map((para) => <p key={para}>{para}</p>)}
            </div>
          </div>
          <Photo src={images.aboutOffice} alt="The AL-AMEEN office in Isheri Igando" icon="building" className="w-full h-80 md:h-96 rounded" />
        </div>
      </section>

      <section className="py-20 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="card card-accent p-8">
            <h2 className="text-3xl mb-3">Mission</h2>
            <p className="text-secondary-text">{about.mission}</p>
          </div>
          <div className="card card-accent p-8">
            <h2 className="text-3xl mb-3">Vision</h2>
            <p className="text-secondary-text">{about.vision}</p>
          </div>
          <div className="card card-accent p-8">
            <h2 className="text-3xl mb-3">Values</h2>
            <ul className="space-y-1 text-secondary-text">
              {about.values.map((v) => <li key={v}>{v}</li>)}
              <li>{company.motto}</li>
            </ul>
          </div>
        </div>
      </section>

      {leaders.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="section-title mb-10">Leadership</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((l) => (
                <div key={l.name} className="card">
                  <Photo src={l.image} alt={l.name} icon="helmet" className="w-full h-64" />
                  <div className="p-5">
                    <h3 className="text-xl">{l.name}</h3>
                    <p className="text-sm text-secondary-text">{l.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-primary-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-4">Work with AL-AMEEN</h2>
          <p className="text-lg text-gray-300 mb-8">Tell us about your project and we will respond with a quote.</p>
          <Button to="/contact" variant="accent">Get in touch</Button>
        </div>
      </section>
    </div>
  )
}
