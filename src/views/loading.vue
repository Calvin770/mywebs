<template>
  <div class="rainbow">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
    <div class="line line-4"></div>
    <div class="line line-5"></div>
    <div class="line line-6"></div>
    <div class="line line-7"></div>
    <div class="line line-8"></div>
    <div class="line line-9"></div>
    <div class="line line-10"></div>
    <div class="line line-11"></div>
    <div class="line line-12"></div>
    <div class="line line-13"></div>
    <div class="line line-14"></div>
    <div class="line line-15"></div>
    <div class="line line-16"></div>
    <div class="line line-17"></div>
    <div class="line line-18"></div>
    <div class="line line-19"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {};
</script >

<style lang="scss">
$size: 90%;
$lines: 19;

$line-thickness: 15px;

@keyframes rotate {
  0% {
    transform: translate(-50%, 50%) rotate(-45deg);
  }
  50% {
    transform: translate(-50%, 50%) rotate(-225deg);
  }
  100% {
    transform: translate(-50%, 50%) rotate(-45deg);
  }
}

html,
body {
  height: 100%;
  width: 100%;
  background: #222;
}

.rainbow {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.dot {
  background-color: #82c545;
  border-radius: 50%;
  bottom: 0;
  height: $line-thickness * 2;
  left: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  width: $line-thickness * 2;
}

.line {
  border-radius: 50%;
  border-style: solid;
  border-width: $line-thickness;
  bottom: 0;
  position: absolute;
  left: 50%;
}

.line-1 {
  border-color: #5d3191 #5d3191 transparent transparent;
}
.line-2 {
  border-color: #c12680 #c12680 transparent transparent;
}
.line-3 {
  border-color: #ed2861 #ed2861 transparent transparent;
}
.line-4 {
  border-color: #f06045 #f06045 transparent transparent;
}
.line-5 {
  border-color: #f8b739 #f8b739 transparent transparent;
}
.line-6 {
  border-color: #82c545 #82c545 transparent transparent;
}
.line-7 {
  border-color: #18a39b #18a39b transparent transparent;
}
.line-8 {
  border-color: #2172b8 #2172b8 transparent transparent;
}
.line-9 {
  border-color: #5d3191 #5d3191 transparent transparent;
}
.line-10 {
  border-color: #c12680 #c12680 transparent transparent;
}
.line-11 {
  border-color: #ed2861 #ed2861 transparent transparent;
}
.line-12 {
  border-color: #f06045 #f06045 transparent transparent;
}
.line-13 {
  border-color: #f8b739 #f8b739 transparent transparent;
}
.line-14 {
  border-color: #82c545 #82c545 transparent transparent;
}
.line-15 {
  border-color: #18a39b #18a39b transparent transparent;
}
.line-16 {
  border-color: #2172b8 #2172b8 transparent transparent;
}
.line-17 {
  border-color: #c12680 #c12680 transparent transparent;
}
.line-18 {
  border-color: #ed2861 #ed2861 transparent transparent;
}
.line-19 {
  border-color: #f06045 #f06045 transparent transparent;
}

@for $i from 1 through $lines {
  $radius: ($i / $lines) * $size;
  $delay: $i * -0.1s;

  .line-#{$i} {
    animation: rotate 2.5s ease-in-out $delay infinite;
    padding-top: $radius;
    width: $radius;
  }
}
</style>