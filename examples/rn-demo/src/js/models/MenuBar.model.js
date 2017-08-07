
import {observable, computed, reaction} from 'mobx'

export default class MenuBarModel  {
    @observable route = {
        title:"",
        path:""
    }

    changeRoutePath (route){
        this.route = route;
    }
}

