const app= require('./app');







//server
const port=process.env.PORT||8000;
app.listen(port,()=>{
    console.log("Server is runing on Port : "+port);
})
