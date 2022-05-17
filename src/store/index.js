import { createStore } from 'vuex';
import getRandomInt from '../helpers/getRandomNumber';

export default createStore({
  state: {
    ratingStats: 0,
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0,
    imageCartoon: '',
    commic: [{
      num: null,
      img: null,
      rating: 0,
    }],
  },

  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = 'Increment';
    },
    incrementBy(state, payload) {
      state.count += payload;
      state.lastMutation = `incrementBy${payload}`;
      state.lastRandomInt = payload;
    },
    ratingStats(state) {
      state.ratingStats++;
      state.mutations = 'Increment';
    },
    imageCartoon(state, payload) {
      state.imageCartoon = payload;
      state.lastMutation = payload;
    },
    countStars(state, payload) {
      state.ratingStats += payload;
      state.lastMutation = `Increasing ${payload} Stars`;
      state.lastRandomInt = payload;
    },
  },
  actions: {
    async incrementRandomInt(context) {
      const randomInt = await getRandomInt();
      context.commit('incrementBy', randomInt);
    },
  },
});
