const data = {
    hero: {
        name: "Vincent Saranang",
        specialities: [
            "iOS Developer",
            "Software Engineer",
            "T-Shaped Developer"
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
                "Current GPA: 3.85/4.00",
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
            image: [
                "https://vcsrng.github.io/assets/projects/Hetice.svg",
                "https://vcsrng.github.io/assets/projects/Hetice2.png",
                "https://vcsrng.github.io/assets/projects/Hetice3.png",
                "https://vcsrng.github.io/assets/projects/Hetice4.png",
                "https://vcsrng.github.io/assets/projects/Hetice5.png",
                "https://vcsrng.github.io/assets/projects/Hetice6.png"
            ],
            description: "Enhances environmental awareness for deaf individuals by converting sound into haptic feedback, offering a new way to experience the world through touch.",
            tech_stack: ["SwiftUI", "CoreHaptics", "SoundAnalysis", "AVFoundation"],
            role: "iOS Developer (WWDC25 Winning Project)",
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
            image: [
                "https://vcsrng.github.io/assets/projects/Daridata.jpg"
            ],
            scale_image_to_height: true,
            description: "Empowers retail SMEs by transforming raw sales data into actionable insights using data analytics and machine learning.",
            tech_stack: ["SwiftUI", "UIKit", "Security", "Charts", "Pandas", "OpenAI", "Alamofire", "Firebase", "Python", "TensorFlow", "Keras", "Scikit Learn", "Flask", "GCP", "Lottie"],
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
            image: [
                "https://vcsrng.github.io/assets/projects/Dandenion.svg",
                "https://vcsrng.github.io/assets/projects/Dandenion2.png",
                "https://vcsrng.github.io/assets/projects/Dandenion3.png"
            ],
            description: "An app to enhance safety for women pedestrians with features for recording and incident reporting in catcalling-prone areas.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "CloudKit", "AVFoundation", "BackgroundTasks", "CoreLocation", "MapKit", "WatchConnectivity", "UserNotifications"],
            role: "iOS Developer",
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
            image: [
                "https://vcsrng.github.io/assets/projects/Cartulator.svg",
                "https://vcsrng.github.io/assets/projects/Cartulator2.svg",
                "https://vcsrng.github.io/assets/projects/Cartulator3.svg"
            ],
            scale_image_to_height: true,
            description: "A grocery shopping app focusing on budgeting and expense tracking for elderly users, incorporating real-time calculations and spending alerts.",
            tech_stack: ["SwiftUI", "UIKit", "SwiftData", "AVFoundation", "Localization"],
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
            image: [
                "https://vcsrng.github.io/assets/projects/Physiquest.svg",
                "https://vcsrng.github.io/assets/projects/Physiquest2.svg",
                "https://vcsrng.github.io/assets/projects/Physiquest3.svg",
                "https://vcsrng.github.io/assets/projects/Physiquest4.svg",
                "https://vcsrng.github.io/assets/projects/Physiquest5.svg"

            ],
            scale_image_to_height: true,
            description: "An educational physics app with interactive experiments, structured materials, and exercises to make physics accessible and engaging.",
            tech_stack: ["SwiftUI", "UIKit", "SpriteKit", "GameplayKit", "UserDefault", "Lottie"],
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
            name: "Find then Guess",
            image: [
                "https://vcsrng.github.io/assets/projects/FTG.svg",
                "https://vcsrng.github.io/assets/projects/FTG2.png",
                "https://vcsrng.github.io/assets/projects/FTG3.png",
                "https://vcsrng.github.io/assets/projects/FTG4.png",
                "https://vcsrng.github.io/assets/projects/FTG5.png",
                "https://vcsrng.github.io/assets/projects/FTG6.png"
            ],
            description: "An AR game blending real-world exploration and virtual guessing, encouraging physical movement and observational skill enhancement.",
            tech_stack: ["SwiftUI", "UIKit", "ARKit", "RealityKit", "UserDefault", "AVFoundation", "Lottie"],
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
            image: [
                "https://vcsrng.github.io/assets/projects/SCUP.svg",
                "https://vcsrng.github.io/assets/projects/SCUP2.svg",
                "https://vcsrng.github.io/assets/projects/SCUP3.svg",
                "https://vcsrng.github.io/assets/projects/SCUP4.svg",
                "https://vcsrng.github.io/assets/projects/SCUP5.svg",
                "https://vcsrng.github.io/assets/projects/SCUP6.svg",
            ],
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
            image: [
                "https://vcsrng.github.io/assets/projects/Pinion.svg",
                "https://vcsrng.github.io/assets/projects/Pinion2.png",
                "https://vcsrng.github.io/assets/projects/Pinion3.png",
                "https://vcsrng.github.io/assets/projects/Pinion4.png",
                "https://vcsrng.github.io/assets/projects/Pinion5.png",
                "https://vcsrng.github.io/assets/projects/Pinion6.png",
                "https://vcsrng.github.io/assets/projects/Pinion7.png"
            ],
            scale_image_to_height: true,
            description: "An app created for BSD Link drivers to manage passenger counts, enhancing efficiency and responsibility in tracking.",
            tech_stack: ["SwiftUI", "Python", "TensorFlow"],
            role: "iOS Developer & UX Designer/Researcher",
            responsibilities: [
                "Conducted user research with drivers to inform the design of a simple and efficient UI, minimizing distraction.",
                "Developed the main user interface for passenger count management using SwiftUI.",
                "Collaborated with the team to integrate a Python and TensorFlow backend for data processing."
            ]
        },
        {
            name: "sehh.id",
            image: [
                "https://vcsrng.github.io/assets/projects/sehh.png",
                "https://vcsrng.github.io/assets/projects/sehh2.svg",
                "https://vcsrng.github.io/assets/projects/sehh3.svg",
                "https://vcsrng.github.io/assets/projects/sehh4.svg",
                "https://vcsrng.github.io/assets/projects/sehh5.svg",
                "https://vcsrng.github.io/assets/projects/sehh6.svg"
            ],
            description: "An LMS platform designed to streamline educational content delivery and user engagement for an online learning initiative.",
            tech_stack: ["Figma", "Human-Centered Design", "UI/UX Style Guides", "Design Patterns", "Prototyping", "User Research", "Product Strategy"],
            role: "Product Owner & Designer",
            responsibilities: [
                "Led cross-functional team efforts to research and define core problems, conceptualize solutions, and establish the product's value proposition.",
                "Developed the TAM, SAM, and SOM analysis to define market opportunity and formulated the supply chain and sustainable business model to ensure product viability and operational efficiency.",
                "Defined and designed essential product features, producing comprehensive prototypes to articulate solutions and ensure alignment with user experience objectives."
            ],
            links: {
                instagram: "https://www.instagram.com/sehh.id"
            }
        },
        {
            name: "FARbucks",
            image: [
                "https://vcsrng.github.io/assets/projects/Farbucks.svg",
                "https://vcsrng.github.io/assets/projects/Farbucks2.png",
                "https://vcsrng.github.io/assets/projects/Farbucks3.png"
            ],
            scale_image_to_height: true,
            description: "A comprehensive cafe website developed as part of an HCI course, designed to enhance user experience for coffee enthusiasts with menu, pricing, and event information.",
            tech_stack: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX Style Guides", "Design Patterns", "Usability Testing"],
            role: "Lead Developer & Designer",
            responsibilities: [
                "Directed the design and user experience for the website, focusing on intuitive navigation and visual appeal.",
                "Developed all front-end functionalities for menu display, pricing, special offers, and cafe history.",
                "Managed project timelines and deliverables, ensuring the successful completion of the assignment within course requirements."
            ],
            links: {
                github: "https://github.com/vcsrng/FarBucksWebProject",
                web: "https://vcsrng.github.io/FarBucksWebProject/home.html"
            }
        },
        {
            name: "All About Space",
            image: [
                "https://vcsrng.github.io/assets/projects/AAS.svg",
                "assets/projects/AAS2.png",
                "assets/projects/AAS3.png",
                "assets/projects/AAS4.png"
            ],
            description: "An interactive web platform from HCI coursework providing simplified information about planets and outer space, aimed at broadening public knowledge.",
            tech_stack: ["HTML", "CSS", "JavaScript", "Figma", "UI/UX Style Guides", "Design Patterns", "Usability Testing"],
            role: "Developer & Designer",
            responsibilities: [
                "Oversaw the entire project lifecycle, from conceptualization to deployment, ensuring all objectives were met.",
                "Designed and implemented the user interface to present complex astronomical data in an accessible and engaging manner.",
                "Developed dynamic content features to provide detailed planet information and enhance user interaction."
            ],
            links: {
                github: "https://github.com/vcsrng/SimplePlanetWebProject",
                web: "https://vcsrng.github.io/SimplePlanetWebProject/home.html"
            }
        }
    ],
    skillset: {
        tech: [
            "Swift", "SwiftUI", "UIKit", "Combine", "AutoLayout", "SwiftData", "CoreData",
            "MapKit", "ARKit", "Watch Connectivity", "AVFoundation", "BackgroundTasks",
            "C", "C++", "Java", "Python", "Git", "Xcode", "HTML", "CSS", "JavaScript", "MySQL", "PHP",
            "Localization", "Version Control", "Debugging", "Refactoring", "OOP"
        ],
        design: [
            "Figma", "Canva", "Adobe Illustrator", "Adobe Premiere Pro", "Procreate",
            "Human-Centered Design", "UI/UX Style Guides", "Gamification", "Design Patterns",
            "Prototyping", "Usability Testing"
        ],
        product: [
            "Notion", "App Store Connect", "User Research", "Product Strategy"
        ]
    },
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
            verifyLink: "https://www.hackerrank.com/certificates/b70b6aca8a30"
        },
        {
            icon: "bi-patch-check-fill",
            title: "SQL (Intermediate)",
            issuer: "HackerRank",
            date: "Nov 2023",
            description: "Validated skills in complex SQL queries and database manipulation.",
            verifyLink: "https://www.hackerrank.com/certificates/d4d9f49e6202"
        },
        {
            icon: "bi-patch-check-fill",
            title: "GIS for Climate Action",
            issuer: "Esri",
            date: "Oct 2023 - Nov 2023",
            description: "Completed a 6-week Esri MOOC on applying Geographic Information Systems (GIS) to understand and address climate change challenges.",
            verifyLink: "downloadable/Vincent_GIS for Climate Action Certificate.pdf"
        },
        {
            icon: "bi-cloud-fill",
            title: "Introduction to Cloud",
            issuer: "Cognitive Class by IBM",
            date: "May 2023",
            description: "Completed coursework on cloud computing fundamentals.",
            verifyLink: "https://courses.cognitiveclass.ai/certificates/e2a3ed120bfa47e2a63fd88cb735cae1"
        },
        {
            icon: "bi-trophy-fill",
            title: "ICPC - Asia Jakarta National Contestant",
            issuer: "ICPC",
            date: "Nov 2022",
            description: "Competed in the prestigious International Collegiate Programming Contest.",
            verifyLink: "https://icpc.global/ICPCID/LRZY144ZGFUC"
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });

    const heroName = document.getElementById("hero-name");
    if (heroName) heroName.textContent = data.hero.name;

    const aboutText = document.getElementById("about-text");
    if (aboutText) aboutText.textContent = data.about.textabout;
    
    typeAndDeleteLoop();
    renderFilterOptions();
    renderProjects(1);
    populateGroupedSkills();
    populateAchievements();
    populateExperience();
    populateEducation();
    
    createHeroCodeBackground();
    setupThemeSwitcher();
    setupNavbarScrollEffect();
    setupLoopingNavbarLogoAnimation();
    setupCV();
    setupFooter();
    setupNavigation();
    setupProjectModal();

    updateVisitCounter();
});

async function updateVisitCounter() {
    const counterElement = document.getElementById('visit-counter');
    if (!counterElement) return;

    const incrementUrl = 'https://api.counterapi.dev/v2/vincent-porto/pageviews/up';
    const getUrl = 'https://api.counterapi.dev/v2/vincent-porto/pageviews';

    try {
        await fetch(incrementUrl);

        const response = await fetch(getUrl);
        if (!response.ok) {
            throw new Error('Could not retrieve counter value');
        }
        
        const getData = await response.json();
        
        if (getData && getData.data && getData.data.up_count !== undefined) {
            counterElement.textContent = getData.data.up_count;
        } else {
            counterElement.textContent = getData.count;
        }

    } catch (error) {
        console.error('Failed to update visit counter:', error);
        counterElement.textContent = 'Error';
    }
}

function setupNavigation() {
    const mainNav = document.querySelector('.navbar');
    if (!mainNav) return;

    const refreshScrollspy = () => {
        const scrollSpy = bootstrap.ScrollSpy.getOrCreateInstance(document.body, {
            target: '#navbarNav'
        });
        scrollSpy.refresh();
        const atBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        if (atBottom) {
            const contactLink = document.querySelector('a.nav-link[href="#contact"]');
            if (contactLink && !contactLink.classList.contains('active')) {
                document.querySelectorAll('a.nav-link.active').forEach(link => link.classList.remove('active'));
                contactLink.classList.add('active');
            }
        }
    };

    setTimeout(refreshScrollspy, 500);
    window.addEventListener('resize', refreshScrollspy);
    document.addEventListener('scroll', refreshScrollspy);

    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });
}

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
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
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
        let displayText = isDeleting ?
            currentSpeciality.substring(0, charIndex - 1) :
            currentSpeciality.substring(0, charIndex + 1);
        charIndex += isDeleting ? -1 : 1;
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
        let displayText = isDeleting ?
            logoText.substring(0, charIndex - 1) :
            logoText.substring(0, charIndex + 1);
        charIndex += isDeleting ? -1 : 1;
        logoElement.innerHTML = `${displayText}<span class="cursor">|</span>`;
        let time = isDeleting ? deletingSpeed : typingSpeed;
        if (!isDeleting && charIndex === logoText.length) {
            time = pauseDuration;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
        }
        setTimeout(loop, time);
    }
    loop();
}

let filteredProjects = [];
let activeTags = [];
let selectedTags = [];

function renderFilterOptions() {
    const filterOptionsContainer = document.getElementById("filter-options-container");
    if (!filterOptionsContainer) return;
    const allTags = [...new Set(data.projects.filter(p => !p.featured).flatMap(p => p.tech_stack || []))];
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
    const applyFiltersBtn = document.getElementById("apply-filters-btn");
    const clearFiltersBtn = document.getElementById("clear-filters-btn");
    const offcanvasElement = document.getElementById('offcanvasFilters');
    const offcanvas = offcanvasElement ? bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement) : null;
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            activeTags = [...selectedTags];
            renderProjects(1);
            if (offcanvas) offcanvas.hide();
        });
    }
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            selectedTags = [];
            activeTags = [];
            renderFilterOptions();
            renderProjects(1);
            if (offcanvas) offcanvas.hide();
        });
    }
}

function renderProjects(page) {
    if (activeTags.length > 0) {
        filteredProjects = data.projects.filter(project =>
            activeTags.every(tag => project.tech_stack && project.tech_stack.includes(tag))
        );
    } else {
        filteredProjects = [...data.projects];
    }
    const featuredProjectContainer = document.getElementById("featured-project-container");
    const projectGrid = document.getElementById("project-grid");
    if (!projectGrid || !featuredProjectContainer) return;
    const featuredProject = filteredProjects.find(p => p.featured);
    if (featuredProject) {
        featuredProjectContainer.innerHTML = `
            <div class="featured-project-card" data-aos="fade-up">
                <div class="row g-0 h-100">
                    <div class="col-lg-7"><div class="featured-project-img-wrapper"><img src="${featuredProject.image[0]}" class="img-fluid featured-project-image" alt="${featuredProject.name}" onerror="this.onerror=null;this.src='https://placehold.co/800x600/1e1e1e/f8f9fa?text=Featured+Image';"></div></div>
                    <div class="col-lg-5 d-flex"><div class="featured-project-body"><h4 class="featured-project-title"><i class="bi bi-award-fill text-warning me-2"></i> Featured Project</h4><h3>${featuredProject.name}</h3><p class="lead">${featuredProject.description}</p><div class="tech-stack mb-4">${(featuredProject.tech_stack || []).map(tech => `<span>${tech}</span>`).join('')}</div><button class="btn btn-primary mt-auto" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-name="${featuredProject.name}">View Details <i class="bi bi-box-arrow-up-right"></i></button></div></div>
                </div>
            </div>`;
    } else {
        featuredProjectContainer.innerHTML = '';
    }
    const regularProjects = filteredProjects.filter(p => !p.featured);
    projectGrid.innerHTML = "";
    const itemsPerPage = 6;
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    if (regularProjects.length === 0 && activeTags.length > 0) {
        projectGrid.innerHTML = `<div class="col-12 text-center"><p class="text-muted fs-5 mt-4">No projects match the selected filters.</p></div>`;
    } else {
        regularProjects.slice(start, end).forEach(proj => {
            const col = document.createElement("div");
            col.className = "col-lg-4 col-md-6";
            const hasImage = proj.image && proj.image.length > 0;
            let imageClass = proj.scale_image_to_height ? "fit-height" : "";
            col.innerHTML = `
                <div class="project-card-link" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-name="${proj.name}">
                    <div class="project-card h-100">
                        <div class="project-image-wrapper">${hasImage ? `<img src="${proj.image[0]}" alt="${proj.name}" class="img-fluid project-image ${imageClass}" onerror="this.onerror=null;this.src='https://placehold.co/400x250/1e1e1e/f8f9fa?text=Image';">` : `<div class="img-fluid project-image bg-light d-flex align-items-center justify-content-center border"><span class='text-muted'>No Image</span></div>`}</div>
                        <div class="project-title">${proj.name}</div>
                        <div class="project-overlay"><h5>${proj.name}</h5><p>${proj.description}</p><div class="tech-stack">${(proj.tech_stack || []).map(tech => `<span>${tech}</span>`).join('')}</div></div>
                    </div>
                </div>`;
            projectGrid.appendChild(col);
        });
    }
    renderPagination(page, regularProjects, itemsPerPage);
    setTimeout(() => {
        const scrollSpy = bootstrap.ScrollSpy.getInstance(document.body);
        if (scrollSpy) {
            scrollSpy.refresh();
        }
    }, 300);
}

function renderPagination(currentPage, projectsToPaginate, itemsPerPage) {
    const pagination = document.getElementById("project-pagination");
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

function populateGroupedSkills() {
    const skillGroupsContainer = document.getElementById("skill-groups");
    if (!skillGroupsContainer) return;
    skillGroupsContainer.innerHTML = ''; 
    const categoryIcons = { tech: "bi-wrench-adjustable-circle-fill", design: "bi-brush-fill", product: "bi-buildings-fill" };
    const categoryColors = { tech: "text-tech", design: "text-design", product: "text-product" };
    for (const [category, skills] of Object.entries(data.skillset)) {
        const icon = categoryIcons[category] || "bi-tags";
        const colorClass = categoryColors[category] || "text-muted";
        const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
        const groupCol = document.createElement("div");
        groupCol.className = "col-12 col-sm-10 col-md-6 col-lg-4";
        groupCol.innerHTML = `
            <div class="skill-group-box h-100">
                <h5 class="mb-3 text-center ${colorClass}"><i class="bi ${icon} me-2"></i>${capitalized}</h5>
                <div class="skills-grid d-flex flex-wrap justify-content-center">${(skills || []).map(skill => `<span class="badge ${category}" title="${skill}">${skill}</span>`).join('')}</div>
            </div>`;
        skillGroupsContainer.appendChild(groupCol);
    }
}

function populateAchievements() {
    const achievementGrid = document.getElementById("achievements-grid");
    if (!achievementGrid) return;
    achievementGrid.innerHTML = data.achievements.map(ach => {
        let verifyButton = '';
        if (ach.verifyLink) {
            if (ach.verifyLink.toLowerCase().endsWith('.pdf')) {
                verifyButton = `<a href="${ach.verifyLink}" class="btn btn-outline-themed btn-sm" download>Verify <i class="bi bi-file-earmark-arrow-down-fill"></i></a>`;
            } else {
                verifyButton = `<a href="${ach.verifyLink}" class="btn btn-outline-themed btn-sm" target="_blank" rel="noopener noreferrer">Verify <i class="bi bi-arrow-up-right-square-fill"></i></a>`;
            }
        }
        const winnerBadge = ach.title.includes("Winner") ? '<span class="winner-badge"><i class="bi bi-trophy-fill"></i> Winner</span>' : '';
        return `
            <div class="col-lg-4 col-md-6">
                <div class="achievement-card h-100 d-flex flex-column">${winnerBadge}<div class="achievement-card-header"><i class="bi ${ach.icon}"></i><span class="issuer">${ach.issuer}</span></div><div class="achievement-card-body flex-grow-1"><h5 class="title">${ach.title}</h5><p class="date text-muted">${ach.date}</p><p class="description">${ach.description}</p></div><div class="achievement-card-footer mt-auto">${verifyButton}</div></div>
            </div>`;
    }).join('');
}

function populateExperience() {
    const timeline = document.getElementById("experience-timeline");
    if (!timeline) return;
    timeline.innerHTML = data.experience.map(exp => `
        <div class="timeline-item">
            <h5 class="timeline-role">${exp.role}</h5>
            <h6 class="timeline-company">${exp.company}</h6>
            <p class="timeline-period text-muted">${exp.period}</p>
            <p class="timeline-description">${exp.description}</p>
        </div>`).join('');
}

function populateEducation() {
    const timeline = document.getElementById("education-timeline");
    if (!timeline) return;
    timeline.innerHTML = data.education.map(edu => `
        <div class="timeline-item">
            <h5 class="timeline-role">${edu.degree}</h5>
            <h6 class="timeline-company">${edu.university}</h6>
            <p class="timeline-period text-muted">${edu.period}</p>
            <ul class="timeline-details">${(edu.details || []).map(detail => `<li>${detail}</li>`).join('')}</ul>
        </div>`).join('');
}

function setupCV() {
    const cvBtn = document.getElementById("cv-download");
    if (!cvBtn) return;
    cvBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const link = document.createElement("a");
        link.href = "downloadable/Vincent_CV.pdf";
        link.download = "Vincent Saranang - Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function setupFooter() {
    const footerText = document.getElementById('footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        const lastUpdatedDate = new Date();
        const formattedDate = lastUpdatedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        footerText.innerHTML = `©${currentYear} Vincent Saranang, All Rights Reserved.<br><span style="font-size: 0.8em; opacity: 0.7;">Last Updated: ${formattedDate}</span>`;
    }
}

function setupProjectModal() {
    const projectModal = document.getElementById('projectModal');
    let projectCarousel = null;
    if (!projectModal) return;

    projectModal.addEventListener('show.bs.modal', async function(event) {
        const card = event.relatedTarget;
        const projectName = card.getAttribute('data-project-name');
        const projectData = data.projects.find(p => p.name === projectName);
        if (!projectData) return;

        projectModal.querySelector('#modal-project-title').textContent = projectData.name;
        projectModal.querySelector('#modal-project-description').textContent = projectData.description;
        projectModal.querySelector('#modal-project-tech-stack').innerHTML = (projectData.tech_stack || []).map(tech => `<span>${tech}</span>`).join('');
        projectModal.querySelector('#modal-project-role').textContent = projectData.role || 'N/A';
        projectModal.querySelector('#modal-project-responsibilities').innerHTML = (projectData.responsibilities || []).map(res => `<li>${res}</li>`).join('');

        const modalLinks = projectModal.querySelector('#modal-project-links');
        modalLinks.innerHTML = '';
        if (projectData.links) {
            if (projectData.links.appstore) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.appstore}" class="btn btn-dark" target="_blank" rel="noopener noreferrer"><i class="bi bi-apple"></i> App Store</a>`); }
            if (projectData.links.testflight) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.testflight}" class="btn btn-info text-white" target="_blank" rel="noopener noreferrer"><i class="bi bi-box-seam"></i> TestFlight</a>`); }
            if (projectData.links.github) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.github}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer"><i class="bi bi-github"></i> GitHub</a>`); }
            if (projectData.links.medium) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.medium}" class="btn btn-light" target="_blank" rel="noopener noreferrer"><i class="bi bi-medium"></i> Read Article</a>`); }
            if (projectData.links.wwdc) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.wwdc}" class="btn btn-wwdc" target="_blank" rel="noopener noreferrer"><i class="bi bi-trophy-fill"></i> WWDC Profile</a>`); }
            if (projectData.links.instagram) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.instagram}" class="btn btn-instagram" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i> Instagram</a>`); }
            if (projectData.links.web) { modalLinks.insertAdjacentHTML('beforeend', `<a href="${projectData.links.web}" class="btn btn-web" target="_blank" rel="noopener noreferrer"><i class="bi bi-globe"></i> Website</a>`); }
        }
        modalLinks.insertAdjacentHTML('beforeend', `<button type="button" class="btn btn-modal-close ms-auto" data-bs-dismiss="modal">Close</button>`);

        const carouselInner = document.getElementById('modal-carousel-inner');
        const carouselIndicators = document.getElementById('modal-carousel-indicators');
        const carouselContainer = document.getElementById('projectImageCarousel');
        const imageContainer = projectModal.querySelector('.modal-image-container');

        carouselInner.innerHTML = '';
        carouselIndicators.innerHTML = '';
        imageContainer.style.height = null;
        imageContainer.style.width = null;

        const images = projectData.image || [];
        if (images.length === 0) {
            imageContainer.innerHTML = `<div class="carousel-image-wrapper"><span class="text-muted">No Image Available</span></div>`;
            return;
        }

        const loadedImageData = await Promise.all(images.map(src => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight, loaded: true });
                img.onerror = () => resolve({ src: 'https://placehold.co/800x600/2a2a2a/f8f9fa?text=Image+Not+Found', width: 800, height: 600, loaded: false });
                img.src = src;
            });
        }));

        const minHeightPx = window.innerHeight * 0.40;
        let masterFrame = { width: 0, height: minHeightPx };

        loadedImageData.forEach(imgData => {
            const aspectRatio = imgData.width / imgData.height;
            const renderedWidthAtMinHeight = minHeightPx * aspectRatio;
            if (renderedWidthAtMinHeight > masterFrame.width) {
                masterFrame.width = renderedWidthAtMinHeight;
            }
        });

        const maxAllowedWidth = 700;
        masterFrame.width = Math.min(masterFrame.width, maxAllowedWidth);

        imageContainer.style.width = `${masterFrame.width}px`;
        imageContainer.style.height = `${masterFrame.height}px`;

        loadedImageData.forEach((imgData, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const carouselItemHTML = `<div class="carousel-item ${activeClass}"><div class="carousel-image-wrapper"><img src="${imgData.src}" class="d-block" alt="Project image ${index + 1}"></div></div>`;
            carouselInner.insertAdjacentHTML('beforeend', carouselItemHTML);
            const indicatorHTML = `<button type="button" data-bs-target="#projectImageCarousel" data-bs-slide-to="${index}" class="${activeClass}" aria-current="true" aria-label="Slide ${index + 1}"></button>`;
            carouselIndicators.insertAdjacentHTML('beforeend', indicatorHTML);
        });

        if (images.length > 1) {
            carouselContainer.classList.remove('single-image');
            if (projectCarousel) projectCarousel.dispose();
            projectCarousel = new bootstrap.Carousel(carouselContainer, {
                interval: 5000,
                pause: 'hover'
            });
        } else {
            carouselContainer.classList.add('single-image');
        }
    });

    projectModal.addEventListener('hidden.bs.modal', function() {
        if (projectCarousel) {
            projectCarousel.dispose();
            projectCarousel = null;
        }
        const imageContainer = projectModal.querySelector('.modal-image-container');
        if (imageContainer) {
            imageContainer.style.height = null;
            imageContainer.style.width = null;
        }
    });
}