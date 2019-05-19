const app=require("express")();
const redis=require("redis");
const process=require("process");

const client=redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits',0);

app.get("/",(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send("Number of visits: "+visits);
        client.set('visits',parseInt(visits)+1);
    })
});

//crash route
app.get("/crash",(req,res)=>{
    process.exit(0);
});

app.listen(8080,()=>{
    console.log("Listening on 8080");
})