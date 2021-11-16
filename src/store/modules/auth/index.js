import mutations from '@/store/modules/auth/mutations';
import actions from '@/store/modules/auth/actions';
import getters from '@/store/modules/auth/getters';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
    };
  },
  mutations,
  actions,
  getters
}