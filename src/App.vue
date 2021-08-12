<template>
  <div id="app">
    <router-view></router-view>
    <SideBar ref="child" />
  </div>
</template>
<script>
import SideBar from "./components/SideBar.vue";
export default {
  data() {
    return {
      flag: false,
    };
  },
  created() {
    this.$store.dispatch("getHomeMsg");
    this.$store.dispatch("getRouter");
  },
  methods: {
  },
  components: {
    SideBar,
  },
};
</script>
<style lang="scss">


body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
dt,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px "微软雅黑", "Arial Narrow", HELVETICA;
  background: #fff;
}
a {
  text-decoration: none;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
.ind {
  text-indent: 2em;
}
.ind10 {
  text-indent: 10px;
}
.noborder {
  border: 0;
}
.left {
  float: left;
}
.right {
  float: right;
}
.clearBoth {
  clear: both;
}
.font12 {
  font-size: 12px;
}

img {
  width: clamp(15vw, 800%, 100%);
}
h1 {
  font-size: clamp(20px, 5vw, 35px);
}
p {
  font-size: clamp(10px, 4vw, 20px);
}
html>body>#app{
  width: 100%;
  height: 100%;
  background-color: #efefef;
}

html {
  font-size: calc(100vw / 7.5);
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(0,0,0,0.1);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(43, 135, 240, 0.486);
}
</style>
