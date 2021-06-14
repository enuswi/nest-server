import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Counter from './counter';
import Sidebar from './sidebar';

let counter: Counter;
let sidebar: Sidebar;

const initializer = (store: Store<any>): void => {
  counter = getModule(Counter, store);
  sidebar = getModule(Sidebar, store);
}

export const plugins = [initializer];

export const store = new (class {
  get counter(): Counter {
    return counter;
  }

  get sidebar(): Sidebar {
    return sidebar;
  }
})();
