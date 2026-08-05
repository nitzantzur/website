import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import AbstractToggle from '@/components/ui/AbstractToggle'
import Tag from '@/components/ui/Tag'
import type { WorkingPaper } from '@/types/content'
import wpData from '@/content/working-papers.json'

const papers = wpData as WorkingPaper[]

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
                <div className="mb-1.5">
                  <p className="font-serif text-[15px] leading-snug text-slate-900">
                    {paper.title}
                  </p>
                </div>

                {paper.coauthors.length > 0 && (
                  <p className="text-sm text-slate-600 mb-1">
                    With {paper.coauthors.join(', ')}
                  </p>
                )}

                {paper.status === 'revise-resubmit' && paper.journal && (
                  <p className="text-xs text-amber-700 font-medium mb-2">R&R at {paper.journal}</p>
                )}

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
