export default class MainController {
    constructor(mainModel, mainView) {
        this.mainModel = mainModel;
        this.mainView = mainView;
    }

    cleanView() {
        $("#app").empty();
    }

    listar() {
        this.cleanView();
    }

    didViewLoad() {
        this.mainView.show("#app", this.mainModel.data, null);
    }

    loadMainView() {
        this.mainModel.loadFromJson("./data/data.json")
            .then(() => this.didViewLoad());
    }
}
0