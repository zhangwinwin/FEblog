(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{415:function(a,s,t){"use strict";t.r(s);var e=t(57),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[a._v("前言")]),a._v(" "),t("p",[a._v("众所周知"),t("code",[a._v("JavaScript")]),a._v("中"),t("code",[a._v("0.1 + 0.2")]),a._v("是不等于"),t("code",[a._v("0.3")]),a._v("的，这非常容易求证。如下图，在"),t("code",[a._v("chrome")]),a._v("控制台中显示"),t("br"),a._v(" "),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172ac883d2a9f626~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("而且这似乎不是"),t("code",[a._v("JavaScript")]),a._v("的问题。")]),a._v(" "),t("p",[a._v("在"),t("code",[a._v("java")]),a._v("中，输入"),t("code",[a._v("0.1 + 0.2")]),a._v("也是这个数，如下图：。"),t("br"),a._v(" "),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172ac8f9a57347e9~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("那问题来了：为什么计算机计算"),t("code",[a._v("0.1+0.2")]),a._v("会不等于"),t("code",[a._v("0.3")]),a._v("呢？")]),a._v(" "),t("h2",{attrs:{id:"浮点数的存储方式"}},[a._v("浮点数的存储方式")]),a._v(" "),t("p",[a._v("想要弄清楚这个问题，首先得清楚浮点型在计算机中是如何存储的。")]),a._v(" "),t("p",[a._v("1、浮点数转换成二进制，并采用科学计数法表示。"),t("br"),a._v("\n2、浮点型的存储实现是按照"),t("code",[a._v("IEEE754")]),a._v("标准的，可分为两种：")]),a._v(" "),t("ul",[t("li",[a._v("单精度--32位")]),a._v(" "),t("li",[a._v("双精度--64位")])]),a._v(" "),t("h3",{attrs:{id:"单精度浮点型存储"}},[a._v("单精度浮点型存储")]),a._v(" "),t("p",[a._v("单精度浮点型存储，举个例子："),t("br"),a._v("\n在十进制中，"),t("code",[a._v("0.75")]),a._v("用科学计数法可以表示为"),t("code",[a._v("7.5 * 10^-1")]),a._v("，同样在二进制中，"),t("code",[a._v("0.75")]),a._v("可以表示为："),t("br"),a._v(" "),t("code",[a._v("0.75 = 1.1 * 2^-1")]),t("br"),a._v("\n即："),t("br"),a._v(" "),t("code",[a._v("0.75 = （1 * 2^0 + 1 * 2^-1）* 2 ^-1")]),t("br"),a._v("\n其中幂次方-1用阶码表示，而基数1.1由于二进制整数部分都是1，所以去掉1留下0.1作为尾数部分（因为都是1点多的形式，所以没有必要存放1）。因此0.75在单精度浮点数是这样表示的：\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172aca82d31a186b~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("阶码要加上一个基数，这个基数为"),t("code",[a._v("2^(n-1) -1")]),a._v("，n为阶码的位数，32位的阶码位是8位，所以这个基数为127，8位阶码能表示的最小整数位0，最大整数位255，所以能表示的指数范围为："),t("code",[a._v("-127~128")]),a._v("，上面要表示的指数为-1，需要加上基数127，就变成126，如上图所示。")]),a._v(" "),t("p",[a._v("而尾数为0.1，所以尾数的最高位为1，后面的值填充0。"),t("br"),a._v("\n反过来，如果知道一个二进制的存储方式，同样地可以转换成10进制，如上结果为："),t("br"),a._v(" "),t("code",[a._v("(1 + 1 * 2^-1) * 2^(126 - 127) = 1.5 * 2^-1 = 0.75")])]),a._v(" "),t("p",[a._v("那么按照上面的理论，在二进制中0.1又该如何表示呢？")]),a._v(" "),t("p",[a._v("0.1无法被表示为这种方式，就像1/3无法在十进制中精确表示一样，在二进制中只能是用一个数尽可能的接近0.1。")]),a._v(" "),t("h3",{attrs:{id:"双精度浮点型存储"}},[a._v("双精度浮点型存储")]),a._v(" "),t("p",[t("code",[a._v("JavaScript")]),a._v("的"),t("code",[a._v("Number")]),a._v("类型使用的是双精度浮点型，也就是C语言中的"),t("code",[a._v("double")]),a._v("类型。")]),a._v(" "),t("p",[a._v("因为C语言能够读取原始的内存信息，所以用C语言看看在双精度浮点型中0.1存储成什么样。(代码来自这"),t("a",{attrs:{href:"https://stackoverflow.com/questions/111928/is-there-a-printf-converter-to-print-in-binary-format",target:"_blank",rel:"noopener noreferrer"}},[a._v("Is there a printf converter to print in binary format?"),t("OutboundLink")],1),a._v(")")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('#include <stdio.h>\n\nvoid printBits(size_t const size, void const * const ptr)\n{\n    unsigned char *b = (unsigned char*) ptr;\n    unsigned char byte;\n    int i, j;\n\n    for (i=size-1;i>=0;i--)\n    {\n        for (j=7;j>=0;j--)\n        {\n            byte = (b[i] >> j) & 1;\n            printf("%u", byte);\n        }\n    }\n    puts("");\n}\nint main (void)\n{\n\tdouble a = 0.1;\n    printBits(sizeof(a), &a);\n  \treturn 0;\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br")])]),t("p",[a._v("结果如下图所示：\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172acdaeca49fd4c~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("双精度浮点数用11位表示阶码，52位表示尾数，如图所示\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/15/172b84c3f9d764b9~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("所以双精度的阶码基数为"),t("code",[a._v("2^10 - 1 = 1023")]),a._v("，0.1的阶码为"),t("code",[a._v("01111111011")]),a._v("，等于十进制1019，所以它的指数为-4，尾数约等于0.6\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172ace3fac93ab26~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("有了这个尾数再乘上指数，如图所示\n"),t("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/13/172ace93e9cef0e7~tplv-t2oaga2asx-image.image",alt:""}})]),a._v(" "),t("p",[a._v("也就是说0.1的实际存储要比0.1大。"),t("br"),a._v("\n0.2和0.1的区别在于0.2比0.1的阶码大了1，其他完全一样，也就是说0.2的实际存储也是偏大的。")]),a._v(" "),t("p",[a._v("所以0.1 + 0.2是大于0.3！")]),a._v(" "),t("h2",{attrs:{id:"解决方法"}},[a._v("解决方法")]),a._v(" "),t("p",[a._v("解决方法有很多种，比如"),t("code",[a._v("mathjs")]),a._v("库、"),t("code",[a._v("decimal.js")]),a._v("等。这些库都很好的解决这个问题。")]),a._v(" "),t("p",[a._v("但如果只是涉及到比较简单的浮点型相加而去引用第三方库，无疑是用大炮打蚊子。")]),a._v(" "),t("h3",{attrs:{id:"tofixed"}},[a._v("toFixed")]),a._v(" "),t("p",[a._v("在"),t("code",[a._v("JavaScrip")]),a._v("t原生方法中提供了一个方法："),t("code",[a._v("Number.prototype.toFixed()")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",target:"_blank",rel:"noopener noreferrer"}},[a._v("toFixed()"),t("OutboundLink")],1),a._v("方法使用定点表示法来格式化一个数")]),a._v(" "),t("p",[a._v("语法如下：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("numObj.toFixed(digits)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中参数digits是小数点后数字的个数：介于0到20之间。")]),a._v(" "),t("p",[a._v("返回的是一个数值的字符串形式，所以需要将结果强制转换为浮点型。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("parseFloat((0.1 + 0.2).toFixed(10))//结果为0.3\nparseFloat((0.3 / 0.1).toFixed(10)) // 结果为 3  \nparseFloat((0.7 * 180).toFixed(10))//结果为126\nparseFloat((1.0 - 0.9).toFixed(10)) // 结果为 0.1   \nparseFloat((9.7 * 100).toFixed(10)) // 结果为 970 \nparseFloat((2.22 + 0.1).toFixed(10)) // 结果为 2.32\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[a._v("总结")]),a._v(" "),t("p",[a._v("计算机中使用"),t("code",[a._v("IEEE754")]),a._v("标准实现的浮点型存储都会有这个问题：用二进制来存储小数，而大部分小数转成二进制之后都是无限循环的值，因此存在取舍问题，也就是精度丢失。从而使得"),t("code",[a._v("0.1 + 0.2 !== 0.3")]),a._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);