import { useState } from 'react'
import { game } from '../content/wikiData.js'
import { Block, Shell, rn, rc } from '../components/GameDataUI.jsx'
import { NpcOthers } from '../components/GameExtras.jsx'
import GameSnapshot from './GameSnapshot.jsx'

const Danger = ({ v }) => <div className="flex items-center gap-1" aria-label={`Nguy hiểm ${v} trên 8`}>{Array.from({ length: 9 }, (_, i) => <span key={i} className={`h-2 w-4 rounded-sm ${i < v ? 'bg-seal' : 'bg-black/15 dark:bg-white/10'}`} />)}<span className="ml-2 text-xs text-mist">{v}/8</span></div>

function WorldPage() {
  const [sel, setSel] = useState(0)
  const reg = game.world.regions[sel]
  return <Shell>
    <Block i={0} title="Cửu vực Hạ Giới" note="Chọn một vực để xem địa điểm, quái, tài nguyên và nhân vật. Bạn chỉ vào được vực khi đạt cảnh giới tối thiểu.">
      <div className="flex flex-wrap gap-2" role="tablist">{game.world.regions.map((r, i) =>
        <button key={r.id} role="tab" aria-selected={i === sel} onClick={() => setSel(i)}
          className={`rounded-xl border px-3 py-2 text-sm ${i === sel ? 'border-jade/60 bg-jade/10 text-jade' : 'border-line/60 hover:border-jade/40'}`}>
          <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{ background: rc(r.realm) }} />{r.name}</button>)}</div>
      <div className="mt-5 rounded-2xl border border-line/60 p-5" style={{ boxShadow: `inset 0 3px 0 ${rc(reg.realm)}` }}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div><div className="text-xs font-bold uppercase tracking-[.16em]" style={{ color: rc(reg.realm) }}>Mở từ {rn(reg.realm)} · {reg.biome}</div>
            <h3 className="mt-1 font-serif text-3xl">{reg.name}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">{reg.desc}</p></div>
          <div className="space-y-2 text-sm"><div><span className="text-mist">Hệ số thưởng: </span><b>×{reg.reward.toFixed(2).replace('.', ',')}</b></div><Danger v={reg.danger} /></div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{reg.sites.map(s =>
          <div key={s.id} className="rounded-xl border border-line/50 p-4">
            <div className="flex items-baseline justify-between gap-2"><h4 className="font-serif text-xl">{s.name}</h4><span className="text-[11px] uppercase tracking-widest text-gold">{s.kind}</span></div>
            <p className="mt-2 text-sm leading-6 text-slate-300">{s.desc}</p>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div><dt className="inline text-mist">Quái: </dt><dd className="inline">{s.monsters.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Tài nguyên: </dt><dd className="inline">{s.resources.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Nhân vật: </dt><dd className="inline">{s.npcs.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Thưởng / nguy hiểm: </dt><dd className="inline">×{s.reward.toFixed(2).replace('.', ',')} · {s.danger}</dd></div>
            </dl></div>)}</div>
      </div>
    </Block>

  </Shell>
}
export default function Atlas() { return <GameSnapshot title="Địa đồ"><WorldPage /><NpcOthers /></GameSnapshot> }
