import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { canon } from '../content/canonData.js'
import { normalize } from '../lib/text.js'
const sources = [
  ['progression', canon.progression, 'stage'], ['roots', canon.rootTech, 'technique'],
  ['alchemy', canon.pills, 'name'], ['alchemy', canon.herbs, 'name'],
  ['materials', canon.materials, 'name'], ['equipment', canon.equipment, 'name'],
  ['bestiary', canon.monsters.filter(m => m.realm !== 'Endgame' && !normalize(m.type).includes('cot truyen')), 'name'],
  ['death', canon.deathRules, 'content'], ['destiny', canon.destinyShop, 'name']
]
const entries = sources.flatMap(([route, rows, title]) => rows.map(row => ({ route, title: row[title] || 'Mục tra cứu', text: Object.values(row).join(' ') })))
export default function GlobalSearch({ go }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const input = useRef(null)
  useEffect(() => {
    function onKey(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen(true) }
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  useEffect(() => { if (open) input.current?.focus() }, [open])
  const results = useMemo(() => query.trim().length >= 2 ? entries.filter(x => normalize(x.text).includes(normalize(query))).slice(0, 20) : [], [query])
  const select = route => { go(route); setOpen(false); setQuery('') }
  return <><button type="button" className="global-search-trigger" onClick={() => setOpen(true)} aria-label="Tìm kiếm toàn wiki"><Search size={16} /> Tìm kiếm <kbd>Ctrl/⌘ K</kbd></button>
    {open && <div className="search-overlay" role="presentation" onClick={() => setOpen(false)}><section className="search-modal" role="dialog" aria-modal="true" aria-label="Tìm kiếm toàn wiki" onClick={e => e.stopPropagation()}><div className="search-modal-head"><Search size={18} /><input ref={input} aria-label="Từ khóa" value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm cảnh giới, đan dược, nguyên liệu…" /><button type="button" onClick={() => setOpen(false)} aria-label="Đóng tìm kiếm"><X /></button></div>
      <div className="search-results">{results.map((x, i) => <button type="button" key={`${x.route}-${x.title}-${i}`} onClick={() => select(x.route)}><b>{x.title}</b><span>#{x.route}</span></button>)}{query.length >= 2 && !results.length && <p>Không có kết quả trong danh mục công khai.</p>}{query.length < 2 && <p>Nhập ít nhất 2 ký tự (hỗ trợ tiếng Việt có/không dấu).</p>}</div></section></div>}
  </>
}
