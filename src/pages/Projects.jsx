import { useState } from 'react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects, projectStats } from '../data/siteData'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div>
      <PageHero title="Projects" text="Completed and ongoing work." />

      <section className="py-8 bg-white border-b border-secondary-border">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded font-semibold transition-colors duration-150 ${
                filter === cat ? 'bg-primary-orange text-primary-black' : 'bg-secondary-light text-primary-black border border-secondary-border hover:bg-secondary-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}><ProjectCard {...p} /></Reveal>
          ))}
        </div>
      </section>

      {projectStats.length > 0 && (
        <section className="py-16 bg-white" aria-label="Project figures">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
            {projectStats.map((st) => (
              <div key={st.label} className="card p-6 text-center">
                <p className="text-5xl font-display font-bold text-accent">{st.value}</p>
                <p className="font-semibold mt-1">{st.label}</p>
                <p className="text-sm text-secondary-text">{st.note}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
