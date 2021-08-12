<template>
  <div class="HeaderTap" ref="newRef">
    <div class="tap_warrper">
      <div class="myMsg">
        <img :src="this.$store.state.Home.homeMyMsg.url" alt="" />
        <p>{{ this.$store.state.Home.homeMyMsg.msg }}</p>
      </div>
      <ul class="routerBar" @click="showBox">
        <router-link
          v-for="(item, index) in this.$store.state.Home.RouterMsg"
          :key="index"
          :to="item.path"
          ><span>{{ item.text }}</span>
        </router-link>
      </ul>
      <div class="outer" @click="showBox">
        <i
          :class="{
            arrowTransform: !isSideShow,
            arrowTransformReturn: isSideShow,
          }"
        >
          <span class="el-icon-arrow-right"></span>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSideShow: true,
    };
  },
  created() {
    setTimeout(() => {
      this.showBox();
    }, 1000);
  },
  mounted() {},
  methods: {
    showBox() {
      this.isSideShow = !this.isSideShow;
      this.isSideShow
        ? (this.$refs.newRef.style.left = "-100px")
        : (this.$refs.newRef.style.left = "0px");
    },
  },
};
</script>

<style lang="scss">
.HeaderTap {
  transition: all 1s;
  background-color: #fff;
  background-size: 10px 10px;
  box-sizing: border-box;
  padding: 50px 0;
  z-index: 1000;
  position: fixed;
  width: 100px;
  height: 100%;
  left: -100px;
  top: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  .tap_warrper {
    position: relative;
    width: 100px;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .myMsg {
    cursor: pointer;
    margin-top: 20px;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    padding: 5px 15px;
    img {
      width: 100%;
      height: 65px;
      border-radius: 50px;
    }
    p {
      width: 100%;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      color: #666;
    }
  }
  .routerBar {
    margin-top: 50px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    a {
      cursor: pointer;
      width: 100%;
      height: 70px;
      text-decoration: none;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      position: relative;
      span {
        position: absolute;
        bottom: -10px;
        font-size: 18px;
        color: #555;
        font-weight: bold;
        font-weight: bold;
          transition: all 0.3s;
        &:hover {
          transform: scale(1.1);
          color: #0064f9;
        }
      }
    }
  }
  .outer {
    cursor: pointer;
    width: 30px;
    height: 80px;
    position: absolute;
    background-color: #fff;
    right: -30px;
    top: 45%;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
      transform: all 1s;
      &.arrowTransform {
        transition: all 1s;
        transform-origin: center;
        transform: rotateZ(180deg);
      }
      &.arrowTransformReturn {
        transition: all 1s;
        transform-origin: center;
        transform: rotateZ(360deg);
      }
    }
  }
  @keyframes span {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(180deg);
    }
  }
  @keyframes turn {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(180deg);
    }
  }
  @keyframes imgfoabig {
    0% {
      -webkit-transform: scale(1.06);
    }
    100% {
      -webkit-transform: scale(1.06);
    }
  }
}
</style>
