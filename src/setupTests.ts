import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

const localStorageMock = (function () {
  const store = new Map();
  return {
    getItem: function (key: string) {
      return String(store.get(key));
    },
    setItem: function (key: string, value: string) {
      store.set(key, String(value));
    },
    clear: function () {
      store.clear();
    },
    removeItem: function (key: string) {
      store.delete(key);
    },
    length: store.size,
    key: (index: number): string => Array.from(store.keys())[index] as string,
  };
})();

global.localStorage = localStorageMock;
