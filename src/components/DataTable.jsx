import { useEffect, useState } from 'react'

export default function DataTable({ rows, columns, limit = 120 }) {
  const [shown, setShown] = useState(limit)
  useEffect(() => setShown(limit), [rows, limit])
  return <div className="table-wrap">
    <table><thead><tr>{columns.map(c => <th key={c.key} scope="col">{c.label}</th>)}</tr></thead>
      <tbody>{rows.slice(0, shown).map((r, i) => <tr key={r.id || r.name || i}>
        {columns.map(c => <td key={c.key}>{c.render ? c.render(r) : r[c.key]}</td>)}
      </tr>)}</tbody>
    </table>
    {rows.length > shown && <div className="table-note">Hiển thị {shown}/{rows.length} dòng. <button type="button" className="load-more" onClick={() => setShown(n => Math.min(rows.length, n + limit))}>Hiện thêm</button></div>}
  </div>
}
