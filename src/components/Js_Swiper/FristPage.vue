<template>
  <div :class="{'firstpage_content onopt':opt, 'firstpage_content':!opt}">
    <div class="bg">
      <div class="sound-pulses">
        <div class="pulse"></div>
        <div class="pulse"></div>
        <div class="pulse"></div>
      </div>
      <div class="sound-pulses-2">
        <div class="pulse"></div>
        <div class="pulse"></div>
        <div class="pulse"></div>
      </div>

      <div class="sound-pulses-3">
        <div class="pulse"></div>
        <div class="pulse"></div>
        <div class="pulse"></div>
      </div>
    </div>
    <div v-if="issilder" class="silder">
      <div class="line"></div>
    </div>
    <div v-else class="typer-content">
      <p class="typer-static"></p>
      <!-- 动态变化的内容-->
      <p class="typer-dynamic">
        <span class="cut">
          <span class="word" v-for="(letter, index) in words" :key="index">{{
            letter
          }}</span>
        </span>
        <!-- 模拟光标-->
        <span class="typer-cursor"></span>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "你好！我是Calvin！", //str初始化
      letters: [], //str分解后的字母数组
      order: 1, //表示当前是第几句话
      issilder: false,
      opt:false
    };
  },
  watch: {
    //监听order值的变化，改变str的内容
    order(old, newV) {
      if (this.order % 4 == 1) {
        this.str = "你好！我是Calvin！";
      } else if (this.order % 4 == 2) {
        this.str = "一个爱学习前端工程师。";
      } else {
        this.str = "加载中";
      }
    },
  },
  created() {
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function () {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
        //   console.log(this.order);
          if (this.order <= 4) {
            let that = this;
            setTimeout(function () {
              that.begin();
            }, 300);
          } else {
            this.issilder = true;
            // console.log(this.$parent.slideChange);
            setTimeout(()=>{
                this.opt=true
                this.$parent.overhid = true
                sessionStorage.setItem('outAnms',1)
            },3500)
          }
        }
      };
    },
  },
};
</script>


<style  lang="scss" scope>
.firstpage_content {
z-index: 100;
  width: 100%;
  overflow: hidden;
  height: 100%;
  position: absolute;
   top: 0;
    left: 0;
    background-color: #efefef;
    &.onopt{
        animation: noshow 2s forwards;
    }
    @keyframes noshow {
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
}
.bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-blend-mode: hard-light;
  animation: hue-animate 4s linear infinite;
  background: #efefef;
  overflow: hidden;
  position: absolute;
  top: 0;
  @keyframes hue-animate {
    from {
      -webkit-filter: hue-rotate(0);
      -moz-filter: hue-rotate(0);
      -ms-filter: hue-rotate(0);
      filter: hue-rotate(0);
    }
    to {
      -webkit-filter: hue-rotate(360deg);
      -moz-filter: hue-rotate(360deg);
      -ms-filter: hue-rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  .sound-pulses {
    position: absolute;
    width: 800px;
    bottom: -75px;
    left: 0%;
    margin-left: -400px;
  }

  .sound-pulses-2 {
    position: absolute;
    width: 900px;
    top: 15px;
    right: 0%;
    margin-left: -400px;
  }

  .sound-pulses-3 {
    position: absolute;
    width: 900px;
    bottom: 15px;
    right: -400px;
  }

  .pulse {
    width: 400px;
    height: 400px;
    background: linear-gradient(233deg, #e56420, #c22525, #3d9c31, #37bbde);
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 50%;
    left: -200px;
    position: absolute;
    bottom: -160px;
    transform: scale(0.1, 0.1);
    opacity: 0;
    animation: pulse 3000ms ease-out infinite;

    &:nth-of-type(2) {
      animation-delay: 600ms;
    }
    &:nth-of-type(3) {
      animation-delay: 1200ms;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.1, 0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2, 1.2);
      opacity: 0;
    }
  }

  @keyframes pulse-text {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.typer-content {
  position: absolute;
  top: 0;
  font-weight: bold;
  width: 100%;
  height: 100%;
  font-size: 50px;
  display: flex;
  flex-direction: row;
  letter-spacing: 2px;
  justify-content: center;
  align-items: center;
}

.typer-dynamic {
  position: relative;
}

.cut {
  color: rgb(134, 129, 129);
  font-family: "Roboto", sans-serif;
  color: rgba(97, 97, 97, 0.8);
  font-weight: 800;
  font-size: 50px;
  background-image: linear-gradient(
    to right top,
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
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-background-size: 200% 100%;
  -webkit-animation: masked-animation 2s infinite linear;
}
@-webkit-keyframes masked-animation {
  0% {
    background-position: 0 0;
  }
  to {
    background-position: -100% 0;
  }
}
.typer-cursor {
  position: absolute;
  height: 100%;
  width: 3px;
  top: 0;
  right: -10px;
  background-color: #999;
}
.silder {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  .line {
    position: relative;
    width: 400px;
    height: 10px;
    background: rgba(226, 216, 216, 0.1);
    border: solid 3px #ccc;
    border-radius: 5px;
    left: 0;
    &:before {
      animation: progress-1 4s forwards;
      transform-origin: 0 0;
      content: "";
      display: block;
      width: 400px;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(107, 107, 107, 0.1) 10%,
        rgba(136, 135, 135, 0.4) 80%,
        rgb(160, 159, 159)
      );
    }
  }

  @keyframes progress-1 {
    0% {
      transform: scalex(0);
      opacity: 0.5;
    }
    90% {
      transform: scalex(1);
      opacity: 1;
    }
    92% {
      transform: scalex(1);
      opacity: 1;
    }
    100% {
      transform: scalex(1);
      opacity: 0;
    }
  }

  @keyframes progress-2 {
    0% {
      transform: scale(0.3, 0.8) translatez(0);
      opacity: 0;
    }
    90% {
      transform: scale(1, 1) translatex(400px) translatez(0);
      opacity: 1;
    }
    100% {
      transform: scale(1, 1) translatex(400px) translatez(0);
      opacity: 1;
    }
  }
}
</style>