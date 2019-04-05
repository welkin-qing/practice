var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputs = [];
var num = 0;
rl.on('line', function(data) {
    if(num == 0){
        num = Number(data.trim());
    } else {
        inputs.push(data.trim());
        if (num == inputs.length) {
            // 处理

            result = innum(inputs,num);
            // 输出结果

            console.log(fun(result,num));

            // 清0
            inputs.length = 0;  //不可改动
            num = 0;    //不可改动
        }
    }
});


function fun(x,n) {
  var y = 0;
  for(let i = 0;i < n;i++){
    for(let j = 0;j<n;j++)
    {
      if(x[i][j] == 1){
        var a = 0;
        for (let z = 0; z <= j;z++){
          if(x[i][z] == 1)
          {
            a++;
          }
          if(a>y){
            y=a;
          }
        }
        for (let z = 0; z <= j;z++){
          a=0;
          if(x[i][z] == 1)
          {
            a++;
          }
          if(a>y){
            y=a;
          }
        }
      }
    }
  }
  return y;
}


function innum(inputs,num){
  let inputt = new Array();
  for(let i = 0;i<inputs.length;i++){
    inputt[i] = new Array();
    for(let j =0;j<inputs.length;j++){
      inputt[i][j] = inputs[i][j];
    }
  }
  return inputt;
}
