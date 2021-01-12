import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

configure({ adapter: new Adapter() });

var localStorageMock = (function () {
  var store = new Map();
  return {
    getItem: function (key: any) {
      return store.get(key);
    },
    setItem: function (key: any, value: any) {
      store.set(key, value.toString());
    },
    clear: function () {
      store.clear();
    },
    removeItem: function (key: any) {
      store.delete(key);
    },
    length: store.size,
    key: (index: any): any => Array.from(store.keys())[index],
  };
})();

global.localStorage = localStorageMock;
