// Hardcoded course data
const courses = [
  { id: 1, name: "Java Fundamentals", completed: false },
  { id: 2, name: "CSS Fundamentals", completed: false },
  { id: 3, name: "JavaScript Basics", completed: false },
  { id: 4, name: "Streamlit Course", completed: false },
  { id: 5, name: "DevOps Course", completed: false },
  { id: 6, name: "Python Course", completed: false },
];

// Function to display courses
function displayCourses() {
  const container = document.getElementById('courseList');
  container.innerHTML = '';

  courses.forEach(course => {
    container.innerHTML += `
      <div style="margin-bottom:10px;">
        <span>${course.name}</span>
        <button 
          onclick="markComplete(${course.id})"
          ${course.completed ? 'disabled' : ''}>
          ${course.completed ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
    `;
  });
}

// Function to mark a course complete
function markComplete(id) {
  const course = courses.find(c => c.id === id);

  if (!course.completed) {
    course.completed = true;
    displayCourses();
    updateProgress();
  }
}

// Function to update progress
function updateProgress() {
  const total = courses.length;
  const completed = courses.filter(c => c.completed).length;
  const percentage = Math.round((completed / total) * 100);

  document.getElementById('progress').innerText =
    `Progress: ${completed}/${total} (${percentage}%)`;

  if (completed === total) {
    alert("🎉 Congratulations! All courses completed.");
  }
}

// Initial load
displayCourses();
updateProgress();
