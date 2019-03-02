
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('sample.txt'),
  crlfDelay: Infinity
});
var a=''
rl.on('line', (line) => {
 // console.log(`文件的每行内容：${line}`);
  a=line;
  //console.log(a)
  var b = a.split(" ")
  //console.log(b[0])
  var c = require('child_process');
  c.exec('start https://www.'+b[0]+'.com/s?wd='+b[1]+'')
});

//var c = require('child_process');
//c.exec('start https://www.baidu.com/s?wd=北京时间');



 

