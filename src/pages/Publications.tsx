import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import Tag from '@/components/ui/Tag'
import AbstractToggle from '@/components/ui/AbstractToggle'
import { useSearch } from '@/hooks/useSearch'
import { formatAuthors, formatCitation } from '@/utils/formatters'
import type { Publication } from '@/types/content'
import publicationsData from '@/content/publications.json'

const publications = publicationsData as Publication[]

export default function Publications() {
  const { activeFilters, toggleFilter, results, allTags } = useSearch(
    publications,
    ['title', 'authors', 'journal', 'abstract', 'tags', 'year'],
    'tags'
  )

  const sorted = [...results].sort((a, b) => b.year - a.year)

  return (
    <PageWrapper>
      <PageSEO
        title="Publications"
        description="Peer-reviewed publications by Nitzan Tzur-Ilan in real estate finance, urban economics, and environmental economics."
        canonicalPath="/publications"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Publications</h1>

        {/* Filters */}
        <div className="mb-8 space-y-3">
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {allTags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  active={activeFilters.includes(tag)}
                  onClick={() => toggleFilter(tag)}
                />
              ))}
            </div>
          )}
        </div>

        {results.length === 0 ? (
          <p className="text-sm text-slate-500">No publications match the selected filters.</p>
        ) : (
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
                  {formatCitation({
                    journal: pub.journal,
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {pub.tags.map((tag) => (
                    <Tag
                      key={tag}
                      label={tag}
                      size="sm"
                      active={activeFilters.includes(tag)}
                      onClick={() => toggleFilter(tag)}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </PageWrapper>
  )
}
