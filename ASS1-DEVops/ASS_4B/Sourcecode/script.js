document.addEventListener('DOMContentLoaded', () => {
    const studentCount = 25;
    const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
    const students = [];

    // 1. Generate Data
    for (let i = 1; i <= studentCount; i++) {
        const marks = subjects.map(() => Math.floor(Math.random() * 95) + 30); // Range 30-100 to make failure realistic
        const passedAll = marks.every(m => m >= 40);

        students.push({
            id: `STD${i.toString().padStart(3, '0')}`,
            name: `Student ${i}`,
            marks: marks,
            status: passedAll ? 'Passed' : 'Failed'
        });
    }

    // 2. Calculate Stats
    const passedCount = students.filter(s => s.status === 'Passed').length;
    const failedCount = studentCount - passedCount;
    const passRate = ((passedCount / studentCount) * 100).toFixed(1);

    // Subject-wise stats
    const subjectPassCounts = subjects.map((_, index) => {
        return students.filter(s => s.marks[index] >= 40).length;
    });

    // 3. Update UI Metrics
    document.getElementById('pass-rate').textContent = `${passRate}%`;
    document.getElementById('passed-count').textContent = passedCount;
    document.getElementById('failed-count').textContent = failedCount;

    // 4. Render Table
    const tableBody = document.getElementById('students-body');
    students.forEach(student => {
        const tr = document.createElement('tr');
        tr.className = 'student-row';
        tr.addEventListener('click', () => openStudentDashboard(student));

        const marksHtml = student.marks.map(m =>
            `<span class="mark-pill ${m >= 40 ? 'mark-pass' : 'mark-fail'}">${m}</span>`
        ).join('');

        tr.innerHTML = `
            <td>#${student.id}</td>
            <td>${student.name}</td>
            <td>${student.marks[0]}</td>
            <td>${student.marks[1]}</td>
            <td>${student.marks[2]}</td>
            <td>${student.marks[3]}</td>
            <td>${student.marks[4]}</td>
            <td><span class="status-badge ${student.status === 'Passed' ? 'status-pass' : 'status-fail'}">${student.status}</span></td>
        `;
        tableBody.appendChild(tr);
    });

    // 5. Initialize Chart.js

    // Doughnut Chart for Overall Ratio
    const ctxRatio = document.getElementById('ratioChart').getContext('2d');
    new Chart(ctxRatio, {
        type: 'doughnut',
        data: {
            labels: ['Passed', 'Failed'],
            datasets: [{
                data: [passedCount, failedCount],
                backgroundColor: ['#22c55e', '#ef4444'],
                hoverOffset: 15,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#f8fafc', padding: 20 }
                }
            },
            cutout: '70%'
        }
    });

    // Bar Chart for Subject performance
    const ctxSubject = document.getElementById('subjectChart').getContext('2d');
    new Chart(ctxSubject, {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [{
                label: 'Students Passed',
                data: subjectPassCounts,
                backgroundColor: '#6366f1',
                borderRadius: 8,
                barThickness: 30
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: studentCount,
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // 6. Student Dashboard view logic
    const mainDashboard = document.getElementById('main-dashboard');
    const studentDashboard = document.getElementById('student-dashboard');
    const backBtn = document.getElementById('back-btn');

    backBtn.addEventListener('click', () => {
        studentDashboard.style.display = 'none';
        mainDashboard.style.display = 'block';
    });

    function openStudentDashboard(student) {
        mainDashboard.style.display = 'none';
        studentDashboard.style.display = 'block';

        document.getElementById('sd-name').textContent = student.name;
        document.getElementById('sd-roll').textContent = `Roll No: #${student.id}`;

        const sdStatus = document.getElementById('sd-status');
        sdStatus.textContent = student.status;
        sdStatus.style.color = student.status === 'Passed' ? 'var(--success-color)' : 'var(--danger-color)';

        const totalMarks = student.marks.reduce((a, b) => a + b, 0);
        document.getElementById('sd-total').textContent = `${totalMarks}/500`;
        document.getElementById('sd-percentage').textContent = `${(totalMarks / 5).toFixed(1)}%`;

        const sdSubBody = document.getElementById('sd-subjects-body');
        sdSubBody.innerHTML = '';

        subjects.forEach((sub, idx) => {
            const mark = student.marks[idx];
            const isPass = mark >= 40;
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${sub}</td>
                <td style="color: ${isPass ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight: 600;">${mark}</td>
                <td>100</td>
                <td><span class="status-badge ${isPass ? 'status-pass' : 'status-fail'}">${isPass ? 'Passed' : 'Failed'}</span></td>
            `;
            sdSubBody.appendChild(tr);
        });
    }
});
