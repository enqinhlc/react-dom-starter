import { observable, action, autorun } from 'mobx';

class Store {
    @observable title = "Dashboard Title";
    @action setTitle = (title: ?String) => this.title = title;
}

const DashboardStore = new Store();
autorun(() => {
    console.log(DashboardStore.title);
})
export default DashboardStore;