function EventApp(){

const [name,setName] = React.useState("");
const [email,setEmail] = React.useState("");
const [phone,setPhone] = React.useState("");
const [college,setCollege] = React.useState("");
const [event,setEvent] = React.useState("");
const [date,setDate] = React.useState("");
const [events, setEvents] = React.useState([]);
const [activeTab, setActiveTab] = React.useState("form");
const [message, setMessage] = React.useState("");
const [messageType, setMessageType] = React.useState("");

React.useEffect(() => {
  if (activeTab === "details") {
    fetchEvents();
  }
}, [activeTab]);

const fetchEvents = async () => {
  try {
    const res = await fetch("http://localhost:5000/get-events");
    const data = await res.json();
    if (data.events) {
      setEvents(data.events);
    }
  } catch (err) {
    console.log(err);
  }
};

const submitForm = async ()=>{

  if(!name || !email || !phone || !college || !event || !date) {
    setMessage("Please fill all fields");
    setMessageType("error");
    setTimeout(() => setMessage(""), 3000);
    return;
  }

try{

const res = await fetch("http://localhost:5000/attend-event",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
phone,
college,
event,
date
})

});

const data = await res.json();

setMessage(data.message);
setMessageType("success");

setName("");
setEmail("");
setPhone("");
setCollege("");
setEvent("");
setDate("");

setTimeout(() => setMessage(""), 3000);

}

catch(err){

console.log(err);
setMessage("Submission Failed");
setMessageType("error");
setTimeout(() => setMessage(""), 3000);

}

};

return(

<div className="container">

{activeTab === "form" && (
<div className="card">

<div className="tab-buttons">
<button className="tab-btn active" onClick={() => setActiveTab("form")}>Register</button>
<button className="tab-btn" onClick={() => setActiveTab("details")}>View Events</button>
</div>

{message && <div className={message && messageType === "success" ? "success-message" : "error-message"}>{message}</div>}

<h2>Event Attendance</h2>

<div className="form-group">
<label>Full Name</label>
<input
placeholder="Enter your full name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
</div>

<div className="form-group">
<label>Email Address</label>
<input
type="email"
placeholder="your.email@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
</div>

<div className="form-group">
<label>Phone Number</label>
<input
placeholder="Enter your phone number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>
</div>

<div className="form-group">
<label>College Name</label>
<input
placeholder="Enter your college name"
value={college}
onChange={(e)=>setCollege(e.target.value)}
/>
</div>

<div className="form-group">
<label>Event Name</label>
<input
placeholder="Which event are you attending?"
value={event}
onChange={(e)=>setEvent(e.target.value)}
/>
</div>

<div className="form-group">
<label>Event Date</label>
<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>
</div>

<button onClick={submitForm}>
Mark Attendance
</button>

</div>
)}

{activeTab === "details" && (
<div className="details-card">

<div className="tab-buttons">
<button className="tab-btn" onClick={() => setActiveTab("form")}>Register</button>
<button className="tab-btn active" onClick={() => setActiveTab("details")}>View Events</button>
</div>

<h2>Registered Events ({events.length})</h2>

{events.length === 0 ? (
<div className="empty-state">
<p>No events registered yet. Start by registering for an event!</p>
</div>
) : (
events.map((evt, idx) => (
<div key={idx} className="event-item">
<p><strong>Name:</strong> {evt.name}</p>
<p><strong>Email:</strong> {evt.email}</p>
<p><strong>Phone:</strong> {evt.phone}</p>
<p><strong>College:</strong> {evt.college}</p>
<p><strong>Event:</strong> {evt.event}</p>
<p><strong>Date:</strong> {evt.date}</p>
</div>
))
)}

</div>
)}

</div>

)

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<EventApp />);
