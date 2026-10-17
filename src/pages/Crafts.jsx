import { game } from '../content/wikiData.js'
import { Block, Shell, Tbl, RealmTag, pc } from '../components/GameDataUI.jsx'
import { SectRanks } from '../components/GameExtras.jsx'
import GameSnapshot from './GameSnapshot.jsx'

function CraftsPage() {
  const q = game.quality
  const quality = q.names.map((n, i) => [n, `×${String(q.mul[i]).replace('.', ',')}`, i === 0 ? `dưới ${pc(q.cut[0])}` : i === q.names.length - 1 ? `từ ${pc(q.cut[3])}` : `${pc(q.cut[i - 1])} – dưới ${pc(q.cut[i])}`])
  const f = game.farm
  const sell = game.sellBase
  const herb = game.alch.map(a => [a.name, `${a.herbs} Linh Thảo`, <RealmTag key={a.name} i={a.realm} />, `${sell[a.name]} linh thạch`])
  const talis = {
    'Cường Lực Phù': 'Trận kế tiếp: chiến lực +8 × hệ số phẩm',
    'Hộ Thân Phù': 'Trận kế tiếp: giảm 30% × hệ số phẩm sát thương khi bị thương (tối đa 85%)',
    'Phá Cảnh Phù': '+5% × hệ số phẩm tỉ lệ đột phá lần tới'
  }
  return <Shell>
    <Block i={0} title="Phẩm chất" note="Mỗi nghề có nhiều công đoạn; điểm tổng quyết định phẩm chất thành phẩm. Dưới 30% là thất bại và game báo công đoạn kém nhất. Luyện khí thất bại được hoàn lại một nửa quặng.">
      <Tbl head={['Phẩm', 'Hệ số hiệu quả', 'Điểm tổng']} rows={quality} />
    </Block>
    <Block i={1} title="Linh điền" note={`Bạn có 4 ô đất. Một “tháng linh điền” bằng ${f.STEP_S} giây thật; Linh Thảo chín sau ${f.ripe} tháng, khoảng ${f.ripe} phút thật. Hạt Linh Thảo giá gốc ${game.mats[0].cost} linh thạch.`}>
      <ul className="space-y-2 text-[15px] leading-7">{[
        'Khi bạn có mặt, mỗi tháng linh điền nước giảm 34% và đất giảm 8%; cây có 10% xác suất bị sâu bệnh mỗi tháng.',
        'Cây chỉ tích điểm sinh trưởng khi còn nước và không sâu bệnh; đất tốt (từ 40%) cho thêm 25%.',
        'Cây héo nếu khô nước 3 tháng liên tiếp hoặc để quá 14 tháng.',
        `Khi bạn vắng mặt (hai lần đồng bộ cách nhau hơn ${f.AWAY_MS / 1000} giây), cây vẫn lớn đến lúc chín rồi dừng chờ; không sâu bệnh, khô hạn hay héo.`
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" /><span>{t}</span></li>)}</ul>
    </Block>
    <Block i={2} title="Luyện đan" note="Bốn công đoạn: Sơ luyện, Tinh luyện, Dung hợp, Ngưng đan. Chất lượng Linh Thảo đầu vào ảnh hưởng kết quả.">
      <Tbl head={['Đan', 'Nguyên liệu', 'Cảnh giới tối thiểu', 'Giá bán gốc']} rows={herb} />
    </Block>
    <Block i={3} title="Vẽ phù lục" note="Mỗi lá phù cần 1 Giấy Phù. Kéo bút theo phù văn và truyền linh lực đúng lúc.">
      <Tbl head={['Phù', 'Cảnh giới tối thiểu', 'Tác dụng', 'Giá bán gốc']} rows={game.talis.map(t => [t.name, <RealmTag key={t.name} i={t.realm} />, talis[t.name] || '', `${sell[t.name]} linh thạch`])} />
    </Block>
    <Block i={4} title="Luyện khí" note="Nung quặng, tôi luyện bằng búa, khắc trận văn. Chi tiết chỉ số pháp khí ở trang Tàng Kinh Các.">
      <Tbl head={['Pháp khí', 'Quặng cần', 'Giá bán gốc']} rows={game.gear.map(g => [g.name, `${g.mat} Quặng Linh Thiết`, `${sell[g.name]} linh thạch`])} />
    </Block>
  </Shell>
}
export default function Crafts() { return <GameSnapshot title="Nghề phụ"><CraftsPage /><SectRanks /></GameSnapshot> }
