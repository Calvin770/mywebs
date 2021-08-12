const state = {
    hobbyList: [{
        text: "开发能力",
        icon: 'el-icon-user',
        bg: "#1E88E5"
    }, {
        text: "时间管理",
        icon: 'el-icon-alarm-clock',
        bg: "#00BCD4"
    }, {
        text: "沟通能力",
        icon: 'el-icon-coffee-cup',
        bg: "#C5E1A5"
    }, {
        text: "执行能力",
        icon: 'el-icon-edit',
        bg: "#FFE082"
    }, {
        text: "团队意识",
        icon: 'el-icon-data-line',
        bg: "#FF7043"
    }, {
        text: "自控能力",
        icon: 'el-icon-setting',
        bg: "#26A69A"
    }],
    listchart: [{
            title: "HTML/HTML5",
            value: 80,
            color: '#EF5350'
        }, {
            title: "CSS/CSS3",
            value: 85,
            color: '#EC407A'
        }, {
            title: "JS/ES6",
            value: 80,
            color: '#AB47BC'
        }, {
            title: "NODE/NPM",
            value: 60,
            color: '#B71C1C'
        },
        {
            title: "CSS/Sass",
            value: 80,
            color: '#D81B60'
        }, {
            title: "CSS/Less",
            value: 75,
            color: '#1565C0'
        }, {
            title: "Vue/MVVM",
            value: 80,
            color: '#880E4F'
        }, {
            title: "React/MVC",
            value: 80,
            color: '#4A148C'
        }, {
            title: "WeChat",
            value: 80,
            color: '#9575CD'
        }, {
            title: "WebPack",
            value: 80,
            color: '#7986CB'
        }
    ],
    rightchart: [{
        title: "Koa",
        value: 70,
        color: '#64B5F6'
    }, {
        title: "Egg",
        value: 80,
        color: '#4DD0E1'
    }, {
        title: "Nginx",
        value: 80,
        color: '#1DE9B6'
    }, {
        title: "Git",
        value: 80,
        color: '#9CCC65'
    }, {
        title: "TypeScript",
        value: 70,
        color: '#039BE5'
    }, {
        title: "Ant D",
        value: 80,
        color: '#D4E157'
    }, {
        title: "Element",
        value: 80,
        color: '#FFD54F'
    }, {
        title: "Vant",
        value: 80,
        color: '#FB8C00'
    }, {
        title: "MySqL",
        value: 60,
        color: '#009688'
    }, {
        title: "Http",
        value: 80,
        color: '#FF9100'
    }],
    listtap: [{
        title: "专业知识",
        key: "1"
    }, {
        title: "开发工具",
        key: '2',
    }, {
        title: "业务技能",
        key: '3'
    }],
    BusinessSkills: [{
        name: "基础规范",
        details: [
            '了解HTTP/TCP/UDP协议、浏览器规范、浏览器缓存机制',
            '熟悉HTML5、CSS3新特性，能够合理使用标签和样式',
            '熟悉ES6标准、以及AMD和CMD与ES6模块化的规范和由来',
            '熟练使用Sass与Less等扩展语言来排版与编写CSS3样式',
            '熟练使用扩展工具已减少回流和重绘提高性能来编写页面样式',
            '熟练使用媒体查询，对页面进行响应式布局',
            '熟练使用HTML结合语义化结合精简CSS渲染页面',
            '熟练使用模块化，实现行为和结构分离的编写逻辑',
            '熟练使用不同数据格式结合API对数据进行格式化处理',
            '熟悉Http请求原理且能够运用Axios/Ajax/Fetch对数据进行请求修改',
            '熟悉Http同源策略，且能够运用反向代理等进行跨域处理'
        ]
    }, {
        name: "框架使用",
        details: [
            '了解MVC/MVVM框架的工作原理以及相关概念',
            '熟悉Vue/MVVM的双向绑定原理，并且能够手写简单源码',
            '熟悉React/MVC的原理以及State与Props的运作原理',
            '熟练使用Vue开发项目，且了解Vue3以及书写过相应Demo',
            '熟练使用React/Hooks开发项目,且了解React@16版本后的新特性',
            '熟悉React/Fiber,结合相应情况拥抱异步渲染',
            '熟练使用Vuex进行对vue的状态管理，可拆分多模块管理',
            '熟练使用Redux进行状态管理，可对Redux进行抽离多模块管理',
            '熟练使用Egg结合前段框架进行前后端分离开发',
            '能够使用Umi+Dva进行合作开发',
            '能够使用微信开发者工具对微信小程序进行开发',
        ]
    }, {
        name: "构建编译",
        details: [
            '熟练使用Vue-cli进行项目打包',
            '熟悉WebPack的工作原理及其使用方法',
            '熟悉WebPack的插件以及转换器使用方法',
            '熟练WebPack对项目进行开发、测试，根据不同情况进行不同编译',
            '能够使用TypeScript对JS代码进行扩展和规范化',
        ]
    }, {
        name: "NPM",
        details: [
            '熟悉NPM模块的开发与发布过程，根据模块化规范编写代码',
            '熟悉WebPack的工作原理及其使用方法',
            '熟悉WebPack的插件以及转换器使用方法',
            '熟练WebPack对项目进行开发、测试，根据不同情况进行不同编译',
            '能够使用TypeScript对JS代码进行扩展和规范化',
        ]
    }, {
        name: "部署上线",
        details: [
            '熟练完成从域名注册到部署上线的全部过程',
            '熟练使用Nginx对项目上线以及ssl证书的配置',
            '熟练使用git对项目版本进行管理和编译',
            '熟悉web项目在服务器端的部署以及在服务器上的运行环境',
            '熟练使用mysql对项目数据库进行部署以及与项目后台链接'
        ]
    }, {
        name: "辅助工具",
        details: [
            '熟练使用ElementUI结合项目进行开发',
            '熟练使用AntD结合React/Vue项目进行开发',
            '熟练使用Vant结合Vue项目进行开发',
            '能够使用Vite结合Vue3进行项目的开发',
            '熟练使用Axios对后台数据进行请求，进行响应拦截操作',
            '熟练使用Mock对数据进行模拟结合项目进行开发',
            '能够使用Bootstrap对项目进行开发'
        ]
    }],
    DevelopmentTools: [{
        name: "代码开发",
        details: ['Vscode', 'Sublime', '微信开发者工具']
    }, {
        name: "图片处理",
        details: ['Photoshop', 'Kieng图床']
    }, {
        name: "服务应用",
        details: ['Xshell', '宝塔面板', 'PostMan', 'phpStudy', 'Navicat']
    }, {
        name: "交互应用",
        details: ['AE', 'PrCC']
    }, {
        name: "网站应用",
        details: ['Google Chrome', 'Firefox', 'Microsoft Edge']
    }, {
        name: "移动应用",
        details: ['Android', 'Safari', 'HarmonyOS']
    }, {
        name: "辅助工具",
        details: ['Git/SVN', 'Cmder']
    }],
    KnowledgeReserves: [{
        name: "基础知识",
        details: ['HTML/HTML5', 'CSS/CSS3', 'JS/ES6', 'Node/Npm']
    }, {
        name: "构建编译",
        details: ['Sass/Less', 'TypeScript', 'Webpack', 'Vite', 'Babel']
    }, {
        name: "辅助工具",
        details: ['ECharts', 'BMap', 'Mock', 'IconFont']
    }, {
        name: "数据框架",
        details: ['Vue', 'React', 'Umi', 'Taro', '微信开发者']
    }, {
        name: "设计框架",
        details: ['Vant', 'ElementUI', 'AntD', 'Bootstrap']
    }, {
        name: "状态管理",
        details: ['Redux', 'VueX', 'Dva', 'Redux-Saga']
    }, {
        name: "服务框架",
        details: ['Express', 'Koa', 'Egg']
    }, {
        name: "开发思路",
        details: ['设计模式', '性能优化', '严格模式', '响应式布局', '构建部署', '数据持久化']
    }],
    assessment: {
        title: '自我评价',
        details: [
            '具有团队意识，能够熟练沟通、在乎集体荣誉',
            '具有强执行力，能够每件事都有回应、有着落',
            '具有时间观念，事情完成只有提前，没有延期',
            '具有自主能力，具备独立开发测试项目的能力',
            '具有扎实基础，能够熟练完成不同项目的开发',
            '具有学习精神，能够不断学习市场前沿新技术',
            '在不断学习中提升自己，在挫折面前磨砺自己'
        ]
    }

}
const mutations = {

}
const actions = {

}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters,
}