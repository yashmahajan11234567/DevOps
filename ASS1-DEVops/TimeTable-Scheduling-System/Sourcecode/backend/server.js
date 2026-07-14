const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// ================= MIDDLEWARE =================
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

// ================= DATABASE =================
mongoose
  .connect("mongodb://127.0.0.1:27017/timetableDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ================= ROUTES =================
app.use("/api/subjects", require("./routes/subjectRoutes"));
app.use("/api/teachers", require("./routes/teacherRoutes"));

// (Timetable routes will be added later here)

// ================= TEST =================
app.get("/", (req, res) => {
  res.send("Time Table System API running 🚀");
});

// ================= ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error("🔥 SERVER ERROR:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message
  });
});

// ================= START =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
