// Công thức thuần, đối chiếu với Hu-gioi/src/game/core/player.js + features/ha_gioi_fix.js (bản vá cuối cùng).
// Kiểm chứng bằng `npm run verify` (so sánh trực tiếp với lớp Player thật của game).
import {game} from '../content/gameData.js'

const C = game.prog.CHANCE
const PILL_CAP = 0.30          // ha_gioi_fix.js: p.pill luôn bị kẹp ≤ 0,30
const CHANCE_CAP = 0.88        // ha_gioi_fix.js: Math.min(0.88, C.MAX)
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))

export const levelOf = (realm, tang) => realm * 9 + tang
export const needExp = level => game.needExp[level]

/** big = tầng 9 (đại đột phá). ratio = tu vi hiện có / tu vi cần (≥ 1 khi đủ điều kiện). */
export function breakChance({realm, tang, ngoTinh, vanKhi, pill = 0, linh = false, ratio = 1}) {
  const big = tang === 9
  let c = C.BASE + ngoTinh * C.NT + vanKhi * C.VK - realm * C.R
    + Math.min(PILL_CAP, Math.max(0, pill)) + (big ? C.BIG_PEN : C.MINOR)
  if (linh) c += 0.03
  c += Math.min(0.10, Math.max(0, ratio - 1) * 0.20)
  return clamp(c, C.MIN, Math.min(CHANCE_CAP, C.MAX))
}

/** Tỉ lệ tu vi còn lại sau khi đột phá thất bại. rootKeep = phần giữ thêm của linh căn (0 – 0,10). */
export function failKeep({tang, ratio = 1, rootKeep = 0}) {
  const big = tang === 9
  const normal = (big ? 0.55 : 0.65) + rootKeep
  return Math.min(0.95 / Math.max(1, ratio), normal, 0.80)
}

/** Tu vi nhận được mỗi tháng nhập định (giá trị trung bình, đã gồm hệ số tốc độ chung). */
export function monthGain({level, canCot, ngoTinh, expBonus = 0}) {
  const base = 4 + canCot * 1.5 + ngoTinh * 2 + level * 1.5
  return base * (1 + expBonus) * game.prog.SPEED * 1.05
}

/** 1 tháng game = MONTH_TICKS nhịp, 1 nhịp = TICK_MS ms. */
export const secondsPerMonth = () => game.idle.MONTH_TICKS * game.idle.TICK_MS / 1000

export function fmtDuration(sec) {
  sec = Math.round(sec)
  if (sec < 60) return `${sec} giây`
  if (sec < 3600) return `${Math.floor(sec / 60)} phút ${sec % 60} giây`
  const h = Math.floor(sec / 3600), m = Math.round(sec % 3600 / 60)
  if (h < 48) return `${h} giờ ${m} phút`
  return `${Math.floor(h / 24)} ngày ${h % 24} giờ`
}
