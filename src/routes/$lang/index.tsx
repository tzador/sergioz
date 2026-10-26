import { Link, createFileRoute } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import { bio, defaultLanguage, exhibitions, isLanguage, pictureCaption, pictures, pixelSize } from '../../pictures'
import { strings } from '../../strings'

const gallery = pictures.filter((picture) => !picture.hidden)

export const Route = createFileRoute('/$lang/')({
  head: ({ params }) => {
    const lang = isLanguage(params.lang) ? params.lang : defaultLanguage
    return {
      meta: [
        { title: `${bio.name[lang]} — ${strings.painter[lang]}` },
        { name: 'description', content: `${bio.name[lang]} (1945–2020). ${bio.text[lang][0]}` },
      ],
    }
  },
  component: Gallery,
})

/** A small, stable tilt per card so the wall looks hand-hung. */
function tilt(index: number) {
  return `${(((index * 5) % 9) - 4) * 0.35}deg`
}

function Gallery() {
  const { lang } = Route.useRouteContext()
  const [firstName, ...lastName] = bio.name[lang].split(' ')

  return (
    <main>
      <section className="hero">
        <figure className="polaroid polaroid--portrait">
          <span className="tape" aria-hidden />
          <div className="polaroid-photo">
            <img src="/thumbs/0.JPG" width={300} height={395} alt={bio.name[lang]} />
          </div>
          <figcaption className="polaroid-caption">
            <span className="caption-title">{firstName}</span>
          </figcaption>
        </figure>
        <div className="hero-text">
          <p className="eyebrow">{strings.painter[lang]}</p>
          <h1 className="hero-name">
            <span>{firstName}</span> <em>{lastName.join(' ')}</em>
          </h1>
          <p className="lifespan">
            <span>1945</span>
            <span className="lifespan-line" aria-hidden />
            <span>2020</span>
          </p>
        </div>
      </section>

      <section>
        <SectionHeading number="01" title={strings.works[lang]} meta={String(gallery.length)} />
        <ul className="gallery">
          {gallery.map((picture, index) => {
            const caption = pictureCaption(picture, lang)
            const [width, height] = pixelSize(picture.id)
            return (
              <li key={picture.id} style={{ '--tilt': tilt(index) } as CSSProperties}>
                <Link to="/$lang/$id" params={{ lang, id: picture.id }} className="polaroid">
                  <div className="polaroid-photo">
                    <img
                      src={`/thumbs/${picture.id}.JPG`}
                      width={300}
                      height={Math.round((300 * height) / width)}
                      alt={caption.title}
                      loading={index < 8 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="polaroid-caption">
                    <span className="caption-title">{caption.title}</span>
                    <span className="caption-meta">
                      <span className="caption-details">{caption.details}</span>
                      <span className="caption-number">№{picture.id}</span>
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <SectionHeading number="02" title={strings.biography[lang]} />
        <div className="about">
          <div className="bio">
            <p className="bio-born">{bio.born[lang]}</p>
            <p className="bio-text">{bio.text[lang].join(' ')}</p>
          </div>
          <div className="exhibitions">
            <h2 className="label">{strings.exhibitions[lang]}</h2>
            <ol>
              {exhibitions.map((exhibition, index) => (
                <li key={index}>
                  <span className="exhibition-year">{exhibition.year}</span>
                  <span>{exhibition.text[lang]}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeading({ number, title, meta }: { number: string; title: string; meta?: string }) {
  return (
    <div className="section-head">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      {meta && <span className="section-meta">{meta}</span>}
    </div>
  )
}
