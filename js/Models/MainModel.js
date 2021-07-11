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

    loadFromJson(jsfileName) {
        return fetch(jsfileName)
            .then(response =>  response.json())
            .then(json => {
                for (const data of json) {
                    this.data.push(data)
                }
            });
    }
}
