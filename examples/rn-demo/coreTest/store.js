// import {observable, computed, reaction} from 'mobx'
// import {handleModels} from './src/native'
import HomePageModel from './models/HomePage.model'

// const modelContext = require.context('../', true, /.model.js$/)
// var models = handleModels(modelContext)
models = {
    "HomePage" : new HomePageModel(),
}
// const

export default models
