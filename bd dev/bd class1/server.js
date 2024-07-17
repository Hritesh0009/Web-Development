const express=require('express');
const app=express();
//Server is instantiated above



//use to parse req.body in express => specifically used in POST and PUT case
const bodyParser=require('body-parser');

//specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());



app.listen(3000,()=>{
    console.log("Server Started at port no.3000")
//Listening is activated on port 3000
});

app.get('/',(request,response)=>{
    response.send("Hello guys ! How are you");
 //whenever we request ('/') route we get in response the above String ("hello guys!...............")
})

app.post('/api/cars',(request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submmittted successfully");
})


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
}) 
.then(()=>{console.log("Connection successful")})
.catch((error)=>{console.log(error)});


