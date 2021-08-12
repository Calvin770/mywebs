<template>
  <div class="home">
    <Header />
    <div class="bxs"><span>Calvin</span></div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from '../components/Footer.vue'
export default {
  data() {
    return {};
  },
  components: {
    Header,Footer
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss">
.home {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  position: relative;
  background: url("https://img11.360buyimg.com/ddimg/jfs/t1/196397/32/15061/1718263/60ffed68Ecd2e7462/6b2d805b27703bb4.jpg")
    no-repeat;
  background-size: cover;
  background-position: 50% 20%;
  width: 100%;
  height: 100%;
  .bxs {
    z-index: 300;
    background: url("https://img11.360buyimg.com/ddimg/jfs/t1/196397/32/15061/1718263/60ffed68Ecd2e7462/6b2d805b27703bb4.jpg")
      no-repeat;
    background-size: cover;
    background-position: 50% 20%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-size: 400px;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    text-align: center;
    overflow: hidden;
    span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    -webkit-animation: 3s posmove 2s forwards;
    -webkit-backface-visibility: hidden; 
    -webkit-transform-style: preserve-3d; 
  }
}
@-webkit-keyframes posmove {
  0% {
    background-position: 50% 20%;
  }
  100% {
    background-position: 0 calc(10% + 200px);
  }
}
</style>
