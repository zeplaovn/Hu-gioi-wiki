import { game } from '../content/wikiData.js'

export const rn = i => game.realms[i].name
export const rc = i => game.realms[i].color
export const pc = (v, d = 0) => `${(v * 100).toFixed(d).replace('.', ',')}%`
export const sg = (v, d = 0) => `${v > 0 ? '+' : ''}${(v * 100).toFixed(d).replace('.', ',')}%`

export function Block({ i, title, note, children }) {
  return <section id={`muc-${i + 1}`} className="scroll-mt-24 border-t border-line/50 py-7 first:border-0 first:pt-0">
    <h2 className="font-serif text-2xl text-white">{title}</h2>
    {note && <p className="mt-3 text-[15px] leading-7 text-slate-300">{note}</p>}
    <div className="mt-5">{children}</div>
  </section>
}
export const Shell = ({ children }) => <article className="rounded-2xl border border-line/60 bg-panel/80 p-5 shadow-sm md:p-8">{children}</article>
export const Tbl = ({ head, rows }) => <div className="overflow-x-auto"><table><thead><tr>{head.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead>
  <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className={j === 0 ? 'font-semibold' : ''}>{c}</td>)}</tr>)}</tbody></table></div>
export const RealmTag = ({ i }) => <span className="font-semibold" style={{ color: rc(i) }}>{rn(i)}</span>
export const Callout = ({ children }) => <p className="mt-4 rounded-xl border border-jade/20 bg-jade/5 px-4 py-3 text-sm leading-6">{children}</p>
