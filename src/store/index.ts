import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

// 声明自己的 store state
export interface State {
  count: number,
  foo: string
}

// 定义 injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

// 创建一个新的 store 实例
export const store = createStore<State>({
  state () {
    return {
      count: 0,
      foo: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key)
}
