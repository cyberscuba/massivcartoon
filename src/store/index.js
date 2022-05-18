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
    commics: [],
    qualifiedComics: [[], [], [], [], []],
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
    commicList(state, payload) {
      state.commics.push(payload);
    },
    saveRating(state, payload) {
      state.commics[payload.index].rating = payload.rating;
    },
    listCommicByRating(state, payload) {
      let auxCommic = null;
      switch (payload.rating) {
        case 1:
          auxCommic = state.qualifiedComics[0]?.findIndex((commic) => commic === payload.num);
          if (auxCommic === -1) {
            state.qualifiedComics[0].push(payload.num);
          }
          break;
        case 2:
          auxCommic = state.qualifiedComics[1]?.findIndex((commic) => commic === payload.num);
          if (auxCommic === -1) {
            state.qualifiedComics[1].push(payload.num);
          }
          break;
        case 3:
          auxCommic = state.qualifiedComics[2]?.findIndex((commic) => commic === payload.num);
          if (auxCommic === -1) {
            state.qualifiedComics[2].push(payload.num);
          }
          break;
        case 4:
          auxCommic = state.qualifiedComics[3]?.findIndex((commic) => commic === payload.num);
          if (auxCommic === -1) {
            state.qualifiedComics[3].push(payload.num);
          }
          break;
        case 5:
          auxCommic = state.qualifiedComics[4]?.findIndex((commic) => commic === payload.num);
          if (auxCommic === -1) {
            state.qualifiedComics[4].push(payload.num);
          }
          break;
        default:
          break;
      }
    },
  },
  actions: {
    async incrementRandomInt(context) {
      const randomInt = await getRandomInt();
      context.commit('incrementBy', randomInt);
    },
    countStarts({ commit }, context) {
      commit('countStars', context);
    },
    async getCommicList({ commit }, payload) {
      const url = `https://massivian-fix-core-cams.herokuapp.com?numberoffcommics=${payload}`;
      const response = await fetch(url);
      if (response.ok) {
        const commicsData = await response.json();
        commit('commicList', commicsData);
      /*  this.commics = commicsData; */
      } else {
        this.commics = this.commicsBackup;
      }
    },
    saveRating({ commit }, context) {
      commit('saveRating', context);
      commit('listCommicByRating', context);
    },
  },
});
