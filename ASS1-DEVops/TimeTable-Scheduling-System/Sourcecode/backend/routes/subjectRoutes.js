const express = require("express");
const Subject = require("../models/Subject");

const router = express.Router();

// ================= ADD SUBJECT =================
router.post("/add", async (req, res) => {
  try {
    const { name, code, lecturesPerWeek } = req.body;

    if (!name || !code || !lecturesPerWeek) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    const subject = await Subject.create({
      name: name.trim(),
      code: code.trim(),
      lecturesPerWeek: Number(lecturesPerWeek)
    });

    res.status(201).json(subject);

  } catch (err) {
    // Duplicate subject (compound index)
    if (err.code === 11000) {
      return res.status(409).json({
        error: "Subject already exists"
      });
    }

    console.error("❌ Add subject error:", err);
    res.status(500).json({
      error: "Failed to add subject"
    });
  }
});

// ================= GET SUBJECTS =================
router.get("/", async (req, res) => {
  try {
    const subjects = await Subject.find().sort({ createdAt: -1 });
    res.json(subjects);
  } catch (err) {
    console.error("❌ Fetch subjects error:", err);
    res.status(500).json({
      error: "Failed to fetch subjects"
    });
  }
});

// ================= DELETE SUBJECT =================
router.delete("/:id", async (req, res) => {
  try {
    await Subject.findByIdAndDelete(req.params.id);
    res.json({ message: "Subject deleted successfully" });
  } catch (err) {
    console.error("❌ Delete subject error:", err);
    res.status(500).json({
      error: "Failed to delete subject"
    });
  }
});

module.exports = router;
