import { game } from '../content/wikiData.js'
import { Block, Shell, Tbl, RealmTag, Callout, sg } from '../components/GameDataUI.jsx'
import GameSnapshot from './GameSnapshot.jsx'

function SkillsPage() {
  const skills = [...game.skills].sort((a, b) => a.realm - b.realm || a.cost - b.cost)
  const effect = s => [s.exp && `Tu luyện ${sg(s.exp)}`, s.power && `Chiến lực +${s.power}`, s.hp && `Khí huyết +${s.hp}`].filter(Boolean).join(', ')
  return <Shell>
    <Block i={0} title="Công pháp" note="Học bằng linh thạch khi đủ cảnh giới. Hiệu ứng của các công pháp đã học cộng dồn với nhau.">
      <Tbl head={['Công pháp', 'Giá', 'Cảnh giới tối thiểu', 'Hiệu ứng']} rows={skills.map(s => [s.name, `${s.cost.toLocaleString('vi-VN')} linh thạch`, <RealmTag key={s.name} i={s.realm} />, effect(s)])} />
    </Block>
    <Block i={1} title="Pháp khí" note="Rèn bằng Quặng Linh Thiết. Chỉ số dưới đây là mức gốc; thành phẩm nhân với hệ số phẩm chất (Hạ ×1,0 đến Cực ×1,9).">
      <Tbl head={['Pháp khí', 'Quặng cần', 'Cảnh giới tối thiểu', 'Chiến lực', 'Khí huyết', 'Tu luyện']} rows={game.gear.map(g => [g.name, g.mat, <RealmTag key={g.name} i={g.realm} />, g.power || '—', g.hp || '—', g.exp ? sg(g.exp) : '—'])} />
      <Callout>Ba pháp khí đầu (Phi Kiếm, Pháp Bào, Linh Giới) có từ Phàm Nhân / Luyện Khí; năm pháp khí còn lại là hàng hậu kỳ từ Nguyên Anh trở lên. Mô tả trong game có thể gộp nhiều chỉ số vào một dòng.</Callout>
    </Block>
  </Shell>
}
export default function Skills() { return <GameSnapshot title="Công pháp & pháp khí"><SkillsPage /></GameSnapshot> }
