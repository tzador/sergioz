// Embeds the picture metadata and interface text into public/gallery.html, so
// the 3D gallery stays a single self-contained file but shares src/pictures.ts
// with the rest of the site. Run with `bun run gallery-data` (also part of build).
import { bio, languages, pictureCaption, pictures, pixelSize } from '../src/pictures'
import { galleryStrings } from '../src/strings'

const data = {
  name: bio.name,
  strings: galleryStrings,
  pictures: pictures
    .filter((picture) => !picture.hidden)
    .map((picture) => ({
      id: picture.id,
      size: picture.size,
      px: pixelSize(picture.id),
      captions: Object.fromEntries(languages.map((lang) => [lang, pictureCaption(picture, lang)])),
    })),
}

const file = 'public/gallery.html'
const html = await Bun.file(file).text()
const open = '<script id="data" type="application/json">'
const start = html.indexOf(open)
const end = html.indexOf('</script>', start)
if (start < 0 || end < 0) throw new Error(`${file} has no <script id="data"> block`)

await Bun.write(file, html.slice(0, start + open.length) + JSON.stringify(data) + html.slice(end))
console.log(`embedded ${data.pictures.length} pictures into ${file}`)
