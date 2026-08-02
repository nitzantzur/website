import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import type { ServiceCategory } from '@/types/content'
import serviceData from '@/content/service.json'

const categories = serviceData as ServiceCategory[]

export default function Service() {
  return (
    <PageWrapper>
      <PageSEO
        title="Service"
        description="Professional service, refereeing, and organizational activities by Nitzan Tzur-Ilan."
        canonicalPath="/service"
      />
      <main className="page-container">
        <h1 className="text-xl font-semibold text-slate-900 mb-8">Service</h1>

        {categories.length === 0 ? (
          <p className="text-sm text-slate-500">No service listed yet.</p>
        ) : (
          <div className="space-y-10">
            {categories.map((cat) => (
              <section key={cat.category}>
                <p className="section-heading">{cat.category}</p>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-slate-700 flex gap-2">
                      <span className="text-slate-300 flex-shrink-0 mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </main>
    </PageWrapper>
  )
}
