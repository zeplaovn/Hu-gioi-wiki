import { game } from '../content/wikiData.js'
import { Block, Shell } from '../components/GameDataUI.jsx'
import GameSnapshot from './GameSnapshot.jsx'

function UpdatesPage() {
  const { log, rules } = game.guideDocs
  return <Shell>
    <Block i={0} title="Nhật ký cập nhật" note={`Phiên bản snapshot gameData: ${game.gameVersion} (theo package.json).`}>
      <div className="space-y-5">{log.map(([date, lines]) => <div key={date} className="grid gap-3 md:grid-cols-[110px_1fr]">
        <div className="font-serif text-xl text-jade">{date}</div>
        <ul className="space-y-2 text-sm leading-7 text-slate-300">{lines.map((l, i) => <li key={i} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" /><span>{l}</span></li>)}</ul></div>)}</div>
    </Block>
    <Block i={1} title="Quy tắc trong snapshot" note="[CẦN XÁC MINH] Trích từ Hướng dẫn của game tại thời điểm sync; nội dung không thay thế luật canon.">
      <div className="space-y-4">{rules.filter(([t]) => !t.includes('Thiên Mệnh')).map(([t, d]) => <div key={t} className="rounded-xl border border-line/50 p-4"><b className="font-serif text-lg">{t}</b><p className="mt-1 text-sm leading-7 text-slate-300">{d}</p></div>)}</div>
    </Block>

    <Block i={3} title="Lộ trình công khai" note="Kế hoạch dự kiến không được ghi như tính năng đã phát hành.">
      <a href="roadmap.html" className="inline-block rounded-xl border border-jade/40 px-4 py-2 text-sm text-jade hover:bg-jade/10">Mở roadmap công khai →</a>
    </Block>
  </Shell>
}
export default function Updates() { return <GameSnapshot title="Thiên Biến & Nhật ký cập nhật"><UpdatesPage /></GameSnapshot> }
