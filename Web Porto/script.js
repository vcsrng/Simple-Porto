AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

const data = {
  hero: {
    name: "Vincent Saranang",
    specialities: "iOS Developer | Database Enthusiast | Creator of Hetice"
  },
  about: {
    textabout: "I'm a fresh graduate in Computer Science from BINUS University, passionate about crafting beautiful and functional applications. With a strong foundation in iOS development and a keen eye for detail, I strive to create intuitive user experiences. My journey in tech has been driven by a curiosity for problem-solving and a desire to build things that make a difference."
  },
  projects: [
    {
      name: "Hetice",
      image: "path/to/your/hetice-image.jpg", // <-- IMPORTANT: Update image paths
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    {
      name: "Hetice",
      image: "",
      description: "Accessibility app using haptics and sound detection to assist the deaf.",
      tags: ["SwiftUI", "CoreHaptics", "iOS"],
      href: "https://vcsrng.github.io/v/main.html"
    },
    // ...add more projects as needed
  ],
  skillset: ["Swift", "UIKit", "SwiftUI", "SQL", "Firebase", "HTML/CSS", "JavaScript", "Git", "Figma"],
  achievements: [
    {
      icon: "bi-apple",
      title: "Swift Student Challenge Winner",
      issuer: "Apple",
      date: "April 2025",
      description: "Selected as one of the winners for creating an outstanding app playground.",
      verifyLink: "https://developer.apple.com/wwdc25/swift-student-challenge/" // <-- Add your actual verification link
    },
    {
      icon: "bi-mortarboard-fill",
      title: "Apple Developer Academy Graduate",
      issuer: "Apple Developer Academy @ BINUS",
      date: "December 2024",
      description: "Completed the intensive 9-month program focusing on app development, design, and business.",
      verifyLink: "#" // <-- Link to your credential
    },
    {
      icon: "bi-code-slash",
      title: "SQL (Intermediate) Certificate",
      issuer: "HackerRank",
      date: "August 2024",
      description: "Demonstrated proficiency in intermediate SQL queries and database manipulation.",
      verifyLink: "#" // <-- Link to your credential
    }
  ]
};

// State Management
let filteredProjects = [...data.projects]; // Projects currently displayed
let activeTags = []; // Tags that are actively filtering the projects
let selectedTags = []; // Tags selected in the off-canvas panel (temporary state)

// DOM Elements
const projectGrid = document.getElementById("project-grid");
const pagination = document.getElementById("project-pagination");
const filterOptionsContainer = document.getElementById("filter-options-container");
const applyFiltersBtn = document.getElementById("apply-filters-btn");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const offcanvasElement = document.getElementById('offcanvasFilters');
const offcanvas = new bootstrap.Offcanvas(offcanvasElement); // Bootstrap Offcanvas instance

const itemsPerPage = 6;

// Function to populate the off-canvas with filter options (checkboxes)
function renderFilterOptions() {
    const allTags = [...new Set(data.projects.flatMap(p => p.tags))];
    filterOptionsContainer.innerHTML = allTags.map(tag => `
        <div class="form-check form-switch mb-2">
            <input class="form-check-input" type="checkbox" value="${tag}" id="tag-${tag}" ${selectedTags.includes(tag) ? 'checked' : ''}>
            <label class="form-check-label" for="tag-${tag}">${tag}</label>
        </div>
    `).join('');

    // Add event listeners to checkboxes to update the temporary 'selectedTags' array
    document.querySelectorAll('#filter-options-container .form-check-input').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedTags.push(e.target.value);
            } else {
                selectedTags = selectedTags.filter(tag => tag !== e.target.value);
            }
        });
    });
}

// Function to apply the selected filters
function applyFilters() {
    activeTags = [...selectedTags]; // Solidify the selected tags as active
    if (activeTags.length === 0) {
        filteredProjects = [...data.projects];
    } else {
        filteredProjects = data.projects.filter(project =>
            activeTags.some(tag => project.tags.includes(tag))
        );
    }
    renderProjects(1); // Re-render projects from page 1
    offcanvas.hide(); // Hide the off-canvas panel
}

// Function to clear all filters
function clearFilters() {
    selectedTags = [];
    activeTags = [];
    filteredProjects = [...data.projects];
    renderFilterOptions(); // Re-render options to show them as unchecked
    renderProjects(1); // Re-render the full project list
    offcanvas.hide();
}

// Event Listeners for the off-canvas buttons
applyFiltersBtn.addEventListener('click', applyFilters);
clearFiltersBtn.addEventListener('click', clearFilters);

// Typing effect for hero specialities
let typeIndex = 0;
const heroSpecialitiesText = data.hero.specialities;
const typingElement = document.getElementById("hero-specialities");
function typeText() {
  if (typeIndex <= heroSpecialitiesText.length) {
     typingElement.textContent = heroSpecialitiesText.slice(0, typeIndex++);
     setTimeout(typeText, 50);
  }
}
document.getElementById("hero-name").textContent = data.hero.name;
typeText();

// Populate about
document.getElementById("about-text").textContent = data.about.textabout;

// Populate projects with pagination
function renderProjects(page) {
  projectGrid.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  if (filteredProjects.length === 0) {
      projectGrid.innerHTML = `<div class="col-12 text-center"><p class="text-muted fs-5 mt-4">No projects found for the selected filters.</p></div>`;
      // We still need to render pagination to avoid errors, it will just be empty
      renderPagination(page); 
      return; 
  }
  
  filteredProjects.slice(start, end).forEach(proj => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    const hasImage = proj.image && proj.image.trim() !== "";
    col.innerHTML = `
      <a href="${proj.href}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark">
        <div class="project-card">
          <div class="project-image-wrapper">
            ${hasImage
              ? `<img src="${proj.image}" alt="Screenshot of ${proj.name}" class="img-fluid project-image" style="height: 250px; width: 100%; object-fit: cover;">`
              : `<div class="img-fluid project-image bg-light d-flex align-items-center justify-content-center border" style="height: 250px; width: 100%;"><span class='text-muted'>No Image</span></div>`}
          </div>
          <div class="project-overlay">
            <h5>${proj.name}</h5>
            <p>${proj.description}</p>
            <div class="tags">
              ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          </div>
          <div class="project-title">${proj.name}</div>
        </div>
      </a>`;
    projectGrid.appendChild(col);
  });

  renderPagination(page);
}

function renderPagination(currentPage) {
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  pagination.innerHTML = '';
  if (totalPages <= 1) {
    pagination.style.display = 'none';
    return;
  } else {
    pagination.style.display = 'flex';
  }

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.className = 'page-item' + (i === currentPage ? ' active' : '');
    const btn = document.createElement('button');
    btn.className = 'page-link';
    btn.innerText = i;
    btn.setAttribute('aria-current', i === currentPage ? 'page' : '');
    btn.onclick = () => renderProjects(i);
    li.appendChild(btn);
    pagination.appendChild(li);
  }
}

// Populate skills
const skillsGrid = document.getElementById("skills-grid");
const uniqueSkills = [...new Set(data.skillset)]; // Remove duplicate skills
skillsGrid.classList.add("skills-grid", "d-flex", "flex-wrap", "gap-2", "justify-content-center");
uniqueSkills.forEach((skill) => {
  const span = document.createElement("span");
  span.className = "badge bg-secondary";
  span.style.fontSize = "1rem";
  span.textContent = skill;
  skillsGrid.appendChild(span);
});

// Populate achievements
const achievementGrid = document.getElementById("achievements-grid");
data.achievements.forEach(ach => {
  const col = document.createElement("div");
  // This makes the grid responsive: 1 col on small, 2 on medium, 3 on large screens
  col.className = "col-lg-4 col-md-6"; 

  // Conditionally create the "Verify" button only if a link exists
  const verifyButton = ach.verifyLink && ach.verifyLink !== "#" 
    ? `<a href="${ach.verifyLink}" class="btn btn-outline-dark btn-sm mt-auto" target="_blank" rel="noopener noreferrer">Verify Credential <i class="bi bi-arrow-up-right-square-fill"></i></a>` 
    : '';

  col.innerHTML = `
    <div class="achievement-card h-100 d-flex flex-column">
      <div class="achievement-card-header">
        <i class="bi ${ach.icon}"></i>
        <span class="issuer">${ach.issuer}</span>
      </div>
      <div class="achievement-card-body">
        <h5 class="title">${ach.title}</h5>
        <p class="date text-muted">${ach.date}</p>
        <p class="description">${ach.description}</p>
      </div>
      <div class="achievement-card-footer mt-auto">
        ${verifyButton}
      </div>
    </div>
  `;
  achievementGrid.appendChild(col);
});

// Downloadable CV
const cvBtn = document.getElementById("cv-download");
if (cvBtn) {
  cvBtn.innerHTML = `<i class="bi bi-file-earmark-person-fill" id="cv-icon"></i> Download CV`;
  cvBtn.addEventListener("mouseenter", () => {
    document.getElementById("cv-icon").className = "bi bi-file-earmark-person";
  });
  cvBtn.addEventListener("mouseleave", () => {
    document.getElementById("cv-icon").className = "bi bi-file-earmark-person-fill";
  });
  cvBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "cv-vincent-saranang.pdf";
    link.download = "Vincent_Saranang_CV.pdf";
    link.click();
  });
}

// --- INITIAL PAGE LOAD ---
renderFilterOptions(); // Prepare the filter panel content
renderProjects(1); // Render all projects initially