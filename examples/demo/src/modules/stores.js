import {observable, computed, reaction} from 'mobx'
import {handleModels} from 'restackx-core'

const modelContext = require.context('../', true, /.store.js$/)
var stores = handleModels(modelContext)

export default stores
