
const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = 8050
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.static("public"))
    }

    routes(){
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("this server runing in : ",+this.port)
        })
    }
}


module.exports = Server;