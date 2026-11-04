import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { company, contact, social, business, telHref } from '../data/siteData'

const icons = { LinkedIn: FiLinkedin, X: FiTwitter, Facebook: FiFacebook, Instagram: FiInstagram, YouTube: FiYoutube }
const linkCls = 'hover:text-primary-orange transition-colors duration-150'

export default function Footer() {
  return (
    <footer className="bg-primary-black text-gray-300 py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 inline-block bg-white rounded p-2">
          <img src="/images/logo.png" alt={company.name} className="h-20 w-auto" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <nav aria-label="Construction">
            <h2 className="text-primary-orange font-bold text-lg mb-4">Construction</h2>
            <ul className="space-y-3 text-sm">
              <li><Link to="/construction" className={linkCls}>Road construction</Link></li>
              <li><Link to="/construction" className={linkCls}>Civil engineering</Link></li>
              <li><Link to="/projects" className={linkCls}>Projects</Link></li>
            </ul>
          </nav>
          <nav aria-label="Equipment and materials">
            <h2 className="text-primary-orange font-bold text-lg mb-4">Equipment & materials</h2>
            <ul className="space-y-3 text-sm">
              <li><Link to="/equipment" className={linkCls}>Equipment rental</Link></li>
              <li><Link to="/materials" className={linkCls}>Bitumen, trucks and machines</Link></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="text-primary-orange font-bold text-lg mb-4">Company</h2>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className={linkCls}>About us</Link></li>
              <li><Link to="/contact" className={linkCls}>Contact</Link></li>
              <li><Link to="/privacy" className={linkCls}>Privacy policy</Link></li>
              <li><Link to="/terms" className={linkCls}>Terms of use</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="text-primary-orange font-bold text-lg mb-4">Contact</h2>
            <address className="not-italic text-sm space-y-1">
              <p>{contact.addressLines.join(', ')}</p>
              <p className="text-primary-orange font-semibold">Open 24/7</p>
              {contact.phones.map((p) => (
                <a key={p} href={telHref(p)} className={`block ${linkCls}`}>{p}</a>
              ))}
              <a href={`mailto:${contact.email}`} className={linkCls}>{contact.email}</a>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <ul className="flex gap-4">
            {social.map((s) => {
              const Icon = icons[s.name]
              return Icon ? (
                <li key={s.name}>
                  <a href={s.url} aria-label={s.name} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary-orange transition-colors duration-150">
                    <Icon size={20} aria-hidden="true" />
                  </a>
                </li>
              ) : null
            })}
          </ul>
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {company.copyrightYear} {company.name}. All rights reserved.</p>
            {business.cacNumber && <p>CAC registration: {business.cacNumber}</p>}
            <p className="italic mt-2">{company.motto}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
