import { useState } from 'react'
import { canon } from '../content/canonData.js'
import { gearArt } from '../lib/gameArt.js'
import { GameArt, Pill, SectionTitle, DataTable, SearchBox } from '../components/index.js'
import { money, filterRows } from '../lib/text.js'

function Equipment() { const [q, setQ] = useState(''); const rows = filterRows(canon.equipment, q); return <><SectionTitle eyebrow="Build" title="Trang bị, set & affix">Trang bị theo tier/slot; bonus set và biên affix tách riêng để dễ đối chiếu build.</SectionTitle><div className="set-grid">{canon.sets.map(s => <article key={s.name}><Pill>{s.world}</Pill><h3>{s.name}</h3><p>{s.bonuses}</p></article>)}</div><div className="toolbar"><SearchBox value={q} onChange={setQ} /></div><DataTable rows={rows} columns={[{ key: 'art', label: 'Ảnh', render: r => <GameArt src={gearArt(r)} alt={r.name} /> }, { key: 'name', label: 'Trang bị' }, { key: 'world', label: 'Giới' }, { key: 'rarity', label: 'Phẩm' }, { key: 'slot', label: 'Slot' }, { key: 'tier', label: 'Tier' }, { key: 'effect', label: 'Hiệu ứng' }, { key: 'price', label: 'Giá', render: r => money(r.price, r.currency) }, { key: 'source', label: 'Nguồn' }]} /><h2 className="subhead">Affix</h2><DataTable rows={canon.affixes} columns={[{ key: 'name', label: 'Affix' }, { key: 'stat', label: 'Stat' }, { key: 'min', label: 'Min', render: r => `${r.min}${r.unit}` }, { key: 'max', label: 'Max', render: r => `${r.max}${r.unit}` }, { key: 'slots', label: 'Slot' }, { key: 'note', label: 'Ghi chú' }]} /></> }

export default Equipment
