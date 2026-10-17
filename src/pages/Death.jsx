import { canon } from '../content/canonData.js'
import { AlertTriangle } from 'lucide-react'
import { Pill, SectionTitle, DataTable } from '../components/index.js'

function Death() { return <><SectionTitle eyebrow="Luật sinh tử" title="Tử vong, mất trắng & trùng sinh">Wiki phân biệt rõ safe defeat với lethal death. Chỉ death thật sự mới đóng kiếp hiện tại.</SectionTitle><div className="warning"><AlertTriangle /><div><b>Luật v1.2 đã chốt</b><p>Phi Thăng không kết thúc kiếp. Khi lethal death được xác nhận, tài sản vật lý của kiếp mất; Thiên Mệnh/meta account-level được giữ.</p></div></div><DataTable rows={canon.deathRules} columns={[{ key: 'content', label: 'Tình huống' }, { key: 'mode', label: 'Mode', render: r => <Pill tone={r.mode === 'Lethal' ? 'red' : 'jade'}>{r.mode}</Pill> }, { key: 'can_permadeath', label: 'Kết thúc kiếp?' }, { key: 'on_zero_hp', label: 'HP = 0' }, { key: 'notes', label: 'Ghi chú' }]} /></> }

export default Death
