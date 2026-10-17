import { useMemo, useState } from 'react'
import { game } from '../content/wikiData.js'
import { Block, Shell, Tbl, RealmTag, Callout, rn, pc } from '../components/GameDataUI.jsx'
import { breakChance, failKeep, monthGain, levelOf, needExp, secondsPerMonth, fmtDuration } from '../lib/formulas.js'
import GameSnapshot from './GameSnapshot.jsx'

const Field = ({ label, hint, children }) => <label className="block text-sm"><span className="font-semibold">{label}</span>{hint && <span className="ml-2 text-xs text-mist">{hint}</span>}<div className="mt-1">{children}</div></label>
const inp = 'w-full rounded-lg border border-line/60 bg-panel/80 text-white px-3 py-2 text-sm outline-none focus:border-jade'

function BreakthroughPage() {
  const [s, setS] = useState({ realm: 2, tang: 5, ngoTinh: 10, vanKhi: 8, canCot: 10, pill: 0, expBonus: 30, linh: false, rootKeep: 0, ratio: 100 })
  const set = (k, v) => setS(o => ({ ...o, [k]: v }))
  const num = (k, min, max) => e => set(k, Math.max(min, Math.min(max, Number(e.target.value) || 0)))
  const r = useMemo(() => {
    const level = levelOf(s.realm, s.tang), need = needExp(level), ratio = Math.max(1, s.ratio / 100), big = s.tang === 9
    const gain = monthGain({ level, canCot: s.canCot, ngoTinh: s.ngoTinh, expBonus: s.expBonus / 100 })
    const months = need / gain
    return {
level, need, big, gain, months,
      chance: breakChance({ realm: s.realm, tang: s.tang, ngoTinh: s.ngoTinh, vanKhi: s.vanKhi, pill: s.pill / 100, linh: s.linh, ratio }),
      keep: failKeep({ tang: s.tang, ratio, rootKeep: s.rootKeep / 100 }), exp: need * ratio, ratio,
      trib: big && s.realm + 1 >= 3, strikes: 3 + ((s.realm + 1) >> 1)
}
  }, [s])
  const C = game.prog.CHANCE
  const needRows = game.realms.map((x, i) => [<RealmTag key={i} i={i} />, needExp(i * 9 + 1).toLocaleString('vi-VN'), needExp(i * 9 + 9).toLocaleString('vi-VN'), i === 0 ? '—' : `+${game.prog.LIFE[i]} năm`])
  return <Shell>
    <Block i={0} title="Máy tính đột phá" note="Nhập chỉ số của bạn để xem tỉ lệ thành công, phần tu vi giữ lại khi hỏng và thời gian thực tế để đầy tu vi. Kết quả là giá trị kỳ vọng, không phải lời hứa: mỗi lần thử vẫn là một lần gieo.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Field label="Cảnh giới"><select className={inp} value={s.realm} onChange={e => set('realm', +e.target.value)}>{game.realms.map((x, i) => <option key={i} value={i}>{x.name}</option>)}</select></Field>
        <Field label="Tầng" hint="tầng 9 = đại đột phá"><select className={inp} value={s.tang} onChange={e => set('tang', +e.target.value)}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => <option key={t} value={t}>Tầng {t}</option>)}</select></Field>
        <Field label="Tu vi hiện có / tu vi cần" hint="% — từ 100 trở lên"><input type="number" className={inp} value={s.ratio} onChange={num('ratio', 100, 300)} /></Field>
        <Field label="Ngộ Tính"><input type="number" className={inp} value={s.ngoTinh} onChange={num('ngoTinh', 1, 80)} /></Field>
        <Field label="Vận Khí"><input type="number" className={inp} value={s.vanKhi} onChange={num('vanKhi', 1, 80)} /></Field>
        <Field label="Căn Cốt" hint="dùng cho thời gian tu"><input type="number" className={inp} value={s.canCot} onChange={num('canCot', 1, 80)} /></Field>
        <Field label="Cộng dồn đan / phù đột phá" hint="% — tối đa 30"><input type="number" className={inp} value={s.pill} onChange={num('pill', 0, 100)} /></Field>
        <Field label="Tổng tăng tốc tu luyện" hint="% — linh căn, công pháp, tông môn…"><input type="number" className={inp} value={s.expBonus} onChange={num('expBonus', -50, 300)} /></Field>
        <Field label="Giữ thêm tu vi từ linh căn" hint="% — Tam 3, Tứ 6, Ngũ 10"><input type="number" className={inp} value={s.rootKeep} onChange={num('rootKeep', 0, 10)} /></Field>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={s.linh} onChange={e => set('linh', e.target.checked)} /> Chủng tộc Linh (+3% đột phá)</label>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-jade/30 bg-jade/5 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-jade">Tỉ lệ thành công</div><div className="mt-2 font-serif text-5xl text-jade">{pc(r.chance, 1)}</div><div className="mt-1 text-xs text-mist">Cấp {r.level} · {r.big ? 'đại đột phá' : 'đột phá tầng nhỏ'}</div></div>
        <div className="rounded-2xl border border-line/60 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-gold">Nếu thất bại</div><div className="mt-2 font-serif text-3xl">Giữ {pc(r.keep, 0)} tu vi</div><div className="mt-1 text-xs text-mist">≈ {Math.round(r.exp * r.keep).toLocaleString('vi-VN')} / {r.need.toLocaleString('vi-VN')} tu vi cần; còn mất khí huyết và tiêu hết cộng dồn đan/phù.</div></div>
        <div className="rounded-2xl border border-line/60 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-sky">Thời gian đầy tu vi</div><div className="mt-2 font-serif text-3xl">{fmtDuration(r.months * secondsPerMonth())}</div><div className="mt-1 text-xs text-mist">≈ {Math.round(r.months)} tháng nhập định × {secondsPerMonth()} giây, tính từ 0 tu vi, chưa tính vắng mặt.</div></div>
      </div>
      {r.trib && <Callout><b>Thiên Kiếp:</b> đại đột phá lên {rn(s.realm + 1)} phải qua khoảng {r.strikes} đạo lôi. Khí huyết về 0 là chết, nên hãy nghỉ ngơi đầy khí huyết trước khi bấm.</Callout>}
      {s.realm === 8 && s.tang === 9 && <Callout>[CẦN XÁC MINH] Thời điểm chuyển giới và kết quả đột phá của phiên bản game triển khai cần đối chiếu. Phi Thăng không kết thúc kiếp (canon).</Callout>}
    </Block>
    <Block i={1} title="Quy tắc đột phá">
      <ul className="space-y-2 text-[15px] leading-7">{[
        `Tỉ lệ = ${C.BASE * 100}% + Ngộ Tính × ${pc(C.NT, 1)} + Vận Khí × ${pc(C.VK, 1)} − cảnh giới × ${pc(C.R, 1)} + cộng dồn đan/phù (tối đa 30%) + (tầng nhỏ +${C.MINOR * 100}%, đại đột phá −${Math.abs(C.BIG_PEN) * 100}%) + 3% nếu chủng tộc Linh + thưởng áp chế.`,
        'Thưởng áp chế: tu vi vượt mức cần được cộng 20% phần vượt, tối đa +10%.',
        'Tỉ lệ cuối cùng bị kẹp trong khoảng 8% đến 88%.',
        'Thất bại giữ lại 65% tu vi (tầng nhỏ) hoặc 55% (đại đột phá), cộng phần bù của linh căn, và không quá 80%; đồng thời không bao giờ để tu vi còn trên 95% mức cần, nên không thể thử lại vô hạn.',
        'Thất bại còn mất khí huyết (10–30, +20 nếu đại đột phá, +6 mỗi cảnh giới).',
        'Đại đột phá lên Kim Đan trở lên phải qua Thiên Kiếp; số đạo lôi tăng theo cảnh giới đích.',
        'Đại đột phá thành công cộng thọ nguyên theo bảng dưới, cộng thêm phần bù của linh căn.'
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade" /><span>{t}</span></li>)}</ul>
    </Block>
    <Block i={2} title="Tu vi cần theo cảnh giới" note="Tu vi cần để vượt qua tầng 1 và tầng 9 của mỗi cảnh giới (tầng 9 là đại đột phá, khó hơn 40%), cùng thọ nguyên cộng khi đạt cảnh giới đó.">
      <Tbl head={['Cảnh giới', 'Tầng 1', 'Tầng 9', 'Thọ nguyên khi đạt']} rows={needRows} />
    </Block>
  </Shell>
}
export default function Breakthrough() { return <GameSnapshot title="Máy tính đột phá"><BreakthroughPage /></GameSnapshot> }
