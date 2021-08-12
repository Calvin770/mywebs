<template>
  <div class="secondpage_content">
    <header>
      <div class="bgs"></div>
      <div class="showheader">
        <h1 class="title">Keep improving</h1>
        <p>每一个细节做到完美无缺，每一件事做到精益求精</p>
      </div>
    </header>
    <div class="basic_msg">
      <h2>「个人信息」</h2>
    </div>
    <div class="basicmsg_content">
      <div class="basicmsg_cont">
        <div class="info_warrper">
          <div class="info_textarea">
            <div class="info_msg">
              <img
                v-if="this.$store.state.Home.homeMyMsg.url"
                :src="this.$store.state.Home.homeMyMsg.url"
                alt=""
              />
              <img
                v-else
                src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                alt=""
              />
            </div>
            <div class="info_text">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;我是<span>「Calvin」</span>，今年24岁，目前坐标北京海淀。是一名不断在学习的<span>「web前端工程师」</span>。
                我的追求是<span>「每一个细节做到完美无缺，每一件事做到精益求精」</span>。不断的追求完美，是我学习前进的动力。
              </p>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>「不断学习」</span>是我一生的追求，在技术飞速发展的现在，停止脚步终将被抛弃。同时，我也拥有十分强的
                <span>「时间观念」</span
                >，在实现每个目标时我会有自己的<span>「计划和逻辑」</span>并且凡事都要打好<span>「提前量」</span>。
                业余时间的我也十分热爱<span>「读书和摄影」</span>。每天同大家交流与学习也是我收获到最大的快乐。
              </p>
            </div>
          </div>
          <div class="hobby_info">
            <div class="hobby_content">
              <div class="hobby_list">
                <ul>
                  <p>
                    &nbsp;男&nbsp; <span>/</span> &nbsp;汉族&nbsp;
                    <span>/</span> &nbsp;未婚&nbsp;<span>/</span>
                    &nbsp;北京海淀&nbsp;
                  </p>
                  <p>
                    &nbsp;1997.4&nbsp; <span>/</span> &nbsp;24岁&nbsp;
                    <span>/</span> &nbsp;75kg&nbsp;
                    <span>/</span> &nbsp;180cm&nbsp;
                  </p>
                  <p>
                    &nbsp;学习&nbsp; <span>/</span> &nbsp;阅读&nbsp;
                    <span>/</span> &nbsp;摄影&nbsp;
                    <span>/</span> &nbsp;游戏&nbsp;
                    <span>/</span> &nbsp;骑行&nbsp;
                  </p>
                  <p>
                    &nbsp;web前端开发工程师&nbsp; <span>/</span> &nbsp;3年&nbsp;
                  </p>
                </ul>
              </div>
              <div class="hobby_icon">
                <li
                  v-for="(item, index) in this.$store.state.Info.hobbyList"
                  :key="index"
                  :style="{ background: `${item.bg}` }"
                >
                  <i :class="item.icon"></i>
                  {{ item.text }}
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scroll_content">
      <div class="business">
        <div class="business_warpper">
          <h2 class="business_title">
            「业务能力」<svg
              t="1627983681604"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6223"
              width="200"
              height="200"
            >
              <path
                d="M63.87 511.74c0-246.96 200.42-447.17 447.65-447.17 247.22 0 447.65 200.21 447.65 447.17S758.75 958.91 511.52 958.91 63.87 758.7 63.87 511.74z m366.61 169.98c11.69 12.05 30.89 12.54 43.19 1.11L767.02 410.4c12.39-11.62 13.05-31.05 1.49-43.49-11.57-12.43-31.02-13.19-43.52-1.7L454.72 618.1 327.83 487.4c-7.65-8.02-19.03-11.32-29.79-8.64s-19.26 10.91-22.26 21.58a30.8 30.8 0 0 0 7.74 30.01L430.5 681.73l-0.02-0.01z"
                fill="#00E676"
                p-id="6224"
              ></path>
            </svg>
          </h2>
          <div class="chart">
            <div  :class="{ 'list_chart active': scwe, 'list_chart': !scwe }">
              <li
                v-for="(item, index) in this.$store.state.Info.listchart"
                :key="index"
              >
                <span>{{ item.title }}</span>
                <el-progress
                  :percentage="item.value"
                  :color="item.color"
                  :stroke-width="10"
                  :show-text="false"
                ></el-progress>
              </li>
            </div>
            <div :class="{ 'right_chart active': scwe, 'right_chart': !scwe }">
              <li
                v-for="(item, index) in this.$store.state.Info.rightchart"
                :key="index"
              >
                <span>{{ item.title }}</span>
                <el-progress
                  :percentage="item.value"
                  :color="item.color"
                  :stroke-width="10"
                  :show-text="false"
                ></el-progress>
              </li>
            </div>
          </div>
          <div
            :class="{ 'AbilityTO active': scwe, AbilityTO: !scwe }"
            ref="Ability"
          >
            <div class="AbilityTO_countent">
              <div class="listTap">
                <li
                  v-for="(item, index) in this.$store.state.Info.listtap"
                  :key="index"
                  @click="changeIndex(index)"
                  :class="{ active: currectInde === index }"
                >
                  {{ item.title }}
                </li>
                <em ref="mysdl"></em>
              </div>
              <div class="knowMsgList">
                <ul :style="{ transform: `translateX(${-transLeft}px)` }">
                  <li class="KnowledgeReserves">
                    <div
                      class="Knowledge_item"
                      v-for="(item, index) in this.$store.state.Info
                        .KnowledgeReserves"
                      :key="index"
                    >
                      <i
                        ><svg
                          t="1628037277400"
                          class="icon"
                          viewBox="0 0 1024 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="9503"
                          width="200"
                          height="200"
                        >
                          <path
                            d="M512 0l443.405 256v512L512 1024 68.595 768V256z"
                            p-id="9504"
                            fill="#dbdbdb"
                          ></path>
                          <path
                            d="M512 0l443.405 256v512L512 1024 68.595 768V256L512 0z m0 79L137.011 295.5v433L512 945l374.989-216.5v-433L512 79z"
                            p-id="9505"
                            fill="#dbdbdb"
                          ></path></svg
                      ></i>
                      <h3>{{ item.name }}：</h3>
                      <li>
                        <span
                          v-for="(item1, index1) in item.details"
                          :key="index1"
                        >
                          {{ item1 }}
                        </span>
                      </li>
                    </div>
                  </li>
                  <li class="DevelopmentTools">
                    <div
                      class="Develop_item"
                      v-for="(item, index) in this.$store.state.Info
                        .DevelopmentTools"
                      :key="index"
                    >
                      <i
                        ><svg
                          t="1628036862929"
                          class="icon"
                          viewBox="0 0 1071 1024"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          p-id="7691"
                          width="200"
                          height="200"
                        >
                          <path
                            d="M581.971197 28.777358l125.5511 254.387453a51.643352 51.643352 0 0 0 38.868528 28.248998l280.721796 40.804107c42.342108 6.152004 59.249656 58.182472 28.615188 88.042709L852.58613 638.223321a51.622427 51.622427 0 0 0-14.846418 45.721526l47.96052 279.591836c7.229651 42.164244-37.037574 74.284401-74.901693 54.405476L559.748653 885.946103a51.664278 51.664278 0 0 0-48.044221 0l-251.1022 132.006519c-37.864119 19.878924-82.131344-12.251695-74.901693-54.405476L233.629671 683.944847a51.622427 51.622427 0 0 0-14.846417-45.721526L15.693887 440.2397c-30.686781-29.860237-13.779233-81.890705 28.562876-88.042709l280.721796-40.804107a51.643352 51.643352 0 0 0 38.868528-28.248998l125.551099-254.387453c18.926828-38.345398 73.646183-38.345398 92.573011 0.020925z"
                            fill="#bfbfbf"
                            p-id="7692"
                          ></path></svg
                      ></i>
                      <h3>{{ item.name }}：</h3>
                      <li>
                        <span
                          v-for="(item1, index1) in item.details"
                          :key="index1"
                        >
                          {{ item1 }}
                        </span>
                      </li>
                    </div>
                  </li>
                  <li class="BusinessSkills">
                    <div
                      class="Skills_item"
                      v-for="(item, index) in this.$store.state.Info
                        .BusinessSkills"
                      :key="index"
                    >
                      <div class="know_title">
                        <i
                          ><svg
                            t="1628037589284"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="14362"
                            width="200"
                            height="200"
                          >
                            <path
                              d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
                              fill="#FF3A3A"
                              p-id="14363"
                            ></path>
                            <path
                              d="M667.648 362.222933a68.266667 68.266667 0 0 1 103.8336 88.200534l-5.5296 6.5536-263.304533 273.066666a68.266667 68.266667 0 0 1-91.818667 5.9392l-6.485333-5.9392L258.048 578.3552a68.266667 68.266667 0 0 1 91.9552-100.5568l6.3488 5.802667 97.0752 100.693333L667.648 362.222933z"
                              fill="#FFFFFF"
                              p-id="14364"
                            ></path></svg
                        ></i>
                        <h3>
                          {{ item.name }}
                        </h3>
                      </div>
                      <div class="ls">
                        <li
                          v-for="(item1, index1) in item.details"
                          :key="index1"
                        >
                          <i
                            ><svg
                              t="1628037748598"
                              class="icon"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              p-id="15169"
                              width="200"
                              height="200"
                            >
                              <path
                                d="M528.3094653 947.41986872c-14.11708701 0-28.23417401-6.58797341-36.70442553-17.88164437L181.97026814 540.84776732a45.4908416 45.4908416 0 0 1 0-58.35062613L491.60503977 93.80668416c8.47025266-11.29366983 22.58733853-17.88164323 36.70442553-17.88164324s28.23417401 6.58797341 36.70442553 17.88164324L874.64866246 482.49714119a45.4908416 45.4908416 0 0 1 0 58.35062613L565.01389083 929.53822435c-8.47025266 11.29366983-22.58733853 17.88164323-36.70442553 17.88164437z m-249.40186738-435.74741446l249.40186738 313.39932785 249.40186738-313.39932785-249.40186738-313.39932786-249.40186738 313.39932786z"
                                fill="#1296db"
                                p-id="15170"
                              ></path>
                              <path
                                d="M161.86628663 477.11132558h733.6308133v65.3567818H161.86628663z"
                                fill="#1296db"
                                p-id="15171"
                              ></path></svg
                          ></i>
                          <span>{{ item1 }}</span>
                        </li>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cj"></div>
      <div class="assessment">
        <div class="assessment_content">
          <div class="assessment_warrper">
            <h2 class="assessment_title">
              「{{ this.$store.state.Info.assessment.title }}」<svg
                t="1627983681604"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="6223"
                width="200"
                height="200"
              >
                <path
                  d="M63.87 511.74c0-246.96 200.42-447.17 447.65-447.17 247.22 0 447.65 200.21 447.65 447.17S758.75 958.91 511.52 958.91 63.87 758.7 63.87 511.74z m366.61 169.98c11.69 12.05 30.89 12.54 43.19 1.11L767.02 410.4c12.39-11.62 13.05-31.05 1.49-43.49-11.57-12.43-31.02-13.19-43.52-1.7L454.72 618.1 327.83 487.4c-7.65-8.02-19.03-11.32-29.79-8.64s-19.26 10.91-22.26 21.58a30.8 30.8 0 0 0 7.74 30.01L430.5 681.73l-0.02-0.01z"
                  fill="#00E676"
                  p-id="6224"
                ></path>
              </svg>
            </h2>
            <div class="assessment_msg">
              <li
                v-for="(item, index) in this.$store.state.Info.assessment
                  .details"
                :key="index"
              >
                <i>
                  <svg
                    t="1628060532306"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1055"
                    width="200"
                    height="200"
                  >
                    <path
                      d="M213.333333 554.666667h128a42.666667 42.666667 0 0 0 0-85.333334H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333333V78.762667a21.333333 21.333333 0 0 1 31.616-18.688l787.712 433.237333a21.333333 21.333333 0 0 1 0 37.376L159.616 963.925333A21.333333 21.333333 0 0 1 128 945.237333V640a85.333333 85.333333 0 0 1 85.333333-85.333333z"
                      fill="#4E95F8"
                      p-id="1056"
                    ></path>
                  </svg>
                </i>
                <span>{{ item }}</span>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div class="content_me">
        <h3>「社交区域」</h3>
        <em class="el-icon-arrow-down"></em>
        <div class="lasrt_warpper">
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
        <Footer />
      </div>
      <div class="custom-shape-divider-top-1628063099">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../Footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      currectInde: 0,
      tapleft: [
        {
          ind: 0,
          left: "108px",
        },
        {
          ind: 1,
          left: "410px",
        },
        {
          ind: 2,
          left: "712px",
        },
      ],
      transLeft: 0,
      scwe: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      var scrollTop =
        window.pageYOffset ||
        document.querySelector(".secondpage_content").scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= this.$refs.Ability.offsetTop - 700) {
        this.scwe = true;
      }
    });
  },
  methods: {
    changeIndex(index) {
      this.currectInde = index;
      this.tapleft.forEach((item) => {
        if (item.ind === index) {
          this.$refs.mysdl.style.left = item.left;
          this.transLeft = index * 900;
        }
      });
    },
  },
};
</script>

<style lang="scss" scope>
.secondpage_content {
  width: 100%;
  overflow: hidden;
  header {
    width: 100%;
    height: 400px;
    position: relative;
    .bgs {
      width: 100%;
      height: 100%;
      background: url("https://img14.360buyimg.com/ddimg/jfs/t1/191053/35/16544/4480392/6108eaceEafcfcf99/dbfa14101bb39058.jpg")
        no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      z-index: 1;
    }
    .showheader {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0;
      overflow: hidden;
      z-index: 10;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .title {
        font-size: 60px;
        text-align: center;
        font-weight: bold;
        color: #fff;
        opacity: 0.8;
      }
      p {
        font-weight: bold;
        margin-top: 20px;
        opacity: 0.8;
      }
    }
  }
  .basic_msg {
    width: 100%;
    height: 80px;
    background: #fff;
    box-shadow: 5px 5px 10px #bebebe;
    display: flex;
    flex-flow: column;
    position: relative;
    align-items: center;
    h2:nth-child(1) {
      margin-top: 20px;
      font-size: 30px;
      color: #263238;
    }
  }
  .basicmsg_content {
    width: 100%;
    height: 700px;
    background-color: #fff;
    background-image: linear-gradient(#a7a7a8 1px, transparent 1px),
      linear-gradient(to right, #a7a7a8 1px, #efefef 1px);
    background-size: 20px 20px;
    position: relative;
    .basicmsg_cont {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.4);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      .info_warrper {
        width: 1400px;
        height: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        .info_textarea {
          width: 100%;
          height: 55%;
          display: flex;
          flex-flow: row nowrap;
          .info_msg {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 200px;
              height: 200px;
              border-radius: 50%;
            }
          }
          .info_text {
            width: 60%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            p {
              color: #777;
              font-weight: 500;
              margin-top: 20px;
              letter-spacing: 5px;
              line-height: 40px;
              font-weight: bold;
              font-size: 18px;
              span {
                font-weight: bolder;
                color: #444;
                font-size: 20px;
              }
            }
          }
        }
        .hobby_info {
          width: 1300px;
          height: calc(100% - 60%);
          box-sizing: border-box;
          padding: 0 250px;
          .hobby_content {
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.7);
            border: solid 3px #fff;
            border-radius: 30px;
            .hobby_list {
              width: 100%;
              height: 80%;
              box-sizing: border-box;
              padding: 0 50px;
              ul {
                width: 100%;
                height: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                p {
                  width: 100%;
                  line-height: 50px;
                  color: #444;
                  font-weight: bold;
                  text-align: center;
                  font-size: 18px;
                  span {
                    color: #777;
                  }
                }
              }
            }
            .hobby_icon {
              width: 100%;
              height: 20%;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-around;
              align-items: center;
              li {
                cursor: pointer;
                box-sizing: border-box;
                padding: 5px 10px;
                border-radius: 10px;
                i {
                  font-size: 15px;
                  font-weight: bold;
                  color: #fff;
                }
                font-size: 15px;
                color: #fff;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .scroll_content {
    width: 100%;
    .business {
      width: 100%;
      height: 1300px;
      background: url("https://img13.360buyimg.com/ddimg/jfs/t1/181695/32/16900/2965555/61091138E6139b951/5be544286ae48eb9.jpg")
        no-repeat;
      background-size: 120% 1680px;
      background-position: 50% 50%;
      .business_warpper {
        box-sizing: border-box;
        padding: 30px;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-flow: column;
        align-items: center;
        .business_title {
          width: 100%;
          height: 100px;
          font-size: 30px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            width: 30px;
            height: 30px;
          }
        }
        .chart {
          width: 900px;
          height: 550px;
          box-sizing: border-box;
          padding: 40px;
          display: flex;
          flex-flow: row nowrap;
          overflow: hidden;
          .list_chart {
            margin-top: 170px;
            width: 50%;
            height: 10%;
            display: flex;
            flex-flow: column;
            justify-content: space-evenly;
            position: relative;
             transform: translate(-500px);
             &.active{
                  transition: all.5s;
                 transform: translate(0px);
             }
            li {
              margin-top: 20px;
              width: 100%;
              height: 30px;
              .el-progress-bar__outer {
                padding: 1px;
                background: rgba(225, 225, 225, 0.3);
              }
              span {
                display: inline-block;
                margin-bottom: 5px;
                color: #fff;
                font-weight: bold;
                font-size: 15px;
              }
            }
          }
          .right_chart {
            margin-left: 20px;
            margin-top: 170px;
            position: relative;
            width: 50%;
            height: 10%;
            display: flex;
            flex-flow: column;
            justify-content: space-evenly;
            transform: translate(500px);
            &.active{
                 transition: all.5s;
                 transform: translate(0px);
            }
            li {
              margin-top: 20px;
              width: 100%;
              height: 30px;
              .el-progress-bar__outer {
                padding: 1px;
                background: rgba(225, 225, 225, 0.3);
              }
              span {
                display: inline-block;
                margin-bottom: 5px;
                color: #fff;
                font-weight: bold;
                font-size: 15px;
              }
            }
          }
        }
        .AbilityTO {
          width: 900px;
          height: 500px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(6px);
          border-radius: 10px;
          padding: 30px;
          opacity: 0;
          transition: all 0.5s;
          transform: scale(0);
          &.active {
            width: 900px;
            height: 500px;
            opacity: 1;
            transform: scale(1);
          }
          .AbilityTO_countent {
            width: 100%;
            height: 100%;
            .listTap {
              width: 100%;
              height: 60px;
              display: flex;
              flex-flow: row nowrap;
              justify-content: space-around;
              align-items: center;
              position: relative;
              li {
                width: 200px;
                height: 30px;
                font-size: 20px;
                font-weight: bold;
                color: #fff;
                text-align: center;
                cursor: pointer;
                transition: 0.3s all;
                &.active {
                  color: #efefef;
                }
              }
              em {
                position: absolute;
                bottom: 0;
                left: 108px;
                width: 80px;
                height: 5px;
                background: #f90;
                border-radius: 10px;
                transition: all 0.5s;
              }
            }
            .knowMsgList {
              width: 100%;
              height: calc(100% - 60px);
              overflow: hidden;
              ul {
                transition: all 0.5s;
                width: 2700px;
                height: 100%;
                display: flex;
                flex-flow: row nowrap;
                .BusinessSkills {
                  overflow-y: scroll;
                  width: 900px;
                  height: 100%;
                  display: flex;
                  flex-flow: column;
                  align-items: center;
                  .Skills_item {
                    width: 80%;
                    margin-top: 30px;
                    height: 500px;
                    .know_title {
                      width: 100%;
                      height: 70px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      h3 {
                        float: left;
                        text-align: center;
                        line-height: 30px;
                        height: 30px;
                        font-size: 30px;
                        font-weight: bold;
                        color: #fff;
                      }
                      i {
                        float: left;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        svg {
                          width: 25px;
                          height: 25px;
                        }
                      }
                    }
                    .ls {
                      width: 100%;
                      li {
                        width: 100%;
                        height: 30px;
                        padding: 0 50px;
                        box-sizing: border-box;
                        display: flex;
                        flex-flow: row nowrap;
                        align-items: center;
                        i {
                          width: 20px;
                          height: 20px;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                          font-weight: bold;
                          svg {
                            width: 20px;
                            height: 20px;
                            font-weight: bold;
                          }
                        }
                        span {
                          margin-left: 5px;
                          font-size: 18px;
                          color: #efefef;
                          font-weight: bold;
                        }
                      }
                    }
                  }
                }
                .KnowledgeReserves {
                  width: 900px;
                  height: 100%;
                  display: flex;
                  flex-flow: column;
                  justify-content: space-evenly;
                  align-items: center;
                  .Knowledge_item {
                    width: 80%;
                    height: 30px;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    i {
                      width: 30px;
                      height: 30px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      svg {
                        width: 15px;
                        height: 15px;
                      }
                    }
                    h3 {
                      font-size: 20px;
                      color: #fff;
                    }
                    li {
                      display: flex;
                      flex-flow: row;
                      span {
                        margin-left: 10px;
                        padding: 3px 5px;
                        background: #f66;
                        border-radius: 5px;
                        font-weight: bold;
                        text-shadow: 3px 3px 5px rgba(141, 137, 137, 0.5);
                        font-size: 15px;
                        color: #fff;
                      }
                    }
                  }
                }
                .DevelopmentTools {
                  width: 900px;
                  height: 100%;
                  display: flex;
                  flex-flow: column;
                  justify-content: space-evenly;
                  align-items: center;
                  .Develop_item {
                    width: 80%;
                    height: 30px;
                    display: flex;
                    flex-flow: row nowrap;
                    align-items: center;
                    i {
                      width: 30px;
                      height: 30px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      svg {
                        width: 15px;
                        height: 15px;
                      }
                    }
                    h3 {
                      font-size: 20px;
                      color: #fff;
                    }
                    li {
                      display: flex;
                      flex-flow: row;
                      span {
                        margin-left: 10px;
                        padding: 3px 5px;
                        background: #64b5f6;
                        border-radius: 5px;
                        font-weight: bold;
                        font-size: 15px;
                        text-shadow: 3px 3px 5px rgba(141, 137, 137, 0.5);
                        color: #fff;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .cj {
      width: 100%;
      height: 5px;
      background: rgba(0, 0, 0, 0.2);
    }
    .assessment {
      width: 100%;
      height: 600px;
      background: url("https://img10.360buyimg.com/ddimg/jfs/t1/188141/7/16712/2530514/610a062fE3353b3fa/59f1c57b4cbc1fa0.jpg")
        no-repeat;
      background-size: 100% 1100px;
      background-position: 0% 0%;
      position: relative;
      .assessment_content {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        .assessment_warrper {
          width: 1000px;
          height: 100%;
          .assessment_title {
            width: 100%;
            height: 100px;
            font-size: 30px;
            color: #fff;
            font-weight: bold;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 60px;
            svg {
              width: 30px;
              height: 30px;
            }
          }
          .assessment_msg {
            margin-top: 20px;
            width: 1000px;
            height: 400px;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            align-items: center;
            li {
              width: 100%;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                width: 30px;
                height: 30px;
                svg {
                  width: 30px;
                  height: 30px;
                }
              }
              span {
                margin-left: 10px;
                font-size: 20px;
                color: #fff;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
    .content_me {
      width: 100%;
      height: 300px;
      background-color: #fff;
      background-image: linear-gradient(#a7a7a8 1px, transparent 1px),
        linear-gradient(to right, #a7a7a8 1px, #efefef 1px);
      background-size: 20px 20px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      position: relative;
      h3 {
        font-size: 30px;
        color: #455a64;
        font-weight: bold;
      }
      em {
        position: absolute;
        font-size: 30px;
        color: #455a64;
        font-weight: bold;
        top: 35%;
        left: 49.3%;
        animation: emmove 0.8s infinite;
        @keyframes emmove {
          0% {
            top: 35%;
          }
          50% {
            top: 40%;
          }
          100% {
            top: 35%;
          }
        }
      }
      .lasrt_warpper {
        margin-top: 40px;
        bottom: 0;
        height: 100px;
        width: 800px;
        ul {
          box-sizing: border-box;
          padding: 0 200px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          li {
            margin-left: 10px;
            width: 100px;
            height: 100px;
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
              width: 50px;
              height: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              position: relative;
              .imgbg {
                position: absolute;
                width: 50px;
                height: 50px;
                background-color: #fff;
                opacity: 0.8;
                border-radius: 50%;
              }
              img {
                margin: 0;
                padding: 0;
                z-index: 100;
                width: 30px;
                height: 30px;
              }
            }
            &:hover {
              .imgbg {
                animation: popbigfin 0.1s forwards;
              }
              img {
                animation: imgbigfin 0.3s forwards;
              }
              @keyframes popbigfin {
                0% {
                  opacity: 0.9;
                  width: 50px;
                  height: 50px;
                }
                100% {
                  opacity: 0;
                  width: 60px;
                  height: 60px;
                }
              }
              @keyframes imgbigfin {
                0% {
                  width: 30px;
                  height: 30px;
                }
                100% {
                  width: 40px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
    }
    .custom-shape-divider-top-1628063099 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      opacity: 0.3;
      line-height: 0;
    }

    .custom-shape-divider-top-1628063099 svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 150px;
    }

    .custom-shape-divider-top-1628063099 .shape-fill {
      fill: #b2ebf2;
    }
  }
}
</style>