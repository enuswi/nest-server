import { VuexModule, Module, Mutation } from 'vuex-module-decorators';

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'count'
})
export default class Counter extends VuexModule {
  count: number = 0;

  @Mutation
  increment() {
    this.count ++;
  }
}
