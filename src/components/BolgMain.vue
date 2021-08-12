<template>
  <div class="bolg_main" ref="contentBox">
    <div class="main_cont">
      <div class="selectMian">
        <ul class="selectList">
          <li
            v-for="(item, index) in this.$store.state.Bolg.tapList"
            :key="index"
            :class="ind === index ? 'item_highlight' : ''"
            @click="changeHigh(index, item.key)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="content_box">
        <div class="content_warrper">
          <div class="know_content" v-if="renderFlag">
            <div v-show="isFlag" class="none_know">
              <img
                src="https://img12.360buyimg.com/ddimg/jfs/t1/195608/6/15623/867302/6102901fE05bbcd0a/969c679fb8cc1c21.gif"
                alt=""
              />
              <h1>暂时没有数据哦</h1>
            </div>
            <li
              class="know_item"
              v-for="(item, index) in knowIngfo"
              :key="index"
              @mouseenter="changeS(index)"
              @mouseleave="changeB()"
            >
              <div v-if="item.bolgName" class="gourl">
                <a :href="item.bolgurl">
                  <div class="work_img">
                    <img :src="item.imgurl" :alt="item.bolgName" /></div
                ></a>
                <div class="item_content">
                  <div
                    :class="['item_msgS', { active: createIndex === index }]"
                  >
                    <h2 :title="item.bolgName">{{ item.bolgName }}</h2>
                    <p>{{ item.describe }}</p>
                  </div>
                  <div class="item_info">
                    <div class="islike">
                      <span class="shell_item" title="点个赞吧！">
                        <i>
                          <svg
                            t="1627904667770"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="3718"
                            width="200"
                            height="200"
                          >
                            <path
                              d="M722.569 104.406c-89.174 0-170.42 54.597-210.567 140.15-40.147-85.608-121.337-140.15-210.516-140.15-130.27 0-236.195 114.89-236.195 256.044 0 78.066 31.104 133.05 71.698 196.87C235.04 711.27 485.7 906.013 496.308 914.23c4.635 3.572 10.109 5.363 15.694 5.363 5.58 0 11.055-1.79 15.69-5.363 10.663-8.271 261.267-202.962 359.323-356.91 40.592-63.759 71.694-118.804 71.694-196.87 0-141.154-105.924-256.044-236.14-256.044z"
                              fill="#e56675"
                              p-id="3719"
                            ></path>
                          </svg>
                        </i>
                      </span>
                      <span class="item_store" title="收藏一下吧！">
                        <i>
                          <svg
                            t="1627949792524"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="1984"
                            width="200"
                            height="200"
                          >
                            <path
                              d="M785.06666667 998.05866667c-10.92266667 0-23.66577778-3.64088889-34.58844445-9.10222222l-236.65777777-118.3288889-238.47822223 118.3288889c-23.66577778 12.74311111-54.61333333 10.92266667-76.45866667-5.46133334-21.84533333-16.384-34.58844445-45.51111111-29.1271111-72.81777778l49.152-254.86222222L31.40266667 481.05244445C11.37777778 461.02755555 4.096 430.08 11.37777778 404.59377778c9.10222222-27.30666667 30.94755555-47.33155555 60.07466667-50.97244445l260.32355555-47.33155555 116.50844445-236.65777778c12.74311111-25.48622222 38.22933333-41.87022222 65.536-41.87022222s54.61333333 16.384 65.536 41.87022222l116.50844444 236.65777778 260.32355556 45.51111111c27.30666667 3.64088889 50.97244445 23.66577778 58.25422222 50.97244444 9.10222222 27.30666667 1.82044445 56.43377778-18.20444445 76.45866667L808.73244445 655.81511111l47.33155555 254.86222222c5.46133333 29.12711111-7.28177778 56.43377778-29.12711111 72.81777778-10.92266667 9.10222222-25.48622222 14.56355555-41.87022222 14.56355556z"
                              fill="#f36718"
                              p-id="1985"
                            ></path>
                          </svg>
                        </i>
                      </span>
                      <span class="item_shell" title="转发">
                        <i>
                          <svg
                            t="1627949812372"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="2786"
                            width="200"
                            height="200"
                          >
                            <path
                              d="M511.2 929.6c230.4 0 417.6-187.2 417.6-417.6 0-16-12-28-28-28s-28 12-28 28c0 199.2-161.6 360.8-360.8 360.8S151.2 711.2 151.2 512 312.8 151.2 512 151.2c16 0 28-12 28-28s-12-28-28-28C282.4 95.2 95.2 282.4 95.2 512c0 230.4 186.4 417.6 416 417.6z"
                              fill="#0B3EFC"
                              p-id="2787"
                            ></path>
                            <path
                              d="M695.2 286.4c-160.8 0-229.6 82.4-229.6 276.8v4c1.6 14.4 14.4 26.4 29.6 25.6 14.4-1.6 26.4-14.4 25.6-29.6 0-164 45.6-221.6 175.2-221.6h64.8l-24 24c-10.4 11.2-10.4 28.8 0 39.2 11.2 10.4 28.8 10.4 39.2 0l62.4-62.4c15.2-16 15.2-41.6 0-56.8L776 223.2c-9.6-8.8-25.6-8.8-36 0-11.2 10.4-12.8 27.2-2.4 39.2l21.6 24h-64z"
                              fill="#0B3EFC"
                              p-id="2788"
                            ></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                    <div class="time_from">
                      <span class="create_time">{{ item.bolgTime }}</span>
                      <div class="item_from">
                        来源：
                        <img
                          class="from_img"
                          :src="item.typeUrl"
                          :alt="item.type"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="falseBox">
                <span>正在努力撰写中...</span>
              </div>
            </li>
          </div>
         <div v-else class="lod">
            <Loading />
         </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import Footer from "./Footer.vue";
import { getKnowInfo } from "../service/bolg_api";
export default {
  data() {
    return {
      ind: 0,
      sliderList: [
        {
          ind: 0,
          left: "0px",
        },
        {
          ind: 1,
          left: "185px",
        },
        {
          ind: 2,
          left: "367px",
        },
        {
          ind: 3,
          left: "552px",
        },
        {
          ind: 4,
          left: "733px",
        },
        {
          ind: 5,
          left: "918px",
        },
      ],
      createIndex: "0",
      knowIngfo: [],
      listkey: "jsbolg",
      renderFlag: false,
      isFlag: false,
      left: 0,
    };
  },
  mounted() {},
  created() {
    this.isShow = false;
    this.isFlag = false;
    this.changeHigh(0, "jsbolg");
  },
  methods: {
    async changeHigh(index, key) {
      this.listkey = key;
      this.renderFlag = false;
      this.isFlag = false;
      this.ind = index;
      let res = await getKnowInfo(key);
      if (res) {
        res.data.length ? (this.isFlag = false) : (this.isFlag = true);
        setTimeout(() => {
          (this.renderFlag = true), (this.knowIngfo = res.data);
        }, 1000);
      }
    },
    changeS(index) {
      this.createIndex = index;
    },
    changeB() {
      this.createIndex = "";
    },
  },
  components: {
    Loading,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.bolg_main {
  position: relative;
  width: 100%;
  .lod{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .main_cont {
    width: 100%;
    .selectMian {
      width: 100%;
      height: 50px;
      background-color: #fff;
      box-shadow: 10px 2px 10px #bebebe;
      position: relative;
      box-sizing: border-box;
      padding: 0 20%;
      .selectList {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        li {
          width: 16.6%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          font-size: 20px;
          font-weight: bold;
          color: #444;
          &:hover {
            color: #0064f9;
          }
          &.item_highlight {
            color: #0064f9;
          }
        }
        .slider {
          transition: all 0.5s;
          position: absolute;
          left: 40px;
          bottom: 0;
          width: 100px;
          height: 3px;
          background-color: #0064f9;
        }
      }
    }
    .content_box {
      z-index: 100;
      width: 100%;
      box-sizing: border-box;
      padding: 10px 0 50px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .content_warrper {
        width: 1500px;
        min-height: 500px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        .know_content {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          // align-items: center;
          z-index: 100000000;
          .none_know {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            img {
              width: 100px;
              height: 100px;
            }
          }
          .know_item {
            margin-left: 50px;
            margin-top: 50px;
            width: 280px;
            height: 350px;
            border-radius: 10px;
            background: #fff;
            border: solid 4px #e1f5fe;
            transition: all 0.4s;
            cursor: pointer;
            .gourl {
              width: 100%;
              height: 100%;
              overflow: hidden;
              text-decoration: none;
              .work_img {
                width: 100%;
                height: 200px;
                overflow: hidden;
                border-radius: 10px;
              }
              .item_content {
                width: 100%;
                height: calc(100% - 200px);
                position: relative;
                .item_msgS {
                  border-radius: 10px;
                  width: 100%;
                  height: 200px;
                  position: absolute;
                  transition: all 0.3s;
                  box-sizing: border-box;
                  padding: 10px;
                  top: 0px;
                  left: 0px;
                  background: #fafafa;
                  h2 {
                    font-size: 20px;
                    font-weight: bold;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color: #666;
                  }
                  p {
                    margin-top: 10px;
                    width: 100%;
                    height: 80px;
                    font-size: 15px;
                    overflow: hidden;
                    color: #444;
                  }
                  &.active {
                    top: -60px;
                    h2 {
                      font-size: 20px;
                      font-weight: bold;
                      color: #444;
                      overflow: visible;
                      overflow: hidden;
                      word-break: break-all;
                      white-space: wrap;
                    }
                    p {
                      margin-top: 10px;
                      width: 100%;
                      height: 80px;
                      font-size: 15px;
                      color: #444;
                    }
                  }
                }
                .item_info {
                  border-radius: 10px;
                  overflow: hidden;
                  box-shadow: 10px 10px 10px #efefef;
                  background-color: #fff;
                  z-index: 1000;
                  width: 100%;
                  height: 100px;
                  bottom: 0;
                  position: absolute;
                  display: flex;
                  flex-flow: column;
                  justify-content: space-evenly;
                  .islike {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-around;
                    align-items: center;
                    box-sizing: border-box;
                    padding: 0 30px;
                    span {
                      width: 50px;
                      height: 50px;
                      display: flex;
                      flex-flow: column;
                      justify-content: center;
                      align-items: center;
                      i {
                        width: 25px;
                        height: 25px;
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        align-items: center;
                        svg {
                          display: inline-block;
                          width: 20px;
                          height: 20px;
                          transition: all 0.3s;
                          &:active {
                            width: 50px;
                            height: 50px;
                          }
                        }
                        em {
                          width: 100%;
                          text-align: center;
                        }
                      }
                    }
                  }
                  .time_from {
                    width: 100%;
                    height: 40px;
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: space-between;
                    align-items: center;
                    .create_time {
                      width: 50%;
                      height: 100%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: 12px;
                      color: #777;
                    }
                    .item_from {
                      width: 50%;
                      height: 100%;
                      box-sizing: border-box;
                      padding: 0 5px 0 70px;
                      display: flex;
                      align-items: center;
                       writing-mode: horizontal-tb;
                      img {
                        width: 25px;
                        height: 25px;
                      }
                    }
                  }
                }
              }
            }
            .falseBox {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 20px;
              font-weight: bold;
              overflow: hidden;
            }
            &:hover {
              transform: scale(1.03);
              box-shadow: 20px 20px 60px #bebebe;
            }
          }
        }
      }
    }
  }
}
</style>