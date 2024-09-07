const expressRouter=require('express').Router()
const { SaldoController } = require('../controllers');

class SaldoRouter{
    router
    constructor(){
        this.router=expressRouter;
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/saldos', SaldoController.getSaldo);
    }
}
module.exports=SaldoRouter;