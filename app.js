const http=require("http");
const fs=require("fs");

const home=fs.readFileSync("./index.html","utf-8");
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.end("<h1> santanu sasmal </h1>");
    }
   if(req.url=== "/about"){
       res.end(home)
   }
})
server.listen(2000,"localhost",()=>{
    console.log("working on http://localhost:2000")
})

