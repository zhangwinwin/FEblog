---
title: 女朋友问什么是动态规划，应该怎么回答？
---
## 前言
当我在看动态规划的文章时候，我女朋友凑个头过来问：啥是动态规划？  
我如果直接说：“动态规划(dynamic programming)是一种分阶段求解策略问题的数学思想。它有三个概念：  
* 最优子结构
* 边界
* 状态转移公式

估计今晚又得跪键盘。我想了想之后跟她说：走吧，我带你去喝奶茶吧。
> “You know, I couldn’t do it. I couldn’t reduce it to the freshman level. That means we really don’t understand it.” --费曼

‘你好，两杯波霸奶茶谢谢’。我对服务员说道，之后我们就找了个座位坐下了。  
## 吃珍珠
女朋友：“快说，动态规划是什么。这跟奶茶有什么关系？”  

我：“别急，我先问你一个问题：如果一杯奶茶有10颗珍珠，每吸一次只能吸一颗或者两颗。那么一共有多少种吸法？”  
> 问题：如果一杯奶茶有10颗珍珠，每吸一次只能吸一颗或者两颗。那么一共有多少种吸法？” 

女朋友：呃，我想想。如果每次吸一颗，那就是1+1+1+1+1+1+1+1+1+1=10，如果每次吸两颗：2+2+2+2+2=10...我想不出了，投降”   
> 如果每次吸一颗，那就是1+1+1+1+1+1+1+1+1+1=10  
> 如果每次吸两颗：2+2+2+2+2=10

我：“好吧，这样，我换个问法：假设你只差一次就吸到第10颗了，那么这个时候会出现几种情况？” 

女朋友：“em～~,阿！两种：因为一次只能吸一颗或者两颗嘛，所以第一种是第9颗到第10颗，第二种是第8颗到10颗”  

我：“真聪明，我们先不管怎么从第0颗吸到第8颗，也不管从第0颗怎么吸到第9颗。如果要吸到第10颗，那必定是从第8颗或第9颗开始”  

女朋友：“嗯嗯”  

我：“接下来我们就抽象一点。如果已知从第0颗到第8颗有x种方法，从第0颗到第9颗有y种方法。那么从第0颗到第10颗有多少种方法呢”  

女朋友：“我知道，是x+y种方法”  

我：“对的。我们稍稍用点数学的方法表示：f(10)表示从第0颗到第10颗的方法，f(9)表示从第0到第9的方法，f(8)...”  

女朋友：“我知道f(8)表示从第0颗到第8颗”  

我：“哇，现在都学会抢答了。所以我们可以得出f(10)=f(9)+f(8)。 新问题出现了：如何计算f(9)和f(8)呢？”  

女朋友：“我知道，f(9)=f(8)+f(7), f(8)=f(7)+f(6)”
> f(9)=f(8)+f(7), f(8)=f(7)+f(6)

我：“没错，这就是动态规划的思想：将一个问题拆成几个子问题，分别求解这些子问题，即可推断出大问题的解。”  

我：“但是呢，当只有一颗或者两颗的时候运用这个公式是错的。因为这两个是已知条件。由此可以得出结论”  
>f(1) = 1;  
>f(2) = 2;  
>f(n) = f(n-1) + f(n-2); n>2  

女朋友：“哇塞，厉害了”  

“你好，你们的奶茶到了”，服务员把奶茶送过来了，时间刚刚好。  

## 对程序员来说
当然上面所说的只能很浅显的知识。而且也不是真正意义上的动态规划。  
1、递归求解
```
function getClimbingWay(n) {
  if (n<1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return getClimbingWay(n-1) + getClimbingWay(n-2)
}
// 时间复杂度为：O(2**N)
```

因为从公式可以得出f(3) = f(2) + f(1), f(4) = f(3) + f(2)。所以在每次迭代中只要保留之前的两个状态即可，就可以推导最新的状态。   

2、动态规划
```
function getClimbingWay(n, map) {
  if (n<1) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  let pre = 1, pre2 = 2, res = 0
  for (let i=3; i<=n; i++) {
    res = pre + pre2;
    pre = pre2;
    pre2 = temp;
  } 
  return temp
}
// 程序从i=3开始迭代，一直到i=n结束。每一次迭代，都会计算出多一级台阶的走法数量。迭代过程中只需保留两个临时变量a和b，分别代表了上一次和上上次迭代的结果。
```


