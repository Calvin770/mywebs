<template>
  <div class="error">
    <div class="cssload-loader">
      <div class="cssload-inner cssload-one"></div>
      <div class="cssload-inner cssload-two"></div>
      <div class="cssload-inner cssload-three"></div>
    </div>
    <div class="error_tips">404
      <br><p>页面找不到了···</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.error {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #f25db2,
    #d168be,
    #af71c1,
    #9075bc,
    #7677b0,
    #6075a6,
    #507299,
    #476e8a,
    #36687d,
    #2a626f,
    #235b5f,
    #225350
  );
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.error_tips {
  width: 400px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  font-weight: 800;
  font-size: 100px;
  background-image: -webkit-linear-gradient(
    left,
    #060e1b,
    #142033 25%,
    #5b6e8a 50%,
    #142033 75%,
    #060e1b
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 5s infinite linear;
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  25% {
    background-position: -50% 0;
  }
  50% {
    background-position: -100% 0;
  }
  75% {
    background-position: -50% 0;
  }
  100% {
    background-position: 0 0;
  }
}
.cssload-loader {
  position: relative;
  top: 0vh;
  left: 0vw;
  width: 262px;
  height: 262px;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  perspective: 780px;
}

.cssload-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  border-radius: 50%;
  -o-border-radius: 50%;
  -ms-border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
}

.cssload-inner.cssload-one {
  left: 0%;
  top: 0%;
  animation: cssload-rotate-one 1.15s linear infinite;
  -o-animation: cssload-rotate-one 1.15s linear infinite;
  -ms-animation: cssload-rotate-one 1.15s linear infinite;
  -webkit-animation: cssload-rotate-one 1.15s linear infinite;
  -moz-animation: cssload-rotate-one 1.15s linear infinite;
  border-bottom: 6px solid #fff;
}

.cssload-inner.cssload-two {
  right: 0%;
  top: 0%;
  animation: cssload-rotate-two 1.15s linear infinite;
  -o-animation: cssload-rotate-two 1.15s linear infinite;
  -ms-animation: cssload-rotate-two 1.15s linear infinite;
  -webkit-animation: cssload-rotate-two 1.15s linear infinite;
  -moz-animation: cssload-rotate-two 1.15s linear infinite;
  border-right: 6px solid #fff;
}

.cssload-inner.cssload-three {
  right: 0%;
  bottom: 0%;
  animation: cssload-rotate-three 1.15s linear infinite;
  -o-animation: cssload-rotate-three 1.15s linear infinite;
  -ms-animation: cssload-rotate-three 1.15s linear infinite;
  -webkit-animation: cssload-rotate-three 1.15s linear infinite;
  -moz-animation: cssload-rotate-three 1.15s linear infinite;
  border-top: 6px solid #fff;
}

@keyframes cssload-rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-o-keyframes cssload-rotate-one {
  0% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-ms-keyframes cssload-rotate-one {
  0% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-webkit-keyframes cssload-rotate-one {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@-moz-keyframes cssload-rotate-one {
  0% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes cssload-rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-o-keyframes cssload-rotate-two {
  0% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-ms-keyframes cssload-rotate-two {
  0% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-webkit-keyframes cssload-rotate-two {
  0% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@-moz-keyframes cssload-rotate-two {
  0% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes cssload-rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-o-keyframes cssload-rotate-three {
  0% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -o-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-ms-keyframes cssload-rotate-three {
  0% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -ms-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-webkit-keyframes cssload-rotate-three {
  0% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}

@-moz-keyframes cssload-rotate-three {
  0% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    -moz-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>