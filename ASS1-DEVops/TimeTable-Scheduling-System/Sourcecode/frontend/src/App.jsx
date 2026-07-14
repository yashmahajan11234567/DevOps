import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3000/api";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const [subjectName, setSubjectName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [lectures, setLectures] = useState("");

  const [teacherName, setTeacherName] = useState("");
  const [teacherSubject, setTeacherSubject] = useState("");

  // ---------------- FETCH DATA ----------------
  const fetchSubjects = async () => {
    try {
      const res = await fetch(`${API}/subjects`);
      const data = await res.json();
      setSubjects(data);
    } catch (err) {
      console.error("Fetch subjects error:", err);
    }
  };

  const fetchTeachers = async () => {
    try {
      const res = await fetch(`${API}/teachers`);
      const data = await res.json();
      setTeachers(data);
    } catch (err) {
      console.error("Fetch teachers error:", err);
    }
  };

  useEffect(() => {
    fetchSubjects();
    fetchTeachers();
  }, []);

  // ---------------- ADD SUBJECT ----------------
  const addSubject = async () => {
    if (!subjectName || !subjectCode || !lectures) {
      alert("Fill all subject fields");
      return;
    }

    try {
      const res = await fetch(`${API}/subjects/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: subjectName,
          code: subjectCode,
          lecturesPerWeek: Number(lectures),
        }),
      });

      if (!res.ok) throw new Error("Failed to add subject");

      setSubjectName("");
      setSubjectCode("");
      setLectures("");
      fetchSubjects();
    } catch (err) {
      console.error(err);
      alert("Error adding subject");
    }
  };

  // ---------------- ADD TEACHER ----------------
  const addTeacher = async () => {
    if (!teacherName || !teacherSubject) {
      alert("Fill all teacher fields");
      return;
    }

    try {
      const res = await fetch(`${API}/teachers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: teacherName,
          subjects: [teacherSubject], // ObjectId
        }),
      });

      if (!res.ok) throw new Error("Failed to add teacher");

      setTeacherName("");
      setTeacherSubject("");
      fetchTeachers();
    } catch (err) {
      console.error(err);
      alert("Error adding teacher");
    }
  };

  return (
    <div className="container">
      <h1>📚 Time Table Scheduling System</h1>
      <p className="subtitle">Back-to-School Dashboard</p>

      {/* SUBJECTS */}
      <div className="card subject-card">
        <h2>📘 Subjects</h2>

        <div className="form-row">
          <input
            placeholder="Subject name"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <input
            placeholder="Code"
            value={subjectCode}
            onChange={(e) => setSubjectCode(e.target.value)}
          />
          <input
            placeholder="Lectures / week"
            type="number"
            value={lectures}
            onChange={(e) => setLectures(e.target.value)}
          />
          <button onClick={addSubject}>➕ Add</button>
        </div>

        <ul className="list">
          {subjects.map((s) => (
            <li key={s._id}>
              <span>
                {s.name} ({s.code})
              </span>
              <span className="badge">{s.lecturesPerWeek} hrs</span>
            </li>
          ))}
        </ul>
      </div>

      {/* TEACHERS */}
      <div className="card teacher-card">
        <h2>👩‍🏫 Teachers</h2>

        <div className="form-row">
          <input
            placeholder="Teacher name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />

          <select
            value={teacherSubject}
            onChange={(e) => setTeacherSubject(e.target.value)}
          >
            <option value="">Select subject</option>
            {subjects.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>

          <button onClick={addTeacher}>➕ Add</button>
        </div>

        <ul className="list">
          {teachers.map((t) => (
            <li key={t._id}>
              <span>
                {t.name} →{" "}
                {t.subjects?.map((sub) => sub.name).join(", ")}
              </span>
              <span className="badge">Teacher</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
