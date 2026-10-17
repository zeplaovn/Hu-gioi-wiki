import { canon } from '../content/canonData.js'
import { Map } from 'lucide-react'
import { Pill, SectionTitle } from '../components/index.js'

function World() { return <><SectionTitle eyebrow="World progression" title="Ba giới, một kiếp">Người chơi tiếp tục cùng một nhân vật qua các lần Phi Thăng cho tới khi death thật sự.</SectionTitle><div className="world-grid">{canon.worlds.map((w, i) => <article key={w.name}><div className="world-num">0{i + 1}</div><Pill>{w.cleanDays}</Pill><h2>{w.name}</h2><p>{w.realms}</p><small>{w.focus}</small>{i < 2 && <div className="ascend">Phi Thăng → không end-life</div>}</article>)}</div><div className="callout"><Map /><p>Wiki công khai chỉ mô tả ba giới chính và luật hệ thống. Nội dung cốt truyện ẩn/endgame không được đưa vào bundle công khai.</p></div></> }

export default World
