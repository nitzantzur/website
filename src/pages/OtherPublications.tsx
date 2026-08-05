import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import data from '@/content/other-publications.json'

interface OtherPub {
  id: string
  title: string
  coauthors: string[]
  venue: string
  year: number
  url: string
}

const pubs = data as OtherPub[]

// Group by year descending
function groupByYear(items: OtherPub[]): [number, OtherPub[]][] {
  const map = new Map<number, OtherPub[]>()
  items.forEach((p) => {
    const arr = map.get(p.year) ?? []
    arr.push(p)
    map.set(p.year, arr)
  })
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0])
}

export default function OtherPublications() {
  const grouped = groupByYear(pubs)

  return (
    <PageWrapper>
      <PageSEO
        title="Policy Publications"
        description="Policy publications, working papers, and other writings by Nitzan Tzur-Ilan."
        canonicalPath="/policy-publications"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Policy Publications</h1>

        <div className="space-y-10">
          {grouped.map(([year, items]) => (
            <div key={year}>
              <p className="section-heading">{year}</p>
              <div className="space-y-5">
                {items.map((pub) => (
                  <article key={pub.id} className="border-b border-slate-100 pb-5">
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-[15px] leading-snug text-slate-900 hover:text-brand-700 transition-colors"
                    >
                      {pub.title}
                    </a>
                    {pub.coauthors.length > 0 && (
                      <p className="text-sm text-slate-600 mt-1">
                        With {pub.coauthors.join(', ')}
                      </p>
                    )}
                    <p className="text-sm text-slate-500 italic mt-0.5">{pub.venue}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </PageWrapper>
  )
}
