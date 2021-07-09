const http = require('http');

const url = 'http://localhost:1234/api/parsetime/2013-08-10T12:10:15.474Z'

http.get(url, (res) => {
  res.setEncoding = 'utf8';
  
  let rawData = '';

  res.on('data', (chunk) => {
    rawData += chunk;
  })

  res.on('end', () => {
    console.log(rawData);
  })
})