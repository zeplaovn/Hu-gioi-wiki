import React, {useEffect, useMemo, useState} from 'react'
import { BookOpen, Search, Moon, Sun, Menu, X, Map, ScrollText, Package, Users, Sparkles, CircleHelp, Newspaper, Compass, ExternalLink } from 'lucide-react'
import { meta, pages, realms, races, items, regions } from './content/wikiData.js'

const navIcons={home:BookOpen,characters:Users,items:Package,beginner:Compass,mechanics:Sparkles,world:Map,lore:ScrollText,updates:Newspaper,glossary:BookOpen,faq:CircleHelp}

function useHash(){
  const get=()=>location.hash.replace(/^#\/?/,'')||'home'
  const [hash,setHash]=useState(get)
  useEffect(()=>{const f=()=>setHash(get());addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[])
  return hash
}

function Badge({children}){
  const s=String(children)
  const c=s.includes('CẦN XÁC MINH')?'border-seal/50 bg-seal/10 text-[#ff9a82]':s.includes('KINH NGHIỆM')?'border-sky/40 bg-sky/10 text-sky':s.includes('SUY ĐOÁN')?'border-gold/40 bg-gold/10 text-gold':'border-jade/30 bg-jade/10 text-jade'
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${c}`}>{children}</span>
}

function Table({type}){
  if(type==='races') return <div className="overflow-x-auto"><table><thead><tr><th>Chủng tộc</th><th>Thọ nguyên cơ sở</th><th>Hiệu chỉnh</th></tr></thead><tbody>{races.map(r=><tr key={r.name}><td className="font-semibold">{r.name}</td><td>{r.life} năm</td><td>{r.effect}</td></tr>)}</tbody></table></div>
  if(type==='items') return <div className="overflow-x-auto"><table><thead><tr><th>Vật phẩm</th><th>Giá</th><th>Mở từ</th><th>Tác dụng</th></tr></thead><tbody>{items.map(r=><tr key={r[0]}>{r.map((v,i)=><td key={i} className={i===0?'font-semibold':''}>{v}</td>)}</tr>)}</tbody></table></div>
  if(type==='regions') return <div className="overflow-x-auto"><table><thead><tr><th>Khu vực</th><th>Cảnh giới</th><th>Mô tả</th></tr></thead><tbody>{regions.map(r=><tr key={r[0]}>{r.map((v,i)=><td key={i} className={i===0?'font-semibold':''}>{v}</td>)}</tr>)}</tbody></table></div>
}

function Section({s,index}){
  const id=`muc-${index+1}`
  return <section id={id} className="scroll-mt-24 border-t border-line/50 py-7 first:border-0 first:pt-0">
    <h2 className="font-serif text-2xl text-slate-900 dark:text-white">{s.title}</h2>
    {s.body && <p className="mt-3 whitespace-pre-line text-[15px] leading-7 text-slate-600 dark:text-slate-300">{s.body}</p>}
    {s.bullets && <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-600 dark:text-slate-300">{s.bullets.map((x,i)=><li key={i} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-jade"/><span>{x}</span></li>)}</ul>}
    {s.table && <div className="mt-5"><Table type={s.table}/></div>}
  </section>
}

function RealmStrip(){return <div className="grid grid-cols-3 gap-2 md:grid-cols-9">{realms.map(([n,c])=><div key={n} className="rounded-xl border border-line/50 bg-black/10 p-3 text-center" style={{boxShadow:`inset 0 2px 0 ${c}`}}><div className="text-xs font-semibold" style={{color:c}}>{n}</div></div>)}</div>}

export default function App(){
  const hash=useHash(); const [dark,setDark]=useState(()=>localStorage.theme!=='light'); const [open,setOpen]=useState(false); const [q,setQ]=useState('')
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark);localStorage.theme=dark?'dark':'light'},[dark])
  const page=pages.find(p=>p.id===hash)||pages[0]
  const results=useMemo(()=>q.trim()?pages.filter(p=>JSON.stringify(p).toLowerCase().includes(q.toLowerCase())):[],[q])
  useEffect(()=>{setOpen(false);scrollTo(0,0)},[hash])
  const goSection=(i)=>document.getElementById(`muc-${i+1}`)?.scrollIntoView({behavior:'smooth',block:'start'})

  return <div className="min-h-screen bg-[#efe8d9] text-slate-900 dark:bg-ink dark:text-slate-100">
    <header className="sticky top-0 z-50 border-b border-line/50 bg-[#efe8d9]/90 backdrop-blur dark:bg-ink/90">
      <div className="mx-auto flex max-w-[1500px] items-center gap-3 px-4 py-3 lg:px-6">
        <button aria-label="Mở menu" className="rounded-lg p-2 lg:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
        <a href="#/home" className="font-serif text-lg font-bold tracking-wide">Thiên Vân Đại Lục <span className="text-jade">Wiki</span></a>
        <div className="relative ml-auto w-full max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-mist"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Tra cứu cảnh giới, vật phẩm, địa điểm..." className="w-full rounded-xl border border-line/60 bg-white/60 py-2 pl-9 pr-3 text-sm outline-none focus:border-jade dark:bg-panel/80"/>
          {results.length>0&&<div className="absolute top-11 z-50 w-full overflow-hidden rounded-xl border border-line bg-[#f7f1e5] shadow-xl dark:bg-panel2">{results.map(r=><a key={r.id} href={`#/${r.id}`} onClick={()=>setQ('')} className="block px-4 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/5"><b>{r.title}</b><span className="ml-2 text-mist">{r.kicker}</span></a>)}</div>}
        </div>
        <button aria-label="Đổi giao diện sáng tối" onClick={()=>setDark(!dark)} className="rounded-xl border border-line/60 p-2.5">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</button>
      </div>
    </header>

    <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_210px]">
      <aside className={`${open?'block':'hidden'} fixed inset-x-0 top-[61px] z-40 max-h-[calc(100vh-61px)] overflow-auto border-b border-line bg-[#efe8d9] p-4 dark:bg-ink lg:sticky lg:top-[61px] lg:block lg:h-[calc(100vh-61px)] lg:border-b-0 lg:border-r lg:p-5`}>
        <div className="mb-4 text-xs font-bold uppercase tracking-[.18em] text-mist">Đạo tàng</div>
        <nav className="space-y-1">{pages.map(p=>{const I=navIcons[p.id]||BookOpen;return <a key={p.id} href={`#/${p.id}`} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${p.id===page.id?'bg-jade/10 text-jade ring-1 ring-jade/20':'text-slate-700 hover:bg-black/5 dark:text-slate-300 dark:hover:bg-white/5'}`}><I className="h-4 w-4"/>{p.title}</a>})}</nav>
        <a href="https://github.com/zeplaovn/Hu-gioi" className="mt-6 flex items-center gap-2 rounded-xl border border-line/60 p-3 text-xs text-mist" target="_blank" rel="noreferrer">Nguồn gameplay <ExternalLink className="h-3 w-3"/></a>
      </aside>

      <main className="min-w-0 px-4 py-7 md:px-8 lg:px-10 lg:py-10">
        {page.id==='home'&&<div className="hero relative mb-8 overflow-hidden rounded-[28px] border border-line/60 p-7 md:p-10"><img src="/assets/wiki/hero.webp" alt="Minh họa Thiên Vân Đại Lục" className="absolute inset-0 h-full w-full object-cover opacity-75"/><div className="absolute inset-0 bg-gradient-to-r from-[#081018] via-[#081018]/80 to-transparent"/><div className="relative z-10 max-w-2xl"><Badge>[ĐÃ XÁC NHẬN] Wiki người chơi</Badge><h1 className="mt-5 font-serif text-4xl font-bold md:text-6xl">Thiên Vân Đại Lục</h1><p className="mt-4 max-w-xl text-base leading-7 text-slate-200">Tu tiên không chỉ tính bằng một lần đột phá. Ở đây, mỗi cảnh giới, năm tháng và lựa chọn đều để lại dấu trên đạo đồ.</p></div></div>}
        <div className="mb-8"><div className="text-xs font-bold uppercase tracking-[.22em] text-jade">{page.kicker}</div><h1 className="mt-2 font-serif text-4xl font-bold">{page.title}</h1><p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{page.summary}</p><div className="mt-4 flex flex-wrap gap-2"><Badge>[ĐÃ XÁC NHẬN] nguồn repo game</Badge><Badge>Phiên bản {meta.version}</Badge></div></div>
        {page.id==='home'&&<><div className="mb-5"><RealmStrip/></div><img className="mb-8 max-h-[520px] w-full rounded-2xl border border-line/60 object-cover object-top" src="/assets/wiki/realm-progression.webp" alt="Minh họa hành trình chín cảnh giới"/></>}
        {page.id==='world'&&<img className="mb-8 aspect-[16/7] w-full rounded-2xl border border-line/60 object-cover" src="https://raw.githubusercontent.com/zeplaovn/Hu-gioi/main/assets/maps/tien_world.webp" alt="Preview mỹ thuật đại thế giới"/>}
        {page.id==='items'&&<div className="mb-8 rounded-2xl border border-line/60 bg-gradient-to-br from-[#2a1d14] to-panel p-6 text-slate-100"><div className="font-serif text-2xl">Lò luyện & Bách Bảo Các</div><p className="mt-2 text-sm text-slate-300">Không khí thị giác lấy từ ngọc bích, giấy dó, đan lô và ấn chu sa; số liệu bên dưới vẫn theo source, không theo minh họa.</p></div>}
        <article className="rounded-2xl border border-line/60 bg-white/55 p-5 shadow-sm dark:bg-panel/55 md:p-8">{page.sections.map((s,i)=><Section key={s.title} s={s} index={i}/>)}</article>
        <footer className="mt-8 rounded-2xl border border-line/60 p-5 text-sm text-mist"><b className="text-slate-700 dark:text-slate-200">Nguồn & lần cập nhật cuối</b><div className="mt-2">Nguồn chính: <code>{meta.source}</code> · Kiểm tra wiki: {meta.lastUpdated} · Phiên bản: {meta.version}</div></footer>
      </main>

      <aside className="sticky top-[61px] hidden h-[calc(100vh-61px)] overflow-auto border-l border-line/40 p-6 lg:block"><div className="text-xs font-bold uppercase tracking-[.18em] text-mist">Mục lục</div><div className="mt-3 space-y-1">{page.sections.map((s,i)=><button key={s.title} onClick={()=>goSection(i)} className="block w-full rounded-md px-1 py-1 text-left text-sm text-slate-500 hover:text-jade dark:text-slate-400">{s.title}</button>)}</div><div className="mt-8 rounded-xl border border-line/60 p-3 text-xs leading-5 text-mist">Mọi con số cần đối chiếu source game. Không dùng preview/roadmap làm bằng chứng cho feature đã phát hành.</div></aside>
    </div>
  </div>
}
