/*那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔子；
假定每对兔子都是一雌一雄，试问一对兔子，第 n 个月能繁殖成多少对兔子？（使用 callee
完成）*/
var result = [];
function fn(n) { //典型的斐波那契数列
  if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  } else {
    if (result[n]) {
      return result[n];
    } else {
      //argument.callee()表示 fn()
      result[n] = arguments.callee(n - 1) + arguments.callee(n
        - 2);
      return result[n];
    }
  }
}