import { useState } from 'react'
import { canon } from '../content/canonData.js'
import { Sparkles } from 'lucide-react'
import { SectionTitle, DataTable, SearchBox } from '../components/index.js'
import { money, filterRows } from '../lib/text.js'

function Destiny() { const [q, setQ] = useState(''); const rows = filterRows(canon.destinyShop, q); return <><SectionTitle eyebrow="Meta progression" title="Thiên Mệnh Các">TM thuộc account progression. Vật phẩm mua bằng TM vẫn là vật phẩm vật lý nếu bảng death_rule ghi như vậy.</SectionTitle><div className="callout"><Sparkles /><p><b>Nhận TM:</b> +1 cho mỗi breakthrough milestone thành công được hệ progression xác nhận. Phi Thăng không tự cộng bonus TM riêng.</p></div><div className="toolbar"><SearchBox value={q} onChange={setQ} /></div><DataTable rows={rows} columns={[{ key: 'name', label: 'Mục' }, { key: 'type', label: 'Loại' }, { key: 'cost', label: 'Giá', render: r => money(r.cost, r.currency) }, { key: 'effect', label: 'Hiệu ứng' }, { key: 'limit', label: 'Giới hạn' }, { key: 'scope', label: 'Scope' }, { key: 'death_rule', label: 'Khi chết' }]} /></> }

export default Destiny
