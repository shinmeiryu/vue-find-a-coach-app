import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: 'undefined'
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;