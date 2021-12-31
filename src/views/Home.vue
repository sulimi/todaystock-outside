<template>
  <div class="home-wrapper">
    <StockHeader msg="嗨嗨嗨嗨"/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StockHeader from '@/components/StockHeader.vue'

export default defineComponent({
  name: 'Home',
  components: {
    StockHeader
  },
  setup() {
    return {

    }
  }
})
</script>

<style lang="scss">
@import "../assets/style/index.scss";
.home-wrapper {
  overflow-y: auto;
  height: 100%;
}
</style>
