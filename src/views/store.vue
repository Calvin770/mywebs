<template>
  <div class="store_content">
    <StoreHeader />
    <StoreMain />
  </div>
</template>

<script>
import StoreHeader from "../components/StoreHeader.vue";
import StoreMain from "../components/StoreMain.vue";
export default {
  components: {
    StoreHeader,
    StoreMain,
  },
  created() {
    this.$store.dispatch("getContactMsg");
  },
};
</script>

<style scoped lang="scss">
.store_content {
  width: 100%;
  background-color: #e5e5f7;
  background-image: linear-gradient(#b3b4cf 0.8px, transparent 0.8px),
    linear-gradient(to right, #b3b4cf 0.8px, #e5e5f7 0.8px);
  background-size: 16px 16px;
  // position: relative;
}
</style>