export default class MainModel {
    constructor() {
        // Nothing
        this.data = []
        this.callbackOserver = null
    }

    loadFromData(id, nombre, description) {
        let data = {
            id: id,
            nombre: nombre, 
            description:description
        };
        this.data.push(data)
    }

    async loadFromJson(jsfileName) {
        const response = await fetch(jsfileName);
        const json = await response.json();
        for (const data of json) {
            this.data.push(data);
        }
    }
}
