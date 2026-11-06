import Photo from './Photo'
import VideoButton from './VideoButton'

export default function ProjectCard({ image, icon, category, title, description, date, location, status, sample, video }) {
  const details = [
    status && date ? [status, date] : date ? ['Date', date] : null,
    location ? ['Location', location] : null,
  ].filter(Boolean)

  return (
    <article className="card card-lift h-full">
      <div className="card-photo overflow-hidden relative">
        <Photo src={image} alt={title} icon={icon} className="w-full aspect-[4/3]" />
        {sample && (
          <span className="absolute top-3 right-3 bg-white text-primary-black text-xs font-semibold px-2 py-1 rounded">Sample</span>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-primary-orange text-primary-black text-xs font-semibold rounded mb-3">{category}</span>
        <h3 className="text-xl">{title}</h3>
        {description && <p className="text-sm text-secondary-text mt-2">{description}</p>}
        {details.length > 0 && (
          <dl className="text-sm text-secondary-text space-y-1 mt-3">
            {details.map(([label, value]) => (
              <div key={label} className="flex gap-2"><dt className="font-semibold">{label}:</dt><dd>{value}</dd></div>
            ))}
          </dl>
        )}
        <VideoButton src={video} title={title} className="mt-4 w-full" />
      </div>
    </article>
  )
}
