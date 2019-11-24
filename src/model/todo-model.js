const mongoose = require('mongoose');

// defining the schema for our data model
const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
})

/* 1. create the model using the mongoose.model method 
   2. and export it 
   3. the "Todo" means we are going to make a collection in MongoDb
   called Todo*/
const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
