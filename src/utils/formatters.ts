export function formatAuthors(authors: string[]): string {
  return authors.join(', ')
}

export function formatCitation(params: {
  journal: string
  year: number
  volume?: string
  issue?: string
  pages?: string
}): string {
  const { journal, year, volume, issue, pages } = params
  let citation = `${journal}`
  if (volume) {
    citation += `, ${volume}`
    if (issue) citation += `(${issue})`
  }
  if (pages) citation += `, pp. ${pages}`
  citation += `, ${year}`
  return citation
}

// Same as formatCitation but without the leading journal name, so the
// journal can be styled separately (see Publications.tsx).
export function formatCitationRest(params: {
  year: number
  volume?: string
  issue?: string
  pages?: string
}): string {
  const { year, volume, issue, pages } = params
  let citation = ''
  if (volume) {
    citation += `, ${volume}`
    if (issue) citation += `(${issue})`
  }
  if (pages) citation += `, pp. ${pages}`
  citation += `, ${year}`
  return citation
}

export function formatDate(dateStr: string): string {
  // Handles "YYYY-MM-DD" and "YYYY-MM"
  const parts = dateStr.split('-')
  if (parts.length === 3) {
    const date = new Date(`${dateStr}T00:00:00`)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }
  if (parts.length === 2) {
    const date = new Date(`${dateStr}-01T00:00:00`)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }
  return dateStr
}

export function getYear(dateStr: string): number {
  return parseInt(dateStr.slice(0, 4), 10)
}

const STATUS_LABELS: Record<string, string> = {
  'new': 'New',
  'under-review': 'Under Review',
  'revise-resubmit': 'Revise & Resubmit',
  'draft': 'Draft',
}

export function formatStatus(status: string): string {
  return STATUS_LABELS[status] ?? status
}
