const expressRouter=require('express').Router()
const { TransaksiController } = require('../controllers');

class TransaksiRouter{
    router
    constructor(){
        this.router=expressRouter
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/transaksis', TransaksiController.getTransaksi);
        this.router.post('/transaksi', TransaksiController.createTransaksi);
    }
}
module.exports=TransaksiRouter;