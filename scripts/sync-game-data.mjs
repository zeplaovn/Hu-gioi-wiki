// Trích dữ liệu gameplay từ repo Hu-gioi sang src/content/gameData.js.
// Dùng:  GAME_REPO=../Hu-gioi node scripts/sync-game-data.mjs
// Nạp đúng thứ tự file như game (data -> idle_data -> map -> ha_gioi_fix) trong sandbox,
// nên số liệu đã bao gồm các bản vá cân bằng ở ha_gioi_fix.js.
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import {fileURLToPath} from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const repo = path.resolve(process.env.GAME_REPO || path.join(here, '../../Hu-gioi'))
const read = f => fs.readFileSync(path.join(repo, f), 'utf8')

const win = {}
const sandbox = {
  window: win, console, Math, Date, JSON, Object, Array, Set, Map, Number, String, Promise,
  localStorage: {getItem: () => null, setItem() {}}, performance: {now: () => 0}, setTimeout, fetch: () => {},
}
sandbox.globalThis = sandbox
vm.createContext(sandbox)
const run = (file, pre = '') => vm.runInContext(pre + read(file), sandbox, {filename: file})

run('src/game/core/data.js')
const TT = win.TT
const registered = []
TT.maps = {register: w => (registered.push(w), w)}
TT.Game = class {}
TT.Player = class {}
run('src/game/features/idle_data.js')
run('src/game/maps/ha_gioi.js')
run('src/game/features/ha_gioi_fix.js')
// sect.js cần TT.Game.prototype và DOM-free phần dữ liệu đầu file; nạp có bảo vệ.
try { run('src/game/features/sect.js') } catch (e) { console.warn('sect.js:', e.message) }

// Nhật ký + luật chính thức trong hộp "Hướng dẫn & Cập nhật" (src/ui/guide.js).
let guideDocs = {rules: [], log: []}
try {
  const g = read('src/ui/guide.js'), i = g.indexOf('TT.GUIDE_DOCS = ')
  if (i >= 0) {
    const end = g.indexOf('\n  };', i) + 5
    const box = {TT: {}}
    vm.runInNewContext(g.slice(i, end) + ';', box)
    guideDocs = box.TT.GUIDE_DOCS
  }
} catch (e) { console.warn('guide.js:', e.message) }

const pkg = JSON.parse(read('package.json'))
const ha = registered.find(w => w.id === 'ha_gioi')

const out = {
  gameVersion: pkg.version,
  stats: TT.STATS, statDesc: TT.STAT_DESC,
  races: Object.entries(TT.RACES).map(([name, [life, bonus]]) => ({name, life, bonus, trait: TT.RACE_TRAITS?.[name] || ''})),
  realms: TT.REALMS.map((n, i) => ({name: n, color: TT.REALM_COLORS[i]})),
  skills: Object.entries(TT.SKILLS).map(([name, s]) => ({name, ...s})),
  sects: Object.entries(TT.SECTS).map(([name, s]) => ({name, ...s})),
  sectRanks: TT.SECT_RANKS || [],
  items: Object.entries(TT.ITEMS).map(([name, s]) => ({name, ...s})),
  shop: TT.SHOP,
  quality: {names: TT.QN, mul: TT.QMUL, cut: TT.Q_CUT},
  mats: Object.entries(TT.MATS).map(([name, s]) => ({name, ...s})),
  alch: Object.entries(TT.ALCH).map(([name, [herbs, realm]]) => ({name, herbs, realm})),
  talis: Object.entries(TT.TALIS).map(([name, [shape, realm]]) => ({name, shape, realm})),
  gear: Object.entries(TT.GEAR).map(([name, g]) => ({name, mat: g.mat, realm: g.realm, power: g.power, hp: g.hp, exp: g.exp})),
  sellBase: TT.SELL_BASE,
  farm: {...TT.FARM, ripe: TT.RIPE},
  prog: TT.PROG,
  idle: TT.IDLE,
  elements: Object.entries(TT.ELEMENTS).map(([name, e]) => ({name, ...e})),
  rootTypes: TT.ROOT_TYPES,
  beats: TT.BEATS,
  temper: {max: TT.TEMPER_MAX, step: TT.TEMPER_STEP},
  secrets: TT.SECRETS,
  monstersByTier: TT.MONSTERS,
  world: {id: ha.id, name: ha.name, subtitle: ha.subtitle, desc: ha.desc, regions: ha.regions},
  guideDocs,
  needExp: Array.from({length: 82}, (_, i) => (i === 0 ? 0 : TT.needExp(i))),
}

const banner = '// FILE SINH TỰ ĐỘNG bởi scripts/sync-game-data.mjs từ repo Hu-gioi. Đừng sửa tay.\n'
fs.writeFileSync(path.join(here, '../src/content/gameData.js'), banner + 'export const game = ' + JSON.stringify(out) + '\n')
console.log('OK', {version: out.gameVersion, regions: out.world.regions.length, skills: out.skills.length, secrets: out.secrets.length, sectRanks: out.sectRanks.length, log: out.guideDocs.log?.length, rules: out.guideDocs.rules?.length})
