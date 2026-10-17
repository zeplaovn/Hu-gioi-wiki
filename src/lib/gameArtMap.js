/** Verified public artwork paths, relative to Hu-gioi/assets. No hidden-story assets. */
export const ELEMENT_ART = {
  Kim: 'cong_phap/ha_giai/sword_rain.png',
  Thủy: 'cong_phap/ha_giai/water_palm.png',
  Hỏa: 'cong_phap/ha_giai/flame_wings.png',
  Thổ: 'cong_phap/ha_giai/earth_crush.png',
  Băng: 'cong_phap/ha_giai/frost_lotus.png',
  Lôi: 'cong_phap/ha_giai/thunder_dragon.png',
  Phong: 'cong_phap/ha_giai/wind_blade.png',
  Ám: 'cong_phap/ha_giai/soul_eye.png',
  Quang: 'cong_phap/ha_giai/star_chart.png'
}
export const MATERIAL_ART = {
  'Quặng Linh Thiết': 'farm/nguyen_lieu/spirit_iron_ore.png',
  'Yêu Đan': 'farm/nguyen_lieu/beast_core.png'
}
export const MONSTER_ART = {
  'Hắc Lang': 'monster/ha_gioi/wolf/idle/1.png',
  'Thiết Giáp Hùng': 'monster/ha_gioi/bear/idle/1.png',
  'Thanh Giao': 'monster/ha_gioi/dragon/idle/1.png',
  'Kim Giáp Tiên Vệ': 'monster/tien_gioi/armored_halberd_warrior/idle/1.png'
}
const SLOT_HA = { 'Vũ khí': 'sword', 'Pháp bào': 'armor', 'Giày': 'boots', 'Hộ phù': 'pendant', 'Pháp giới': 'ring' }
const SLOT_LINH = { 'Vũ khí': 'sword', 'Pháp bào': 'armor', 'Giày': 'boot', 'Hộ phù': 'pendant', 'Pháp giới': 'ring' }
export const gearSource = row => {
  if (row.world === 'Hạ Giới' && SLOT_HA[row.slot] && row.tier >= 1 && row.tier <= 6) return `trang_bi/ha_gioi/${SLOT_HA[row.slot]}/${row.tier}.png`
  if (row.world === 'Linh Giới' && SLOT_LINH[row.slot] && row.tier - 4 >= 1 && row.tier - 4 <= 6) return `trang_bi/linh_gioi/${SLOT_LINH[row.slot]}/${row.tier - 4}.png`
  return null
}
