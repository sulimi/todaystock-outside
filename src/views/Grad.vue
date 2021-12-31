<template>
  <div class="grad-wrapper">
    <div class="grad-top">Our Grading Scale: Precisely Defined</div>
    <main>
      <!-- 轮播图 -->
      <SlideShow />
    </main>
    <footer>
      <p>
        When you buy from WeSellCellular, you know exactly what you are getting,
        regardless of which stock you select.
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Grad",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
@mixin f-c-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grad-wrapper {
  width: 100%;
  min-width: 1200px;
  background-color: #fff;
  @include f-c-center;
  p {
    margin: 0px;
    padding: 0px;
  }
  .grad-top {
    width: 100%;
    text-align: center;
    background-color: #2a2a2a;
    padding: 24px;
    font-size: 36px;
    font-family: Abhaya Libre SemiBold-Regular, Abhaya Libre SemiBold;
    font-weight: 400;
    color: #ffffff;
    line-height: 42px;
  }
  main {
    flex: 1;
    width: 100%;
    @include f-c-center;
  }
  footer {
    height: 80px;
    width: 100%;
    color: #fff;
    background: #2a3e71;
    padding: 20px 40px;
    @include f-c-center;
    justify-content: center;
    p {
      font-size: 24px;
      font-family: Abhaya Libre SemiBold-Regular, Abhaya Libre SemiBold;
      font-weight: 400;
      text-align: left;
    }
  }
}
</style>
