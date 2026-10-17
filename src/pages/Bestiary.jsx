import { useState } from 'react'
import { canon } from '../content/canonData.js'
import { monsterArt } from '../lib/gameArt.js'
import { GameArt, Pill, SectionTitle, DataTable, SearchBox } from '../components/index.js'
import { normalize, filterRows } from '../lib/text.js'

function Bestiary() { const [q, setQ] = useState(''); const rows = filterRows(canon.monsters.filter(m => m.realm !== 'Endgame' && !normalize(m.type).includes('cot truyen')), q); const mapped = rows.filter(m => monsterArt(m.name)); return <><SectionTitle eyebrow="Đồ lục" title="Yêu thú & boss">Danh mục công khai theo giới, cảnh giới và loại encounter. Chỉ những tên có đối chiếu trực tiếp được với thư mục asset công khai mới gắn ảnh.</SectionTitle>{mapped.length > 0 && <div className="monster-preview">{mapped.map(m => <article key={m.name}><GameArt src={monsterArt(m.name)} alt={m.name} size={96} /><div><Pill tone={m.type.toLowerCase().includes('boss') ? 'red' : 'jade'}>{m.type}</Pill><h3>{m.name}</h3><p>{m.world} · {m.realm}</p></div></article>)}</div>}<div className="source-note asset-note">Ảnh đã đồng bộ trong wiki từ repo game <b>Hu-gioi</b>. Các quái chưa nhận diện đủ chắc chắn vẫn để trống thay vì gán ảnh gần giống.</div><div className="toolbar"><SearchBox value={q} onChange={setQ} /></div><DataTable rows={rows} columns={[{ key: 'art', label: 'Ảnh', render: r => <GameArt src={monsterArt(r.name)} alt={r.name} /> }, { key: 'name', label: 'Tên' }, { key: 'world', label: 'Giới' }, { key: 'realm', label: 'Cảnh giới' }, { key: 'type', label: 'Loại', render: r => <Pill tone={r.type.toLowerCase().includes('boss') ? 'red' : 'jade'}>{r.type}</Pill> }]} /></> }

export default Bestiary
