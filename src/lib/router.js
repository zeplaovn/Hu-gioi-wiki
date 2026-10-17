export function routeFromHash(hash) {
  if (!hash || hash === '#' || hash === '#/') return 'home'
  const value = hash.replace(/^#\/?/, '').replace(/\/$/, '')
  return value || 'home'
}
export function navigate(id) {
  window.location.hash = `/${id}`
}
