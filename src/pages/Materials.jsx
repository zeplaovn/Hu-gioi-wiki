import { useState } from 'react'
import { canon } from '../content/canonData.js'
import { materialArt } from '../lib/gameArt.js'
import { GameArt, SectionTitle, DataTable, SearchBox } from '../components/index.js'
import { money, filterRows } from '../lib/text.js'

function Materials() { const [q, setQ] = useState(''); const rows = filterRows(canon.materials, q); return <><SectionTitle eyebrow="Crafting" title="Nguyên liệu">Nguồn farm, mục đích dùng, giá trị cơ sở và quyền giao dịch.</SectionTitle><div className="toolbar"><SearchBox value={q} onChange={setQ} /></div><DataTable rows={rows} columns={[{ key: 'art', label: 'Ảnh', render: r => <GameArt src={materialArt(r.name)} alt={r.name} /> }, { key: 'name', label: 'Tên' }, { key: 'world', label: 'Giới' }, { key: 'rarity', label: 'Độ hiếm' }, { key: 'use', label: 'Dùng cho' }, { key: 'source', label: 'Nguồn' }, { key: 'base_value', label: 'Giá trị', render: r => money(r.base_value, r.currency) }, { key: 'trade', label: 'Giao dịch' }]} /></> }

export default Materials
