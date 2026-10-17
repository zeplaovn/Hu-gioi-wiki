import { canon } from '../content/canonData.js'
import heroArt from '../../assets/wiki/hero.webp'
import { ChevronRight } from 'lucide-react'
import { Pill } from '../components/index.js'

function Home({ go }) {
return <div className="stack-xl">
    <section className="hero-card"><img src={heroArt} alt="Thiên Vân Đại Lục" /><div className="hero-overlay" /><div className="hero-copy"><div className="eyebrow">Wiki canonical · v{canon.meta.version}</div><h1>Thiên Vân Đại Lục</h1><p>Tra cứu luật game, lộ trình tu luyện, linh căn, vật phẩm, quái vật và meta progression dựa trên gói thiết kế FINAL v1.2.</p><div className="hero-actions"><button className="primary" onClick={() => go('progression')}>Xem lộ trình <ChevronRight size={16} /></button><button className="ghost" onClick={() => go('canon')}>Trạng thái canon</button></div></div></section>
    <div className="stats"><div><b>{canon.progression.length}</b><span>Mốc progression</span></div><div><b>{canon.pills.length}</b><span>Đan dược</span></div><div><b>{canon.herbs.length}</b><span>Linh dược</span></div><div><b>{canon.equipment.length}</b><span>Trang bị</span></div><div><b>{canon.monsters.length}</b><span>Quái & boss</span></div><div><b>{canon.destinyShop.length}</b><span>Mục Thiên Mệnh</span></div></div>
    <div className="rule-grid">{canon.canonRules.filter(r => r.tag).slice(0, 4).map(r => <article className="rule-card" key={r.title}><Pill tone={r.tone || 'jade'}>{r.tag}</Pill><h3>{r.title}</h3><p>{r.text}</p></article>)}</div>
  </div>
}

export default Home
