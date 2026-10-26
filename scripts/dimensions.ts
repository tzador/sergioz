// Writes the pixel size of every picture to src/dimensions.json, so pages can
// reserve the right space (and show the thumbnail) before the full image arrives.
import { $ } from 'bun'

const output = await $`magick identify -format "%t %w %h\n" public/pictures/*.JPG`.text()
const dimensions = Object.fromEntries(
  output
    .trim()
    .split('\n')
    .map((line) => {
      const [id, width, height] = line.split(' ')
      return [id, [Number(width), Number(height)]]
    }),
)
const lines = Object.entries(dimensions).map(([id, size]) => `  ${JSON.stringify(id)}: ${JSON.stringify(size)}`)
await Bun.write('src/dimensions.json', `{\n${lines.join(',\n')}\n}\n`)
console.log(`wrote ${Object.keys(dimensions).length} picture sizes to src/dimensions.json`)
