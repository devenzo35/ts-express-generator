import express = require('express')
import router from './routes/default'

class Server {

    app:express.Application
    port= process.env.PORT
    
    constructor(){
        this.app = express()
        this.routes()
    }

    routes(){
        this.app.use('/default', router)
    }

    listen(){
        
        this.app.listen(this.port, ()=>{
            console.log('Listening on port ' + this.port)
        })
    }  
}

export default Server