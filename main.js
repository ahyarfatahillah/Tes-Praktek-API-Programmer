const Server = require('./server')
const {UserRouter}=require('./routers');
const {TransaksiRouter}=require('./routers')
const {SaldoRouter}=require('./routers')
const {ProdukRouter}=require('./routers')
const userRouter=new UserRouter();
const transaksiRouter=new TransaksiRouter();
const saldoRouter=new SaldoRouter();
const produkRouter=new ProdukRouter();
const server = new Server([userRouter,transaksiRouter,saldoRouter,produkRouter]);
server.start();