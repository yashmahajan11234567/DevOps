import React from 'react';

function FeedbackList({ feedbacks, onDelete }) {
  if (!feedbacks.length) {
    return <p>No feedback submitted yet.</p>;
  }

  return (
    <section className="feedback-list">
      <h2>Recent Feedback</h2>
      {feedbacks.map((item) => (
        <article key={item._id} className="feedback-item">
          <div className="feedback-header">
            <div>
              <strong>{item.studentName}</strong>
              <span>— {item.course}</span>
            </div>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </div>
          <p className="rating">Rating: {item.rating} / 5</p>
          <p>{item.comments}</p>
          <small>{new Date(item.createdAt).toLocaleString()}</small>
        </article>
      ))}
    </section>
  );
}

export default FeedbackList;
