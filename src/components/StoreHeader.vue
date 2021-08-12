<template>
  <div class="store_header">
    <div class="bg_warpper"></div>
    <div class="warpper">
      <div class="title">「个人收藏」</div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;我特别认同一句话就是JowayYoung老师说的————好的工具和技术能够让提高我们的开发效率，从而增加上班摸鱼的时间和减少夜晚加班的时间。我这里收藏了许多小的css动画和小工具，还有一些收藏的知识，十分愿意拿出来给大家分享！！
      </p>
      <div class="contact">
        <div class="tips">
          <span>联系我</span>
          <i class="el-icon-arrow-down"></i>
        </div>
        <div class="info_list">
          <ul>
            <li
              v-for="(item, index) in this.$store.state.Bolg.contactList"
              :key="index"
            >
              <a :href="item.url">
                <div class="imgbg"></div>
                <img :src="item.imgUrl" :alt="item.title" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.store_header {
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
  .bg_warpper {
    width: 100%;
    height: 100%;
    background: url("https://img11.360buyimg.com/ddimg/jfs/t1/185099/21/16026/1594318/61024fc7E10bc68e5/4d718fac383313d2.jpg")
      no-repeat;
    background-size: 100% 900px;
    background-position: 0px;
    transition: all 6s;
    animation: bgmove 10s infinite;
  }
  .warpper {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 100;
    display: flex;
    flex-flow: column;
    align-items: center;
    .title {
      margin-top: 20px;
      font-size: 60px;
      width: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-bottom: 10px;
    }
    p {
      margin-top: 10px;
      box-sizing: border-box;
      padding: 20px;
      width: 700px;
      height: 143px;
      border-radius: 10px;
      border: solid 3px #efefef;
      background-color: #fff;
      font-size: 20px;
      color: #666;
      font-weight: bold;
    }
    .contact {
      width: 100%;
      height: 100px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      .tips {
        height: 30px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        position: relative;
        span {
          color: #fff;
          font-size: 15px;
          font-weight: bold;
        }
        i {
          position: absolute;
          color: #fff;
          font-size: 15px;
          font-weight: bold;
          top: 20px;
          animation: tipsShow 1s infinite linear;
        }
      }
      .info_list {
        position: absolute;
        bottom: 0;
        height: 60px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 30%;
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          li {
            margin-left: 10px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.9;
            transition: all 3s;
            display: flex;
            justify-content: center;
            align-items: center;
            a {
              display: inline-block;
              width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              position: relative;
              .imgbg {
                position: absolute;
                width: 30px;
                height: 30px;
                background-color: #fff;
                opacity: 0.7;
                border-radius: 50%;
              }
              img {
                margin: 0;
                padding: 0;
                z-index: 100;
                width: 20px;
                height: 20px;
              }
            }
            &:hover {
              .imgbg {
                animation: popbigfin 0.2s forwards;
              }
              img {
                animation: imgbigfin 0.5s forwards;
              }
            }
          }
        }
      }
    }
  }
}
@keyframes tipsShow {
  0% {
    top: 25px;
  }
  50% {
    top: 30px;
  }
  100% {
    top: 25px;
  }
}
@keyframes bgmove {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes popbigfin {
  0% {
    opacity: 0.9;
    width: 30px;
    height: 30px;
  }
  100% {
    opacity: 0;
    width: 40px;
    height: 40px;
  }
}
@keyframes imgbigfin {
  0% {
    width: 30px;
    height: 30px;
  }
  100% {
    width: 35px;
    height: 35px;
  }
}
</style>