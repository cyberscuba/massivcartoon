<template>
    <div class="stat">
        <star-rating
        :animate="true"
        :active-color="['#fff','#ffd054']"
        :active-border-color="['#ffd054','#fff']"
        :border-width="4"
        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
        :active-on-click="true"
        :clearable="true"
        :padding="3"
        v-bind:star-size="18"
        v-model="rating"
        @rating-selected="test(index)"
        @update:rating ="setRating"></star-rating>

    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CommicsRatint',
  props: {
    msg: String,
    index: null,
  },
  components: {
    StarRating,
  },
  computed: {

    ...mapState(['commics']),
    rating: {
      get() {
        return this.rate;
      },
      set(val) {
        this.rate = val;
      },
    },
  },
  methods: {
    ...mapActions(['countStarts', 'saveRating']),
    setRating(rating) {
      this.rating = rating;
      this.countStarts(rating);
      const cualification = { rating, index:this.index , num:this.commics[this.index].num};
      this.saveRating(cualification);
    },
  },
  data() {
    return {
      rate: 0,
    };
  },
};
</script>

<style>

</style>
