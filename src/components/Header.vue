<template>
  <div class="header">
    <div class="warpper">
      <div class="logo">
        <h1></h1>
      </div>
      <div class="HeaderBar">
        <li
          v-for="(item, index) in this.$store.state.Home.RouterMsg"
          :key="index"
        >
          <router-link :to="item.path">{{ item.text }}</router-link>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  created() {
    this.isTosTL();
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    isTosTL() {
      setTimeout(() => {
        this.visible = false;
      }, 10000);
    },
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  z-index: 600;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  padding: 0 50px;
  .warpper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    .logo {
      z-index: 300;
      font-size: 20px;
      h1 {
        background-image: -webkit-linear-gradient(
          right top,
          #d16ba5,
          #c777b9,
          #ba83ca,
          #aa8fd8,
          #9a9ae1,
          #8aa7ec,
          #79b3f4,
          #69bff8,
          #52cffe,
          #41dfff,
          #46eefa,
          #5ffbf1
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .HeaderBar {
      width: 30%;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-around;
      li {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
          color: #c5c5c5;
          transition: all 0.3s;
        }
        &:hover {
          a {
            font-size: 18px;
            font-weight: bold;
            color: #29B6F6;
          }
        }
      }
    }
  }
}
</style>