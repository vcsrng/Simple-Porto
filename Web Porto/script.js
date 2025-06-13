// --- INITIAL SETUP ---
AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

const data = {
    hero: {
        name: "Vincent",
        specialities: "iOS Developer | Tech Innovator | Problem Solver"
    },
    about: {
        textabout: "Ambitious and adaptable iOS developer with a strong foundation in technical skills and innovative problem-solving. Experienced in developing iOS applications from scratch and applying Apple Human Interface Guidelines to enhance user experience. Known for a quick learning ability and a commitment to delivering high-quality results."
    },
    experience: [
        {
            role: "Junior iOS Developer, Internship",
            company: "Apple Developer Academy",
            period: "Mar 2024 - Dec 2024",
            description: "Built and optimized multiple iOS, iPadOS and WatchOS applications from scratch, enhancing app performance and user experience by applying Apple Human Interface Guidelines."
        },
        {
            role: "Small Business Owner",
            company: "Cent-Elektronik",
            period: "Mar 2023 - Present",
            description: "Established an online electronics store by conducting market analysis, developing pricing strategies, and implementing solutions to enhance the shopping experience."
        }
    ],
    education: [
        {
            degree: "Bachelor's degree of Computer Science",
            university: "BINUS University",
            period: "2021 - Present",
            details: [
                "Current GPA: 3.82/4.00",
                "Contestant: The 2022 ICPC Asia Jakarta National Contest"
            ]
        },
        {
            degree: "High School Diploma of Natural Science",
            university: "SMA Fons Vitae 1 Marsudirini Jakarta",
            period: "2018 - 2021",
            details: [
                "Activities: Scout, Basketball, Computer Design",
                "Participant: National Science Olympiad (OSN) for Mathematics (2019) and Informatics (2020)"
            ]
        }
    ],
    projects: [
        {
            name: "Hetice",
            featured: true,
            image: "assets/hetice.svg",
            description: "Enhances environmental awareness for the deaf by converting specific or ambient sounds into rich haptic feedback, bridging the gap between sound and touch.",
            tech_stack: ["SwiftUI", "CoreHaptics", "SoundAnalysis", "Accessibility"],
            href: "#"
        },
        {
            name: "DariData",
            description: "An app to analyze data for UMKM businesses, transforming information into actionable insights.",
            tech_stack: ["SwiftUI", "UIKit", "Charts", "Firebase", "Python", "Flask", "GCP", "TensorFlow"],
            href: "#"
        },
        {
            name: "Dandenion",
            description: "An app to enhance safety for women pedestrians with features for recording and incident reporting.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "CloudKit", "CoreLocation", "MapKit", "WatchConnectivity"],
            href: "#"
        },
        {
            name: "SCUP",
            description: "A sketching app empowering users to transform initial sketches into polished illustrations.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "Firebase", "AVKit", "Python Replicate"],
            href: "#"
        },
        {
            name: "Find then Guess (FTG)",
            description: "An AR game blending real-world exploration and virtual guessing, encouraging physical movement.",
            tech_stack: ["SwiftUI", "UIKit", "ARKit", "RealityKit", "AVFoundation", "Lottie"],
            href: "#"
        },
        {
            name: "PhysiQuest",
            description: "An educational physics app with interactive experiments and structured materials.",
            tech_stack: ["SwiftUI", "UIKit", "SpriteKit", "GameplayKit", "Lottie"],
            href: "#"
        },
        {
            name: "Cartulator",
            description: "A grocery shopping app focusing on budgeting and expense tracking for elderly users.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "AVFoundation"],
            href: "#"
        }
    ],
    skillset: ["Swift", "SwiftUI", "UIKit", "C", "HTML/CSS", "JavaScript", "SQL", "Python", "Firebase", "Git", "Figma"],
    achievements: [
        {
            icon: "bi-apple",
            title: "Swift Student Challenge Winner 2025",
            issuer: "Apple",
            date: "June 2025",
            description: "Selected as a winner for creating 'Hetice,' an outstanding app playground that enhances environmental awareness for the deaf using haptic feedback.",
            verifyLink: "#"
        },
        {
            icon: "bi-patch-check-fill",
            title: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            date: "Nov 2023 - Present",
            description: "Demonstrated proficiency in data structures and algorithms.",
            verifyLink: "#"
        },
        {
            icon: "bi-patch-check-fill",
            title: "SQL (Intermediate)",
            issuer: "HackerRank",
            date: "Nov 2023 - Present",
            description: "Validated skills in complex SQL queries and database manipulation.",
            verifyLink: "#"
        },
        {
            icon: "bi-cloud-fill",
            title: "Introduction to Cloud",
            issuer: "Cognitive Class by IBM",
            date: "May 2023 - Present",
            description: "Completed coursework on cloud computing fundamentals.",
            verifyLink: "#"
        },
        {
            icon: "bi-trophy-fill",
            title: "ICPC - Asia Jakarta National Contestant",
            issuer: "ICPCID",
            date: "Nov 2022 - Present",
            description: "Competed in the prestigious International Collegiate Programming Contest.",
            verifyLink: "#"
        }
    ]
};

// --- FEATURE FUNCTIONS ---
function createHeroCodeBackground() {
    const bg = document.getElementById('hero-code-bg');
    if (!bg) return;
    const codeSnippets = ['let portfolio = "awesome";', 'const name = "Vincent";', 'func viewDidLoad() {', 'super.viewDidLoad()', 'import SwiftUI', 'struct ContentView: View {', 'var body: some View {', 'Text("Hello, World!")', '}', 'tableView.delegate = self', 'let skills = ["Swift", "UIKit"]', 'for skill in skills {', 'print(skill)', '}'];
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

function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

// --- CORE PORTFOLIO LOGIC ---
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

function renderFilterOptions() {
    if (!filterOptionsContainer) return;
    const allTags = [...new Set(data.projects.filter(p => !p.featured).flatMap(p => p.tech_stack || []))];
    filterOptionsContainer.innerHTML = allTags.map(tag => `<div class="form-check form-switch mb-2"><input class="form-check-input" type="checkbox" value="${tag}" id="tag-${tag}" ${selectedTags.includes(tag) ? 'checked' : ''}><label class="form-check-label" for="tag-${tag}">${tag}</label></div>`).join('');
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
    filteredProjects = activeTags.length === 0 ? [...data.projects] : data.projects.filter(project => activeTags.some(tag => project.tech_stack.includes(tag)));
    renderProjects(1);
    if(offcanvas) offcanvas.hide();
}

function clearFilters() {
    selectedTags = [];
    activeTags = [];
    filteredProjects = [...data.projects];
    renderFilterOptions();
    renderProjects(1);
    if(offcanvas) offcanvas.hide();
}

if (applyFiltersBtn && clearFiltersBtn) {
    applyFiltersBtn.addEventListener('click', applyFilters);
    clearFiltersBtn.addEventListener('click', clearFilters);
}

let typeIndex = 0;
const heroSpecialitiesText = data.hero.specialities;
const typingElement = document.getElementById("hero-specialities");
function typeText() {
    if (typingElement && typeIndex <= heroSpecialitiesText.length) {
        typingElement.textContent = heroSpecialitiesText.slice(0, typeIndex++);
        setTimeout(typeText, 50);
    }
}

// Replace your existing renderProjects function with this one
function renderProjects(page) {
    const featuredProjectContainer = document.getElementById("featured-project-container");
    const projectGrid = document.getElementById("project-grid");
    if (!projectGrid || !featuredProjectContainer) return;
    
    const featuredProject = data.projects.find(p => p.featured);

    // Render the featured project with a new, simpler internal structure
    if (featuredProject) {
        featuredProjectContainer.innerHTML = `
            <div class="featured-project-card" data-aos="fade-up">
                <div class="featured-project-img-wrapper">
                    <img src="${featuredProject.image}" class="img-fluid featured-project-image" alt="${featuredProject.name}">
                </div>
                <div class="featured-project-body">
                    <h4 class="featured-project-title">
                        <i class="bi bi-award-fill text-warning me-2"></i> Featured Project
                    </h4>
                    <h3>${featuredProject.name}</h3>
                    <p class="lead">${featuredProject.description}</p>
                    <div class="tech-stack mb-4">
                        ${(featuredProject.tech_stack || []).map(tech => `<span>${tech}</span>`).join('')}
                    </div>
                    <a href="${featuredProject.href}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project <i class="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
        `;
    }

    // --- The rest of the function remains the same ---
    const regularProjects = filteredProjects.filter(p => !p.featured);
    projectGrid.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if (regularProjects.length === 0 && !featuredProject) {
        projectGrid.innerHTML = `<div class="col-12 text-center"><p class="text-muted fs-5 mt-4">No other projects found.</p></div>`;
    } else {
        regularProjects.slice(start, end).forEach(proj => {
            const col = document.createElement("div");
            col.className = "col-lg-4 col-md-6";
            const hasImage = proj.image && proj.image.trim() !== "";
            col.innerHTML = `<a href="${proj.href}" target="_blank" rel="noopener noreferrer" class="project-card-link"><div class="project-card h-100"><div class="project-image-wrapper">${hasImage ? `<img src="${proj.image}" alt="${proj.name}" class="img-fluid project-image">` : `<div class="img-fluid project-image bg-light d-flex align-items-center justify-content-center border"><span class='text-muted'>No Image</span></div>`}</div><div class="project-title">${proj.name}</div><div class="project-overlay"><h5>${proj.name}</h5><p>${proj.description}</p><div class="tech-stack">${(proj.tech_stack || []).map(tech => `<span>${tech}</span>`).join('')}</div></div></div></a>`;
            projectGrid.appendChild(col);
        });
    }
    renderPagination(page, regularProjects);
}

function renderPagination(currentPage, projectsToPaginate) {
    if (!pagination) return;
    const totalPages = Math.ceil(projectsToPaginate.length / itemsPerPage);
    pagination.innerHTML = '';
    if (totalPages <= 1) {
        pagination.style.display = 'none';
        return;
    }
    pagination.style.display = 'flex';
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        const btn = document.createElement('button');
        btn.className = 'page-link';
        btn.innerText = i;
        btn.onclick = () => renderProjects(i);
        li.appendChild(btn);
        pagination.appendChild(li);
    }
}

function populateSkills() {
    const skillsGrid = document.getElementById("skills-grid");
    if (!skillsGrid) return;
    skillsGrid.innerHTML = [...new Set(data.skillset)].map(skill => `<span class="badge">${skill}</span>`).join('');
}

function populateAchievements() {
    const achievementGrid = document.getElementById("achievements-grid");
    if (!achievementGrid) return;
    achievementGrid.innerHTML = data.achievements.map(ach => {
        const verifyButton = ach.verifyLink && ach.verifyLink !== "#" ? `<a href="${ach.verifyLink}" class="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">Verify <i class="bi bi-arrow-up-right-square-fill"></i></a>` : '';
        const winnerBadge = ach.title.includes("Winner") ? '<span class="winner-badge"><i class="bi bi-trophy-fill"></i> Winner</span>' : '';
        return `<div class="col-lg-4 col-md-6"><div class="achievement-card h-100 d-flex flex-column">${winnerBadge}<div class="achievement-card-header"><i class="bi ${ach.icon}"></i><span class="issuer">${ach.issuer}</span></div><div class="achievement-card-body flex-grow-1"><h5 class="title">${ach.title}</h5><p class="date text-muted">${ach.date}</p><p class="description">${ach.description}</p></div><div class="achievement-card-footer mt-auto">${verifyButton}</div></div></div>`;
    }).join('');
}

function populateExperience() {
    const timeline = document.getElementById("experience-timeline");
    if (!timeline) return;
    timeline.innerHTML = data.experience.map(exp => `<div class="timeline-item"><h5 class="timeline-role">${exp.role}</h5><h6 class="timeline-company">${exp.company}</h6><p class="timeline-period text-muted">${exp.period}</p><p class="timeline-description">${exp.description}</p></div>`).join('');
}

function populateEducation() {
    const timeline = document.getElementById("education-timeline");
    if (!timeline) return;
    timeline.innerHTML = data.education.map(edu => `<div class="timeline-item"><h5 class="timeline-role">${edu.degree}</h5><h6 class="timeline-company">${edu.university}</h6><p class="timeline-period text-muted">${edu.period}</p><ul class="timeline-details">${edu.details.map(detail => `<li>${detail}</li>`).join('')}</ul></div>`).join('');
}

function setupCV() {
    const cvBtn = document.getElementById("cv-download");
    if (!cvBtn) return;
    const cvIcon = document.createElement("i");
    cvIcon.className = "bi bi-file-earmark-person-fill";
    cvBtn.innerHTML = '';
    cvBtn.appendChild(cvIcon);
    cvBtn.append(" Download CV");
    cvBtn.addEventListener("mouseenter", () => { cvIcon.className = "bi bi-file-earmark-person"; });
    cvBtn.addEventListener("mouseleave", () => { cvIcon.className = "bi bi-file-earmark-person-fill"; });
    cvBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const link = document.createElement("a");
        link.href = "Vincent - iOS Developer - Resume.pdf";
        link.download = "Vincent Saranang - Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// --- INITIAL PAGE LOAD ---
document.addEventListener('DOMContentLoaded', () => {
    createHeroCodeBackground();
    setupThemeSwitcher();
    setupNavbarScrollEffect();
    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = data.hero.name;
    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = data.about.textabout;
    typeText();
    renderFilterOptions();
    renderProjects(1);
    populateSkills();
    populateAchievements();
    populateExperience();
    populateEducation();
    setupCV();
});