import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import Icon from '../components/Icon'
import PageHero from '../components/PageHero'
import { contact, equipment, telHref } from '../data/siteData'
import { submitForm } from '../lib/submitForm'

const equipmentOptions = equipment.map((e) => e.name)

const forms = {
  inquiry: {
    tab: 'Project inquiry',
    endpoint: 'project-inquiry',
    title: 'New project inquiry',
    submit: 'Send inquiry',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
      { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
      { name: 'company', label: 'Company (optional)', type: 'text', autoComplete: 'organization' },
      { name: 'projectType', label: 'Project type', type: 'select', required: true, options: ['Road construction', 'Civil engineering', 'Building construction', 'Site development', 'Other'] },
      { name: 'location', label: 'Project location', type: 'text', required: true },
      { name: 'timeline', label: 'Preferred timeline (optional)', type: 'text' },
      { name: 'description', label: 'Project description', type: 'textarea', full: true },
    ],
  },
  equipment: {
    tab: 'Equipment rental',
    endpoint: 'equipment-rental',
    title: 'New equipment rental request',
    submit: 'Request equipment',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
      { name: 'email', label: 'Email (optional)', type: 'email', autoComplete: 'email' },
      { name: 'equipment', label: 'Equipment', type: 'select', required: true, options: equipmentOptions },
      { name: 'startDate', label: 'Required from', type: 'date', required: true },
      { name: 'duration', label: 'Rental duration', type: 'text', required: true, placeholder: 'For example: 7 days' },
      { name: 'location', label: 'Delivery location', type: 'text', required: true, full: true },
      { name: 'requirements', label: 'Special requirements (optional)', type: 'textarea', full: true },
    ],
  },
  materials: {
    tab: 'Materials order',
    endpoint: 'material-order',
    title: 'New materials order request',
    submit: 'Send order request',
    fields: [
      { name: 'name', label: 'Full name', type: 'text', required: true, autoComplete: 'name' },
      { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
      { name: 'email', label: 'Email (optional)', type: 'email', autoComplete: 'email' },
      { name: 'company', label: 'Company (optional)', type: 'text', autoComplete: 'organization' },
      { name: 'product', label: 'Product', type: 'select', required: true, options: ['Bitumen 60/70', 'Bitumen MCI', 'Bitumen Emotion', 'Truck', 'Machine', 'Auto', 'Other'] },
      { name: 'quantity', label: 'Quantity and unit', type: 'text', required: true, placeholder: 'For example: 20 tonnes' },
      { name: 'location', label: 'Delivery location', type: 'text', required: true, full: true },
      { name: 'specifications', label: 'Specifications (optional)', type: 'textarea', full: true },
    ],
  },
}

function Field({ kind, field }) {
  const id = `${kind}-${field.name}`
  const common = { id, name: field.name, required: field.required, autoComplete: field.autoComplete, placeholder: field.placeholder, className: 'input-field' }
  return (
    <div className={field.full ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className="block font-semibold mb-1">{field.label}</label>
      {field.type === 'select' ? (
        <select {...common} defaultValue="">
          <option value="" disabled>Select one</option>
          {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea {...common} rows={5} />
      ) : (
        <input {...common} type={field.type} />
      )}
    </div>
  )
}


export default function Contact() {
  const [params, setParams] = useSearchParams()
  const kind = forms[params.get('form')] ? params.get('form') : 'inquiry'
  const form = forms[kind]
  const [status, setStatus] = useState({ state: 'idle', mode: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.currentTarget))
    delete values.consent
    setStatus({ state: 'sending', mode: '' })
    try {
      const mode = await submitForm({ endpoint: form.endpoint, title: form.title, fields: form.fields, values })
      setStatus({ state: 'sent', mode })
      e.target.reset()
    } catch {
      setStatus({ state: 'error', mode: '' })
    }
  }

  return (
    <div>
      <PageHero title="Contact AL-AMEEN" text="Our office is open 24/7 for enquiries about construction, equipment and supply." />

      <section className="py-16 bg-white border-b border-secondary-border">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <Icon name="pin" className="text-3xl text-accent mb-3" />
            <h2 className="text-xl mb-1">Office</h2>
            <address className="not-italic text-secondary-text">
              {contact.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
            {contact.mapUrl && <a href={contact.mapUrl} className="link-text text-sm mt-2 inline-block" target="_blank" rel="noreferrer">Get directions</a>}
          </div>
          <div>
            <Icon name="phone" className="text-3xl text-accent mb-3" />
            <h2 className="text-xl mb-1">Phone</h2>
            {contact.phones.map((p) => <a key={p} href={telHref(p)} className="link-text block">{p}</a>)}
          </div>
          <div>
            <Icon name="mail" className="text-3xl text-accent mb-3" />
            <h2 className="text-xl mb-1">Email</h2>
            <a href={`mailto:${contact.email}`} className="link-text break-all">{contact.email}</a>
          </div>
          <div>
            <Icon name="whatsapp" className="text-3xl text-accent mb-3" />
            <h2 className="text-xl mb-1">WhatsApp</h2>
            <p className="text-secondary-text">Available 24/7</p>
            <a href={`https://wa.me/${contact.whatsapp}`} className="link-text" target="_blank" rel="noreferrer">Chat now</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary-light">
        <div className="max-w-4xl mx-auto px-4">
          <div role="tablist" aria-label="Request type" className="flex flex-wrap gap-2 mb-6 border-b border-secondary-border">
            {Object.entries(forms).map(([key, f]) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`tab-${key}`}
                aria-selected={kind === key}
                aria-controls="form-panel"
                onClick={() => { setParams({ form: key }); setStatus({ state: 'idle', mode: '' }) }}
                className={`px-5 py-3 font-semibold border-b-4 -mb-px transition-colors duration-150 ${
                  kind === key ? 'border-primary-orange text-primary-black' : 'border-transparent text-secondary-text hover:text-primary-black'
                }`}
              >
                {f.tab}
              </button>
            ))}
          </div>

          <form key={kind} id="form-panel" role="tabpanel" aria-labelledby={`tab-${kind}`} onSubmit={onSubmit} className="bg-white p-8 rounded border border-secondary-border space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {form.fields.map((f) => <Field key={f.name} kind={kind} field={f} />)}
            </div>

            <label className="flex items-start gap-3">
              <input type="checkbox" name="consent" required className="w-5 h-5 mt-0.5 shrink-0" />
              <span className="text-sm text-secondary-text">
                I have read the <Link to="/privacy">Privacy policy</Link> and agree that AL-AMEEN may use these details to reply to my request.
              </span>
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <Button type="submit" variant="accent" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Sending...' : form.submit}
              </Button>
              <div aria-live="polite" className="text-sm">
                {status.state === 'sent' && status.mode === 'server' && <p className="text-green-800 font-semibold">Request received. We will contact you shortly.</p>}
                {status.state === 'sent' && status.mode === 'whatsapp' && <p className="text-green-800 font-semibold">WhatsApp opened with your request. Press send there to finish.</p>}
                {status.state === 'error' && <p role="alert" className="text-red-700 font-semibold">Your request did not send. Please call us on {contact.phones[0]}.</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
