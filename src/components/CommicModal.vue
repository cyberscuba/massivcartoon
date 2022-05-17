<template>

<Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body">
              <button
                class="btn btn-primary btn-md active"
                @click="$emit('close')">
              Close
              </button>
              <div class="cartoon-image card3">
                <img
                    :src= " $store.state.imageCartoon"
                    alt="">
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CommicsModal',
  props: {
    show: Boolean,
  },
  computed: {
    ...mapState(['imageCartoon', 'lastMutation']),
  },
};

</script>

<style>
@import url(../assets/scss/cartoonModal.scss);
</style>
