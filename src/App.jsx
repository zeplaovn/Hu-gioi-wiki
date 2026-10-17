import { useEffect, useState } from 'react'
import { BookOpen, X } from 'lucide-react'
import { canon } from './content/canonData.js'
import NAV from './pages/nav.js'
import { routeFromHash, navigate } from './lib/router.js'
import { Pill } from './components/index.js'
import GlobalSearch from './components/GlobalSearch.jsx'
import PageTOC from './components/PageTOC.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Progression from './pages/Progression.jsx'
import Roots from './pages/Roots.jsx'
import Alchemy from './pages/Alchemy.jsx'
import Materials from './pages/Materials.jsx'
import Equipment from './pages/Equipment.jsx'
import Bestiary from './pages/Bestiary.jsx'
import Death from './pages/Death.jsx'
import Destiny from './pages/Destiny.jsx'
import World from './pages/World.jsx'
import Skills from './pages/Skills.jsx'
import Crafts from './pages/Crafts.jsx'
import Breakthrough from './pages/Breakthrough.jsx'
import Secrets from './pages/Secrets.jsx'
import Atlas from './pages/Atlas.jsx'
import Updates from './pages/Updates.jsx'
import Canon from './pages/Canon.jsx'

const PAGES = { home: Home, progression: Progression, roots: Roots, alchemy: Alchemy, materials: Materials, equipment: Equipment, bestiary: Bestiary, death: Death, destiny: Destiny, world: World, skills: Skills, crafts: Crafts, breakthrough: Breakthrough, secrets: Secrets, atlas: Atlas, updates: Updates, canon: Canon }
export default function App() {
  const [page, setPage] = useState(() => routeFromHash(window.location.hash))
  const [menu, setMenu] = useState(false)
  const go = id => { navigate(id); setPage(id); setMenu(false); window.scrollTo({ top: 0, behavior: 'auto' }) }
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    const update = () => setPage(routeFromHash(location.hash))
    addEventListener('hashchange', update)
    return () => removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    const title = NAV.find(([id]) => id === page)?.[1] || 'Không tìm thấy trang'
    document.title = `${title} · Thiên Vân Đại Lục Wiki`
  }, [page])
  const Page = PAGES[page] || NotFound
  const title = NAV.find(([id]) => id === page)?.[1] || '404'
  return <div className="app-shell">
    <aside className={menu ? 'open' : ''}>
      <div className="brand"><div className="brand-mark">天</div><div><b>Thiên Vân Đại Lục</b><span>Wiki · v{canon.meta.version}</span></div></div>
      <nav aria-label="Danh mục wiki">{NAV.map(([id, label, Icon]) => <button type="button" key={id} aria-current={page === id ? 'page' : undefined} className={page === id ? 'active' : ''} onClick={() => go(id)}><Icon size={18} /><span>{label}</span></button>)}</nav>
      <div className="aside-foot">Nguồn: dữ liệu canon v{canon.meta.version}</div>
    </aside>
    <div className="content-shell">
      <header className="topbar"><button type="button" aria-label="Mở/đóng menu" className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X /> : <BookOpen />}</button><div><span>Đạo tàng</span><b>{title}</b></div><GlobalSearch go={go} /><Pill>CANON 1.2</Pill></header>
      <main><Page go={go} /><PageTOC page={page} /></main>
      <footer>Thiên Vân Đại Lục Wiki · dữ liệu canonical v1.2 · các mục OPEN được giữ nguyên trạng thái.</footer>
    </div>
    {menu && <button className="backdrop" type="button" onClick={() => setMenu(false)} aria-label="Đóng menu" />}
  </div>
}
