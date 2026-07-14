const express = require("express");
const mongoose = require("mongoose");
const Teacher = require("../models/Teacher");

const router = express.Router();

// ================= ADD TEACHER =================
router.post("/", async (req, res) => {
  try {
    const { name, subjects } = req.body;

    // Validation
    if (!name || !subjects || !Array.isArray(subjects) || subjects.length === 0) {
      return res.status(400).json({
        error: "Teacher name and at least one subject are required"
      });
    }

    // Validate each subject ObjectId
    for (const subjectId of subjects) {
      if (!mongoose.Types.ObjectId.isValid(subjectId)) {
        return res.status(400).json({
          error: "Invalid subject ID"
        });
      }
    }

    const teacher = await Teacher.create({
      name: name.trim(),
      subjects
    });

    res.status(201).json(teacher);

  } catch (err) {
    console.error("❌ Teacher save error:", err);
    res.status(500).json({
      error: "Internal server error while adding teacher"
    });
  }
});

// ================= GET TEACHERS =================
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .populate("subjects", "name code lecturesPerWeek");

    res.json(teachers);
  } catch (err) {
    console.error("❌ Fetch teachers error:", err);
    res.status(500).json({
      error: "Failed to fetch teachers"
    });
  }
});

module.exports = router;
