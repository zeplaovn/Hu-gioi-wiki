import { Search, X } from 'lucide-react'
export default function SearchBox({ value, onChange, placeholder = 'Tìm trong mục này…' }) {
  return <label className="search"><Search size={17} /><input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />{value && <button type="button" onClick={() => onChange('')} aria-label="Xóa tìm kiếm"><X size={15} /></button>}</label>
}
