const expressRouter=require('express').Router()
const { UserController } = require('../controllers');

class UserRouter{
    router
    constructor(){
        this.router=expressRouter
        this.setupRouters();
    }
    setupRouters(){
        this.router.get('/users', UserController.getUser);
        this.router.post('/user', UserController.createUsers);
        this.router.post('/user/:id', UserController.editUsers);
        this.router.delete('/user/:id', UserController.deleteUser);
    }
}
module.exports=UserRouter;