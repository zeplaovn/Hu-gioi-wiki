/** Copy only explicitly mapped, public game art into wiki-owned WebP assets.
 * GAME_REPO=../Hu-gioi npm run sync:assets
 * Conversion: ImageMagick 7+ `magick` or ImageMagick 6 `convert`.
 */
import fs from 'node:fs'
import path from 'node:path'
import {spawnSync} from 'node:child_process'
import {fileURLToPath} from 'node:url'
import {ELEMENT_ART, MATERIAL_ART, MONSTER_ART} from '../src/lib/gameArtMap.js'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const gameRoot = path.resolve(process.env.GAME_REPO || path.resolve(repoRoot, '../Hu-gioi'))
const from = path.join(gameRoot, 'assets')
const into = path.join(repoRoot, 'assets/wiki/game')
const approved = new Set([...Object.values(ELEMENT_ART), ...Object.values(MATERIAL_ART), ...Object.values(MONSTER_ART)])
for (const world of ['ha_gioi', 'linh_gioi']) {
  for (const slot of ['sword', 'armor', world === 'ha_gioi' ? 'boots' : 'boot', 'pendant', 'ring']) {
    for (let tier = 1; tier <= 6; tier++) approved.add(`trang_bi/${world}/${slot}/${tier}.png`)
  }
}
if (!fs.existsSync(from)) throw new Error(`GAME_REPO thiếu thư mục assets: ${from}`)
const converter = ['magick', 'convert'].find(cmd => spawnSync(cmd, ['-version'], {stdio: 'ignore'}).status === 0)
if (!converter) throw new Error('Cần ImageMagick (magick/convert) để nén ảnh WebP')
const results = []
for (const rel of [...approved].sort()) {
  if (rel.includes('..') || path.isAbsolute(rel) || /hon_don|secret|spoiler|endgame/i.test(rel)) throw new Error(`Asset không hợp lệ: ${rel}`)
  const input = path.join(from, rel)
  if (!fs.existsSync(input)) {results.push({rel, status: 'missing'});continue}
  const output = path.join(into, rel.replace(/\.png$/i, '.webp'))
  fs.mkdirSync(path.dirname(output), {recursive: true})
  const argv = [input + '[0]', '-auto-orient', '-thumbnail', '256x256>', '-strip', '-quality', '82', output]
  const converted = spawnSync(converter, argv, {encoding: 'utf8'})
  if (converted.status !== 0) throw new Error(`${rel}: ${converted.stderr}`)
  results.push({rel, status: 'copied'})
}
const copied = results.filter(x => x.status === 'copied').length
console.log(`Đồng bộ ${copied}/${approved.size} ảnh WebP vào ${into}`)
const missing = results.filter(x => x.status === 'missing').map(x => x.rel)
if (missing.length) console.warn(`Nguồn không chứa ${missing.length} ảnh; các ô tương ứng không hiển thị:\n${missing.join('\n')}`)
if (!copied) process.exitCode = 1
