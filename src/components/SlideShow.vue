<template>
  <div class="swiper-wrapper">
    <!-- 等级文案 -->
    <template v-for="l in swiperDataList">
      <div class="swiper-title" :key="l.key" v-if="l.class === 'selected'">
        <h1>{{ l.key }}</h1>
        <div class="swiper-title-content">
          <p v-for="p in l.textContent" :key="p">{{ p }}</p>
        </div>
      </div>
    </template>
    <!-- 视频轮播内容 -->
    <div id="carousel">
      <div
        v-for="(s, index) in swiperDataList"
        :key="s.url"
        :class="[s.class, 'grad-video']"
        @click="handelSwiper(index)"
      >
        <video-player
          class="video-content"
          :ref="`videoPlayer${index}`"
          :options="s.playerOptions"
          :playsinline="true"
          customEventName="customstatechangedeventname"
        >
        </video-player>
      </div>
    </div>
    <!-- 轮播小圆点 -->
    <ul class="buttons">
      <li
        v-for="(l, index) in swiperDataList"
        :key="l.key"
        @click="onClickLi(index)"
        :class="l.class"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { videoPlayer } from "vue-video-player";
import swiperData from "@/utils/slide-show-data";
import "video.js/dist/video-js.css";

export default defineComponent({
  name: "SlideShow",
  components: {
    videoPlayer
  },
  setup() {
    console.log('swiperData', swiperData)
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

.swiper-wrapper {
  margin-bottom: 80px;
  width: 100%;
  @include f-c-center;
  .swiper-title {
    @include f-c-center;
    margin-bottom: 60px;
    width: 730px;
    h1 {
      font-size: 54px;
      font-family: Segoe UI-Regular, Segoe UI;
      font-weight: 400;
      color: #000000;
      line-height: 75px;
      margin-bottom: 10px;
      margin-top: 60px;
    }
    .swiper-title-content {
      height: 130px;
      p {
        text-align: left;
        font-size: 14px;
        font-family: Segoe UI-Regular, Segoe UI;
        font-weight: 400;
        color: #000000;
      }
    }
  }
  #carousel {
    width: 100%;
    position: relative;
    height: 500px;
    overflow: hidden;
    margin-bottom: 24px;

    .grad-video {
      position: absolute;
      transition: transform 1s, left 1s, height 1s, opacity 1s, z-index 0s;
      opacity: 1;

      .video-content {
        width: 800px;
        transition: width 1s;
        .video-js {
          width: 100%;
          transition: transform 1s, left 1s, height 1s, opacity 1s, z-index 0s;
          box-shadow: 1px 2px 4px 1px rgba(188, 188, 188, 0.25);

          .vjs-big-play-button {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .vjs-tech {
            height: none;
          }
          &.vjs-fluid {
            height: 0;
          }
          .vjs-poster {
            background-size: cover;
            background-position: center;
          }
        }
      }

      &.hideLeft {
        left: -10%;
        opacity: 0.5;
        transform: translateY(50%) translateX(-50%);

        .video-content {
          width: 200px;
        }
      }

      &.hideRight {
        left: 130%;
        opacity: 0.5;
        transform: translateY(50%) translateX(-50%);

        .video-content {
          width: 200px;
        }
      }

      &.prev {
        z-index: 5;
        left: 10%;
        transform: translateY(50px) translateX(-50%);

        .video-content {
          width: 600px;
        }
      }

      &.prevLeftSecond {
        z-index: 4;
        left: -10%;
        transform: translateY(20%) translateX(-50%);
        opacity: 0.7;

        .video-content {
          width: 200px;
        }
      }

      &.selected {
        z-index: 10;
        left: 50%;
        transform: translateY(0px) translateX(-50%);
      }

      &.next {
        z-index: 5;
        left: 90%;
        transform: translateY(50px) translateX(-50%);

        .video-content {
          width: 600px;
        }
      }

      &.nextRightSecond {
        z-index: 4;
        left: 115%;
        transform: translateY(20%) translateX(-50%);
        opacity: 0.7;

        .video-content {
          width: 200px;
        }
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    li {
      list-style: none;
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      margin-right: 24px;
      cursor: pointer;
      -webkit-transition: 300ms;
      transition: 300ms;
      position: relative;
      background: #cddbff;
      opacity: 0.8;
      box-shadow: 0px 2px 4px 1px rgba(188, 188, 188, 0.25);
      &.selected {
        background: #2a3e71;
        opacity: 0.8;
      }
    }
  }
}
</style>
