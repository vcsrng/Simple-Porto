AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

const data = {
    hero: {
        name: "Vincent Saranang",
        specialities: [
            "iOS Developer",
            "#WWDC25 Winner",
            "Software Engineer"
        ]
    },
    about: {
        textabout: "Hi! I'm an iOS developer passionate about solving problems and pushing boundaries to create meaningful technology. As a student at BINUS University and a recent graduate of Apple Developer Academy's Cohort 7, I thrive on applying my technical skills to create innovative solutions. I believe in continuous learning and innovation, always striving to make an impact—while remembering to enjoy the process!"
    },
    experience: [
        {
            role: "iOS Developer",
            company: "Apple Developer Academy @BINUS",
            period: "Mar 2024 - Dec 2024",
            description: "Successfully became part of Cohort 7, selected from over 17,000 applicants (1.12% acceptance rate). Developed advanced iOS features using SwiftUI, UIKit, and ARKit, adhering to Apple Human Interface Guidelines."
        },
        {
            role: "Co-Founder & iOS Developer",
            company: "DariData",
            period: "Sep 2024 - Jan 2025",
            description: "Co-founded a startup to empower retail SMEs by transforming sales data into actionable insights using data analytics and machine learning, enabling smarter business decisions."
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
            period: "2021 - 2025",
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
            description: "Enhances environmental awareness for deaf individuals by converting sound into haptic feedback, offering a new way to experience the world through touch.",
            tech_stack: ["SwiftUI", "CoreHaptics", "SoundAnalysis", "Accessibility"],
            role: "Solo iOS Developer (WWDC25 Winning Project)",
            responsibilities: [
                "Architected the entire application from concept to a functional prototype using SwiftUI.",
                "Engineered a real-time audio analysis pipeline using the SoundAnalysis framework to identify specific environmental sounds.",
                "Designed and implemented a library of custom, rich haptic patterns with CoreHaptics to provide distinct tactile feedback.",
                "Ensured the app met high accessibility standards, focusing on a user-centric design for the deaf community, which was recognized by Apple as a Swift Student Challenge Winner."
            ],
            links: {
                testflight: "https://testflight.apple.com/join/BGzFxe1Z",
                wwdc: "https://www.wwdcscholars.com/s/D591D59B-F8A6-4BF3-9EAE-8D7CFCC77C7A/2025"
            }
        },
        {
            name: "DariData",
            image: "assets/daridata.png",
            description: "Empowers retail SMEs by transforming raw sales data into actionable insights using data analytics and machine learning.",
            tech_stack: ["SwiftUI", "UIKit", "Charts", "Firebase", "Python", "Flask", "GCP", "TensorFlow", "Pandas", "OpenAI", "Alamofire", "Keras", "Scikit Learn"],
            role: "Co-Founder & iOS Developer",
            responsibilities: [
                "Developed core front-end features for the iOS application using Swift and SwiftUI, ensuring a seamless user experience.",
                "Implemented adaptive and responsive code to support various iOS devices and screen sizes.",
                "Built scalable and maintainable code by creating reusable components to streamline future updates.",
                "Contributed to end-to-end design processes and built interactive prototypes for user testing to refine UI/UX."
            ],
            links: {
                appstore: "https://apps.apple.com/id/app/daridata/id6738042541"
            }
        },
        {
            name: "Dandenion",
            description: "An app to enhance safety for women pedestrians with features for recording and incident reporting in catcalling-prone areas.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "CloudKit", "CoreLocation", "MapKit", "WatchConnectivity", "BackgroundTasks"],
            role: "iOS & watchOS Developer",
            responsibilities: [
                "Developed synchronized user interfaces for both iOS and watchOS to ensure consistent feature availability.",
                "Engineered real-time data transfer between devices using the WatchConnectivity framework.",
                "Implemented CoreLocation and MapKit to enable location-based incident reporting and safety alerts."
            ],
            links: {
                github: "https://github.com/vcsrng/Dandenion",
                medium: "https://medium.com/@vincentsaranang/dandenion-helping-women-feel-safe-when-facing-cat-calling-on-the-streets-c5ef3b19af4c"
            }
        },
        {
            name: "Cartulator",
            description: "A grocery shopping app focusing on budgeting and expense tracking for elderly users, incorporating real-time calculations and spending alerts.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "AVFoundation"],
            role: "iOS Developer",
            responsibilities: [
                "Developed the complete front-end using SwiftUI, focusing on an accessible and high-contrast user interface.",
                "Engineered a responsive layout and a library of reusable components to support all iOS device sizes efficiently.",
                "Conducted rigorous manual testing and debugging cycles to ensure a high-quality, stable application."
            ],
            links: {
                appstore: "https://apps.apple.com/id/app/cartulator/id6547868094",
                github: "https://github.com/vcsrng/Cartulator"
            }
        },
        {
            name: "PhysiQuest",
            description: "An educational physics app with interactive experiments, structured materials, and exercises to make physics accessible and engaging.",
            tech_stack: ["SwiftUI", "UIKit", "SpriteKit", "GameplayKit", "Lottie"],
            role: "iOS Developer, UX Designer & Project Manager",
            responsibilities: [
                "Led project management using Notion to organize tasks and facilitate a parallel development workflow for the team.",
                "Conducted user and content research to define educational material and interactive physics questions.",
                "Designed and implemented the complete UI/UX for the Map, Material, and Profile pages, incorporating Lottie animations.",
                "Ensured a seamless and responsive experience across all iPadOS screen sizes through adaptive layout engineering."
            ],
            links: {
                github: "https://github.com/vcsrng/Physiquest",
                medium: "https://medium.com/@vincentsaranang/physiquest-revolutionizing-physics-learning-through-engaging-and-interactive-experiments-bab99b7d9108"
            }
        },
        {
            name: "Find then Guess (FTG)",
            description: "An AR game blending real-world exploration and virtual guessing, encouraging physical movement and observational skill enhancement.",
            tech_stack: ["SwiftUI", "UIKit", "ARKit", "RealityKit", "AVFoundation", "Lottie"],
            role: "iOS Developer, Designer & Project Manager",
            responsibilities: [
                "Led the project from concept to App Store submission, overseeing all aspects of development, design, and project management.",
                "Developed the core augmented reality experience using ARKit and RealityKit.",
                "Designed the complete user interface and user experience, creating all visual assets and game logic.",
                "Managed timelines and feature implementation to ensure a timely and successful launch."
            ],
            links: {
                appstore: "https://apps.apple.com/id/app/find-then-guess/id6503274324",
                medium: "https://medium.com/@vincentsaranang/ftg-the-innovative-augmented-reality-ar-guessing-game-e23dcd36b764"
            }
        },
        {
            name: "SCUP",
            description: "A sketching app empowering users to transform initial sketches into polished illustrations, promoting creativity and skill improvement.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "Firebase", "AVKit", "Python Replicate"],
            role: "iOS Developer & Designer",
            responsibilities: [
                "Owned the end-to-end design process, creating all UI/UX wireframes, visual assets, and application branding.",
                "Built the core sketching canvas and toolset using a combination of SwiftUI and UIKit for optimal performance.",
                "Developed the complete application interface, ensuring fluid performance and intuitive user interaction."
            ],
            links: {
                github: "https://github.com/vcsrng/SCUP"
            }
        },
        {
            name: "Pinion",
            description: "An app created for BSD Link drivers to manage passenger counts, enhancing efficiency and responsibility in tracking.",
            tech_stack: ["SwiftUI", "Python", "TensorFlow"],
            role: "iOS Developer & UX Designer/Researcher",
            responsibilities: [
                "Conducted user research with drivers to inform the design of a simple and efficient UI, minimizing distraction.",
                "Developed the main user interface for passenger count management using SwiftUI.",
                "Collaborated with the team to integrate a Python and TensorFlow backend for data processing."
            ]
        }
    ],
    skillset: [
        "Swift", "SwiftUI", "UIKit", "Combine", "Objective-C", "AutoLayout", "ARKit", "Watch Connectivity", 
        "Debugging", "Refactoring", "Version Control (Git)", "Design Patterns", "OOP", "Functional Programming", 
        "Local Storage (SwiftData, CoreData)", "Cloud Storage (Firebase, CloudKit)", "Location & Maps (MapKit)", 
        "Localization", "App Store Connect", "Team Communication", "Prototyping", "Usability Testing", 
        "Human-Centered Design", "UI Style Guides", "Gamification", "Python", "SQL", "HTML/CSS", "JavaScript", "Figma"
    ],
    achievements: [
        {
            icon: "bi-apple",
            title: "Swift Student Challenge Winner 2025",
            issuer: "Apple",
            date: "June 2025",
            description: "Selected as a 2025 winner for creating 'Hetice,' an outstanding app playground that enhances environmental awareness for the deaf using haptic feedback.",
            verifyLink: "https://www.wwdcscholars.com/s/D591D59B-F8A6-4BF3-9EAE-8D7CFCC77C7A/2025"
        },
        {
            icon: "bi-patch-check-fill",
            title: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            date: "Nov 2023",
            description: "Demonstrated proficiency in data structures and algorithms.",
            verifyLink: "#"
        },
        {
            icon: "bi-patch-check-fill",
            title: "SQL (Intermediate)",
            issuer: "HackerRank",
            date: "Nov 2023",
            description: "Validated skills in complex SQL queries and database manipulation.",
            verifyLink: "#"
        },
        {
            icon: "bi-cloud-fill",
            title: "Introduction to Cloud",
            issuer: "Cognitive Class by IBM",
            date: "May 2023",
            description: "Completed coursework on cloud computing fundamentals.",
            verifyLink: "#"
        },
        {
            icon: "bi-trophy-fill",
            title: "ICPC - Asia Jakarta National Contestant",
            issuer: "ICPC",
            date: "Nov 2022",
            description: "Competed in the prestigious International Collegiate Programming Contest.",
            verifyLink: "#"
        }
    ]
};

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

// MODIFIED: Simplified the theme switcher function to remove favicon logic
function setupThemeSwitcher() {
    const themeSwitch = document.getElementById('theme-switch');
    if (!themeSwitch) return;

    const applyTheme = (theme) => {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        themeSwitch.checked = theme === 'dark';
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeSwitch.addEventListener('change', function() {
        applyTheme(this.checked ? 'dark' : 'light');
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

function typeAndDeleteLoop() {
    const specialitiesElement = document.getElementById("hero-specialities");
    const specialities = data.hero.specialities;
    if (!specialitiesElement || !specialities.length) return;

    let specialityIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const pauseDuration = 2000;

    function loop() {
        const currentSpeciality = specialities[specialityIndex];
        let displayText;

        if (isDeleting) {
            displayText = currentSpeciality.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentSpeciality.substring(0, charIndex + 1);
            charIndex++;
        }

        specialitiesElement.innerHTML = `${displayText}<span class="cursor">|</span>`;

        let time = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentSpeciality.length) {
            time = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            specialityIndex = (specialityIndex + 1) % specialities.length;
        }

        setTimeout(loop, time);
    }

    loop();
}

function setupLoopingNavbarLogoAnimation() {
    const logoElement = document.getElementById('navbar-logo');
    if (!logoElement) return;

    const logoText = "vcsrng.";
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 250;
    const deletingSpeed = 150;
    const pauseDuration = 3000;

    function loop() {
        const currentText = logoText;
        let displayText;

        if (isDeleting) {
            displayText = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            displayText = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        logoElement.innerHTML = `${displayText}<span class="cursor">|</span>`;

        let time = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentText.length) {
            time = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
        }
        
        setTimeout(loop, time);
    }

    loop();
}


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

function renderProjects(page) {
    const featuredProjectContainer = document.getElementById("featured-project-container");
    const projectGrid = document.getElementById("project-grid");
    if (!projectGrid || !featuredProjectContainer) return;
    
    const featuredProject = data.projects.find(p => p.featured);

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
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-name="${featuredProject.name}">
                        View Details <i class="bi bi-box-arrow-up-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

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
            col.innerHTML = `
                <div class="project-card-link" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-name="${proj.name}">
                    <div class="project-card h-100">
                        <div class="project-image-wrapper">
                            ${hasImage ? `<img src="${proj.image}" alt="${proj.name}" class="img-fluid project-image">` : `<div class="img-fluid project-image bg-light d-flex align-items-center justify-content-center border"><span class='text-muted'>No Image</span></div>`}
                        </div>
                        <div class="project-title">${proj.name}</div>
                        <div class="project-overlay">
                            <h5>${proj.name}</h5>
                            <p>${proj.description}</p>
                            <div class="tech-stack">${(proj.tech_stack || []).map(tech => `<span>${tech}</span>`).join('')}</div>
                        </div>
                    </div>
                </div>`;
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
        const verifyButton = ach.verifyLink && ach.verifyLink !== "#" ? `<a href="${ach.verifyLink}" class="btn btn-outline-themed btn-sm" target="_blank" rel="noopener noreferrer">Verify <i class="bi bi-arrow-up-right-square-fill"></i></a>` : '';
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
    timeline.innerHTML = data.education.map(edu => `<div class="timeline-item"><h5 class="timeline-role">${edu.degree}</h5><h6 class="timeline-company">${edu.university}</h6><p class="timeline-period text-muted">${edu.period}</p><ul class="timeline-details">${(edu.details || []).map(detail => `<li>${detail}</li>`).join('')}</ul></div>`).join('');
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

function setupDynamicScrollspy() {
    const mainNav = document.querySelector('.navbar');
    if (mainNav) {
        const navbarHeight = mainNav.offsetHeight;
        const scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
            offset: navbarHeight + 10
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = data.hero.name;
    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = data.about.textabout;
    
    createHeroCodeBackground();
    setupThemeSwitcher();
    setupNavbarScrollEffect();
    typeAndDeleteLoop();
    setupLoopingNavbarLogoAnimation();
    renderFilterOptions();
    renderProjects(1);
    populateSkills();
    populateAchievements();
    populateExperience();
    populateEducation();
    setupCV();
    
    setupDynamicScrollspy();
    window.addEventListener('resize', setupDynamicScrollspy);

    const projectModal = document.getElementById('projectModal');
    if (projectModal) {
        projectModal.addEventListener('show.bs.modal', function (event) {
            const card = event.relatedTarget;
            const projectName = card.getAttribute('data-project-name');
            const projectData = data.projects.find(p => p.name === projectName);
            if (!projectData) return;

            const modalTitle = projectModal.querySelector('#modal-project-title');
            const modalImage = projectModal.querySelector('#modal-project-image');
            const modalDescription = projectModal.querySelector('#modal-project-description');
            const modalTechStack = projectModal.querySelector('#modal-project-tech-stack');
            const modalRole = projectModal.querySelector('#modal-project-role');
            const modalResponsibilities = projectModal.querySelector('#modal-project-responsibilities');
            const modalLinks = projectModal.querySelector('#modal-project-links');

            modalTitle.textContent = projectData.name;
            modalImage.src = projectData.image || 'assets/placeholder.png';
            modalDescription.textContent = projectData.description;
            modalRole.textContent = projectData.role || 'N/A';
            
            modalTechStack.innerHTML = (projectData.tech_stack || []).map(tech => `<span>${tech}</span>`).join('');
            modalResponsibilities.innerHTML = (projectData.responsibilities || []).map(res => `<li>${res}</li>`).join('');

            modalLinks.innerHTML = ''; 
            if (projectData.links) {
                if (projectData.links.appstore) {
                    modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.appstore}" class="btn btn-dark" target="_blank" rel="noopener noreferrer"><i class="bi bi-apple"></i> App Store</a>`);
                }
                if (projectData.links.testflight) {
                    modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.testflight}" class="btn btn-info text-white" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-seam"></i> TestFlight</a>`);
                }
                if (projectData.links.github) {
                    modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> GitHub</a>`);
                }
                if (projectData.links.medium) {
                    modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.medium}" class="btn btn-light" target="_blank" rel="noopener noreferrer"><i class="bi bi-medium"></i> Read Article</a>`);
                }
                 if (projectData.links.wwdc) {
                    modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.wwdc}" class="btn btn-wwdc" target="_blank" rel="noopener noreferrer"><i class="bi bi-trophy-fill"></i> WWDC Profile</a>`);
                }
            }
            modalLinks.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-modal-close ms-auto" data-bs-dismiss="modal">Close</button>`);
        });
    }
});