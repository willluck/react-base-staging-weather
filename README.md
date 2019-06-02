# react-base-staging-weather
**基于create-react-app2.x，基础项目集成搭建，包含路由，其中一个页面仿腾讯天气，基于react方向主流技术栈实现，脚手架create-react-app，全部技术栈：react+mobx+antd+react-router4.x+axios+webpack4.x**

## 更新日志
- 2018.10 基于CRA1.X搭建
- 2018.11.13 基于CRA2.X重构，业务无变化，主要是框架配置方面的改进
- 2019.6.2 我的域名申请下来了，这个项目暂时会作为主项目挂载，更新一下项目地址

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


## 最后
项目最主要的bug在于服务器，因为天气预报系统，用到了ip定位，我在开发阶段使用了proxy配置的代理，没有问题，但是挂载到nginx服务器上的时候，每次默认通过ip定位，都定位到北京去了，我查阅了很多资料，有解决办法，但是需要后端配合，但是我的后端又是第三方的api，这个问题感觉有点无解...如果有解决办法的同学或者有其他交流想法的同学，欢迎给我提issues，或联系我本人，大家一起交流，390816673@qq.com