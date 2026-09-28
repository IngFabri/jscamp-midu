import http from "node:http"
import process from "node:process"

const server = http.createServer((req,res)=>{
    const {url} = req
    if(url == "/"){
        res.setHeader('Content-Type', 'application/json; charset=utf-8')
        res.statusCode = 200;
        res.end(JSON.stringify({"Message":"Hola mundo desde un server http nativo de node"}),(() => {console.log("GET enviado correctamente")},process.env))
    }

}).listen(0,"localhost",()=>{console.log(`server corriendo en el puertoooo: ${server.address().port}`)})