<template>
  <div class="introduce_page">
    <div v-if="outAnmsFlag" :class="{'warrper':overhid,'warrper active':!overhid}">
      <FristPage ref="first"/>
      <SecondPage />
    </div>
    <div v-else class="warrper">
      <SecondPage />
    </div>
  </div>
</template>

<script>
import FristPage from "../components/Js_Swiper/FristPage.vue";
import SecondPage from "../components/Js_Swiper/SecondPage.vue";
export default {
  data() {
    return {
      actindex: 0,
      outAnmsFlag: false,
      overhid:false
    };
  },
  created() {
    console.log(this.$refs.first);
    const outAnms = sessionStorage.getItem("outAnms");
    if (outAnms) {
      this.outAnmsFlag = false;
    } else {
      this.outAnmsFlag = true;
    }
    this.$store.dispatch("getContactMsg");
  },
  mounted() {},
  methods: {
    changeActiveIndex() {},
  },
  components: {
    FristPage,
    SecondPage,
  },
};
</script>

<style lang="scss" scope>
.introduce_page {
  width: 100%;
  height: 100%;
  background: #fff;
  .warrper {
    width: 100%;
    height: 100%;
    &.active{
      overflow: hidden;
    }
  }
}
</style>