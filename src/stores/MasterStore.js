import { observable, action } from 'mobx';

class Store {
    @observable title = "MasterStore Title";
    @action setTitle = (title: ?String) => this.title = title;
}

const MasterStore = new Store();
export default MasterStore;