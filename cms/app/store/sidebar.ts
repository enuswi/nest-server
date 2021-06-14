import { VuexModule, Module, Mutation } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'sidebar'
})
export default class Sidebar extends VuexModule {
  display: string | boolean = 'responsive';
  minimized: boolean = false;

  @Mutation
  setDisplay(value: string | boolean) {
    this.display = value;
  }

  @Mutation
  setMinimized(value: boolean) {
    this.minimized = value;
  }

  @Mutation
  toggleSidebarDesktop() {
    const opend = [true, 'reponsive'].includes(this.display);
    this.display = opend ? false : 'responsive';
  }

  @Mutation
  toggleSidebarMobile() {
    const closed = [false, 'responsive'].includes(this.display);
    this.display = closed ? true : 'responsive';
  }
}
