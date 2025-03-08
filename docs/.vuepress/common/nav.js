// nav
// const javaNav = require("../nav/javaNav");
// const databaseNav = require("../nav/databaseNav");
// const frameNav = require("../nav/frameNav");
// const springNav = require("../nav/springNav")
// 微服务统一放在框架里
// const cloudNav = require("../nav/cloudNav");
// const toolNav = require("../nav/toolNav");
// const frontEnd = require("../nav/frontEnd");
// const moreNav = require("../nav/moreNav");
const indexNav = require("../nav/indexNav");
const subnav01 = require("../nav/subnav01");
const subnav02 = require("../nav/subnav02");
const subnav03 = require("../nav/subnav03");
const subnav04 = require("../nav/subnav04");
const subnav05 = require("../nav/subnav05");
const subnav06 = require("../nav/subnav06");
const subnav07 = require("../nav/subnav07");
const subnav08 = require("../nav/subnav08");
const subnav09 = require("../nav/subnav09");
const subnav10 = require("../nav/subnav10");
const subnav11 = require("../nav/subnav11");
module.exports = [
  {
    text: '首页', link: '/'
  },
  // {
  //   text: '导航站', link: '/navigation/'
  // },
  { text: '主目录', link: '/list/' },
  subnav01,   // 导航01
  subnav02,   // 导航02
  subnav03,   // 导航03
  subnav04,   // 导航04
  subnav05,   // 导航05
  subnav06,   // 导航06
  subnav07,   // 导航07
  subnav08,   // 导航08
  subnav09,   // 导航09
  subnav10,   // 导航10
  subnav11,   // 导航11
  { text: '本站', link: '/softhubweb/' },
  indexNav,   //索引导航
  // {
  //   text: '留言区', link: '/message-area/'
  // },
]
