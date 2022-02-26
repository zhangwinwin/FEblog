(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{419:function(t,s,r){"use strict";r.r(s);var e=r(57),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"概念-进程与线程"}},[t._v("概念：进程与线程")]),t._v(" "),r("p",[r("strong",[t._v("进程")]),t._v("是一个程序的运行实例，是系统进行资源分配和调度的一个独立单位。当启动一个程序的时候，操作系统会为该程序创建一个内存用于存放代码运行中的数据和一个执行任务的主线程。我们把这样的环境称为进程。")]),t._v(" "),r("p",[r("strong",[t._v("线程")]),t._v("是进程的一个实体，是CPU调度和分派的基本单位，它是比进程更小。")]),t._v(" "),r("p",[t._v("以上的术语都比较抽象。打个比方："),r("br"),t._v("\n如果用进程比作一列火车，那么线程就是组成火车的一节节车厢。")]),t._v(" "),r("p",[r("strong",[t._v("线程与进程的关系")])]),t._v(" "),r("ul",[r("li",[t._v("线程依附于进程（车厢无法独立运行）")]),t._v(" "),r("li",[t._v("一个进程可以包含多个线程（一列火车包含多个车厢）")]),t._v(" "),r("li",[t._v("不同进程间只能通过IPC通信（不同火车上的乘客只能通过月台换乘）")]),t._v(" "),r("li",[t._v("进程间不会相互影响（不同火车不会互相影响）")]),t._v(" "),r("li",[t._v("一个线程的崩溃导致整个进程的崩溃（一节车厢坏了导致火车停运）")]),t._v(" "),r("li",[t._v("进程间的线程共享进程的数据（火车中的乘客能自由穿梭不同车厢）")])]),t._v(" "),r("p",[r("strong",[t._v("并行处理")]),t._v("  ：一般是指许多指令得以同时进行的计算模式。"),r("br"),t._v("\n也就是说计算机在同一时刻处理多个任务。"),r("br"),t._v("\n举例：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("A=1+1;\nB=1+2;\nC=1+3;\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("p",[t._v("如果用单线程处理，如图所示："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe5a4dab2e5c6?w=838&h=824&f=png&s=87947",width:"500"}}),r("br"),t._v("\n需要四个步骤才能完成。")]),t._v(" "),r("p",[t._v("如果用多线程处理，如图所示："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe624575ba5eb?w=1068&h=894&f=png&s=92069",width:"500"}}),r("br"),t._v("\n而采用多线程处理，只需两个步骤就能完成。"),r("strong",[t._v("所以使用多线程并行处理能提高运行效率")]),t._v("。")]),t._v(" "),r("h2",{attrs:{id:"chrome下的多进程架构"}},[t._v("chrome下的多进程架构")]),t._v(" "),r("p",[t._v("如图所示："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe700981373f7?w=1484&h=766&f=png&s=80462",width:"500"}}),r("br"),t._v("\n从图中可以看出chrome架构包括：1个浏览器进程（Browser Process）、1个网络进程（NetWork Process）、1个插件进程（Plugin Process）、1个GPU进程（GPU Process）与多个渲染进程（Render Process）。"),r("br"),t._v(" "),r("strong",[t._v("每个进程负责的任务")]),t._v("：")]),t._v(" "),r("ul",[r("li",[t._v("浏览器进程：负责用户交互、数据存储、子进程管理以及界面显示等功能。")]),t._v(" "),r("li",[t._v("插件进程：负责插件的管理。因插件容易崩溃，为防止其崩溃从而影响到页面，所以将其隔离起来。")]),t._v(" "),r("li",[t._v("GPU进程：负责UI界面的绘制和3DCSS的实现。")]),t._v(" "),r("li",[t._v("网络进程：负责网络资源加载。")]),t._v(" "),r("li",[t._v("渲染器进程：主要负责将HTML、CSS和JavaScript转化为网页。默认情况下浏览器为每个页面创建一个渲染进程。出于安全考虑，将渲染进程运行在沙箱里面。")])]),t._v(" "),r("p",[t._v("所以打开一个页面至少运行4个进程，分别是1个网络进程、1个渲染进程、1个GPU进程和1个浏览器进程。如果有插件还会有插件进程。"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe8f72a488169?w=1202&h=582&f=png&s=171434",width:"600"}})]),t._v(" "),r("h2",{attrs:{id:"渲染进程的个数"}},[t._v("渲染进程的个数")]),t._v(" "),r("p",[t._v("默认情况下，浏览器进程会为每一个页面创建一个渲染进程。但是从一个页面打开另一个页面，而且这两个页面同属站点时，会共用一个渲染进程。"),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe9536de5ad9d?w=960&h=580&f=png&s=208266",width:"600"}}),r("br"),t._v("\n但是分别打开的时候又会是不同的进程："),r("br"),t._v(" "),r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2019/12/13/16efe982cc424257?w=960&h=584&f=png&s=206648",width:"600"}}),r("br"),t._v(" "),r("strong",[t._v("页面之间的链接")]),r("br"),t._v("\n页面之间是通过JavaScript来🔗的，有以下两种方法：")]),t._v(" "),r("ul",[r("li",[t._v("通过a标签个新建标签建立链接")])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('<a href="www.juejin.im/post/{hash}"></a>\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("这是从掘金首页打开掘金文章的链接，点击该链接会打开新的页面，新页面的window.opener的值就是指向掘金首页的window。这样可以说，这两个页面是有链接的")]),t._v(" "),r("ul",[r("li",[t._v("通过window.open()打开新链接同理")])]),t._v(" "),r("p",[t._v("在"),r("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/browsers.html#groupings-of-browsing-contexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("WhatWG规范"),r("OutboundLink")],1),t._v("中，把这一类具有相互联系关系的页面称为浏览器上下文组（browsing context group)"),r("br"),t._v(" "),r("strong",[t._v("Chrome将浏览器上下文组中属于同一站点的标签共用一个渲染进程。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);