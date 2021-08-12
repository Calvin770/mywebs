<template>
  <div class="about_page">
    <div class="content">
      <div class="paralax">
        <div class="layer rocks2"></div>
        <div class="layer rocks1"></div>
        <div class="layer hills"></div>
        <div class="layer foreground"></div>
      </div>
    </div>

    <div id="link">
      <a class="url" href="javascript:;">正在制作中···</a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style scoped lang="scss">
$scrub: #c0b3a0;
$dayTime: true;
$dayDuration: 120s;
$foregroundDuration: 30s;
$hillsDuration: 60s;
$rocks1Duration: 120s;
$rocks2Duration: 240s;

.about_page {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
}

section {
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $scrub;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.paralax {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("http://www.testomic.com/public/codepen-assets/img/paralax/background.jpg");
  background-size: cover;
  background-position: center;
}

.paralax .layer {
  position: absolute;
  width: 400%;
}

.paralax .foreground {
  height: 50%;
  bottom: 0;
  background: url("http://www.testomic.com/public/codepen-assets/img/paralax/foreground.png")
    repeat-x;
  background-size: 25% 100%;
  animation: slideshow $foregroundDuration linear infinite;
}

.paralax .hills {
  height: 40%;
  bottom: 15%;
  background: url("http://www.testomic.com/public/codepen-assets/img/paralax/hills.png")
    repeat-x;
  background-size: 25% 100%;
  animation: slideshow $hillsDuration linear infinite;
}

.paralax .rocks1 {
  height: 35%;
  bottom: 25%;
  background: url("http://www.testomic.com/public/codepen-assets/img/paralax/rocks1.png")
    repeat-x;
  background-size: 25% 100%;
  animation: slideshow $rocks1Duration linear infinite;
}

.paralax .rocks2 {
  height: 40%;
  bottom: 15%;
  background: url("http://www.testomic.com/public/codepen-assets/img/paralax/rocks2.png")
    repeat-x;
  background-size: 25% 100%;
  animation: slideshow $rocks2Duration linear infinite;
}

@keyframes slideshow {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes dayToNight {
  0% {
    -webkit-filter: hue-rotate(0deg) brightness(1);
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    -webkit-filter: hue-rotate(180deg) brightness(0.1);
    filter: hue-rotate(180deg) brightness(0.1);
  }
  100% {
    -webkit-filter: hue-rotate(0deg) brightness(1);
    filter: hue-rotate(0deg) brightness(1);
  }
}

/**	
* Nonatomic Branding
*/
#link {
  font-family: "Roboto", sans-serif;
  position: fixed;
  bottom: 5%;
  width: 100%;
  text-align: center;
}

.img-url {
  text-decoration: none;
}

.url {
  opacity: 0.5;
  text-decoration: none;
  font-size: 30px;
}

a:link {
  color: white;
}

a:visited {
  color: white;
}

a:hover {
  color: purple;
}

a:active {
  color: white;
}

#small-logo {
  width: 30px;
  transform: translate(-10px, 12px);
  opacity: 1;
}

/**
* Versions
*/
#versions {
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 5%;
  width: 100%;
  text-align: center;
}

.url-highlighted {
  opacity: 1;
  text-decoration: none;
}

.url-normal {
  opacity: 0.5;
  text-decoration: none;
}
</style>