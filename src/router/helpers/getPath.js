import { routes } from '..'

export default function getPath(name) {
  const paths = routes.get(name)
  if (paths === undefined) return
  if (Array.isArray(paths)) return paths[0]
  return String(paths)
}
