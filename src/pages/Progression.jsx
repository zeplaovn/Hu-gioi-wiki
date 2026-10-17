import { canon } from '../content/canonData.js'
import { Pill, SectionTitle } from '../components/index.js'

function Progression() { return <><SectionTitle eyebrow="Balance master · 60 ngày" title="Lộ trình ba giới">Mốc ngày là target đường sạch, không phải cam kết thời gian bắt buộc cho mọi người chơi.</SectionTitle><div className="timeline">{canon.progression.map((r, i) => <article key={r.stage_id}><div className="timeline-day">Ngày {r.day_start}–{r.day_end}</div><div><div className="row"><Pill>{r.world}</Pill><span className="muted">{r.stage_id}</span></div><h3>{r.stage}</h3><p>{r.content}</p></div></article>)}</div></> }

export default Progression
