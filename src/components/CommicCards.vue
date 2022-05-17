<template>
    <h5 class="counterStars">You've scored {{ $store.state.ratingStats }} stars</h5>
    <div class="buttonMoreImages">
      <button
      class="btn btn-primary btn-lg active"
      role="button"
      aria-pressed="true"
      @click="this.getCommicList()">
        More Images..
      </button>
    </div>
<div class="wrapper">
        <Flicking :options="{
            circularFallback: 'linear',
            circular: true,
            align: 'prev' ,
            bound: false,
            adaptive: true,
            preventClickOnDrag: true,
            autoResize: true
            }">
                <span v-for="commic in commics" :key="commic">
                    <div class="column">
                        <div class="card">
                            <div class="card-image card3">
                                <img
                                :src="commic.img"
                                alt=""
                                class="image-cartoon"
                               @click="showImageModal(commic.img)"
                               >
                            </div>
                            <div class="card-text card3">
                                <h2>{{ commic.title}}</h2>
                                    <p>{{ commic.alt }}</p>
                            </div>
                            <div class="card-stats card3">
                                <div class="stat">
                                    <div class="value">{{ commic.num }}</div>
                                        <div class="type">num</div>
                                </div>
                                <div class="stat border">
                                    <CommicRating />
                                </div>
                                <div class="stat">
                                    <div class="value">{{ randomComments() }}</div>
                                    <div class="type">comments</div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
        </Flicking>
    </div>
      <CommicModal :show="showCommicModal" @close="showCommicModal = false" />

</template>

<script>
import Flicking from '@egjs/vue3-flicking';
import { mapState } from 'vuex';
import CommicRating from './CommicRating';
import CommicModal from './CommicModal.vue';

export default {
  name: 'CommicsCards',
  props: {
    msg: String,
  },
  components: {
    Flicking,
    CommicRating,
    CommicModal,
  },
  computed: {
    ...mapState(['count', 'commic', 'imageCartoon']),
  },
  methods: {
    showImageModal(image) {
      this.$store.commit('imageCartoon', image);
      this.showCommicModal = true;
    },
    randomLikes() {
      return this.randomNumber(9999);
    },
    randomComments() {
      return this.randomNumber(500);
    },
    randomNumber(number) {
      const randomNumber = this.random = Math.ceil(Math.random() * number);
      return randomNumber;
    },
    async getCommicList() {
      const url = "https://massivian-fix-core-cams.herokuapp.com/";
      const response = await fetch(url);
      if (response.ok) {
        const commicsData = await response.json();
        this.commics = commicsData;
      } else {
        this.commics = this.commicsBackup;
      }
    },
  },
  created() {
    this.getCommicList();
  },
  data() {
    return {
      commicImage: '',
      showCommicModal: false,
      parentNode: null,
      onMoveEnd: '',
      desc: '',
      rating: null,
      commics: [],
    };
  },
};
</script>

<style>
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking.css");
@import url(../assets/scss/cartoonCards.scss);
</style>
