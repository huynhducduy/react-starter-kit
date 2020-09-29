import { compile } from 'path-to-regexp';
import getPath from './getPath';

export default function getUrl(name, data = {}) {
  const path = getPath(name);
  if (path !== undefined) return compile(path)(data);
}
