const express=require('express');
const cors=require('cors');
const port = process.env.PORT || 3000;
class Server{
    #expressApp;
    #routers;
    constructor(routers=[]){
        this.#expressApp=express()
        this.#routers=routers
        this.#middleware()
        this.#setupRouters()
    }
    #middleware(){
        this.#expressApp.use(cors())
        this.#expressApp.use(express.json())
    }
    #setupRouters(){
        this.#routers.forEach((expressRouter)=>{
            this.#expressApp.use(expressRouter.router)
        })
    }
    start(){
        this.#expressApp.listen(port, "0.0.0.0",()=>{
            console.log(`Listen at port ${3000}`)
        })
    }
}
module.exports=Server;