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
  HYIP:[
    'money/HYIP/hyip-intro',
    {
      label: '新人必看',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'money/HYIP/新人必看/hyip-start',
        'money/HYIP/新人必看/hyip-skamopad',
        'money/HYIP/新人必看/hyip-suitable',
        'money/HYIP/新人必看/hyip-deposit',
        'money/HYIP/新人必看/hyip-diversity',
        'money/HYIP/新人必看/hyip-Strategy',
        'money/HYIP/新人必看/hyip-dictionary',
        'money/HYIP/新人必看/hyip-invest',
        'money/HYIP/新人必看/hyip-project',
        'money/HYIP/新人必看/hyip-question',
      ],
    },
    {
      label: '优质项目',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'money/HYIP/优质项目/hyip-aitimart',
        
      ],
    },
    {
      label: '审核项目',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'money/HYIP/审核项目/hyip-ai-btse',
        'money/HYIP/审核项目/hyip-gentius',
        'money/HYIP/审核项目/hyip-aerogame',
        'money/HYIP/审核项目/hyip-luckgalaxy',
        'money/HYIP/审核项目/hyip-selwix'
      ],
    },
    {
      label: '电子钱包',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'money/HYIP/电子钱包/wallet-Huobi',
        
      ],
    }
  ],
  APP赚钱:[
    'money/APP赚钱/app-intro',
    'money/APP赚钱/rentuibang',
  ],
  娱乐赌场:[
    'money/casino/casino-intro',
    
  ],
  休闲专区:[
    "休闲专区/vip-video",
    "休闲专区/M3U8-video",
    {
      label: '黄色视频',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '休闲专区/黄色视频/yellow-intro',
        '休闲专区/黄色视频/yellow-video',
        '休闲专区/黄色视频/yellow-Level3',
        '休闲专区/黄色视频/yellow-Anchor',
        '休闲专区/黄色视频/yellow-Kitty',
        '休闲专区/黄色视频/yellow-Ashe',
        '休闲专区/黄色视频/yellow-Dollsister',
        '休闲专区/黄色视频/yellow-daohang'
      ],
    }
  ],
  软件仓库:[
    {
      label: 'VPN软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/VPN软件/vpn',
        '软件仓库/VPN软件/艾林克',
        '软件仓库/VPN软件/安易',
        '软件仓库/VPN软件/快连'
      ],
    },
    {
      label: 'win软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/win软件/windows',
        '软件仓库/win软件/win-office',
        '软件仓库/win软件/win-game',
        '软件仓库/win软件/win-system',
      ],
    },
    {
      label: '安卓软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/安卓软件/Android',
        '软件仓库/安卓软件/and-app',
        '软件仓库/安卓软件/and-tv',
      ],
    }
    
  ]
 
  }





module.exports = sidebars
