import { canon } from '../content/canonData.js'
import { AlertTriangle } from 'lucide-react'
import { Pill, SectionTitle } from '../components/index.js'

function Canon() { return <><SectionTitle eyebrow="Nguồn dữ liệu" title="Canon v1.2 & Open Decisions">Trang này giúp phân biệt luật đã chốt với phần kỹ thuật/balance còn để mở.</SectionTitle><div className="canon-grid">{canon.canonRules.map(r => <article key={r.title}><Pill>ĐÃ CHỐT</Pill><h3>{r.title}</h3><p>{r.text}</p></article>)}</div><section className="open-box"><div className="row"><AlertTriangle /><div><div className="eyebrow">Không tự suy diễn</div><h2>Open Decisions</h2></div></div><ol>{canon.openDecisions.map(x => <li key={x}>{x}</li>)}</ol></section><div className="source-note"><b>Nguồn hiện hành:</b> {canon.meta.source} · cập nhật {canon.meta.updated}. Các bảng dữ liệu được chuyển trực tiếp từ CSV trong gói FINAL.</div></> }

export default Canon
