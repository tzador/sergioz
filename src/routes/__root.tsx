import { HeadContent, Link, Outlet, Scripts, createRootRoute, useParams } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { defaultLanguage, isLanguage, locales } from '../pictures'
import { strings } from '../strings'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#f2ede3' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  const { lang } = useParams({ strict: false })
  return (
    <html lang={locales[isLanguage(lang) ? lang : defaultLanguage]}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  const { lang: param } = useParams({ strict: false })
  const lang = isLanguage(param) ? param : defaultLanguage
  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h1>{strings.notFound[lang]}</h1>
      <Link to="/$lang" params={{ lang }}>
        ← {strings.backToGallery[lang]}
      </Link>
    </main>
  )
}
