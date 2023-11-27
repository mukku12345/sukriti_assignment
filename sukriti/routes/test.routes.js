const express = require('express');


const router = new express.Router();
const Test = require('../controller/test.controller');

module.exports=app=>{
    router.post('/test', Test.create);   
    router.put('/test', Test.put);   
    router.get('/test', Test.get);   
    router.delete('/test', Test.delete);   

    
    app.use("/api",router)
    
}
