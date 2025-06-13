// --- INITIAL SETUP ---
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
            image: "", // <-- IMPORTANT: Update image paths
            description: "Accessibility app using haptics and sound detection to assist the deaf.",
            tags: ["SwiftUI", "CoreHaptics", "iOS"],
            href: "https://vcsrng.github.io/v/main.html"
        },
        {
            name: "Project Two",
            image: "",
            description: "Description for your second amazing project.",
            tags: ["UIKit", "Firebase"],
            href: "#"
        },
        { name: "Project 3", image: "", description: "Description for project.", tags: ["SwiftUI", "iOS"], href: "#" },
        { name: "Project 4", image: "", description: "Description for project.", tags: ["UIKit", "CoreHaptics"], href: "#" },
        { name: "Project 5", image: "", description: "Description for project.", tags: ["Firebase", "iOS"], href: "#" },
        { name: "Project 6", image: "", description: "Description for project.", tags: ["SwiftUI"], href: "#" },
        { name: "Project 7", image: "", description: "Description for project.", tags: ["JavaScript", "HTML/CSS"], href: "#" }
    ],
    skillset: ["Swift", "UIKit", "SwiftUI", "SQL", "Firebase", "HTML/CSS", "JavaScript", "Git", "Figma"],
    achievements: [
        {
            icon: "bi-apple",
            title: "Swift Student Challenge Winner",
            issuer: "Apple",
            date: "April 2025",
            description: "Selected as one of the winners for creating an outstanding app playground.",
            verifyLink: "#"
        },
        {
            icon: "bi-mortarboard-fill",
            title: "Apple Developer Academy Graduate",
            issuer: "Apple Developer Academy @ BINUS",
            date: "December 2024",
            description: "Completed the intensive 9-month program focusing on app development, design, and business.",
            verifyLink: "#"
        },
        {
            icon: "bi-code-slash",
            title: "SQL (Intermediate) Certificate",
            issuer: "HackerRank",
            date: "August 2024",
            description: "Demonstrated proficiency in intermediate SQL queries and database manipulation.",
            verifyLink: "#"
        }
    ]
};

// --- NEW FEATURE FUNCTIONS ---

function createHeroCodeBackground() {
    const bg = document.getElementById('hero-code-bg');
    if (!bg) return;
    const codeSnippets = [
        'let portfolio = "awesome";', 'const name = "Vincent";', 'func viewDidLoad() {', 'super.viewDidLoad()',
        'import SwiftUI', 'struct ContentView: View {', 'var body: some View {', 'Text("Hello, World!")', '}',
        'tableView.delegate = self', 'let skills = ["Swift", "UIKit"]', 'for skill in skills {', 'print(skill)', '}'
    ];
    const lines = 30;
    for (let i = 0; i < lines; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.style.left = `${Math.random() * 100}vw`;
        line.style.top = `${Math.random() * 100}vh`;
        line.style.animationDuration = `${Math.random() * 10 + 15}s`;
        line.style.animationDelay = `-${Math.random() * 25}s`;
        bg.appendChild(line);
    }
}

function setupThemeSwitcher() {
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeSwitch) return;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-bs-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeSwitch.checked = true;
        }
    }
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}

// --- CORE PORTFOLIO LOGIC ---

// State Management & DOM Elements for Project Filter
let filteredProjects = [...data.projects];
let activeTags = [];
let selectedTags = [];
const projectGrid = document.getElementById("project-grid");
const pagination = document.getElementById("project-pagination");
const filterOptionsContainer = document.getElementById("filter-options-container");
const applyFiltersBtn = document.getElementById("apply-filters-btn");
const clearFiltersBtn = document.getElementById("clear-filters-btn");
const offcanvasElement = document.getElementById('offcanvasFilters');
const offcanvas = offcanvasElement ? new bootstrap.Offcanvas(offcanvasElement) : null;
const itemsPerPage = 6;

// Function to populate the off-canvas with filter options
function renderFilterOptions() {
    if (!filterOptionsContainer) return;
    const allTags = [...new Set(data.projects.flatMap(p => p.tags))];
    filterOptionsContainer.innerHTML = allTags.map(tag => `
        <div class="form-check form-switch mb-2">
            <input class="form-check-input" type="checkbox" value="${tag}" id="tag-${tag}" ${selectedTags.includes(tag) ? 'checked' : ''}>
            <label class="form-check-label" for="tag-${tag}">${tag}</label>
        </div>`).join('');
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

function applyFilters() {
    activeTags = [...selectedTags];
    filteredProjects = activeTags.length === 0 ? [...data.projects] : data.projects.filter(p => activeTags.some(tag => p.tags.includes(tag)));
    renderProjects(1);
    offcanvas.hide();
}

function clearFilters() {
    selectedTags = [];
    activeTags = [];
    filteredProjects = [...data.projects];
    renderFilterOptions();
    renderProjects(1);
    offcanvas.hide();
}

if (applyFiltersBtn && clearFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
}

// Typing effect for hero specialities
let typeIndex = 0;
const heroSpecialitiesText = data.hero.specialities;
const typingElement = document.getElementById("hero-specialities");
function typeText() {
    if (typingElement && typeIndex <= heroSpecialitiesText.length) {
        typingElement.textContent = heroSpecialitiesText.slice(0, typeIndex++);
        setTimeout(typeText, 50);
    }
}

// Function to render projects with pagination
function renderProjects(page) {
    if (!projectGrid) return;
    projectGrid.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (filteredProjects.length === 0) {
        projectGrid.innerHTML = `<div class="col-12 text-center"><p class="text-muted fs-5 mt-4">No projects found for the selected filters.</p></div>`;
        renderPagination(page);
        return;
    }
    filteredProjects.slice(start, end).forEach(proj => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6";
        const hasImage = proj.image && proj.image.trim() !== "";
        col.innerHTML = `
            <a href="${proj.href}" target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark">
                <div class="project-card h-100">
                    <div class="project-image-wrapper">
                        ${hasImage
                            ? `<img src="${proj.image}" alt="Screenshot of ${proj.name}" class="img-fluid project-image">`
                            : `<div class="img-fluid project-image bg-light d-flex align-items-center justify-content-center border"><span class='text-muted'>No Image</span></div>`
                        }
                    </div>
                    <div class="project-title">${proj.name}</div>
                    <div class="project-overlay">
                        <h5>${proj.name}</h5>
                        <p>${proj.description}</p>
                        <div class="tags">
                            ${proj.tags.map(tag => `<span>${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </a>`;
        projectGrid.appendChild(col);
    });
    renderPagination(page);
}

function renderPagination(currentPage) {
    if (!pagination) return;
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    pagination.innerHTML = '';
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    pagination.style.display = 'flex';
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = 'page-item' + (i === currentPage ? ' active' : '');
        const btn = document.createElement('button');
        btn.className = 'page-link';
        btn.innerText = i;
        btn.onclick = () => renderProjects(i);
        li.appendChild(btn);
        pagination.appendChild(li);
    }
}

// Function to populate skills
function populateSkills() {
    const skillsGrid = document.getElementById("skills-grid");
    if (!skillsGrid) return;
    const uniqueSkills = [...new Set(data.skillset)];
    skillsGrid.innerHTML = uniqueSkills.map(skill => `<span class="badge">${skill}</span>`).join('');
}

// Function to populate achievements
function populateAchievements() {
    const achievementGrid = document.getElementById("achievements-grid");
    if (!achievementGrid) return;
    achievementGrid.innerHTML = data.achievements.map(ach => {
        const verifyButton = ach.verifyLink && ach.verifyLink !== "#" ?
            `<a href="${ach.verifyLink}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">Verify Credential <i class="bi bi-arrow-up-right-square-fill"></i></a>` : '';
        return `
            <div class="col-lg-4 col-md-6">
                <div class="achievement-card h-100 d-flex flex-column">
                    <div class="achievement-card-header">
                        <i class="bi ${ach.icon}"></i>
                        <span class="issuer">${ach.issuer}</span>
                    </div>
                    <div class="achievement-card-body flex-grow-1">
                        <h5 class="title">${ach.title}</h5>
                        <p class="date text-muted">${ach.date}</p>
                        <p class="description">${ach.description}</p>
                    </div>
                    <div class="achievement-card-footer mt-auto">
                        ${verifyButton}
                    </div>
                </div>
            </div>`;
    }).join('');
}

// Function to setup CV download
function setupCV() {
    const cvBtn = document.getElementById("cv-download");
    if (!cvBtn) return;

    // Create the icon element
    const cvIcon = document.createElement("i");
    cvIcon.className = "bi bi-file-earmark-person-fill"; // Base icon
    
    // Add icon and text to the button
    cvBtn.innerHTML = ''; // Clear previous content
    cvBtn.appendChild(cvIcon);
    cvBtn.append(" Download CV"); // Add text after the icon

    // Handle hover events to swap icon classes
    cvIcon.className = "bi bi-file-earmark-person-fill";

    // Handle the click event for downloading
    cvBtn.addEventListener("click", (e) => {
        // We stop propagation to prevent any other listeners from interfering
        e.stopPropagation(); 
        const link = document.createElement("a");
        link.href = "Vincent_CV.pdf"; // Make sure your CV file is named this
        link.download = "Vincent_Saranang_CV.pdf"; // The name the user will see
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// --- INITIAL PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    // New Features
    createHeroCodeBackground();
    setupThemeSwitcher();

    // Original Features
    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = data.hero.name;
    const aboutText = document.getElementById("about-text");
    if(aboutText) aboutText.textContent = data.about.textabout;
    
    typeText();
    renderFilterOptions();
    renderProjects(1);
    populateSkills();
    populateAchievements();
    setupCV();
});