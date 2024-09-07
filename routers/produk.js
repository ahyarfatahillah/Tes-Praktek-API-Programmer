const expressRouter=require('express').Router()
const { ProdukController } = require('../controllers');

class ProdukRouter{
    router
    constructor(){
        this.router=expressRouter;
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/produks', ProdukController.getProduk);
    }
}
module.exports=ProdukRouter;