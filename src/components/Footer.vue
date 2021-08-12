<template>
  <div class="bn">
    <span
      ><a href="https://juejin.cn/user/4134636367915214">@Calvin</a>
      &nbsp;&nbsp;&nbsp;2021&nbsp;&nbsp;&nbsp;
      <a href="http://beian.miit.gov.cn/">京ICP备2021023700号</a></span
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bn {
  z-index: 10000;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
}
span {
  width: 300px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
</style>