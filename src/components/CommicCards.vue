<template>
    <h5 class="counterStars">You've scored {{ $store.state.ratingStats }} stars</h5>
    <div class="buttonsHeader ">
        <button
          class="button button-more-images"
          role="button" aria-pressed="true"
          @click="getCommitAllList()">
            More Images
          </button>
        <button
          class="button button-show-stats"
          role="button" aria-pressed="true"
          @click="showStatModal()">
            Show Stats..
        </button>
    </div>
<div class="wrapper">
        <Flicking :options="{
            circularFallback: 'linear',
            moveType: 'freeScroll',
            circular: true,
            /* align: 'prev' , */
            bound: false,
            adaptive: true,
            preventClickOnDrag: true,
            autoResize: false}">
                <span v-for="(commic , index) in allCommics" :key="commic">
                    <div class="column">
                        <div class="card">
                            <div class="card-image card3">
                                <img :src="commic.img"
                                alt="" class="image-cartoon"
                                @click="showImageModal(commic.img)">
                            </div>
                            <div class="card-text card3">
                                <h2>{{ commic.title}}</h2>
                                    <p>{{ commic.alt }}</p>
                            </div>
                            <div class="card-stats card3">
                                <div class="stat">
                                    <div class="value">{{ commic.num }}</div>
                                        <div class="type"># Commic</div>
                                </div>
                                <div class="stat border">
                                    <CommicRating :index="index"/>
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
      <CommicStatModal :show="showCommicStatModal" @close="showCommicStatModal = false" />

</template>

<script>
import Flicking from '@egjs/vue3-flicking';
import { mapState, mapActions } from 'vuex';
import CommicRating from './CommicRating.vue';
import CommicModal from './CommicModal.vue';
import CommicStatModal from './CommicStatModal.vue';

export default {
  name: 'CommicsCards',
  props: {
    msg: String,
  },
  components: {
    Flicking,
    CommicRating,
    CommicModal,
    CommicStatModal,
  },
  computed: {
    ...mapState(['count', 'commics', 'imageCartoon', 'qualifiedComics']),
  },
  methods: {
    ...mapActions(['getCommicList']),
    showImageModal(image) {
      this.$store.commit('imageCartoon', image);
      this.showCommicModal = true;
    },
    showStatModal() {
      this.showCommicStatModal = true;
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
    getCommitAllList() {
      for (let i = 0; i <= 5; i += 1) {
        this.getCommicList(this.randomNumber(2620));
      }
    },
  },
  created() {
    this.getCommitAllList();
    this.allCommics = this.commics;
  },
  data() {
    return {
      commicImage: '',
      showCommicModal: false,
      showCommicStatModal: false,
      parentNode: null,
      onMoveEnd: '',
      desc: '',
      rating: null,
      allCommics: [],
    };
  },
};
</script>

<style>
@import url("../../node_modules/@egjs/vue3-flicking/dist/flicking.css");

</style>
