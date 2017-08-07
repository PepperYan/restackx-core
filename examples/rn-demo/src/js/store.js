// import {observable, computed, reaction} from 'mobx'
// import {handleModels} from './src/native'
import HomePageModel from './models/HomePage.model'
import MenuBarModel from './models/MenuBar.model'

// const modelContext = require.context('../', true, /.model.js$/)
// var models = handleModels(modelContext)
models = {
    "HomePage" : new HomePageModel(),
    "MenuBarModel" : new MenuBarModel(),

}
// const

export default models
