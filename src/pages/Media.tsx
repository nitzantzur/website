import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import type { MediaItem } from '@/types/content'
import mediaData from '@/content/media.json'
import { formatDate } from '@/utils/formatters'

const media = mediaData as MediaItem[]

const TYPE_LABELS: Record<string, string> = {
  article: 'Article',
  podcast: 'Podcast',
  interview: 'Interview',
  'op-ed': 'Op-Ed',
  radio: 'Radio',
  video: 'Video',
}

export default function Media() {
  return (
    <PageWrapper>
      <PageSEO
        title="Media"
        description="Press coverage, podcasts, and media appearances by Nitzan Tzur-Ilan."
        canonicalPath="/media"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Media</h1>

        {media.length === 0 ? (
          <p className="text-sm text-slate-500">No media coverage listed yet.</p>
        ) : (
          <div className="space-y-6">
            {media.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-slate-100 rounded-lg p-5 hover:border-slate-200 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {item.outlet}
                    </span>
                    <span className="text-xs text-slate-300">·</span>
                    <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded">
                      {TYPE_LABELS[item.type] ?? item.type}
                    </span>
                  </div>
                  {item.date && (
                    <span className="text-xs text-slate-400 flex-shrink-0">
                      {formatDate(item.date)}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-800 group-hover:text-brand-700 transition-colors leading-snug mb-1">
                  {item.title}
                </p>
                {item.description && (
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                )}
              </a>
            ))}
          </div>
        )}
      </main>
    </PageWrapper>
  )
}
