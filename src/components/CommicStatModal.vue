<template>
<Transition name="modal">
    <div v-if="show" class="modal-mask-stats">
      <div class="modal-wrapper">
        <div class="modal-container-stats">
          <div class="modal-header">
            <h3 class="modal-title">Rating statistics.</h3>
              <button
                class="btn btn-primary btn-md active"
                @click="$emit('close')">
              Close
              </button>
          </div>
          <div class="modal-body">
            <slot name="body">
              <div class="modal-container-body">
                <table class="table table-striped table-bordered" cellspacing="0" cellpadding="0">
                  <thead class="header-number-rated">
                    <tr>
                      <th>Stars</th>
                      <th>Number of rated comics</th>
                    </tr>
                  </thead>
                  <tbody v-for="(qualifiedComic, index) in qualifiedComics" :key="qualifiedComic">
                      <tr class="tr-rating">
                          <td>
                            <span v-for="i in (index + 1)" :key="i" >
                              <img src="../assets/img/star.png"
                              alt="Stars {{ index + 1 }}"
                              class="star-rating">
                            </span>
                          </td>
                          <td class="text-number-rated">
                            {{qualifiedComic.length}}
<!--                        <span v-for="i in qualifiedComic.length" :key="i">
                              <img src="../assets/img/masivian_logo.png"
                              alt="{{qualifiedComic.length}}"
                              class="massiv-rating">
                            </span> -->
                          </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CommicsStatModal',
  props: {
    show: Boolean,
  },
  computed: {
    ...mapState(['qualifiedComics']),
  },
};

</script>

<style>

</style>
