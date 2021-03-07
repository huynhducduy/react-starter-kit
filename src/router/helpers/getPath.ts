import { routes } from '..'

export default function getPath(name: string): string | undefined {
  const paths = routes.get(name)
  if (paths === undefined) return
  if (Array.isArray(paths)) return paths[0] // eslint-disable-line
  return String(paths)
}
