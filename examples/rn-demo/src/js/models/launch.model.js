import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {uuid} from '../../utils/Utils'
export default class Launch {
    @observable account;
    @observable user;
    launchActionHandle (){
        this.account = uuid();
    }
    constructor(){
        reaction(
            ()=>this.account,
            account => {
                this.user = {
                    id:"1234567890",
                    name:"lala",
                    password:"123",
                    account:account
                }
            }
        );
    }
}