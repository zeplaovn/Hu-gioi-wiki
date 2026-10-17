import { useEffect, useState } from 'react'
export default function PageTOC({ page }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    const headings = [...document.querySelectorAll('main h2')].slice(0, 25)
    setItems(headings.map((el, i) => { if (!el.id) el.id = `noi-dung-${i + 1}`; return { id: el.id, text: el.textContent } }))
  }, [page])
  return items.length > 1 && <details className="page-toc"><summary>Mục lục trang ({items.length})</summary><nav aria-label="Mục lục bài viết">{items.map(x => <a key={x.id} href={`#/${page}`} onClick={e => { e.preventDefault(); document.getElementById(x.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}>{x.text}</a>)}</nav></details>
}
