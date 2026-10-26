import { Link, Outlet, createFileRoute, notFound } from '@tanstack/react-router'
import { bio, isLanguage, languages } from '../pictures'
import { languageNames, strings } from '../strings'

export const Route = createFileRoute('/$lang')({
  beforeLoad: ({ params }) => {
    if (!isLanguage(params.lang)) throw notFound()
    return { lang: params.lang }
  },
  component: LanguageLayout,
})

function LanguageLayout() {
  const { lang } = Route.useRouteContext()
  return (
    <div className="page">
      <header className="topbar">
        <Link to="/$lang" params={{ lang }} className="topbar-mark">
          {bio.name[lang]} <span className="topbar-role">— {strings.painter[lang]}</span>
        </Link>
        <nav className="languages" aria-label="Language">
          {languages.map((language) => (
            <Link
              key={language}
              to="."
              params={(prev) => ({ ...prev, lang: language })}
              aria-current={language === lang ? 'true' : undefined}
            >
              {languageNames[language]}
            </Link>
          ))}
        </nav>
      </header>
      <Outlet />
      <footer className="footer">
        <span>{bio.name[lang]}</span>
        <span>1945 — 2020</span>
      </footer>
    </div>
  )
}
