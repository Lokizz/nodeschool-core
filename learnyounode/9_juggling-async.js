// TODO 9. Juggling async
// Same as the previous problem (HTTP COLLECT)
// But this time three URLs would be provided as the first three cmd arguments
// Must collect the complete content; one line per URL in the same order as the URLs provided

const http = require('http')
const bl = require('bl')

let urlList = []
// for...of to make sure traverse in order
for(let arg of process.argv.slice(2)) {
  urlList.push(arg)
}

let resultList = []

for(let idx = 0; idx < urlList.length; idx++) {
  http.get(urlList[idx], res => {
    res.pipe(bl((err, data) => {
      if(err) return console.error(err)

      resultList[idx] = data.toString()

      if(resultList.length === urlList.length) {
        for(let result of resultList) {
          console.log(result)
        }
      }
    }))
  })
}


// todo: official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }