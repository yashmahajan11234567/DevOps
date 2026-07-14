import React, { useState } from 'react';

const initialState = {
  studentName: '',
  course: '',
  rating: 5,
  comments: ''
};

function FeedbackForm({ onAdd }) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      studentName: formData.studentName,
      course: formData.course,
      rating: Number(formData.rating),
      comments: formData.comments,
    });
    setFormData(initialState);
  };

  return (
    <section className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Course
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Rating
          <select name="rating" value={formData.rating} onChange={handleChange}>
            {[5, 4, 3, 2, 1].map((score) => (
              <option key={score} value={score}>
                {score}
              </option>
            ))}
          </select>
        </label>

        <label>
          Comments
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            required
          />
        </label>

        <button type="submit">Save Feedback</button>
      </form>
    </section>
  );
}

export default FeedbackForm;
