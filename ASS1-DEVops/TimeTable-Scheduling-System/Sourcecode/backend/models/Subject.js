const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true
    },

    lecturesPerWeek: {
      type: Number,
      required: true,
      min: 1,
      max: 10
    }
  },
  { timestamps: true }
);

// Prevent duplicate subject (name + code)
subjectSchema.index({ name: 1, code: 1 }, { unique: true });

module.exports = mongoose.model("Subject", subjectSchema);
