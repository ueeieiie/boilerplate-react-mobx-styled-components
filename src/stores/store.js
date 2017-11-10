import { observable, action, computed} from 'mobx';

class Store {
    @observable demoData = [1,2,3,4,5,6]
}

export const store = new Store()
