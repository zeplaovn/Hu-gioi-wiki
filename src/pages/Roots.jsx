import { useState } from 'react'
import { canon } from '../content/canonData.js'
import { elementArt } from '../lib/gameArt.js'
import { GameArt, Pill, SectionTitle, DataTable, SearchBox } from '../components/index.js'
import { filterRows } from '../lib/text.js'

function Roots() { const [q, setQ] = useState(''); const rows = filterRows(canon.rootTech, q); return <><SectionTitle eyebrow="Căn cơ" title="Linh căn, công pháp & pháp tắc">Linh căn quyết định nhịp tu luyện và hướng cộng hưởng; bảng synergy giữ đúng số liệu v1.2.</SectionTitle><div className="card-grid roots">{canon.roots.map((r, i) => <article className="root-card" key={r.name}><div><Pill>{r.spawn_pct}% xuất hiện</Pill><h3>{r.name}</h3><p>{r.identity}</p><small>Hệ số tu luyện ×{r.cultivation_mult} · {r.structure}</small></div></article>)}</div><div className="toolbar"><SearchBox value={q} onChange={setQ} /></div><DataTable rows={rows} columns={[{ key: 'root_element', label: 'Hệ', render: r => <span className="asset-cell"><GameArt src={elementArt(r.root_element)} alt={`Biểu tượng ${r.root_element}`} /><span>{r.root_element}</span></span> }, { key: 'technique', label: 'Công pháp' }, { key: 'recommended_laws', label: 'Pháp tắc khuyên dùng' }, { key: 'combat_focus', label: 'Build' }, { key: 'synergy', label: 'Cộng hưởng' }]} /></> }

export default Roots
