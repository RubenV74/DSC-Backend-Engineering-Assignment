const mongoose = require("mongoose");
require("dotenv").config();

class StorageConnection{
    constructor(model) {
        this.Model = model;
        this.connection()
            .then((message)=> console.log(message));
    }

    async connection(mongoURI = process.env.MONGO_URI){
        return await mongoose.connect(mongoURI)
            .then(() => "Connected to Data Base")

            .catch((error) =>`Bad Connection: ${error}`)
    }

    async find(filter){
        return await this.Model.find(filter);
    }

    async findOne(filter){
        return await  this.Model.findOne(filter);
    }

    async insert(data){
        return this.Model.create(data);
    }

    async remove(id){ // name = { name : "example"}
        return await this.Model.findByIdAndDelete(id);
    }

    async update(filter, updateData){
        return await this.Model.updateMany(filter ,updateData);
    }
}

module.exports={StorageConnection}