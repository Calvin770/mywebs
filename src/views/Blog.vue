.
<template>
  <div class="bolg_box" ref="ParentBox">
    <BolgHeader />
    <BolgMain />
  </div>
</template>

<script>
import BolgHeader from "../components/BolgHeader.vue";
import BolgMain from "../components/BolgMain.vue";
export default {
  components: {
    BolgHeader,
    BolgMain,
  },
  created() {
    this.$store.dispatch("getContactMsg");
  },
  methods: {},
};
</script>

<style lang="scss">
.bolg_box {
  width: 100%;
  position: relative;
  background-color: #e5e5f7;
  background-image: linear-gradient(#b3b4cf 0.8px, transparent 0.8px),
    linear-gradient(to right, #b3b4cf 0.8px, #e5e5f7 0.8px);
  background-size: 16px 16px;
}

@keyframes tipsShow {
  0% {
    top: 25px;
  }
  50% {
    top: 30px;
  }
  100% {
    top: 25px;
  }
}
</style>
