const EventEmitter =require("events");
const http=require("http");

class Sales extends EventEmitter{
    constructor() {
        super();

    }
}
const myEmitter=new Sales();

myEmitter.on('newSale',()=>{
    console.log("You have a new sale");
});

myEmitter.on('newSale',()=>{
    console.log("Costumer name: Daniel");
});

myEmitter.on('newSale',(stock)=>{
    console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit('newSale',9);
//// other example
const server=http.createServer();

server.on('request',(req,res)=>{
    console.log("Request received");
    res.end('Request received');
});

server.on('request',(req,res)=>{
    console.log('Another request <3 <3');
});

server.on('close',()=>console.log("Server closed"));

server.listen(3000,()=>console.log("Waiting for request..."))