import PageHero from './PageHero'
import { legalDraft, legalLastUpdated } from '../data/siteData'

export default function LegalPage({ title, children }) {
  return (
    <div>
      <PageHero title={title} />
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          {legalDraft && (
            <p role="note" className="mb-8 p-4 border border-secondary-border bg-secondary-light rounded text-sm">
              Draft under review. This page describes how the site works today and is not yet confirmed by the company or a legal adviser.
            </p>
          )}
          <p className="text-sm text-secondary-text mb-8">Last updated: {legalLastUpdated}</p>
          <div className="space-y-5 [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-accent [&_a]:underline">
            {children}
          </div>
        </div>
      </section>
    </div>
  )
}
