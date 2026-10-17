export default function Pill({ children, tone = 'jade' }) { return <span className={`pill pill-${tone}`}>{children}</span> }
