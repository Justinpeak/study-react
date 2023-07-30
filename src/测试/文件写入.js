// import fs from 'fs'
// const App = require('./状态提升')
const axios = require('axios')
const fs = require('fs')

// axios({
//   url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3156433',
//   method: 'get',
//   headers: {
//     'X-Client-Info': '{ "a":"3000","ch":"1002","v":"5.2.1","e":"16883776119196409743998977","bc":"110100"}',
//     'X-Host': 'mall.film-ticket.film.list'
//   }
// })

axios({
  url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1238516',
  method: 'get',
  headers: {
    'X-Client-Info': '{ "a": "3000", "ch": "1002", "v": "5.2.1", "e": "16883776119196409743998977", "bc": "110100"}',
    'X-Host': 'mall.film-ticket.cinema.list'
  }
})
  .then(res => {
    let obj = res.data.data.cinemas

    let JSONString = JSON.stringify(obj)
    fs.writeFile('./ChoiceData.json', JSONString, function (err) {
      // 如果文件写入成功则返回null
      // 如果文件写入失败则返回一个错误对象
      if (err !== null) {
        console.log('文件写入失败！')
      } else {
        console.log('文件写入成功')
      }
    })
  })
  .catch(eer => console.log(eer, '错误'))
