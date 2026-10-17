import { npcOthers, sectRanks } from '../content/wikiData.js'
import { Tbl } from './GameDataUI.jsx'
export function NpcOthers() {
  return <div className="mt-8 rounded-2xl border border-line/60 p-5">
    <h2 className="font-serif text-2xl">Những người khác trên đường</h2>
    <p className="mt-2 text-sm leading-6 text-mist">Các nhân vật dưới đây có tên và nơi xuất hiện trong dữ liệu bản đồ; vai trò và tiểu sử chưa được công bố nên giữ [CẦN XÁC MINH].</p>
    <div className="mt-4"><Tbl head={['Tên', 'Nơi xuất hiện', 'Cảnh giới vực']} rows={npcOthers.map(n => [n.name, n.place, n.realm])} /></div>
  </div>
}

export function SectRanks() {
  return <div className="rounded-2xl border border-line/60 p-5">
    <h2 className="font-serif text-2xl">Chức vị trong tông môn</h2>
    <p className="mt-2 text-sm leading-6 text-mist">Chức vị tăng theo tổng cống hiến đã kiếm được (tiêu cống hiến không làm tụt chức). Lương nhân với hệ số chức vị; mỗi bậc mở thêm tầng nhiệm vụ.</p>
    <div className="mt-4"><Tbl head={['Chức vị', 'Cống hiến cần', 'Thưởng tu luyện', 'Hệ số lương', 'Bậc nhiệm vụ']} rows={sectRanks.map(r => [r.name, r.at, r.exp ? sg(r.exp) : '—', `×${String(r.stipend).replace('.', ',')}`, r.tier])} /></div>
  </div>
}
