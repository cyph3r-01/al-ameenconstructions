import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { company, contact } from '../data/siteData'

export default function Terms() {
  return (
    <LegalPage title="Terms of use">
      <p>By using this website you agree to these terms. They cover use of the site, not the contracts we make for works, rentals or supply, which we agree with you separately in writing.</p>

      <h2>About us</h2>
      <p>{company.name}, {contact.addressLines.join(', ')}. Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>

      <h2>Information on this site</h2>
      <p>We work to keep the information here accurate, but rates, specifications and availability change. Anything shown on this site is a guide, not an offer. A quote from us in writing sets the price and terms.</p>

      <h2>Requests and quotes</h2>
      <p>Sending a form or message does not create a contract. A contract exists only when you and {company.name} both agree the scope, price and terms in writing.</p>

      <h2>Using the site</h2>
      <ul>
        <li>Give accurate details in your requests.</li>
        <li>Do not misuse the site, try to break it, or send harmful or unlawful content.</li>
      </ul>

      <h2>Ownership</h2>
      <p>The logo, text and photos on this site belong to {company.name} or its licensors. Do not copy them without permission.</p>

      <h2>Liability</h2>
      <p>We are not responsible for loss caused by relying on general information on this site. Nothing here limits liability that the law does not allow us to limit.</p>

      <h2>Privacy</h2>
      <p>How we handle your data is explained in our <Link to="/privacy">Privacy policy</Link>.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Federal Republic of Nigeria. [PLACEHOLDER: confirm with your legal adviser, including the courts that apply.]</p>

      <h2>Changes</h2>
      <p>We may update these terms. The date at the top shows the latest version.</p>
    </LegalPage>
  )
}
