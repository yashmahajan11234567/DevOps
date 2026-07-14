import React from 'react';

function CourseFilter({ courseFilter, onSearch, onClear }) {
  return (
    <div className="course-filter">
      <label>
        Filter by course
        <input
          type="text"
          value={courseFilter}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Type a course name"
        />
      </label>
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default CourseFilter;
