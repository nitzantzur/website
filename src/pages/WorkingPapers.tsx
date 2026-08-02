import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import AbstractToggle from '@/components/ui/AbstractToggle'
import Tag from '@/components/ui/Tag'
import { formatStatus } from '@/utils/formatters'
import type { WorkingPaper } from '@/types/content'
import wpData from '@/content/working-papers.json'

const papers = wpData as WorkingPaper[]

const STATUS_COLORS: Record<string, string> = {
  'new': 'bg-emerald-50 text-emerald-700',
  'under-review': 'bg-blue-50 text-blue-700',
  'revise-resubmit': 'bg-amber-50 text-amber-700',
  'draft': 'bg-slate-100 text-slate-600',
}

export default function WorkingPapers() {
  return (
    <PageWrapper>
      <PageSEO
        title="Working Papers"
        description="Working papers and current research by Nitzan Tzur-Ilan."
        canonicalPath="/working-papers"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Working Papers</h1>

        {papers.length === 0 ? (
          <p className="text-sm text-slate-500">No working papers listed yet.</p>
        ) : (
          <div className="space-y-10">
            {papers.map((paper) => (
              <article key={paper.id} className="border-b border-slate-100 pb-10">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <p className="font-serif text-[15px] leading-snug text-slate-900">
                    {paper.title}
                  </p>
                  <span
                    className={`flex-shrink-0 text-xs font-medium px-2 py-0.5 rounded ${
                      STATUS_COLORS[paper.status] ?? STATUS_COLORS['draft']
                    }`}
                  >
                    {formatStatus(paper.status)}
                  </span>
                </div>

                {paper.coauthors.length > 0 && (
                  <p className="text-sm text-slate-600 mb-1">
                    With {paper.coauthors.join(', ')}
                  </p>
                )}

                <p className="text-xs text-slate-400 mb-2">
                  {paper.date.slice(0, 4)}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mb-2">
                  {paper.ssrn && !paper.ssrn.includes('PLACEHOLDER') && (
                    <a href={paper.ssrn} target="_blank" rel="noopener noreferrer" className="text-xs link-default">
                      SSRN →
                    </a>
                  )}
                  {paper.pdf && (
                    <a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="text-xs link-default">
                      PDF →
                    </a>
                  )}
                </div>

                <AbstractToggle abstract={paper.abstract} />

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {paper.tags.map((tag) => (
                    <Tag key={tag} label={tag} size="sm" />
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
