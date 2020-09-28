import pathToRegexp from 'path-to-regexp';
import { routes } from '../';

export default function (url) {
  for (const route of routes) {
    if (pathToRegexp(route.path).test(url)) return route;
  }
}
