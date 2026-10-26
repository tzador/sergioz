import { Link, createFileRoute, notFound, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { bio, defaultLanguage, getPicture, isLanguage, pictureCaption, pictureDimensions, pictures } from '../../pictures'
import { strings } from '../../strings'

const gallery = pictures.filter((picture) => !picture.hidden)

export const Route = createFileRoute('/$lang/$id')({
  loader: ({ params }) => {
    const picture = getPicture(params.id)
    if (!picture) throw notFound()
    return { picture }
  },
  head: ({ params, loaderData }) => {
    const lang = isLanguage(params.lang) ? params.lang : defaultLanguage
    if (!loaderData) return {}
    const caption = pictureCaption(loaderData.picture, lang)
    return {
      meta: [
        { title: `${caption.title} — ${bio.name[lang]}` },
        { name: 'description', content: `${caption.title}. ${caption.details}` },
      ],
    }
  },
  component: Detail,
})

function Detail() {
  const { lang } = Route.useRouteContext()
  const { picture } = Route.useLoaderData()
  const navigate = useNavigate()
  const caption = pictureCaption(picture, lang)
  const dimensions = pictureDimensions(picture, lang)

  // match by id: loader data is serialized, so `picture` isn't the same object as the one in `gallery`
  const index = gallery.findIndex((p) => p.id === picture.id)
  const previous = index > 0 ? gallery[index - 1] : undefined
  const next = index >= 0 && index < gallery.length - 1 ? gallery[index + 1] : undefined

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key === 'ArrowLeft' && previous) navigate({ to: '/$lang/$id', params: { lang, id: previous.id } })
      if (event.key === 'ArrowRight' && next) navigate({ to: '/$lang/$id', params: { lang, id: next.id } })
      if (event.key === 'Escape') navigate({ to: '/$lang', params: { lang } })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lang, previous, next, navigate])

  return (
    <main className="detail">
      <nav className="detail-nav">
        <Link to="/$lang" params={{ lang }}>
          ← {strings.backToGallery[lang]}
        </Link>
        {index >= 0 && (
          <span>
            {String(index + 1).padStart(2, '0')} / {gallery.length}
          </span>
        )}
      </nav>

      <figure className="polaroid polaroid--large">
        <span className="tape" aria-hidden />
        <div className="polaroid-photo measured">
          <img
            key={picture.id}
            src={`/pictures/${picture.id}.JPG`}
            alt={caption.title}
            style={{ backgroundImage: `url(/thumbs/${picture.id}.JPG)` }}
          />
          <span className="dim dim--width" aria-hidden>
            <span>{dimensions.width}</span>
          </span>
          <span className="dim dim--height" aria-hidden>
            <span>{dimensions.height}</span>
          </span>
        </div>
        <figcaption className="polaroid-caption">
          <span className="caption-title">{caption.title}</span>
          <span className="caption-meta">
            <span className="caption-details">{caption.details}</span>
            <span className="caption-number">№{picture.id}</span>
          </span>
        </figcaption>
      </figure>

      <nav className="pager">
        {previous ? (
          <Link to="/$lang/$id" params={{ lang, id: previous.id }} className="pager-link">
            <span className="label">← {strings.previous[lang]}</span>
            <span className="pager-title">{previous.title[lang]}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to="/$lang/$id" params={{ lang, id: next.id }} className="pager-link pager-link--next">
            <span className="label">{strings.next[lang]} →</span>
            <span className="pager-title">{next.title[lang]}</span>
          </Link>
        )}
      </nav>
    </main>
  )
}
