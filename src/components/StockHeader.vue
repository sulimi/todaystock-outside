<script setup lang="ts">
import { computed, ref } from "vue";

defineProps<{ msg: string }>();

const homeUrl = "";

const headLinkInfo = computed(() => [
  {
    text: "About us",
    link: "https://wireless.kintex.net/about",
    target: "_blank",
  },
  {
    text: "Inventory ",
    link: `/${homeUrl}/home`,
  },
  {
    text: "Contact ",
    link: `/${homeUrl}/contact`,
  },
  {
    text: "Grading ",
    link: `/${homeUrl}/grad`,
  },
]);
</script>




<template>
  <div class="stock-head">
    <div class="title">TodayStock</div>
    <div class="links">
      <a v-for="i in headLinkInfo" :href="i.link" :target="i.target" :key="i.text">{{i.text}}</a>
    </div>
    <div class="center" />
    <div class="category">
      <img src="@/assets/images/category.svg" />
    </div>
    <div class="bag">
      <img src="@/assets/images/bag.svg" class="bag-icon" />
      <div class="bag-count">13</div>
    </div>
    <div class="area">
      <img src="@/assets/images/area.svg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
// 购物车抖动动画
@keyframes shakeTopx {

  0%,
  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 0;
    transform-origin: 50% 0;
  }

  5% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  10%,
  20%,
  30% {
    -webkit-transform: rotate(-16deg);
    transform: rotate(-16deg);
  }

  15%,
  25%,
  35% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  40% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  45% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

.stock-head {
  display: flex;
  align-items: flex-end;
  background-color: #2c3640;
  padding: 30px 30px 10px;
  color: #ffffff;

  div {
    img {
      width: 24px;
      height: 24px;
    }
  }

  .title {
    font-size: 24px;
    line-height: 30px;
    margin-right: 26px;
    font-weight: 700;
    font-family: PingFang SC-Bold, PingFang SC;
  }

  .links {
    font-size: 12px;
    a {
      color: #fff;
      margin-right: 40px;
      font-family: Roboto-Regular, Roboto;
      transition: all 0.2s;

      &.selected {
        font-size: 16px;
        font-weight: 900px;
        transition: all 0.2s;
      }
    }
  }

  .center {
    flex: 1;
  }

  .bag,
  .area,
  .category {
    margin-left: 14px;
    cursor: pointer;
  }

  .bag {
    position: relative;
    cursor: pointer;

    .bag-count {
      position: absolute;
      top: -12px;
      left: 45%;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 30px;
      max-width: 40px;
      font-weight: 700;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      background-color: red;
      padding-left: 4px;
      padding-right: 4px;
    }

    .bag-icon {
      &.shake {
        transform-origin: center center;
        animation-name: shakeTopx;
        animation-duration: 1.5s;
        animation-iteration-count: 2;
        animation-timing-function: ease-in-out;
        animation-delay: 0s;
      }
    }
  }
}

</style>
