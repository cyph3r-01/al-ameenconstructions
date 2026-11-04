import axios from 'axios'
import { contact } from '../data/siteData'

// When the Express backend is running, set VITE_API_URL (for example http://localhost:5000)
// in a .env file and forms post to `${VITE_API_URL}/api/<endpoint>`.
// Without it, the form opens a ready-written WhatsApp message so no request is lost.
const API = import.meta.env.VITE_API_URL

export async function submitForm({ endpoint, title, fields, values }) {
  if (API) {
    await axios.post(`${API}/api/${endpoint}`, values)
    return 'server'
  }
  const lines = fields.filter((f) => values[f.name]).map((f) => `${f.label.replace(' (optional)', '')}: ${values[f.name]}`)
  const text = encodeURIComponent(`${title}\n${lines.join('\n')}`)
  window.open(`https://wa.me/${contact.whatsapp}?text=${text}`, '_blank', 'noopener')
  return 'whatsapp'
}
