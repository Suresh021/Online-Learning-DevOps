// Comprehensive Course Data Structure
const coursesData = [
  {
    id: 1,
    name: "Java Fundamentals",
    description: "Master the basics of Java programming",
    category: "Programming",
    thumbnail: "☕",
    duration: "8 weeks",
    lessons: [
      {
        id: 1,
        title: "Introduction to Java",
        duration: "45 min",
        videoUrl: "https://youtu.be/yeX5sFkwLrw?si=Q5Ruw8MEctz1BKlH",
        content: "Learn about Java's history, why it's popular, and set up your development environment. Java is a powerful, object-oriented programming language used worldwide.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Variables and Data Types",
        duration: "50 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Variables",
        content: "Understand variables, primitive data types, and type conversion in Java. Master int, double, boolean, String and other essential data types.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 3,
        title: "Control Flow Statements",
        duration: "55 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Control+Flow",
        content: "Learn if-else statements, switch cases, loops (for, while, do-while), and how to control program execution flow.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 4,
        title: "Object-Oriented Programming",
        duration: "90 min",
        videoUrl: "https://via.placeholder.com/800x450?text=OOP",
        content: "Deep dive into OOP concepts: classes, objects, inheritance, polymorphism, and encapsulation. Build robust applications.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  },
  {
    id: 2,
    name: "CSS Fundamentals",
    description: "Create beautiful web designs with CSS",
    category: "Web Design",
    thumbnail: "🎨",
    duration: "6 weeks",
    lessons: [
      {
        id: 1,
        title: "CSS Basics and Selectors",
        duration: "40 min",
        videoUrl: "https://via.placeholder.com/800x450?text=CSS+Basics",
        content: "Introduction to CSS, selectors, properties, and values. Learn how to style HTML elements effectively.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Box Model and Layouts",
        duration: "50 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Box+Model",
        content: "Master the box model: margins, padding, borders. Learn flexbox and grid for modern layouts.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 3,
        title: "Colors, Fonts & Responsive Design",
        duration: "60 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Responsive",
        content: "Choose colors effectively, work with web fonts, and create responsive designs that work on all devices.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  },
  {
    id: 3,
    name: "JavaScript Basics",
    description: "Bring interactivity to your web pages",
    category: "Programming",
    thumbnail: "⚡",
    duration: "7 weeks",
    lessons: [
      {
        id: 1,
        title: "JavaScript Fundamentals",
        duration: "55 min",
        videoUrl: "https://via.placeholder.com/800x450?text=JS+Basics",
        content: "Learn JavaScript syntax, variables, operators, and basic programming concepts.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Functions and Scope",
        duration: "50 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Functions",
        content: "Understand functions, parameters, return values, and JavaScript scope concepts.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 3,
        title: "DOM Manipulation",
        duration: "60 min",
        videoUrl: "https://via.placeholder.com/800x450?text=DOM",
        content: "Learn how to interact with the DOM, handle events, and create interactive web experiences.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 4,
        title: "Asynchronous JavaScript",
        duration: "65 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Async",
        content: "Master promises, async/await, and fetch API for working with asynchronous code.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  },
  {
    id: 4,
    name: "DevOps Essentials",
    description: "Learn deployment and infrastructure",
    category: "DevOps",
    thumbnail: "🚀",
    duration: "10 weeks",
    lessons: [
      {
        id: 1,
        title: "Introduction to DevOps",
        duration: "50 min",
        videoUrl: "https://via.placeholder.com/800x450?text=DevOps+Intro",
        content: "Understand DevOps culture, practices, and tools. Learn about CI/CD pipelines.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Version Control with Git",
        duration: "60 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Git",
        content: "Master Git commands, branching, merging, and collaborative workflows.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 3,
        title: "Containerization with Docker",
        duration: "75 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Docker",
        content: "Learn Docker, containers, images, and how to containerize applications.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  },
  {
    id: 5,
    name: "Streamlit Essentials",
    description: "Build data apps with Streamlit",
    category: "Data Science",
    thumbnail: "📊",
    duration: "5 weeks",
    lessons: [
      {
        id: 1,
        title: "Streamlit Basics",
        duration: "45 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Streamlit",
        content: "Introduction to Streamlit framework and creating your first app.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Data Visualization",
        duration: "55 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Visualization",
        content: "Create stunning visualizations using Streamlit's charting libraries.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  },
  {
    id: 6,
    name: "Docker Deep Dive",
    description: "Advanced Docker concepts and best practices",
    category: "DevOps",
    thumbnail: "🐳",
    duration: "8 weeks",
    lessons: [
      {
        id: 1,
        title: "Docker Architecture",
        duration: "60 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Docker+Arch",
        content: "Understand Docker architecture, images, containers, and registries.",
        completed: false,
        hasQuiz: true
      },
      {
        id: 2,
        title: "Docker Compose",
        duration: "55 min",
        videoUrl: "https://via.placeholder.com/800x450?text=Docker+Compose",
        content: "Learn Docker Compose for multi-container applications.",
        completed: false,
        hasQuiz: true
      }
    ],
    progress: 0
  }
];

// Quiz Questions
const quizzes = {
  "1-1": [
    { question: "What is Java primarily used for?", options: ["Web design", "Building applications", "Database design"], correct: 1 },
    { question: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "Apple"], correct: 1 },
    { question: "Is Java a compiled language?", options: ["Yes", "No", "Sometimes"], correct: 0 }
  ],
  "1-2": [
    { question: "What is the smallest integer type in Java?", options: ["int", "byte", "short"], correct: 1 },
    { question: "Which of these is NOT a primitive data type?", options: ["int", "String", "double"], correct: 1 }
  ],
  "2-1": [
    { question: "CSS stands for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"], correct: 1 },
    { question: "Which selector has the highest specificity?", options: ["ID", "Class", "Tag"], correct: 0 }
  ],
  "3-1": [
    { question: "JavaScript is primarily used for?", options: ["Server-side programming", "Client-side interactivity", "Database management"], correct: 1 }
  ]
};

let currentCourse = null;
let currentLesson = null;
let userProgress = {};

// Load progress from localStorage
function loadProgress() {
  const saved = localStorage.getItem('edutrackProgress');
  if (saved) {
    userProgress = JSON.parse(saved);
  } else {
    coursesData.forEach(course => {
      userProgress[course.id] = {};
      course.lessons.forEach(lesson => {
        userProgress[course.id][lesson.id] = false;
      });
    });
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('edutrackProgress', JSON.stringify(userProgress));
  updateAllStats();
}

// Update all statistics
function updateAllStats() {
  let totalLessons = 0;
  let completedLessons = 0;

  coursesData.forEach(course => {
    const lessonsCount = course.lessons.length;
    const completedCount = course.lessons.filter(l => userProgress[course.id]?.[l.id]).length;
    course.progress = lessonsCount > 0 ? Math.round((completedCount / lessonsCount) * 100) : 0;
    totalLessons += lessonsCount;
    completedLessons += completedCount;
  });

  document.getElementById('totalCourses').innerText = coursesData.length;
  document.getElementById('lessonsCompleted').innerText = completedLessons;

  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  document.getElementById('totalProgress').innerText = overallProgress + '%';
  document.getElementById('navProgress').innerText = overallProgress + '% Progress';
}

// Render Dashboard
function renderDashboard() {
  const coursesList = document.getElementById('coursesList');
  coursesList.innerHTML = '';

  coursesData.forEach((course, index) => {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="course-card-header">
        <div class="course-thumbnail">${course.thumbnail}</div>
        <div class="course-meta">
          <span class="course-category">${course.category}</span>
          <span class="course-duration">⏱️ ${course.duration}</span>
        </div>
      </div>
      <h3>${course.name}</h3>
      <p>${course.description}</p>
      <div class="course-progress-bar">
        <div class="progress-fill" style="width: ${course.progress}%"></div>
      </div>
      <div class="course-footer">
        <span>${course.progress}%</span>
        <button class="btn-primary" onclick="openCourse(${course.id})">Start Learning →</button>
      </div>
    `;
    coursesList.appendChild(card);
  });
}

// Open Course
function openCourse(courseId) {
  currentCourse = coursesData.find(c => c.id === courseId);
  document.getElementById('dashboardView').classList.remove('active');
  document.getElementById('courseView').classList.add('active');
  document.getElementById('backBtn').style.display = 'block';
  renderCourseView();

  // Open first incomplete lesson
  const firstIncomplete = currentCourse.lessons.find(l => !userProgress[courseId][l.id]);
  if (firstIncomplete) {
    openLesson(firstIncomplete.id);
  } else {
    openLesson(currentCourse.lessons[0].id);
  }
}

// Render Course View
function renderCourseView() {
  const header = document.getElementById('courseHeader');
  header.innerHTML = `
    <div class="course-header-content">
      <h1>${currentCourse.name}</h1>
      <p>${currentCourse.description}</p>
      <div class="course-stats">
        <span>📚 ${currentCourse.lessons.length} Lessons</span>
        <span>⏱️ ${currentCourse.duration}</span>
        <span>✓ ${currentCourse.lessons.filter(l => userProgress[currentCourse.id][l.id]).length}/${currentCourse.lessons.length} Completed</span>
      </div>
    </div>
  `;

  const sidebar = document.getElementById('lessonsSidebar');
  sidebar.innerHTML = '<h3>Lessons</h3>';

  currentCourse.lessons.forEach(lesson => {
    const isCompleted = userProgress[currentCourse.id][lesson.id];
    const lessonItem = document.createElement('div');
    lessonItem.className = `lesson-item ${isCompleted ? 'completed' : ''} ${currentLesson?.id === lesson.id ? 'active' : ''}`;
    lessonItem.innerHTML = `
      <div class="lesson-check">${isCompleted ? '✓' : ''}</div>
      <div class="lesson-info">
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-duration">${lesson.duration}</div>
      </div>
    `;
    lessonItem.onclick = () => openLesson(lesson.id);
    sidebar.appendChild(lessonItem);
  });
}

// Open Lesson
// Convert YouTube URL to Embed URL
function convertYoutubeUrl(url) {
  if (!url) return "";

  if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("youtu.be/")[1].split("?")[0]
      }`;
  }

  if (url.includes("watch?v=")) {
    return `https://www.youtube.com/embed/${url.split("v=")[1].split("&")[0]
      }`;
  }

  return url;
}

// Open Lesson
function openLesson(lessonId) {
  currentLesson = currentCourse.lessons.find(
    lesson => lesson.id === lessonId
  );

  const contentArea =
    document.getElementById("lessonContent");

  const isCompleted =
    userProgress[currentCourse.id][lessonId];

  contentArea.innerHTML = `
  
  <div class="lesson-view">

    <h2>${currentLesson.title}</h2>

    <div class="video-container">

      ${currentLesson.videoUrl.includes("youtu.be") ||
      currentLesson.videoUrl.includes("youtube.com")

      ?

      `
          <iframe
            width="100%"
            height="450"
            src="${convertYoutubeUrl(
        currentLesson.videoUrl
      )}"
            title="${currentLesson.title}"
            frameborder="0"
            allow="accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen>
          </iframe>
          `

      :

      `
          <video controls width="100%">
            <source
              src="${currentLesson.videoUrl}"
              type="video/mp4">

            Browser does not
            support video.
          </video>
          `
    }

    </div>

    <div class="lesson-info-bar">

      <span>
        ⏱️ ${currentLesson.duration}
      </span>

      <button
        class="btn-complete ${isCompleted
      ? "completed"
      : ""
    }"

        onclick="
          completeLesson(
            ${currentLesson.id}
          )
        ">

        ${isCompleted
      ? "✓ Completed"
      : "Mark Complete"
    }

      </button>

    </div>

    <div class="lesson-content">

      <h3>
        About this lesson
      </h3>

      <p>
        ${currentLesson.content}
      </p>

    </div>

    ${currentLesson.hasQuiz

      ?

      `
      <div class="lesson-quiz">

        <h3>
          Test Your Knowledge
        </h3>

        <p>
          Take a quick quiz
          to reinforce what
          you've learned.
        </p>

        <button
          class="btn-secondary"

          onclick="
            openQuiz(
              ${currentCourse.id},
              ${currentLesson.id}
            )
          ">

          Start Quiz →

        </button>

      </div>
      `

      :

      ""
    }

    <div class="lesson-navigation">

      ${currentCourse.lessons.findIndex(
      l => l.id === lessonId
    ) > 0

      ?

      `
        <button
          class="btn-secondary"

          onclick="
            openLesson(
              ${currentCourse.lessons[
        currentCourse.lessons.findIndex(
          l =>
            l.id === lessonId
        ) - 1
      ].id
      }
            )
          ">

          ← Previous

        </button>
        `

      :

      ""
    }

      ${currentCourse.lessons.findIndex(
      l => l.id === lessonId
    ) <
      currentCourse.lessons.length - 1

      ?

      `
        <button
          class="btn-primary"

          onclick="
            openLesson(
              ${currentCourse.lessons[
        currentCourse.lessons.findIndex(
          l =>
            l.id === lessonId
        ) + 1
      ].id
      }
            )
          ">

          Next →

        </button>
        `

      :

      ""
    }

    </div>

  </div>
  `;

  renderCourseView();
}

// Complete Lesson
function completeLesson(lessonId) {
  userProgress[currentCourse.id][lessonId] = !userProgress[currentCourse.id][lessonId];
  saveProgress();
  renderCourseView();
  openLesson(lessonId);
}

// Open Quiz
function openQuiz(courseId, lessonId) {
  const quizKey = `${courseId}-${lessonId}`;
  const questions = quizzes[quizKey] || [];

  if (questions.length === 0) {
    alert('No quiz available for this lesson.');
    return;
  }

  const modal = document.getElementById('quizModal');
  const container = document.getElementById('quizContainer');

  let quizHTML = `
    <div class="quiz">
      <h2>Quiz: ${currentLesson.title}</h2>
      <form id="quizForm">
  `;

  questions.forEach((q, index) => {
    quizHTML += `
      <div class="quiz-question">
        <h4>Question ${index + 1}</h4>
        <p>${q.question}</p>
        <div class="quiz-options">
          ${q.options.map((option, optIndex) => `
            <label class="quiz-option">
              <input type="radio" name="q${index}" value="${optIndex}" required>
              <span>${option}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  });

  quizHTML += `
    <button type="button" class="btn-primary" onclick="submitQuiz('${quizKey}')">Submit Quiz</button>
  </form>
  `;

  container.innerHTML = quizHTML;
  modal.style.display = 'flex';
}

// Submit Quiz
function submitQuiz(quizKey) {
  const form = document.getElementById('quizForm');
  const questions = quizzes[quizKey];
  let score = 0;

  questions.forEach((q, index) => {
    const answer = parseInt(form.querySelector(`input[name="q${index}"]:checked`)?.value);
    if (answer === q.correct) {
      score++;
    }
  });

  const percentage = Math.round((score / questions.length) * 100);
  const passed = percentage >= 70;

  alert(`Quiz Complete!\n\nScore: ${score}/${questions.length} (${percentage}%)\n${passed ? '✓ Passed!' : '✗ Try again!'}`);

  if (passed) {
    userProgress[currentCourse.id][currentLesson.id] = true;
    saveProgress();
    renderCourseView();
    openLesson(currentLesson.id);
  }

  closeQuiz();
}

// Close Quiz
function closeQuiz() {
  document.getElementById('quizModal').style.display = 'none';
}

// Go to Dashboard
function goToDashboard() {
  document.getElementById('courseView').classList.remove('active');
  document.getElementById('dashboardView').classList.add('active');
  document.getElementById('backBtn').style.display = 'none';
  renderDashboard();
}

// Initialize
window.addEventListener('load', () => {
  loadProgress();
  updateAllStats();
  renderDashboard();
});
