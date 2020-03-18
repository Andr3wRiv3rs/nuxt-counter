export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state, payload) {
    state.counter += payload
  }
}

// export default () => {

// }

// ..

// import { state } from './index.js'
// import index from './index.js'
