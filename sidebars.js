/*
 * @Author: XJN
 * @Date: 2023-07-02 09:37:16
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2024-01-19 17:17:12
 * @FilePath: \blog\sidebars.js
 * @Description: 
 * @前端实习生：资源挖掘博客: 
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  新人必看:{
    前言: ["新人必看/新人必看-intro",
           "新人必看/从哪里开始",
           "新人必看/常见问题",
           "新人必看/投资词典",
           "新人必看/投资的金科玉律"
    ]
  },
  投资项目:{
    前言: ["投资项目/投资项目-intro"],
    优质项目: ["投资项目/优质项目/aitimart"],
    审查项目: ["投资项目/审查项目/aonis"]
    
  },
  VPN软件:{
    VPN: ["VPN软件/艾林克",
          "VPN软件/安易"
    ]
    
  },
  钱包:{
    钱包: ["钱包/火币",
    ],
    atchange: [
      "钱包/atchange/atchange注册",
      "钱包/atchange/atchange兑换"
    ],
    payeer: [
      "钱包/payeer/payeer注册"
      
    ]
  }

}

module.exports = sidebars
