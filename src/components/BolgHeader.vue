<template>
  <div class="bolgheader">
    <div class="hader_waper">
      <div class="warrper">
        <h1 class="title">「个人博客」</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;一个简单的对我的博客的阐述：我已经学习前端有4~5年的时间，一直都是在吸取别人的知识，好像从没有过自己的见解。
          但是现在我决定把我学到的知识和我的理解编绘成我自己的，最后通过这一个小小的博客网站呈现给大家。其中不乏有很多不足的地方，包括这也是我第一次建站
          如果有做的不足的地方欢迎大家联系我，指正我不足，一同学习，一同进步。
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.bolgheader {
  position: relative;
  background: url("https://img14.360buyimg.com/ddimg/jfs/t1/199653/16/98/702789/6100d7cfEad684a27/fcfd4c9af8d31041.jpg")
    no-repeat;
  background-size: cover;
  background-position: 0px;
  width: 100%;
  height: 400px;
  .hader_waper {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-items: center;
    align-items: center;
    .warrper {
      width: 100%;
      height: 100%;
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
        img {
          width: 50px;
          height: 50px;
        }
      }
      p {
        margin-top: 10px;
        box-sizing: border-box;
        padding: 20px;
        width: 700px;
        height: 173px;
        border-radius: 10px;
        border: solid 3px #efefef;
        background-color: #fff;
        font-size: 20px;
        color: #666;
        font-weight: bold;
      }
      .contact {
        margin-top: 20px;
        width: 100%;
        height: 100px;
        display: flex;
        flex-flow: column;
        align-items: center;
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