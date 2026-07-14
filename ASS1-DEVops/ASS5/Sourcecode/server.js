const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/eventDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


// Event Attendance Schema
const eventSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    college:String,
    event:String,
    date:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Event = mongoose.model("Event",eventSchema);


const handleAttendance = async(req,res)=>{

    try{

        const {name,email,phone,college,event,date} = req.body;

        if(!name || !email || !phone || !college || !event || !date){
            return res.json({message:"Please fill all fields"});
        }

        const newAttendance = new Event({
            name,
            email,
            phone,
            college,
            event,
            date
        });

        await newAttendance.save();

        res.json({message:"Event Attendance Successful"});

    }
    catch(err){
        console.log(err);
        res.json({message:"Server Error"});
    }

};

const getEvents = async(req,res)=>{

    try{

        const events = await Event.find().sort({createdAt: -1});

        res.json({events});

    }
    catch(err){
        console.log(err);
        res.json({message:"Server Error", events:[]});
    }

};

app.post("/attend-event",handleAttendance);
app.post("/participate-event",handleAttendance);
app.post("/register-event",handleAttendance);
app.get("/get-events",getEvents);


// Start Server
app.listen(5000,()=>{
    console.log("Server running on port 5000");
});
