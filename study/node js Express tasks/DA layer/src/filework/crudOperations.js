const fs = require('fs/promises');

module.exports = {

    async getById(JsonFile, id) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        if(id in json)
            return {id, ...json[id]};
        

        return null;
    },

    async getAll(JsonFile) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        let ids = Object.getOwnPropertyNames(json);

        let arr = [];
        for(let id of ids) {
            arr.push({id, ...json[id]});
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

        console.log('HEREREE', deleted);
        return JSON.parse(deleted);

    },

    async create(JsonFile, instance) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        let ids = Object.getOwnPropertyNames(json);
        let maxId = 0;
        if(ids.length != 0) {
            maxId = ids.reduce((max, item) => {
                if(Number(max) < Number(item) )
                    return item;
                return max;
            }, 0)
        }

        json[Number(maxId) + 1] = instance;

        await fs.writeFile(JsonFile, JSON.stringify(json));

        return instance;

    },

    async updateById(JsonFile, id, instance) {

        let stringified = await fs.readFile(JsonFile);
        let json = JSON.parse(stringified);

        if(!(id in json)){
            return null;
        }

        for(let property in instance) {
            json[id][property] = instance[property];
        }

        let updated = JSON.stringify(json[id]);

        await fs.writeFile(JsonFile, JSON.stringify(json));

        return JSON.parse(updated);

    }

}