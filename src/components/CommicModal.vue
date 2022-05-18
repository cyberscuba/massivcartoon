<template>
<Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <div class="modal-header">
              <button
                class="btn btn-primary btn-md active"
                @click="$emit('close')">
              Close
              </button>
            </div>
            <slot name="body">
              
              <div class="cartoon-image card3">
                <img class="img-autofit"
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
import { mapState } from 'vuex';

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

</style>
