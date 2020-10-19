const mongoose = require('mongoose');

const mongooseSchema = new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    age:{
        type:"Number",
        required:true
    },

})
module.exports = mongoose.model('schema',mongooseSchema);