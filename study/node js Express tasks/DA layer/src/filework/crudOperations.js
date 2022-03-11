const fs = require('fs/promises');

module.exports = {

    async getById(JsonFile, id) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        if(id in json)
            return json[id];
        

        return null;
    },

    async getAll(JsonFile) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        let ids = Object.getOwnPropertyNames(json);

        let arr = [];
        for(let id of ids) {
            arr.push(json[id]);
        }

        return arr;

    },

    async deleteById(JsonFile, id) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        if(!(id in json))
            return null;
        

        let deleted = JSON.stringify(json[id]);

        delete json[id];

        await fs.writeFile(JsonFile, JSON.stringify(json));

        return deleted;

    },

    async create(JsonFile, instance) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        let ids = Object.getOwnPropertyNames(json);
        let maxId = 0;
        if(ids.length != 0) {
            maxId = ids.reduce((max, item) => {
                if(+max < +item)
                    max = item;
            })
        }

        json[maxId + 1] = instance;

        await fs.writeFile(JsonFile, JSON.stringify(json));

        return instance;

    },

    async updateById(JsonFile, id, instance) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        if(id in json)
            return null;

        for(let property of instance) {

            if(json[id][property] != instance[property])
                json[id][property] = instance[property];
        
        }

        let updated = JSON.stringify(json[id]);

        await fs.writeFile(JsonFile, JSON.stringify(json));

        return updated;

    }

}