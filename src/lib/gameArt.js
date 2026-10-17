import {ELEMENT_ART, MATERIAL_ART, MONSTER_ART, gearSource} from './gameArtMap.js'
export {ELEMENT_ART, MATERIAL_ART, MONSTER_ART, gearSource}
const localArt = import.meta.glob('../../assets/wiki/game/**/*.webp', {eager: true, query: '?url', import: 'default'})
export const localArtUrl = path => path ? (localArt[`../../assets/wiki/game/${path.replace(/\.png$/i, '.webp')}`] ?? null) : null
export const elementArt = name => localArtUrl(ELEMENT_ART[String(name || '').split('+')[0]])
export const materialArt = name => localArtUrl(MATERIAL_ART[name])
export const monsterArt = name => localArtUrl(MONSTER_ART[name])
export const gearArt = row => localArtUrl(gearSource(row))
