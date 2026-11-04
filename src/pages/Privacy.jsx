import LegalPage from '../components/LegalPage'
import { company, contact, business } from '../data/siteData'

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy">
      <p>This policy explains what personal data {company.name} collects through this website, why, and what you can do about it.</p>

      <h2>Who we are</h2>
      <p>
        {company.name}, {contact.addressLines.join(', ')}.
        {business.cacNumber ? ` CAC registration: ${business.cacNumber}.` : ' CAC registration: [PLACEHOLDER: add number].'}
        {' '}Contact for privacy questions: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>

      <h2>What we collect</h2>
      <p>We collect only what you type into our request forms (project inquiry, equipment rental, materials order):</p>
      <ul>
        <li>Name, phone number and, where asked, email address and company name</li>
        <li>Details of your request: project type, location, equipment or product, dates, quantity and notes</li>
      </ul>
      <p>This site sets no cookies, runs no analytics and loads no advertising or tracking tools. Fonts are served from this site, not from a third party.</p>

      <h2>Why we use it</h2>
      <p>We use your details to answer your request, prepare a quote, and arrange rental, supply or works you ask for. We do not use them for marketing unless you ask us to.</p>

      <h2>Who receives it</h2>
      <p>Our staff who handle enquiries. Our website host [PLACEHOLDER: hosting provider] and, when you choose to send a request by WhatsApp, WhatsApp, which has its own privacy policy. We do not sell your data.</p>

      <h2>How long we keep it</h2>
      <p>[PLACEHOLDER: for example, enquiries that do not lead to work are deleted after 12 months; records of work done are kept as the law requires.]</p>

      <h2>Your rights</h2>
      <p>Under the Nigeria Data Protection Act 2023 you can ask us to show you the data we hold about you, correct it, delete it, or stop using it. Email <a href={`mailto:${contact.email}`}>{contact.email}</a> and we will respond within a reasonable time.</p>

      <h2>Complaints</h2>
      <p>If you are not satisfied with our response, you can complain to the Nigeria Data Protection Commission (NDPC).</p>

      <h2>Children</h2>
      <p>This site is for businesses and adults. We do not knowingly collect data from anyone under 18.</p>

      <h2>Changes</h2>
      <p>We will update this page when our practices change and show the date at the top.</p>
    </LegalPage>
  )
}
