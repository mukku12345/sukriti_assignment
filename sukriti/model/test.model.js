const { isObjectIdOrHexString } = require("mongoose");

const mongoose = require("mongoose")
module.exports = mongoose=>{
    const user = mongoose.Schema({
        name: String,
        email: String,
        address: String,
        
    },
    );
    

    const Test = mongoose.model("Test",user);
   
    return {Test}
    
}