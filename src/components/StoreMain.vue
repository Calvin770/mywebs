<template>
  <div class="store_main">
    <div class="store_warpper">
      <div class="store_content">
        <div class="leftTap">
          <ul class="taplist">
            <li
              @click="changeItem(index, item.key)"
              v-for="(item, index) in this.$store.state.Store.tapList"
              :key="index"
              :class="ind === index ? 'active' : ''"
            >
              <span>{{ item.title }}</span>
              <img :src="item.icon" :alt="item.title" />
            </li>
          </ul>
        </div>
        <div class="rightList">
          <div class="right_content">
            <div class="know_title">
              <h1>{{ storeTitle.title }}</h1>
              <img :src="storeTitle.icon" alt="" />
            </div>
            <div class="know_content">
              <div v-if="isShow" class="know_warper">
                <div v-show="isFlag" class="none_know">
                  <img
                    src="https://img12.360buyimg.com/ddimg/jfs/t1/195608/6/15623/867302/6102901fE05bbcd0a/969c679fb8cc1c21.gif"
                    alt=""
                  />
                  <h1>暂时没有数据哦</h1>
                </div>
                <li v-for="(item, index) in storeInfo" :key="index">
                  <a :href="item.url">
                    <div class="work_img">
                      <img :src="item.imgurl" alt="" />
                    </div>
                    <div class="info_content">
                      <h2>{{ item.title }}</h2>
                      <p>
                        {{ item.describe }}
                      </p>
                      <div class="from">
                        <span class="author">
                          作者：
                          <i> {{ item.icon }}</i>
                        </span>
                        <span class="fromto"
                          >来源：<img :src="item.typeurl" alt="" />
                        </span>
                      </div>
                    </div>
                    <div class="info_p">{{ item.describe }}</div>
                  </a>
                </li>
              </div>
              <div v-else class="norl_know">
                <Loading />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Hoverme from "./Hoverme.vue";
import Loading from "../components/Loading.vue";
import Footer from "./Footer.vue";
import { getStoreInfoList } from "../service/store_api";
export default {
  data() {
    return {
      ind: 0,
      storeInfo: [],
      storeTitle: {},
      isShow: false,
      isFlag: false,
      isPshow: false,
    };
  },
  components: {
    Hoverme,
    Loading,
    Footer,
  },
  async created() {
    this.isShow = false;
    this.isFlag = false;
    await this.changeItem(0, "jsknow");
  },
  methods: {
    changePShow() {
      this.isPshow = true;
    },
    changePHid() {
      this.isPshow = false;
    },
    async changeItem(index, key) {
      this.isShow = false;
      this.isFlag = false;
      this.$store.state.Store.tapList.forEach((item) => {
        if (item.key === key) {
          this.storeTitle = item;
        }
      });
      this.ind = index;
      let res = await getStoreInfoList(key);
      if (res) {
        res.data.length ? (this.isFlag = false) : (this.isFlag = true);
        setTimeout(() => {
          (this.isShow = true), (this.storeInfo = res.data);
        }, 1000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.store_main {
  flex: 1;
  position: relative;
  .store_warpper {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15%;
    .store_content {
      width: 100%;
      min-height: 850px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      .leftTap {
        width: 300px;
        height: 828px;
        display: flex;
        align-items: center;
        justify-content: center;
        .taplist {
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
          align-items: center;
          li {
            width: 150px;
            height: 80px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            align-items: center;
            background-color: #fff;
            border-radius: 10px;
            border: solid 3px #efefef;
            cursor: pointer;
            transition: all 0.4s;
            overflow: hidden;
            img {
              width: 40px;
              height: 40px;
            }
            span {
              color: #444;
              font-size: 18px;
              font-weight: bold;
            }
            &:hover {
              transform: scale(1.03);
              background-color: #29b6f6;
              opacity: 1;
              background-size: 10px 10px;
              border-radius: 10px;
              box-shadow: 20px 20px 60px #bebebe;
              span {
                color: #fff;
              }
            }
            &.active {
              transform: scale(1.03);
              background-color: #29b6f6;
              opacity: 1;
              background-size: 10px 10px;
              border-radius: 10px;
              box-shadow: 20px 20px 60px #bebebe;
              span {
                color: #fff;
              }
              &::before {
                content: "";
                z-index: -88;
                position: absolute;
                width: 100px;
                height: 100px;
                background-color: #81d4fa;
                border-radius: 50%;
                -webkit-animation: rotb 0.4s forwards;
              }
            }
            @-webkit-keyframes rotb {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              100% {
                transform: scale(2);
                opacity: 0;
              }
            }
          }
        }
      }
      .rightList {
        width: 1000px;
        box-sizing: border-box;
        padding: 30px;
        .right_content {
          width: 100%;
          .know_title {
            width: 91%;
            height: 50px;
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 20px;
            h1 {
              color: #0277bd;
            }
            img {
              margin-left: 20px;
              width: 50px;
              height: 50px;
            }
          }
          .know_content {
            margin-top: 20px;
            width: 100%;
            .know_warper {
              width: 100%;
              min-height: 700px;
              overflow: hidden;
              li {
                margin-top: 20px;
                width: 90%;
                height: 150px;
                background: #fafafa;
                overflow: hidden;
                border: solid 3px #fff;
                border-radius: 10px;
                a {
                  text-decoration: none;
                  box-sizing: border-box;
                  padding: 10px;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-flow: row nowrap;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  .work_img {
                    width: 250px;
                    height: 100%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img {
                      width: 270px;
                      height: 90%;
                    }
                  }
                  .info_content {
                    width: 700px;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 15px 10px;
                    overflow: hidden;
                    display: flex;
                    flex-flow: column;
                    justify-content: space-evenly;
                    h2 {
                      color: #444;
                      font-weight: bold;
                      font-size: 25px;
                    }
                    p {
                      display: flex;
                      flex-flow: row nowrap;
                      justify-content: center;
                      align-items: center;
                      color: #777;
                      width: 100%;
                      height: 40px;
                      line-height: 40px;
                      font-size: 15px;
                      display: block;
                      overflow: hidden;
                      white-space: nowrap;
                      -webkit-line-clamp: 1; //例如超过2行显示省略号
                      text-overflow: ellipsis;
                      &:hover {
                      }
                    }
                    .from {
                      width: 100%;
                      height: 40px;
                      display: flex;
                      flex-flow: row nowrap;
                      justify-content: space-between;
                      .author {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        font-size: 18px;
                        color: #444;
                        font-weight: bold;
                        i {
                          color: #ff6f00;
                          font-weight: bold;
                        }
                      }
                      .fromto {
                        color: #555;
                        font-weight: bold;
                        font-size: 18px;
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        img {
                          width: 20px;
                          height: 20px;
                        }
                      }
                    }
                  }
                  .info_p {
                    width: 610px;
                    height: 80px;
                    right: 0;
                    font-size: 10px;
                    box-sizing: border-box;
                    padding: 10px 10px 10px 0px;
                    bottom: 10px;
                    color: #757575;
                    position: absolute;
                    background: #fafafa;
                    opacity: 0;
                    transition: all 0.3s;
                  }
                }
                &:hover {
                  .info_p {
                    opacity: 1;
                  }
                }
              }
            }
            .norl_know {
              width: 100%;
              min-height: 700px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 30px;
              overflow: hidden;
              position: relative;
            }
          }

          .none_know {
            width: 100%;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            overflow: hidden;
            img {
              width: 100px;
              height: 100px;
            }
          }
        }
      }
    }
  }
}
</style>