import React, {useMemo, useState} from 'react'
import {game, realms, npcOthers, sectRanks, destinyUpgrades, ascendFragments} from './content/wikiData.js'
import {breakChance, failKeep, monthGain, levelOf, needExp, secondsPerMonth, fmtDuration} from './lib/formulas.js'

const rn = i => game.realms[i].name
const rc = i => game.realms[i].color
const pc = (v, d = 0) => `${(v * 100).toFixed(d).replace('.', ',')}%`
const sg = (v, d = 0) => `${v > 0 ? '+' : ''}${(v * 100).toFixed(d).replace('.', ',')}%`

function Block({i, title, note, children}) {
  return <section id={`muc-${i + 1}`} className="scroll-mt-24 border-t border-line/50 py-7 first:border-0 first:pt-0">
    <h2 className="font-serif text-2xl text-slate-900 dark:text-white">{title}</h2>
    {note && <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">{note}</p>}
    <div className="mt-5">{children}</div>
  </section>
}
const Shell = ({children}) => <article className="rounded-2xl border border-line/60 bg-white/55 p-5 shadow-sm dark:bg-panel/55 md:p-8">{children}</article>
const Tbl = ({head, rows}) => <div className="overflow-x-auto"><table><thead><tr>{head.map(h => <th key={h}>{h}</th>)}</tr></thead>
  <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j === 0 ? 'font-semibold' : ''}>{c}</td>)}</tr>)}</tbody></table></div>
const RealmTag = ({i}) => <span className="font-semibold" style={{color: rc(i)}}>{rn(i)}</span>
const Callout = ({children}) => <p className="mt-4 rounded-xl border border-jade/20 bg-jade/5 px-4 py-3 text-sm leading-6">{children}</p>

const LABELS = {atk: 'Công kích', def: 'Phòng ngự', hp: 'Khí huyết', exp: 'Tốc độ tu luyện', crit: 'Chí mạng', dodge: 'Né tránh', regen: 'Hồi phục'}
const elemText = e => Object.keys(LABELS).filter(k => e[k]).map(k => `${LABELS[k]} ${sg(e[k])}`).join(' · ')

/* ------------------------------ Linh căn ------------------------------ */
export function RootsPage() {
  const rare = {n: 1, name: 'Dị Linh Căn (Lôi / Băng / Phong)', exp: 0.45, scale: 1, w: 3, life: 0, keep: 0}
  const rows = [...game.rootTypes.map(t => [t.name, `${t.n} nguyên tố`, sg(t.exp), `×${t.scale.toFixed(2).replace('.', ',')}`, `${t.w}%`, t.life ? `+${t.life} năm` : '—', t.keep ? sg(t.keep) : '—']),
    [rare.name, '1 nguyên tố hiếm', sg(rare.exp), '×1,00', '3%', '—', '—']]
  const chain = ['Kim', 'Mộc', 'Thổ', 'Thủy', 'Hỏa']
  return <Shell>
    <Block i={0} title="Năm loại linh căn" note="Khi tạo nhân vật, 3% gieo ra Dị Linh Căn; 97% còn lại chia theo số nguyên tố. “Thưởng tu luyện” cộng vào tổng tăng tốc; “hệ số” nhân với hiệu quả của từng nguyên tố; hai cột cuối là phần bù cho linh căn tu chậm.">
      <Tbl head={['Linh căn', 'Số nguyên tố', 'Thưởng tu luyện', 'Hệ số nguyên tố', 'Tỉ lệ gieo', 'Thọ nguyên mỗi đại đột phá', 'Giữ thêm tu vi khi hỏng']} rows={rows}/>
      <Callout><b>Sổ tay lão làng:</b> linh căn thuần không phải lúc nào cũng thắng. Tam, Tứ, Ngũ linh căn tu chậm hơn nhưng được cộng thọ nguyên và giữ thêm tu vi khi đột phá hỏng để vẫn tới được Phi thăng (theo bản cân bằng 14/10/2026).</Callout>
    </Block>
    <Block i={1} title="Nguyên tố & hiệu ứng" note={`Tôi luyện mỗi cấp tăng ${pc(game.temper.step)} hiệu quả của nguyên tố đó, tối đa ${game.temper.max} cấp. Hiệu ứng dưới đây là mức gốc (nhân với hệ số linh căn).`}>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{game.elements.map(e =>
        <div key={e.name} className="rounded-2xl border border-line/60 p-4" style={{boxShadow: `inset 0 3px 0 ${e.color}`}}>
          <div className="font-serif text-xl" style={{color: e.color}}>{e.name}{['Lôi', 'Băng', 'Phong'].includes(e.name) && <span className="ml-2 text-[11px] font-sans uppercase tracking-widest text-gold">Dị căn</span>}</div>
          <div className="mt-1 text-sm italic text-mist">{e.story}</div>
          <div className="mt-3 text-sm leading-6">{elemText(e)}</div>
        </div>)}</div>
    </Block>
    <Block i={2} title="Tương khắc & bí cảnh" note="Nguyên tố của bí cảnh và linh căn của bạn cộng hoặc trừ trực tiếp vào chiến lực khi thám hiểm.">
      <div className="flex flex-wrap items-center gap-2 text-sm">{chain.map((e, i) => <React.Fragment key={e}><span className="rounded-lg border border-line/60 px-3 py-1.5 font-semibold" style={{color: game.elements.find(x => x.name === e).color}}>{e}</span><span className="text-mist">khắc</span>{i === chain.length - 1 && <span className="rounded-lg border border-line/60 px-3 py-1.5 font-semibold" style={{color: game.elements[0].color}}>Kim</span>}</React.Fragment>)}</div>
      <ul className="mt-4 space-y-2 text-[15px] leading-7">
        {['Cùng nguyên tố với bí cảnh: +20% × hệ số linh căn.', 'Nguyên tố của bạn khắc nguyên tố bí cảnh: +30% × hệ số.', 'Nguyên tố bí cảnh khắc nguyên tố của bạn: −25% × hệ số.', 'Dị Linh Căn: luôn có +12%.', 'Tổng điều chỉnh bị kẹp trong khoảng −35% đến +60%. Bí cảnh Vô hệ không thuận cũng không nghịch.'].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{t}</span></li>)}
      </ul>
    </Block>
  </Shell>
}

/* ----------------------- Công pháp & pháp khí ------------------------ */
export function SkillsPage() {
  const skills = [...game.skills].sort((a, b) => a.realm - b.realm || a.cost - b.cost)
  const effect = s => [s.exp && `Tu luyện ${sg(s.exp)}`, s.power && `Chiến lực +${s.power}`, s.hp && `Khí huyết +${s.hp}`].filter(Boolean).join(', ')
  return <Shell>
    <Block i={0} title="Công pháp" note="Học bằng linh thạch khi đủ cảnh giới. Hiệu ứng của các công pháp đã học cộng dồn với nhau.">
      <Tbl head={['Công pháp', 'Giá', 'Cảnh giới tối thiểu', 'Hiệu ứng']} rows={skills.map(s => [s.name, `${s.cost.toLocaleString('vi-VN')} linh thạch`, <RealmTag key={s.name} i={s.realm}/>, effect(s)])}/>
    </Block>
    <Block i={1} title="Pháp khí" note="Rèn bằng Quặng Linh Thiết. Chỉ số dưới đây là mức gốc; thành phẩm nhân với hệ số phẩm chất (Hạ ×1,0 đến Cực ×1,9).">
      <Tbl head={['Pháp khí', 'Quặng cần', 'Cảnh giới tối thiểu', 'Chiến lực', 'Khí huyết', 'Tu luyện']} rows={game.gear.map(g => [g.name, g.mat, <RealmTag key={g.name} i={g.realm}/>, g.power || '—', g.hp || '—', g.exp ? sg(g.exp) : '—'])}/>
      <Callout>Ba pháp khí đầu (Phi Kiếm, Pháp Bào, Linh Giới) có từ Phàm Nhân / Luyện Khí; năm pháp khí còn lại là hàng hậu kỳ từ Nguyên Anh trở lên. Mô tả trong game có thể gộp nhiều chỉ số vào một dòng.</Callout>
    </Block>
  </Shell>
}

/* ------------------------------ Nghề phụ ------------------------------ */
export function CraftsPage() {
  const q = game.quality
  const quality = q.names.map((n, i) => [n, `×${String(q.mul[i]).replace('.', ',')}`, i === 0 ? `dưới ${pc(q.cut[0])}` : i === q.names.length - 1 ? `từ ${pc(q.cut[3])}` : `${pc(q.cut[i - 1])} – dưới ${pc(q.cut[i])}`])
  const f = game.farm
  const sell = game.sellBase
  const herb = game.alch.map(a => [a.name, `${a.herbs} Linh Thảo`, <RealmTag key={a.name} i={a.realm}/>, `${sell[a.name]} linh thạch`])
  const talis = {
    'Cường Lực Phù': 'Trận kế tiếp: chiến lực +8 × hệ số phẩm',
    'Hộ Thân Phù': 'Trận kế tiếp: giảm 30% × hệ số phẩm sát thương khi bị thương (tối đa 85%)',
    'Phá Cảnh Phù': '+5% × hệ số phẩm tỉ lệ đột phá lần tới'
  }
  return <Shell>
    <Block i={0} title="Phẩm chất" note="Mỗi nghề có nhiều công đoạn; điểm tổng quyết định phẩm chất thành phẩm. Dưới 30% là thất bại và game báo công đoạn kém nhất. Luyện khí thất bại được hoàn lại một nửa quặng.">
      <Tbl head={['Phẩm', 'Hệ số hiệu quả', 'Điểm tổng']} rows={quality}/>
    </Block>
    <Block i={1} title="Linh điền" note={`Bạn có 4 ô đất. Một “tháng linh điền” bằng ${f.STEP_S} giây thật; Linh Thảo chín sau ${f.ripe} tháng, khoảng ${f.ripe} phút thật. Hạt Linh Thảo giá gốc ${game.mats[0].cost} linh thạch.`}>
      <ul className="space-y-2 text-[15px] leading-7">{[
        'Khi bạn có mặt, mỗi tháng linh điền nước giảm 34% và đất giảm 8%; cây có 10% xác suất bị sâu bệnh mỗi tháng.',
        'Cây chỉ tích điểm sinh trưởng khi còn nước và không sâu bệnh; đất tốt (từ 40%) cho thêm 25%.',
        'Cây héo nếu khô nước 3 tháng liên tiếp hoặc để quá 14 tháng.',
        `Khi bạn vắng mặt (hai lần đồng bộ cách nhau hơn ${f.AWAY_MS / 1000} giây), cây vẫn lớn đến lúc chín rồi dừng chờ; không sâu bệnh, khô hạn hay héo.`
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{t}</span></li>)}</ul>
    </Block>
    <Block i={2} title="Luyện đan" note="Bốn công đoạn: Sơ luyện, Tinh luyện, Dung hợp, Ngưng đan. Chất lượng Linh Thảo đầu vào ảnh hưởng kết quả.">
      <Tbl head={['Đan', 'Nguyên liệu', 'Cảnh giới tối thiểu', 'Giá bán gốc']} rows={herb}/>
    </Block>
    <Block i={3} title="Vẽ phù lục" note="Mỗi lá phù cần 1 Giấy Phù. Kéo bút theo phù văn và truyền linh lực đúng lúc.">
      <Tbl head={['Phù', 'Cảnh giới tối thiểu', 'Tác dụng', 'Giá bán gốc']} rows={game.talis.map(t => [t.name, <RealmTag key={t.name} i={t.realm}/>, talis[t.name] || '', `${sell[t.name]} linh thạch`])}/>
    </Block>
    <Block i={4} title="Luyện khí" note="Nung quặng, tôi luyện bằng búa, khắc trận văn. Chi tiết chỉ số pháp khí ở trang Tàng Kinh Các.">
      <Tbl head={['Pháp khí', 'Quặng cần', 'Giá bán gốc']} rows={game.gear.map(g => [g.name, `${g.mat} Quặng Linh Thiết`, `${sell[g.name]} linh thạch`])}/>
    </Block>
  </Shell>
}

/* ------------------------- Đột phá + máy tính ------------------------- */
const Field = ({label, hint, children}) => <label className="block text-sm"><span className="font-semibold">{label}</span>{hint && <span className="ml-2 text-xs text-mist">{hint}</span>}<div className="mt-1">{children}</div></label>
const inp = 'w-full rounded-lg border border-line/60 bg-white/60 px-3 py-2 text-sm outline-none focus:border-jade dark:bg-panel/80'

export function BreakthroughPage() {
  const [s, setS] = useState({realm: 2, tang: 5, ngoTinh: 10, vanKhi: 8, canCot: 10, pill: 0, expBonus: 30, linh: false, rootKeep: 0, ratio: 100})
  const set = (k, v) => setS(o => ({...o, [k]: v}))
  const num = (k, min, max) => e => set(k, Math.max(min, Math.min(max, Number(e.target.value) || 0)))
  const r = useMemo(() => {
    const level = levelOf(s.realm, s.tang), need = needExp(level), ratio = Math.max(1, s.ratio / 100), big = s.tang === 9
    const gain = monthGain({level, canCot: s.canCot, ngoTinh: s.ngoTinh, expBonus: s.expBonus / 100})
    const months = need / gain
    return {level, need, big, gain, months,
      chance: breakChance({realm: s.realm, tang: s.tang, ngoTinh: s.ngoTinh, vanKhi: s.vanKhi, pill: s.pill / 100, linh: s.linh, ratio}),
      keep: failKeep({tang: s.tang, ratio, rootKeep: s.rootKeep / 100}), exp: need * ratio, ratio,
      trib: big && s.realm + 1 >= 3, strikes: 3 + ((s.realm + 1) >> 1)}
  }, [s])
  const C = game.prog.CHANCE
  const needRows = game.realms.map((x, i) => [<RealmTag key={i} i={i}/>, needExp(i * 9 + 1).toLocaleString('vi-VN'), needExp(i * 9 + 9).toLocaleString('vi-VN'), i === 0 ? '—' : `+${game.prog.LIFE[i]} năm`])
  return <Shell>
    <Block i={0} title="Máy tính đột phá" note="Nhập chỉ số của bạn để xem tỉ lệ thành công, phần tu vi giữ lại khi hỏng và thời gian thực tế để đầy tu vi. Kết quả là giá trị kỳ vọng, không phải lời hứa: mỗi lần thử vẫn là một lần gieo.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Field label="Cảnh giới"><select className={inp} value={s.realm} onChange={e => set('realm', +e.target.value)}>{game.realms.map((x, i) => <option key={i} value={i}>{x.name}</option>)}</select></Field>
        <Field label="Tầng" hint="tầng 9 = đại đột phá"><select className={inp} value={s.tang} onChange={e => set('tang', +e.target.value)}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(t => <option key={t} value={t}>Tầng {t}</option>)}</select></Field>
        <Field label="Tu vi hiện có / tu vi cần" hint="% — từ 100 trở lên"><input type="number" className={inp} value={s.ratio} onChange={num('ratio', 100, 300)}/></Field>
        <Field label="Ngộ Tính"><input type="number" className={inp} value={s.ngoTinh} onChange={num('ngoTinh', 1, 80)}/></Field>
        <Field label="Vận Khí"><input type="number" className={inp} value={s.vanKhi} onChange={num('vanKhi', 1, 80)}/></Field>
        <Field label="Căn Cốt" hint="dùng cho thời gian tu"><input type="number" className={inp} value={s.canCot} onChange={num('canCot', 1, 80)}/></Field>
        <Field label="Cộng dồn đan / phù đột phá" hint="% — tối đa 30"><input type="number" className={inp} value={s.pill} onChange={num('pill', 0, 100)}/></Field>
        <Field label="Tổng tăng tốc tu luyện" hint="% — linh căn, công pháp, tông môn…"><input type="number" className={inp} value={s.expBonus} onChange={num('expBonus', -50, 300)}/></Field>
        <Field label="Giữ thêm tu vi từ linh căn" hint="% — Tam 3, Tứ 6, Ngũ 10"><input type="number" className={inp} value={s.rootKeep} onChange={num('rootKeep', 0, 10)}/></Field>
        <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={s.linh} onChange={e => set('linh', e.target.checked)}/> Chủng tộc Linh (+3% đột phá)</label>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-jade/30 bg-jade/5 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-jade">Tỉ lệ thành công</div><div className="mt-2 font-serif text-5xl text-jade">{pc(r.chance, 1)}</div><div className="mt-1 text-xs text-mist">Cấp {r.level} · {r.big ? 'đại đột phá' : 'đột phá tầng nhỏ'}</div></div>
        <div className="rounded-2xl border border-line/60 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-gold">Nếu thất bại</div><div className="mt-2 font-serif text-3xl">Giữ {pc(r.keep, 0)} tu vi</div><div className="mt-1 text-xs text-mist">≈ {Math.round(r.exp * r.keep).toLocaleString('vi-VN')} / {r.need.toLocaleString('vi-VN')} tu vi cần; còn mất khí huyết và tiêu hết cộng dồn đan/phù.</div></div>
        <div className="rounded-2xl border border-line/60 p-5"><div className="text-xs font-bold uppercase tracking-[.16em] text-sky">Thời gian đầy tu vi</div><div className="mt-2 font-serif text-3xl">{fmtDuration(r.months * secondsPerMonth())}</div><div className="mt-1 text-xs text-mist">≈ {Math.round(r.months)} tháng nhập định × {secondsPerMonth()} giây, tính từ 0 tu vi, chưa tính vắng mặt.</div></div>
      </div>
      {r.trib && <Callout><b>Thiên Kiếp:</b> đại đột phá lên {rn(s.realm + 1)} phải qua khoảng {r.strikes} đạo lôi. Khí huyết về 0 là chết, nên hãy nghỉ ngơi đầy khí huyết trước khi bấm.</Callout>}
      {s.realm === 8 && s.tang === 9 && <Callout>Thành công ở đây là phi thăng, kết thúc hành trình Hạ Giới.</Callout>}
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
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{t}</span></li>)}</ul>
    </Block>
    <Block i={2} title="Tu vi cần theo cảnh giới" note="Tu vi cần để vượt qua tầng 1 và tầng 9 của mỗi cảnh giới (tầng 9 là đại đột phá, khó hơn 40%), cùng thọ nguyên cộng khi đạt cảnh giới đó.">
      <Tbl head={['Cảnh giới', 'Tầng 1', 'Tầng 9', 'Thọ nguyên khi đạt']} rows={needRows}/>
    </Block>
  </Shell>
}

/* ------------------------------- Bí cảnh ------------------------------ */
export function SecretsPage() {
  const el = n => game.elements.find(e => e.name === n)
  return <Shell>
    <Block i={0} title="Danh sách bí cảnh" note="Thời gian là số giây thật mỗi chuyến. “Địch tầng 1” là chiến lực địch ở tầng đầu; hệ số thưởng càng cao thì thưởng càng lớn.">
      <Tbl head={['Bí cảnh', 'Nguyên tố', 'Cảnh giới tối thiểu', 'Số tầng', 'Thời gian', 'Địch tầng 1', 'Hệ số thưởng', 'Mô tả']}
        rows={game.secrets.map(x => [x.name, <span key="e" style={{color: el(x.el)?.color}}>{x.el}</span>, <RealmTag key="r" i={x.realm}/>, x.floors, `${x.dur} giây`, x.pw, `×${String(x.xp).replace('.', ',')}`, x.desc])}/>
    </Block>
    <Block i={1} title="Cách một chuyến thám hiểm diễn ra">
      <ul className="space-y-2 text-[15px] leading-7">{[
        'Chiến lực địch ở tầng f = chiến lực tầng 1 × (1 + 0,2 × (f − 1)); Thủ Lĩnh ở tầng cuối mạnh gấp 1,5 lần.',
        'Chiến lực của bạn được nhân với (1 + tương khắc nguyên tố); xem trang Linh Căn Phổ.',
        'Mỗi tầng giao tranh theo từng hiệp; chí mạng nhân 1,6, né tránh có thể bỏ qua một đòn.',
        'Nếu khí huyết xuống dưới 30% tối đa trước một tầng, bạn tự rút lui và giữ phần đã phá.',
        'Nếu bị đánh bại, khí huyết còn lại 10% tối đa.',
        'Trang bị tốt, linh căn khắc nguyên tố bí cảnh và phòng ngự cao đều giúp phá được nhiều tầng hơn.'
      ].map(t => <li key={t} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{t}</span></li>)}</ul>
    </Block>
  </Shell>
}

/* --------------------------- Địa đồ tương tác -------------------------- */
const Danger = ({v}) => <div className="flex items-center gap-1" aria-label={`Nguy hiểm ${v} trên 8`}>{Array.from({length: 9}, (_, i) => <span key={i} className={`h-2 w-4 rounded-sm ${i < v ? 'bg-seal' : 'bg-black/15 dark:bg-white/10'}`}/>)}<span className="ml-2 text-xs text-mist">{v}/8</span></div>

export function WorldPage() {
  const [sel, setSel] = useState(0)
  const reg = game.world.regions[sel]
  return <Shell>
    <Block i={0} title="Cửu vực Hạ Giới" note="Chọn một vực để xem địa điểm, quái, tài nguyên và nhân vật. Bạn chỉ vào được vực khi đạt cảnh giới tối thiểu.">
      <div className="flex flex-wrap gap-2" role="tablist">{game.world.regions.map((r, i) =>
        <button key={r.id} role="tab" aria-selected={i === sel} onClick={() => setSel(i)}
          className={`rounded-xl border px-3 py-2 text-sm ${i === sel ? 'border-jade/60 bg-jade/10 text-jade' : 'border-line/60 hover:border-jade/40'}`}>
          <span className="mr-1 inline-block h-2 w-2 rounded-full" style={{background: rc(r.realm)}}/>{r.name}</button>)}</div>
      <div className="mt-5 rounded-2xl border border-line/60 p-5" style={{boxShadow: `inset 0 3px 0 ${rc(reg.realm)}`}}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div><div className="text-xs font-bold uppercase tracking-[.16em]" style={{color: rc(reg.realm)}}>Mở từ {rn(reg.realm)} · {reg.biome}</div>
            <h3 className="mt-1 font-serif text-3xl">{reg.name}</h3><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{reg.desc}</p></div>
          <div className="space-y-2 text-sm"><div><span className="text-mist">Hệ số thưởng: </span><b>×{reg.reward.toFixed(2).replace('.', ',')}</b></div><Danger v={reg.danger}/></div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-3">{reg.sites.map(s =>
          <div key={s.id} className="rounded-xl border border-line/50 p-4">
            <div className="flex items-baseline justify-between gap-2"><h4 className="font-serif text-xl">{s.name}</h4><span className="text-[11px] uppercase tracking-widest text-gold">{s.kind}</span></div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div><dt className="inline text-mist">Quái: </dt><dd className="inline">{s.monsters.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Tài nguyên: </dt><dd className="inline">{s.resources.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Nhân vật: </dt><dd className="inline">{s.npcs.join(', ')}</dd></div>
              <div><dt className="inline text-mist">Thưởng / nguy hiểm: </dt><dd className="inline">×{s.reward.toFixed(2).replace('.', ',')} · {s.danger}</dd></div>
            </dl></div>)}</div>
      </div>
    </Block>
    <Block i={1} title="Tiên Giới & Thần Giới" note="Cả hai đã có module bản đồ và hình giới thiệu, nhưng gameplay chưa bật để không đổi luồng Phi Thăng. Wiki không thêm địa danh hay cơ chế chưa được xác nhận.">
      <div className="grid gap-4 md:grid-cols-2">{['Tiên Giới', 'Thần Giới'].map(n => <div key={n} className="rounded-xl border border-dashed border-line/70 p-4 text-sm"><b className="font-serif text-lg">{n}</b><div className="mt-1 text-mist">Chưa mở · chờ dữ liệu chính thức</div></div>)}</div>
    </Block>
  </Shell>
}

/* ------------------------ Phần bổ sung cho trang cũ ------------------- */
export function NpcOthers() {
  return <div className="mt-8 rounded-2xl border border-line/60 p-5">
    <h2 className="font-serif text-2xl">Những người khác trên đường</h2>
    <p className="mt-2 text-sm leading-6 text-mist">Các nhân vật dưới đây có tên và nơi xuất hiện trong dữ liệu bản đồ; vai trò và tiểu sử chưa được công bố nên giữ [CẦN XÁC MINH].</p>
    <div className="mt-4"><Tbl head={['Tên', 'Nơi xuất hiện', 'Cảnh giới vực']} rows={npcOthers.map(n => [n.name, n.place, n.realm])}/></div>
  </div>
}

export function SectRanks() {
  return <div className="rounded-2xl border border-line/60 p-5">
    <h2 className="font-serif text-2xl">Chức vị trong tông môn</h2>
    <p className="mt-2 text-sm leading-6 text-mist">Chức vị tăng theo tổng cống hiến đã kiếm được (tiêu cống hiến không làm tụt chức). Lương nhân với hệ số chức vị; mỗi bậc mở thêm tầng nhiệm vụ.</p>
    <div className="mt-4"><Tbl head={['Chức vị', 'Cống hiến cần', 'Thưởng tu luyện', 'Hệ số lương', 'Bậc nhiệm vụ']} rows={sectRanks.map(r => [r.name, r.at, r.exp ? sg(r.exp) : '—', `×${String(r.stipend).replace('.', ',')}`, r.tier])}/></div>
  </div>
}

/* ------------------------------ Thiên Biến ----------------------------- */
export function UpdatesPage() {
  const {log, rules} = game.guideDocs
  return <Shell>
    <Block i={0} title="Nhật ký cập nhật" note={`Bản game hiện tại: ${game.gameVersion} (theo package.json).`}>
      <div className="space-y-5">{log.map(([date, lines]) => <div key={date} className="grid gap-3 md:grid-cols-[110px_1fr]">
        <div className="font-serif text-xl text-jade">{date}</div>
        <ul className="space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{lines.map((l, i) => <li key={i} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{l}</span></li>)}</ul></div>)}</div>
    </Block>
    <Block i={1} title="Quy tắc đang áp dụng" note="Nguyên văn tinh thần từ hộp Hướng dẫn trong game. Mục nào ghi “dự kiến” chưa phải cam kết.">
      <div className="space-y-4">{rules.map(([t, d]) => <div key={t} className="rounded-xl border border-line/50 p-4"><b className="font-serif text-lg">{t}</b><p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{d}</p></div>)}</div>
    </Block>
    <Block i={2} title="Nâng cấp Thiên Mệnh" note="Mua bằng điểm Thiên Mệnh nhận được khi chết hoặc phi thăng. Mỗi dòng liệt kê giá từng cấp.">
      <Tbl head={['Nâng cấp', 'Hiệu ứng mỗi cấp', 'Giá từng cấp (điểm)']} rows={destinyUpgrades.map(([n, d, c]) => [n, d, c.join(' → ')])}/>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Mảnh Phi Thăng: 12 mảnh, giá {ascendFragments.cost.join(' → ')} điểm. Danh hiệu ở mốc 3/6/9/12 mảnh: {Object.entries(ascendFragments.titles).map(([k, v]) => `${k} mảnh “${v}”`).join('; ')}.</p>
    </Block>
    <Block i={3} title="Lộ trình công khai" note="Kế hoạch dự kiến không được ghi như tính năng đã phát hành.">
      <a href="roadmap.html" className="inline-block rounded-xl border border-jade/40 px-4 py-2 text-sm text-jade hover:bg-jade/10">Mở roadmap công khai →</a>
    </Block>
  </Shell>
}
