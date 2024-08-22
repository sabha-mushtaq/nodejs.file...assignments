const http =require("http");
const server =http.createServer((req,res)=>{
res.write('i am happy to learn full stack web development from pw skills');
res.end();


}).listen(8000);