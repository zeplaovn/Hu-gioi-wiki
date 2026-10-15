// So sánh src/lib/formulas.js với lớp Player thật của game (đã áp bản vá ha_gioi_fix.js).
// Dùng:  GAME_REPO=../Hu-gioi node scripts/verify-formulas.mjs
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import {fileURLToPath} from 'node:url'
import {breakChance, failKeep, monthGain, levelOf, needExp} from '../src/lib/formulas.js'

const here = path.dirname(fileURLToPath(import.meta.url))
const repo = path.resolve(process.env.GAME_REPO || path.join(here, '../../Hu-gioi'))
const sandbox = {console, Math, Date, JSON, Object, Array, Set, Map, Number, String, Promise,
  localStorage: {getItem: () => null, setItem() {}}, performance: {now: () => 0}, setTimeout, fetch: () => {}}
sandbox.window = {}; sandbox.globalThis = sandbox
vm.createContext(sandbox)
const run = f => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8'), sandbox, {filename: f})
run('src/game/core/data.js'); const TT = sandbox.window.TT
TT.maps = {register: w => w}; TT.Game = class {}
run('src/game/features/idle_data.js'); run('src/game/core/player.js'); run('src/game/features/ha_gioi_fix.js')

let bad = 0, n = 0
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1))
for (let i = 0; i < 2000; i++) {
  const realm = rnd(0, 8), tang = rnd(1, 9), level = levelOf(realm, tang)
  const need = needExp(level), ratio = 1 + Math.random() * 0.8
  const race = ['Nhân', 'Linh', 'Ma'][rnd(0, 2)]
  const root = TT.cleanRoot({els: [['Kim', 'Mộc', 'Thủy', 'Hỏa', 'Thổ'][rnd(0, 4)]]})
  const p = Object.create(TT.Player.prototype)
  Object.assign(p, {race, root, realm, tang, exp: need * ratio, pill: Math.random() * 0.5, skills: [], gear: {}, temper: {}, sect: null,
    stats: {'Căn Cốt': rnd(1, 30), 'Ngộ Tính': rnd(1, 30), 'Vận Khí': rnd(1, 30), 'Phúc Duyên': 5, 'Tướng Mạo': 5}})
  const big = tang === 9
  const a = p.breakChance(big), b = breakChance({realm, tang, ngoTinh: p.stats['Ngộ Tính'], vanKhi: p.stats['Vận Khí'], pill: p.pill, linh: race === 'Linh', ratio: p.exp / need})
  const fa = p.failKeep(big), fb = failKeep({tang, ratio: p.exp / need, rootKeep: TT.rootInfo(root).keep})
  const base = p.monthGain(), eb = p.exp_mult() - 1 - (race === 'Nhân' ? 0.08 : 0) // expParts đã gồm Thích Nghi (Nhân)
  const ma = base, mb = monthGain({level, canCot: p.stats['Căn Cốt'], ngoTinh: p.stats['Ngộ Tính'], expBonus: p.exp_mult() - 1})
  n++
  for (const [name, x, y] of [['breakChance', a, b], ['failKeep', fa, fb], ['monthGain', ma, mb]])
    if (Math.abs(x - y) > 1e-9) { if (bad++ < 5) console.log('LỆCH', name, {realm, tang, race, x, y}) }
}
console.log(bad ? `THẤT BẠI: ${bad} lệch / ${n * 3} phép so` : `OK: ${n} ca ngẫu nhiên, 3 công thức khớp 100% với game`)
process.exit(bad ? 1 : 0)
