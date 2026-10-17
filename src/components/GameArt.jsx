export default function GameArt({ src, alt = '', size = 44 }) {
  if (!src) return <span className="art-empty" aria-label={`${alt}: chưa có ảnh xác minh`}>—</span>
  return <img className="game-art" src={src} alt={alt} width={size} height={size} loading="lazy" onError={e => { e.currentTarget.hidden = true }} />
}
