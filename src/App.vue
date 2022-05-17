<template>
  <CommicHeader />
  <CommicCards />
  <CommicFooter />
</template>

<script>

import { defineAsyncComponent } from 'vue';

export default {
  name: 'App',
  components: {
    CommicHeader: defineAsyncComponent(() => import('@/components/CommicHeader.vue')),
    CommicCards: defineAsyncComponent(() => import('@/components/CommicCards.vue')),
    CommicFooter: defineAsyncComponent(() => import('@/components/CommicFooter.vue')),
  },
};
</script>

<style lang="scss">
@import url(./assets/scss/app.scss);

</style>
