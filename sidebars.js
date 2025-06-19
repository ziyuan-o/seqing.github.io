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
 
  //在线视频
  OnlineVideo: [
    'OnlineVideo/OnlineVideo-intro',
    'OnlineVideo/OnlineVideo-Selfie',
    'OnlineVideo/OnlineVideo-Level3',
    'OnlineVideo/OnlineVideo-Tanhua',
    'OnlineVideo/OnlineVideo-Media',
    'OnlineVideo/OnlineVideo-cartoon',
    'OnlineVideo/OnlineVideo-SouthKorea',
    {
      label: '网红主播',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'OnlineVideo/Anchor/OnlineVideo-Anchor',
        'OnlineVideo/Anchor/Anchor-Dollsister',
        'OnlineVideo/Anchor/Anchor-Kitty',
        'OnlineVideo/Anchor/Anchor-Ashe',
      ],
    },

  ],

  //导航页
  daohang: [
    'daohang/daohang-intro',
    'daohang/daohang-avjb'
  ],

  //其它
  qita: [
    'qita/qita-hyip',
    {
      label: '娱乐赌场',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'casino/casino-intro',
        'casino/casino-navigation',
      ],
    },
    //VPN软件
    {
      label: 'vpn软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'VPN/vpn-what',
        'VPN/vpn-Elink',
        'VPN/vpn-Easy',
        'VPN/vpn-365vpn',
      ],
    },
    'qita/vip-video',
    'qita/M3U8-video',

  ],
 
  }





module.exports = sidebars
