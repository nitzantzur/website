import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.nitzantzur-ilan.com'
const SITE_NAME = 'Nitzan Tzur-Ilan'
const DEFAULT_DESCRIPTION =
  'Senior Research Economist at the Federal Reserve Bank of Dallas. Research in household finance, real estate, financial regulation, and banking.'
const OG_IMAGE = `${SITE_URL}/photo.jpg`

interface Props {
  title?: string
  description?: string
  canonicalPath?: string
}

export default function PageSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '/',
}: Props) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Research Economist`
  const canonicalUrl = `${SITE_URL}${canonicalPath}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  )
}
