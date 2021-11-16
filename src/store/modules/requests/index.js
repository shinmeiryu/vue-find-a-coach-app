import mutations from '@/store/modules/requests/mutations';
import actions from '@/store/modules/requests/actions';
import getters from '@/store/modules/requests/getters';

export default {
  namespaced: true,
  state() {
    return {
      requests: [{'userEmail' : 'jeff@localhost.com', 'message': 'Hi, I need help!'}],
    };
  },
  mutations,
  actions,
  getters
}