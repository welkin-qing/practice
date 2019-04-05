if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
    //\s 匹配空白字符：回车、换行、制表符 tab 空格
  }
}
// test the function
var str = " \t\n test string ".trim();
alert(str == "test string"); // alerts "true"



//： Javascript 事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出 1 2 3？
for (var i = 1; i <= 3; i++) {
  setTimeout((function (a) { //改成立即执行函数
    console.log(a);
  })(i), 0);
};
1 //输出
2
3