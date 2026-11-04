import Photo from './Photo'
import { demoContent } from '../data/siteData'

export default function ProjectCard({ image, icon, category, title, date, location, status }) {
  return (
    <article className="card card-lift h-full">
      <div className="card-photo overflow-hidden relative">
        <Photo src={image} alt={title} icon={icon} className="w-full h-48" />
        {demoContent && (
          <span className="absolute top-3 right-3 bg-white text-primary-black text-xs font-semibold px-2 py-1 rounded">Sample</span>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary-orange text-primary-black text-xs font-semibold rounded mb-3">{category}</span>
        <h3 className="text-xl mb-3">{title}</h3>
        <dl className="text-sm text-secondary-text space-y-1">
          <div className="flex gap-2"><dt className="font-semibold">{status}:</dt><dd>{date}</dd></div>
          <div className="flex gap-2"><dt className="font-semibold">Location:</dt><dd>{location}</dd></div>
        </dl>
      </div>
    </article>
  )
}
