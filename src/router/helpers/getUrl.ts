import { compile } from 'path-to-regexp'
import getPath from './getPath'

export default function getUrl(name: string, data = {}): string | undefined {
  const path = getPath(name)
  if (path !== undefined) return compile(path)(data)
}
