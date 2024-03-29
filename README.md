# react-base-staging-weather
**基于create-react-app2.x，基础项目集成搭建，包含路由，其中一个页面仿腾讯天气，基于react方向主流技术栈实现，脚手架create-react-app，全部技术栈：react+mobx+antd+react-router4.x+axios+webpack4.x**

## 更新日志
- 2018.10 基于CRA1.X搭建
- 2018.11.13 基于CRA2.X重构，业务无变化，主要是框架配置方面的改进
- 2019.6.2 我的域名申请下来了，这个项目暂时会作为主项目挂载，更新一下项目地址
- 2019.8.30 主页面挂载备案信息，页面加入loading优化
- 2020.6.10 针对无法查询到的地区输入做容错处理，如果查询不到地区天气信息，则直接重查询当前默认ip地址的天气
- 2021.4.30 新增yarn.lock，新增依据ip查询天气错误的情况下，会默认查询并提示（ng代理接口会导致ip查询为代理服务器本地的ip，还是无法精准查询到真实ip）
- 2021.12.6 修改备案链接工信部网址

## usage:
1. `git clone xxxx`
2. `cd xxx`
3. `npm i or yarn add`

## run in dev:
`npm start` or `yarn start`

## build:
`npm run build` 

## 主要技术栈
- 脚手架create-react-app2.x 
- react + mobx  
- ui antd 
- 路由react-router4.x
- 数据请求axios 
- 图表echarts-for-react
- 其他lodash等
- 开发代码优化eslint+prettier
- 项目打包 webpack4.x
- 后端api：第三方api平台

## 项目适用
1. 希望练习基础项目搭建的小伙伴参考
2. 技术栈是react+mobx+antd+axios（fetch）的小伙伴参考
3. react相关技术栈入门小伙伴参考，腾讯天气是一个很不错的入门级的页面

## 项目预览地址
[这是我的DEMO](http://www.ghyrecord.cn/)

## 文章链接
[简书链接](https://www.jianshu.com/p/2594409d570a)
[掘金链接](https://juejin.im/post/5bed31cae51d454a9c55171b)


## 写在后面
自己也工作一年多了，很多的时候就是对业务层和基础组件打交道，对于项目整体架构几乎是一无所知，另自己在工作一年之际换了一份工作，技术栈从react+dva+antd换到了react+mobx+antd，为了尽快提升自己的技术栈的熟练度，同时可以自己熟悉一整套的基础开发框架搭建，故选择了仿腾讯天气的一个系统来实现，所用技术栈基本涵盖了现在的react方向的主流内容。自己为了达到完成一整套搭建的目的，还特地在腾讯云租了服务器，此次项目的搭建是nginx服务器，用到了nginx反向代理。另外，自己之前没有做过后端，对后端的学习也仅限于大学时代的java，现在很多都忘得差不多了，思考再三，没有再急于拓宽自己的技术栈，虽然我知道写前端的人转node应该还是ok的，故这个项目的后端api提供，我选择了使用第三方api，在前端范围内的【项目搭建】-> 【技术栈内相关开发】-> 【项目打包优化】 -> 【部署服务器】这一整套的相关流程，我也基本借这个项目达到了自己自学想掌握的东西了，学东西始终讲究专精，我也就没有比较急于去学node了

项目主体是通过create-react-app搭建一个自己的基础框架，同时其中一个页面实现了仿腾讯天气的90%的功能，其余有兴趣的同学，也可以参考，如果觉得不错，可以点个start

## 写在再后面 (2021-4-30)
作为自己的第一个相对成熟并持续维护的项目，自己对这个项目还是有很深的感情的，自己甚至自费买第三方api，自费买个人服务器搭建等等，但是这个项目确实已经比较老了，mobx，React和UI库的版本都已经比较过时了，当时写这个项目的时候，HOC都还没玩转，现在已经全面拥抱hooks了，后续对这个项目的维护应该基本会暂停了，因为随着工作年限的增加，有更多的东西想折腾了，但是这个项目目前来说，还是会持续挂在我的个人服务器上，毕竟个人服务器还是有其他作用的，后续也有计划写一写其他的项目开源出来

总之来说，这个项目内的相关mobx，React等的写法，已经过时了，希望不要误导新入坑的FE同学，当然，作为公司项目的架构参考以及学习mobx和React的配合使用入门，还是可以的。。。

作为一个差不多3年的老项目，希望仅供大家学习，禁止抄袭~