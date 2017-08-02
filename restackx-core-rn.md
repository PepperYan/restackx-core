#restackx-core/ react-native
restackx-core是一个前端快速开发框架，目前支持react-native。

### 使用说明

>1. 创建自己的react-native工程（react-native init app）。[如何搭建RN工程](https://facebook.github.io/react-native/docs/getting-started.html)
>
>2. 安装依赖：`react-native-router-flux	`, `	mobx, mobx-react` `	restackx-core`。
>
>3. 配置入口文件(`	index.js, routes.js, store,js`)。
>

##### index.js: 

	import React from 'react'
	import {Routers} from './routes'
	import Store from './store'
	import {App} from "restackx-core/lib/native";

	function setup() {
        class Root extends React.Component {
            render(){
               return (
                 <App store={Store} routes={Routers()}/>
               )
           }
        }
        return Root;
	}

##### routes.js: 

	/*
	* 添加指定组件路由
	* */
	import React from 'react';
	import {Scene} from 'react-native-router-flux';
	import LoginPage from './users/LoginPage';
	export const Routers = () => {
    return (
        <Scene overlay>
            <Scene key="box" leftButtonTextStyle={{color: '#9c28ff'}}
                   rightButtonTextStyle={{color: '#9c28ff'}}
                   backButtonTextStyle={{color: '#9c28ff'}} initial>
                <Scene key="loginModal" component={LoginPage} title="Login"initial/>
            </Scene>
        </Scene>
	    )
};

##### store.js: 

	import HomePageModel from './models/HomePage.model'
	//这里添加所要导入的xxx.model.js

	export default {
    	"HomePage" : new HomePageModel(),
	}

#### 注意:
使用[MobX](https://mobx.js.org/)需要安装一些 babel 插件，以支持 ES7 的 decorator 特性：

	npm i babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --save-dev`

在项目工程的 .babelrc 文件配置 babel 插件：
				
	{
 		'presets': ['react-native'],
 		'plugins': ['transform-decorators-legacy']
	}

