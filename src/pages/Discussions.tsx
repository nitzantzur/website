import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import data from '@/content/discussions.json'

interface Discussion {
  id: string
  paper: string
  authors: string
  event: string
  date: string
}

const discussions = (data as Discussion[]).sort((a, b) => b.date.localeCompare(a.date))

function groupByYear(items: Discussion[]): [number, Discussion[]][] {
  const map = new Map<number, Discussion[]>()
  items.forEach((d) => {
    const year = parseInt(d.date.slice(0, 4))
    const arr = map.get(year) ?? []
    arr.push(d)
    map.set(year, arr)
  })
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0])
}

export default function Discussions() {
  const grouped = groupByYear(discussions)

  return (
    <PageWrapper>
      <PageSEO
        title="Discussions"
        description="Conference discussions by Nitzan Tzur-Ilan."
        canonicalPath="/discussions"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Discussions</h1>

        <div className="space-y-10">
          {grouped.map(([year, items]) => (
            <div key={year}>
              <p className="section-heading">{year}</p>
              <div className="space-y-5">
                {items.map((d) => (
                  <article key={d.id} className="border-b border-slate-100 pb-5">
                    <p className="font-serif text-[15px] leading-snug text-slate-900 mb-1">
                      &ldquo;{d.paper}&rdquo;
                    </p>
                    <p className="text-sm text-slate-600 mb-0.5">by {d.authors}</p>
                    <p className="text-sm text-slate-500 italic">{d.event}</p>
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
