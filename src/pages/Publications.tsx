import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import AbstractToggle from '@/components/ui/AbstractToggle'
import { formatAuthors, formatCitationRest } from '@/utils/formatters'
import type { Publication } from '@/types/content'
import publicationsData from '@/content/publications.json'

const publications = publicationsData as Publication[]

export default function Publications() {
  const sorted = [...publications].sort((a, b) => b.year - a.year)

  return (
    <PageWrapper>
      <PageSEO
        title="Publications"
        description="Peer-reviewed publications by Nitzan Tzur-Ilan in real estate finance, urban economics, and environmental economics."
        canonicalPath="/publications"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Publications</h1>

        <div className="space-y-8">
          {sorted.map((pub) => (
            <article key={pub.id} className="border-b border-slate-100 pb-8">
              <p className="font-serif text-[15px] leading-snug text-slate-900 mb-1.5">
                {pub.title}
              </p>
              <p className="text-sm text-slate-600 mb-1">
                {formatAuthors(pub.authors)}
              </p>
              <p className="text-sm text-slate-500 italic mb-2">
                <span className="text-brand-600 not-italic">{pub.journal}</span>
                {formatCitationRest({
                  year: pub.year,
                  volume: pub.volume,
                  issue: pub.issue,
                  pages: pub.pages,
                })}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mb-2">
                {pub.doi && !pub.doi.includes('PLACEHOLDER') && (
                  <a
                    href={pub.url ?? `https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs link-default"
                  >
                    DOI →
                  </a>
                )}
                {pub.ssrn && !pub.ssrn.includes('PLACEHOLDER') && (
                  <a
                    href={pub.ssrn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs link-default"
                  >
                    SSRN →
                  </a>
                )}
              </div>

              <AbstractToggle abstract={pub.abstract} />
            </article>
          ))}
        </div>
      </main>
    </PageWrapper>
  )
}
