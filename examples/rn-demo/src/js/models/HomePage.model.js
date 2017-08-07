
import {observable, computed, reaction} from 'mobx';

export default class HomePageModel  {
    @observable id = 0;
    @observable data;
    homePageHandleAction =(data)=>{
        this.data = data;
        this.id += 1;
        console.log("handle Num:"+this.id + "次， data："+ this.data);
    }
}


