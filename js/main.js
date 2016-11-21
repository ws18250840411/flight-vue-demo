require('bootstrap/less/bootstrap.less')
require('../less/style.less')
require('../less/helpers.less')

import DirectFlightInfo from './../components/DirectflightInfo.vue'
import TransferFlightInfo from './../components/TransferFlightInfo.vue'
import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  data: {
    directFlight: {
      flightCode: 'MU9345',
      sharedFlightCode: 'FM9345',
      aircraft: '波音737-800',
      departInfo: {
        city: '上海',
        airport: '浦东国际机场',
        terminal: 'T2',
        time: '2016-10-13 22:30'
      },
      arriveInfo: {
        city: '武汉',
        airport: '天河国际机场',
        terminal: 'T2',
        time: '2016-10-14 00:35'
      },
      subclass: 'Y',
      supplier: {
        name: '上海华程西南旅行社有限公司',
        code: '08309722'
      }
    },
    flights: [{
      flightCode: 'CA1794',
      aircraft: '空中客车 A320',
      departInfo: {
        city: '呼和浩特',
        airport: '白塔国际机场',
        time: '2016-10-31 19:25'
      },
      arriveInfo: {
        city: '杭州',
        airport: '萧山国际机场',
        terminal: 'T1',
        time: '2016-10-31 21:50'
      },
      subclass: 'Y',
      supplier: {
        name: '上海华程西南旅行社有限公司',
        code: '08309722'
      }
    }, {
      flightCode: 'MU1731',
      aircraft: '空中客车 A321',
      departInfo: {
        city: '杭州',
        airport: '萧山国际机场',
        terminal: 'T1',
        time: '2016-11-01 07:30'
      },
      arriveInfo: {
        city: '深圳',
        airport: '宝安国际机场',
        terminal: 'T3',
        time: '2016-11-01 09:50'
      },
      subclass: 'Y',
      supplier: {
        name: '上海华程西南旅行社有限公司',
        code: '08309722'
      }
    }]
  },
  components: {
    DirectFlightInfo,
    TransferFlightInfo
  }
})
