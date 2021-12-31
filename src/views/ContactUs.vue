<template>
  <div class="contact-us">
    <h3>CONTACT US</h3>
    <p class="contact-explain">
      If you’ve got a question about our iPhones or tablets, need to talk to
      someone about an order, Please contact us.
    </p>
    <p class="contact-explain">
      our team will contact you as soon as possible.
    </p>
    <p class="contact-explain">Email: wcoaom@todaystock.com</p>
    <div class="contact-list">
      <ul>
        <li>
          <p class="list-t">Hong Kong</p>
          <p>1021, 1 Hung To Road, Kwun Tong</p>
          <p>Kowloon, Hong Kong</p>
          <p>(852) 3153 2506</p>
        </li>
        <li>
          <p class="list-t">España</p>
          <p>C/ Tomás Redondo, 3, planta 4,6F1</p>
          <p>28033 Madrid</p>
          <p>(+34) 914 442 039</p>
        </li>
        <li>
          <p class="list-t">United States</p>
          <p>1380 River Bend Drive #145</p>
          <p>Dallas TX ,USA 75247</p>
          <p>800-922-8429</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactUs",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.contact-us {
  padding: 114px 9% 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  h3 {
    font-size: 24px;
    font-family: Segoe UI-Semibold, Segoe UI;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    padding: 0px;
    margin: 0px;
    &.contact-explain {
      width: 45%;
      min-width: 702px;
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
  .contact-list {
    width: 100%;
    margin-top: 60px;
    min-width: 900px;
    ul {
      padding: 0px;
      margin: 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        list-style: none;
        background-color: #fff;
        width: 26%;
        min-width: 270px;
        height: 230px;
        border-radius: 8px;
        padding: 58px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          &.list-t {
            font-size: 18px;
            font-weight: 400;
            line-height: 21px;
            padding-bottom: 18px;
          }
        }
      }
    }
  }
}
</style>
