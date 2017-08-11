# restackx-core

前端快速开发框架,可适用与web及react-native。

## Web
#### 快速开始

[如何快速使用restackx-cli搭建项目](https://github.com/PepperYan/restackx-cli)

```
cd /项目路径
npm i 安装依赖
如果使用restackx-cli搭建项目，只需restackx run运行。
``` 
#### store
1. 自创建store：例如一个model文件（PageModel.js）
		
		const store = {
    		"PageModel":new PageModel()
		}
		//使用this.context.store.PageModel得到PageModel;	
2. 为了更容易使用，`restackx-cli`生成的脚手架支持后缀匹配, 新建文件取名为 `*.store.js` 即会自动添加进store.
	```
		//在页面取值
		this.context.store.*; //*为store的文件名前缀
	```		
  			
#### router
restackx-core默认使用BrowserRouter,也可更换其它router([react-router-dom的使用](https://reacttraining.com/react-router/web/api/BrowserRouter))。具体替换方法:

	<App store={Store} router={BrowserRouter} routes={routes}/>,
	
#### routes
restackx-core提供了路由的入口，导入指定路由可方便我们管理,具体事例：

	import React from 'react';
	import {Route, Switch} from 'react-router-dom'
	import App from '../modules/demo/App';
		import Page1 from '../modules/demo/Page1'
	import PageTwo from '../modules/demo/Page2'

	export default (
    	<Route path="/">
        	<App>
            	<Switch>
                	<Route exact path="/" component={Page1}/>
                	<Route path="/pagetwo" component={PageTwo}/>
            	</Switch>
        	</App>
    	</Route>
	);



## react-native

#### 快速集成

	1. cd 工程根目录创建react-native工程（react-native init app --version 0.44.3）
	2. npm i restackx-core --save 安装restackx-core
	3. react-native run-ios
 也可在package.json中配置restackx-core依赖，再执行npm install。

[如何搭建react-native工程](https://facebook.github.io/react-native/docs/getting-started.html)

#### store
	import Launch from './models/launch.model';
	const models = {
   	 "launch" : new Launch(),

	}
	export default models;
	
调用方法：this.context.store.launch获取Launch 对象。



	
#### router
	在restackx-core/react-native中使用的是NativeRouter，它这是为native提供了相应的路由。
具体使用说明可参照[NativeRouter](https://reacttraining.com/react-router/native/api/NativeRouter).

#### routes
在native app中route并不存在，而是通过导航来管理界面。想要是native实现route的功能可使用react-router-native，routes的具体管理：
	
	const Routes = (
    <View style={{flex:1}}>
        <Switch>
            <Route exact path="/" component={LaunchPage}/>
            <Route path="/app" component={App}/>
            <Route path="/main" component={Main}/>
        </Switch>
    </View>
);


#### 注意:
使用[MobX](https://mobx.js.org/)需要安装一些 babel 插件，以支持 ES7 的 decorator 特性：

	npm i babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --save-dev

在 .babelrc 文件中配置 babel 插件：

				
	{
 		'presets': ['react-native'],
 		'plugins': ['transform-decorators-legacy']
	}

