import Photo from './Photo'
import Icon from './Icon'
import { Link } from 'react-router-dom'

export default function ServiceCard({ icon, image, title, description, items, to, linkText = 'Learn more' }) {
  return (
    <div className="card card-lift card-accent flex flex-col h-full">
      {image !== undefined && (
        <div className="card-photo overflow-hidden">
          <Photo src={image} alt={title} icon={icon} className="w-full h-44" />
        </div>
      )}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          {image === undefined && <Icon name={icon} className="text-3xl text-accent" />}
          <h3 className="text-2xl">{title}</h3>
        </div>
        <p className="text-secondary-text mb-4">{description}</p>
        {items && (
          <ul className="space-y-2 mb-5">
            {items.map((item) => (
              <li key={item} className="text-sm text-secondary-text flex items-center gap-2">
                <Icon name="check" className="text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {to && <Link to={to} className="link-text text-sm mt-auto">{linkText}</Link>}
      </div>
    </div>
  )
}
