import { useState } from 'react'
import PageWrapper from '@/components/layout/PageWrapper'
import PageSEO from '@/components/seo/PageSEO'
import Monogram from '@/components/ui/Monogram'
import bio from '@/content/bio.json'

interface LinkItem {
  label: string
  href: string
  icon: React.ReactNode
}

function GoogleScholarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 10a8 8 0 017.162 3.44L24 9.5 12 0z" />
    </svg>
  )
}

function GenericLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Home() {
  const [photoError, setPhotoError] = useState(false)

  const links: LinkItem[] = [
    { label: 'Google Scholar', href: bio.links.google_scholar, icon: <GoogleScholarIcon /> },
    { label: 'SSRN', href: bio.links.ssrn, icon: <GenericLinkIcon /> },
    { label: 'RePEC', href: bio.links.repec, icon: <GenericLinkIcon /> },
    { label: 'GitHub', href: bio.links.github, icon: <GitHubIcon /> },
    { label: 'LinkedIn', href: bio.links.linkedin, icon: <LinkedInIcon /> },
    { label: 'Dallas Fed', href: bio.links.dallas_fed_profile, icon: <img src="/dallasfed-icon.png" alt="" className="w-4 h-4 rounded-sm object-cover" /> },
  ].filter((l) => l.href && !l.href.includes('PLACEHOLDER'))

  return (
    <PageWrapper>
      <PageSEO canonicalPath="/" />
      <main className="page-container">

        {/* Hero — photo left, details right */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 items-start mb-0">

          {/* Photo */}
          <div className="flex-shrink-0">
            {photoError ? (
              <Monogram name={bio.name} size={200} />
            ) : (
              <img
                src={bio.photo}
                alt={bio.name}
                width={200}
                height={240}
                className="w-[240px] h-[290px] rounded-lg object-cover object-top bg-slate-100"
                onError={() => setPhotoError(true)}
              />
            )}
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 flex flex-col items-center text-center">
            {/* Name */}
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
              {bio.name}
            </h1>

            {/* Title */}
            <p className="text-base text-slate-600 mb-1">{bio.title}</p>

            {/* Institution */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src="/dallasfed-icon.png" alt="Dallas Fed" className="w-6 h-6 rounded-sm object-cover" />
              <p className="text-lg text-slate-700">{bio.institution}</p>
            </div>

            {/* CV */}
            {bio.links.cv && (
              <a
                href={bio.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors mb-6"
              >
                Curriculum Vitae
              </a>
            )}

            {/* Email */}
            <p className="text-[15px] text-slate-600 mb-6">
              E-mail:{' '}
              <a href={`mailto:${bio.email}`} className="link-default">
                {bio.email}
              </a>
            </p>

            {/* Research Interests */}
            <p className="text-sm text-slate-700 mb-6">
              <span className="font-bold text-slate-800">Research Interests: </span>
              {bio.research_interests.join(' · ')}
            </p>

            {/* Profile links */}
            {links.length > 0 && (
              <div className="flex flex-nowrap justify-center gap-3">
                {links.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 hover:text-brand-700 border border-slate-200 hover:border-brand-300 rounded-full px-2.5 py-1 transition-colors"
                  >
                    {icon}
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>


      </main>
    </PageWrapper>
  )
}
