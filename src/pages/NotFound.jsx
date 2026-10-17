import { SectionTitle } from '../components/index.js'
export default function NotFound({ go }) { return <><SectionTitle eyebrow="404" title="Không tìm thấy trang">Đường dẫn không tồn tại trong wiki.</SectionTitle><button type="button" className="primary" onClick={() => go('home')}>Về trang chủ</button></> }
