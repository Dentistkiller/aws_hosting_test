import http from "http";

const PORT = 3001;


const server = http.createServer((req,res)=>
    res.end('testing hosting with aws ec2')
)
console.log(PORT)
server.listen(PORT);