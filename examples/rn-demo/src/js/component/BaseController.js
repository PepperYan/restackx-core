import {BaseComponent} from "restackx-core/lib/native";
import {observable, computed, reaction} from 'mobx'

class BaseController extends BaseComponent {

    @observable manager = this.context.store.MenuBarModel;

    componentDidMount() {
        reaction(
            () => this.manager.route,
            route =>{
                this.props.history.replace(route.path);
            }
        )
    }
}

export default BaseController;