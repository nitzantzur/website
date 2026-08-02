import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import type { Talk } from '@/types/content'
import talksData from '@/content/talks.json'
import { formatDate, getYear } from '@/utils/formatters'

const talks = (talksData as Talk[]).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

function groupByYear(items: Talk[]): [number, Talk[]][] {
  const map = new Map<number, Talk[]>()
  items.forEach((t) => {
    const year = getYear(t.date)
    const arr = map.get(year) ?? []
    arr.push(t)
    map.set(year, arr)
  })
  return Array.from(map.entries()).sort((a, b) => b[0] - a[0])
}

const TYPE_LABELS: Record<string, string> = {
  conference: 'Conference',
  seminar: 'Seminar',
  invited: 'Invited Talk',
  workshop: 'Workshop',
}

export default function Talks() {
  const grouped = groupByYear(talks)

  return (
    <PageWrapper>
      <PageSEO
        title="Talks"
        description="Conference presentations and seminar talks by Nitzan Tzur-Ilan."
        canonicalPath="/talks"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Talks</h1>

        {grouped.length === 0 ? (
          <p className="text-sm text-slate-500">No talks listed yet.</p>
        ) : (
          <div className="space-y-10">
            {grouped.map(([year, items]) => (
              <div key={year}>
                <p className="section-heading">{year}</p>
                <div className="space-y-5">
                  {items.map((talk) => (
                    <article key={talk.id} className="border-b border-slate-100 pb-5">
                      <p className="text-[15px] font-serif text-slate-900 leading-snug mb-1">
                        {talk.title}
                      </p>
                      <p className="text-sm text-slate-600 mb-0.5">{talk.event}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-xs text-slate-400">
                          {talk.location} · {formatDate(talk.date)}
                        </p>
                        <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded">
                          {TYPE_LABELS[talk.type] ?? talk.type}
                        </span>
                        {talk.slides_url && (
                          <a
                            href={talk.slides_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs link-default"
                          >
                            Slides →
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </PageWrapper>
  )
}
