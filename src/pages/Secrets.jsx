import { game } from '../content/wikiData.js'
import { Block, Shell, Tbl, RealmTag } from '../components/GameDataUI.jsx'
import GameSnapshot from './GameSnapshot.jsx'

function SecretsPage() {
  const el = n => game.elements.find(e => e.name === n)
  return <Shell>
    <Block i={0} title="Danh sách bí cảnh" note="Thời gian là số giây thật mỗi chuyến. “Địch tầng 1” là chiến lực địch ở tầng đầu; hệ số thưởng càng cao thì thưởng càng lớn.">
      <Tbl head={['Bí cảnh', 'Nguyên tố', 'Cảnh giới tối thiểu', 'Số tầng', 'Thời gian', 'Địch tầng 1', 'Hệ số thưởng', 'Mô tả']}
        rows={game.secrets.map(x => [x.name, <span key="e" style={{ color: el(x.el)?.color }}>{x.el}</span>, <RealmTag key="r" i={x.realm} />, x.floors, `${x.dur} giây`, x.pw, `×${String(x.xp).replace('.', ',')}`, x.desc])} />
    </Block>
    <Block i={1} title="Cách một chuyến thám hiểm diễn ra">
      <ul className="space-y-2 text-[15px] leading-7">{[
        'Chiến lực địch ở tầng f = chiến lực tầng 1 × (1 + 0,2 × (f − 1)); Thủ Lĩnh ở tầng cuối mạnh gấp 1,5 lần.',
        'Chiến lực của bạn được nhân với (1 + tương khắc nguyên tố); xem trang Linh Căn Phổ.',
        'Mỗi tầng giao tranh theo từng hiệp; chí mạng nhân 1,6, né tránh có thể bỏ qua một đòn.',
        'Nếu khí huyết xuống dưới 30% tối đa trước một tầng, bạn tự rút lui và giữ phần đã phá.',
        'Nếu bị đánh bại, khí huyết còn lại 10% tối đa.',
        'Trang bị tốt, linh căn khắc nguyên tố bí cảnh và phòng ngự cao đều giúp phá được nhiều tầng hơn.'
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" /><span>{t}</span></li>)}</ul>
    </Block>
  </Shell>
}
export default function Secrets() { return <GameSnapshot title="Bí cảnh"><SecretsPage /></GameSnapshot> }
