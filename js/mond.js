// ===== STATE MANAGEMENT =====
const state = {
    isMenuOpen: false,
    isSearchOpen: false,
    language: 'en'
};

// ===== CHAT WIDGET STATE =====
const chatState = {
    isOpen: false,
    unreadMessages: 0,
    messages: [],
    isTyping: false
};

// ===== TRANSLATION DATA =====
const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        testimonials: "Testimonials",
        contact: "Contact",
        welcome: "Welcome to Awesome Engineering Works",
        home_desc: "Professional engineering solutions in architecture, construction, and design. We bring your dreams to life with precision and creativity.",
        service1: "Architecture Design",
        service2: "Construction Management",
        service3: "House Planning",
        service4: "3D Printing & Modeling",
        view_works: "View Our Works",
        years_exp: "Years Experience",
        projects_completed: "Projects Completed",
        team_members: "Team Members",
        awards_won: "Awards Won",
        about_us: "About Awesome Construction",
        about_desc: "Founded by Berket Eyasu, Awesome Construction has been delivering exceptional engineering solutions for over 15 years. We specialize in architectural design, construction management, house planning, 3D modeling, and printing services.",
        feature1: "Modern Architectural Designs",
        feature2: "Sustainable Construction",
        feature3: "3D Visualization",
        feature4: "Project Management",
        founder: "Founder & CEO",
        our_projects: "Our Projects",
        contact_us: "Contact Us",
        email: "Email",
        phone: "Phone",
        address: "Address",
        address_text: "Dawuro Tarcha, Ethiopia",
        hours: "Working Hours",
        hours_text: "24/7 Available",
        send_message: "Send Message",
        attach_files: "Attach Files (Images/Videos)",
        about_company: "About Awesome Engineering",
        footer_desc: "Professional engineering solutions with 15+ years of experience in architecture, construction, and design.",
        quick_links: "Quick Links",
        services_list: "Our Services",
        contact_info: "Contact Info",
        rights_reserved: "All rights reserved.",
        // Chat translations
        live_chat: "Live Chat",
        chat_welcome: "Hello! How can we help you today?",
        chat_subtitle: "Chat directly with our team via Telegram",
        typing: "Awesome Team is typing...",
        chat_via_telegram: "Or chat directly on Telegram:"
    },
    am: {
        home: "መነሻ",
        about: "ስለኛ",
        projects: "ፕሮጀክቶች",
        testimonials: "የደንበኞች አስተያየቶች",
        contact: "እውቂያ",
        welcome: "ወደ Awesome Engineering Works እንኳን ደህና መጡ",
        home_desc: "በህንፃ ሥራ፣ ግንባታ እና ዲዛይን ውስጥ ፕሮፌሽናል ምህንድስና መፍትሄዎች። ሕልሞችዎን በትክክልና በፈጠራ ወደ ህይወት እናመጣለን።",
        service1: "የህንፃ ዲዛይን",
        service2: "ግንባታ አስተዳደር",
        service3: "የቤት ዕቅድ",
        service4: "3D ማተም እና ሞዴሊንግ",
        view_works: "ስራዎቻችንን ይመልከቱ",
        years_exp: "ዓመታት ልምድ",
        projects_completed: "የተጠናቀቁ ፕሮጀክቶች",
        team_members: "የቡድን አባላት",
        awards_won: "የተሸለሙ ሽልማቶች",
        about_us: "ስለ Awesome Construction",
        about_desc: "በብርቀት ኢያሱ የተመሠረተው Awesome Construction ለ15 አመታት በላይ ልዩ የምህንድስና መፍትሄዎችን እያቀረበ ነው። በህንፃ ዲዛይን፣ ግንባታ አስተዳደር፣ የቤት ዕቅድ፣ 3D ሞዴሊንግ እና የመግልጫ አገልግሎቶች እያተኮርን ነው።",
        feature1: "ዘመናዊ የህንፃ ዲዛይኖች",
        feature2: "ተዘላቂ ግንባታ",
        feature3: "3D ምስላዊ አሳያ",
        feature4: "ፕሮጀክት አስተዳደር",
        founder: "ማተኮሪያ እና ሊቀ መንበር",
        our_projects: "የኛ ፕሮጀክቶች",
        contact_us: "አግኙን",
        email: "ኢሜይል",
        phone: "ስልክ",
        address: "አድራሻ",
        address_text: "ዳውሮ ታርጫ፣ ኢትዮጵያ",
        hours: "የሥራ ሰዓት",
        hours_text: "24/7 ይገኛል",
        send_message: "መልእክት ይላኩ",
        attach_files: "ፋይሎችን ያያይዙ (ምስሎች/ቪዲዮዎች)",
        about_company: "ስለ Awesome Engineering",
        footer_desc: "በህንፃ ሥራ፣ ግንባታ እና ዲዛይን ውስጥ ከ15 አመት በላይ ልምድ ያላቸው ፕሮፌሽናል ምህንድስና መፍትሄዎች።",
        quick_links: "ፈጣን አገናኞች",
        services_list: "የኛ አገልግሎቶች",
        contact_info: "የእውቂያ መረጃ",
        rights_reserved: "ሁሉም መብቶች የተጠበቁ ናቸው።",
        // Chat translations
        live_chat: "ቀጥታ ውይይት",
        chat_welcome: "ሰላም! ዛሬ እንዴት ልንርዳችሁ እንችላለን?",
        chat_subtitle: "በቴሌግራም በቀጥታ ከቡድናችን ጋር ይውዩ",
        typing: "Awesome ቡድን እየተወያየ ነው...",
        chat_via_telegram: "ወይም በቴሌግራም በቀጥታ ይውዩ:"
    }
};

// ===== TESTIMONIALS DATA =====
const testimonials = [
    {
        name: "Daniel Getachew",
        role: "Business Owner",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "Awesome Engineering delivered exceptional work on our commercial building project. Their attention to detail and professionalism is unmatched."
    },
    {
        name: "Meron Tesfaye",
        role: "Architect",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        content: "Working with Berket and his team was a pleasure. Their innovative designs transformed our vision into reality."
    },
    {
        name: "Samuel Kebede",
        role: "Real Estate Developer",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        content: "The quality of construction and timely delivery exceeded our expectations. Highly recommended!"
    },
    {
        name: "Amina Mohammed",
        role: "Interior Designer",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        content: "Their 3D visualization helped us make perfect decisions before construction began. Excellent service!"
    },
    {
        name: "Tewodros Assefa",
        role: "Project Manager",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        content: "Professional team with excellent project management skills. They handled complex challenges efficiently."
    },
    {
        name: "Hana Girma",
        role: "Home Owner",
        image: "https://randomuser.me/api/portraits/women/26.jpg",
        content: "Our dream home came to life exactly as we imagined. Thank you Awesome Engineering!"
    },
    {
        name: "Kaleb Mesfin",
        role: "Contractor",
        image: "https://randomuser.me/api/portraits/men/81.jpg",
        content: "Reliable partner for all construction needs. Their technical expertise is outstanding."
    },
    {
        name: "Eyerusalem Tadesse",
        role: "Property Manager",
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        content: "Multiple projects completed with excellence. Always on time and within budget."
    }
];

// ===== PROJECTS DATA =====
const projects = [
    {
        title: "Modern Villa Complex",
        image: "/part1/image/home2.jpg",
        description: "Luxury villa complex with modern amenities and sustainable design features."
    },
    {
        title: "tarcha kal-hiwot",
        image: "/part1/image/interir.jpg",
        description: "G+4 design with all design."
    },
    {
        title: "Residential Apartments",
        image: "/part1/image/AutoCAD used for building design.webp",
        description: "tarekegn G+2."
    },
    {
        title: "Gessa kalihiwot church",
        image: "/part1/image/pro3.jpg",
        description: "G+2 with great interir part."
    },
    {
        title: "Hospital Complex",
        image: "/part1/image/civil-engineering-design-500x500.webp",
        description: "Modern healthcare facility with specialized infrastructure."
    },
    {
        title: "Educational Campus",
        image: "/part1/image/inte3.jpg",
        description: "University campus with sustainable and accessible design."
    }
];

// ===== SEARCH DATA =====
const searchData = [
    { title: "Home", description: "Main page with featured content", section: "home" },
    { title: "About", description: "Learn about our mission and team", section: "about" },
    { title: "Projects", description: "View our portfolio and case studies", section: "projects" },
    { title: "Testimonials", description: "Client reviews and feedback", section: "testimonials" },
    { title: "Contact", description: "Get in touch with our team", section: "contact" },
    { title: "Architecture Design", description: "Modern architectural solutions", section: "home" },
    { title: "Construction Management", description: "Professional construction services", section: "home" },
    { title: "House Planning", description: "Custom house design and planning", section: "home" },
    { title: "3D Printing", description: "Advanced 3D modeling and printing", section: "home" }
];

// ===== ELEMENTS =====
const elements = {
    searchToggle: document.getElementById('searchToggle'),
    menuToggle: document.getElementById('menuToggle'),
    closeMenu: document.getElementById('closeMenu'),
    searchBar: document.getElementById('searchBar'),
    mobileMenu: document.getElementById('mobileMenu'),
    menuBackdrop: document.getElementById('menuBackdrop'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    searchButton: document.getElementById('searchButton'),
    languageSelect: document.getElementById('languageSelect'),
    mobileLanguageSelect: document.getElementById('mobileLanguageSelect'),
    contactForm: document.getElementById('contactForm'),
    testimonialsSlider: document.querySelector('.swiper-wrapper'),
    projectsGrid: document.querySelector('.projects-grid'),
    lightbox: document.getElementById('lightbox'),
    closeLightbox: document.querySelector('.close-lightbox'),
    lightboxImage: document.querySelector('.lightbox-image'),
    lightboxTitle: document.querySelector('.lightbox-title'),
    lightboxDescription: document.querySelector('.lightbox-description')
};

// ===== CHAT ELEMENTS =====
const chatElements = {
    widget: document.getElementById('liveChatWidget'),
    toggle: document.getElementById('chatToggle'),
    close: document.getElementById('chatClose'),
    container: document.getElementById('chatContainer'),
    messages: document.getElementById('chatMessages'),
    input: document.getElementById('chatInput'),
    send: document.getElementById('chatSend'),
    badge: document.getElementById('messageBadge'),
    typingIndicator: document.getElementById('typingIndicator')
};

// ===== RESPONSIVE UTILITIES =====
function updateForScreenSize() {
    // Update language select text for small screens
    const langSelect = elements.languageSelect;
    const mobileLangSelect = elements.mobileLanguageSelect;

    if (window.innerWidth <= 320) {
        langSelect.querySelector('option[value="en"]').textContent = 'ENG';
        langSelect.querySelector('option[value="am"]').textContent = 'AM';
        mobileLangSelect.querySelector('option[value="en"]').textContent = 'ENG';
        mobileLangSelect.querySelector('option[value="am"]').textContent = 'AM';
    } else {
        langSelect.querySelector('option[value="en"]').textContent = 'English';
        langSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
        mobileLangSelect.querySelector('option[value="en"]').textContent = 'English';
        mobileLangSelect.querySelector('option[value="am"]').textContent = 'አማርኛ';
    }
}

// ===== MENU FUNCTIONS =====
function toggleMenu() {
    state.isMenuOpen = !state.isMenuOpen;

    elements.mobileMenu.classList.toggle('active', state.isMenuOpen);
    elements.menuBackdrop.classList.toggle('active', state.isMenuOpen);
    elements.menuToggle.setAttribute('aria-expanded', state.isMenuOpen);

    // Toggle menu icon
    const icon = elements.menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');

    // Toggle body scroll
    document.body.style.overflow = state.isMenuOpen ? 'hidden' : '';
}

function closeMenu() {
    if (state.isMenuOpen) {
        toggleMenu();
    }
}

// ===== SEARCH FUNCTIONS =====
function toggleSearch() {
    state.isSearchOpen = !state.isSearchOpen;

    elements.searchBar.classList.toggle('active', state.isSearchOpen);
    elements.searchToggle.setAttribute('aria-expanded', state.isSearchOpen);

    if (state.isSearchOpen) {
        elements.searchInput.focus();
        closeMenu(); // Close menu if open
    }
}

function closeSearch() {
    if (state.isSearchOpen) {
        toggleSearch();
        elements.searchInput.value = '';
        elements.searchResults.innerHTML = '';
    }
}

function performSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();

    if (!query) {
        elements.searchResults.innerHTML = '';
        return;
    }

    const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        elements.searchResults.innerHTML = `
            <div class="no-results">
                <p>No results found for "${query}"</p>
            </div>
        `;
        return;
    }

    elements.searchResults.innerHTML = filtered.map(item => `
        <div class="result-item" role="button" tabindex="0" onclick="navigateToSection('${item.section}')">
            <strong>${item.title}</strong>
            <div style="font-size: 0.9em; color: var(--text-light); margin-top: 4px;">${item.description}</div>
        </div>
    `).join('');
}

// ===== TRANSLATION FUNCTIONS =====
function updateContent() {
    const htmlElement = document.documentElement;

    // Set HTML lang attribute
    htmlElement.lang = state.language;

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[state.language][key]) {
            element.textContent = translations[state.language][key];
        }
    });

    // Update placeholder attributes
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Update chat input placeholder
    const chatInput = document.getElementById('chatInput');

    if (state.language === 'am') {
        nameInput.placeholder = "ስምዎ";
        emailInput.placeholder = "ኢሜይልዎ (አማራጭ)";
        phoneInput.placeholder = "ስልክ ቁጥር";
        messageInput.placeholder = "አስተያየትዎ/መልእክት";
        chatInput.placeholder = "መልእክትዎን ይፃፉ...";

        // Amharic is LTR, NOT RTL
        document.body.classList.add('amharic');
        document.body.classList.remove('english');
        document.body.dir = 'ltr'; // Important: Keep LTR direction
    } else {
        nameInput.placeholder = "Your Name";
        emailInput.placeholder = "Your Email (Optional)";
        phoneInput.placeholder = "Phone Number";
        messageInput.placeholder = "Your Comment/Message";
        chatInput.placeholder = "Type your message...";

        document.body.classList.add('english');
        document.body.classList.remove('amharic');
        document.body.dir = 'ltr';
    }
}

function changeLanguage(lang) {
    state.language = lang;

    // Update both language selects
    elements.languageSelect.value = lang;
    elements.mobileLanguageSelect.value = lang;

    updateContent();

    const messages = {
        en: "Language changed to English",
        am: "ቋንቋ ወደ አማርኛ ተቀይሯል"
    };

    showNotification(messages[lang] || messages.en);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--surface);
        color: var(--text);
        padding: 12px 20px;
        border-radius: var(--radius);
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        animation: fadeInUp 0.3s ease;
        border: 1px solid var(--primary);
        max-width: 90vw;
        text-align: center;
    `;
    notification.textContent = message;
    notification.setAttribute('role', 'alert');

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.3s ease reverse forwards';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ===== NAVIGATION FUNCTIONS =====
function navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
        closeSearch();

        // Update active menu link
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== TESTIMONIALS FUNCTIONS =====
function initSwiper() {
    const swiper = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

function loadTestimonials() {
    elements.testimonialsSlider.innerHTML = '';
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide testimonial-slide';
        slide.innerHTML = `
            <div class="testimonial-content">"${testimonial.content}"</div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        elements.testimonialsSlider.appendChild(slide);
    });
    initSwiper();
}


// ===== PROJECTS FUNCTIONS =====
function loadProjects() {
    elements.projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectCard.addEventListener('click', () => {
            elements.lightboxImage.src = project.image;
            elements.lightboxImage.alt = project.title;
            elements.lightboxTitle.textContent = project.title;
            elements.lightboxDescription.textContent = project.description;

            elements.lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        elements.projectsGrid.appendChild(projectCard);
    });
}

function closeLightbox() {
    elements.lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== STATS ANIMATION =====
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + '+';
            }
        }, 30);
    });
}

// ===== FORM SUBMISSION =====
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const attachment = document.getElementById('attachment').files;

    // In a real application, you would send this data to a server
    console.log({
        name,
        email,
        phone,
        message,
        files: attachment.length
    });

    showNotification(state.language === 'en'
        ? 'Thank you for your message! We will contact you soon.'
        : 'መልእክትዎን እናመሰግናለን! በቅርቡ እናገኝዎታለን።');
    elements.contactForm.reset();
}

// ===== CHAT FUNCTIONS =====
function toggleChat() {
    chatState.isOpen = !chatState.isOpen;

    chatElements.container.classList.toggle('active', chatState.isOpen);
    chatElements.toggle.setAttribute('aria-expanded', chatState.isOpen);

    if (chatState.isOpen) {
        chatElements.input.focus();
        // Reset unread count when chat opens
        chatState.unreadMessages = 0;
        updateChatBadge();
    }
}

function closeChat() {
    if (chatState.isOpen) {
        toggleChat();
    }
}

function updateChatBadge() {
    chatElements.badge.textContent = chatState.unreadMessages;
    chatElements.badge.style.display = chatState.unreadMessages > 0 ? 'flex' : 'none';
}

function addMessage(text, sender, timestamp = new Date()) {
    const message = {
        text,
        sender,
        timestamp
    };

    chatState.messages.push(message);

    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';

    const timeString = timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageElement.innerHTML = `
        <div class="message-content ${sender}">${text}</div>
        <div class="message-time ${sender}">${timeString}</div>
    `;

    chatElements.messages.appendChild(messageElement);

    // Scroll to bottom
    chatElements.messages.scrollTop = chatElements.messages.scrollHeight;

    // If chat is closed, increment badge
    if (!chatState.isOpen && sender === 'bot') {
        chatState.unreadMessages++;
        updateChatBadge();
    }
}

function showTypingIndicator(show = true) {
    chatState.isTyping = show;
    if (chatElements.typingIndicator) {
        chatElements.typingIndicator.classList.toggle('active', show);
    }
}

function sendMessage() {
    const text = chatElements.input.value.trim();

    if (!text) return;

    // Add user message
    addMessage(text, 'user');
    chatElements.input.value = '';

    // Show typing indicator
    showTypingIndicator(true);

    // Simulate bot response after delay
    setTimeout(() => {
        showTypingIndicator(false);

        const responses = {
            en: [
                "Thanks for your message! Our team will get back to you shortly.",
                "We've received your inquiry. You can also reach us directly on Telegram @Gediyoneyasu for faster response.",
                "Great question! One of our experts will assist you soon.",
                "We're here to help! For immediate assistance, please contact us on Telegram."
            ],
            am: [
                "መልእክትዎን እናመሰግናለን! ቡድናችን በቅርቡ ከእርስዎ ጋር ይገናኛል።",
                "ጥያቄዎን ተቀብለናል። ለፈጣን ምላሽ በቴሌግራም @Gediyoneyasu ሊያገኙን ይችላሉ።",
                "ታላቅ ጥያቄ! ከቅርብ ጊዜ በኋላ አንዱ ከባለሙያዎቻችን ይርዳዎታል።",
                "ለመርዳት እዚህ ነን! ለፈጣን እርዳታ በቴሌግራም ያግኙን።"
            ]
        };

        const randomResponse = responses[state.language][Math.floor(Math.random() * responses[state.language].length)];
        addMessage(randomResponse, 'bot');

    }, 1500 + Math.random() * 1000);
}

// ===== INITIALIZE CHAT =====
function initializeChat() {
    // Only initialize if chat elements exist
    if (!chatElements.widget) return;

    // Add initial welcome message
    addMessage(
        state.language === 'am'
            ? "ሰላም! ዛሬ እንዴት ልንርዳችሁ እንችላለን?"
            : "Hello! How can we help you today?",
        'bot'
    );
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Menu and Search
    elements.searchToggle.addEventListener('click', toggleSearch);
    elements.menuToggle.addEventListener('click', toggleMenu);
    elements.closeMenu.addEventListener('click', closeMenu);
    elements.menuBackdrop.addEventListener('click', closeMenu);

    // Search functionality
    elements.searchButton.addEventListener('click', performSearch);
    elements.searchInput.addEventListener('input', performSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Language selection
    elements.languageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
        elements.mobileLanguageSelect.value = e.target.value;
    });

    elements.mobileLanguageSelect.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
        elements.languageSelect.value = e.target.value;
    });

    // Form submission
    elements.contactForm.addEventListener('submit', handleFormSubmit);

    // Lightbox
    elements.closeLightbox.addEventListener('click', closeLightbox);
    elements.lightbox.addEventListener('click', (e) => {
        if (e.target === elements.lightbox) {
            closeLightbox();
        }
    });

    // Chat events (only if chat elements exist)
    if (chatElements.toggle) {
        chatElements.toggle.addEventListener('click', toggleChat);
        chatElements.close.addEventListener('click', closeChat);

        chatElements.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        chatElements.send.addEventListener('click', sendMessage);
    }

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar') &&
            !e.target.closest('.search-icon') &&
            state.isSearchOpen) {
            closeSearch();
        }

        // Close chat when clicking outside (only if chat is open)
        if (chatElements.widget &&
            !e.target.closest('.chat-container') &&
            !e.target.closest('.chat-toggle') &&
            chatState.isOpen) {
            closeChat();
        }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleSearch();
        }

        if (e.key === 'Escape') {
            if (state.isSearchOpen) closeSearch();
            if (state.isMenuOpen) closeMenu();
            if (elements.lightbox.classList.contains('active')) closeLightbox();
            if (chatState.isOpen) closeChat();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            navigateToSection(targetId.substring(1));
        });
    });

    // Menu link clicks
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            navigateToSection(sectionId);
        });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                if (entry.target.classList.contains('stats-section')) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all feature cards and sections
    document.querySelectorAll('.feature-card, section').forEach(el => observer.observe(el));

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
            header.style.backdropFilter = 'none';
        }
    });

    // Resize handler
    window.addEventListener('resize', updateForScreenSize);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Set default language
    state.language = 'en';
    document.body.classList.add('english');

    // Initialize components
    loadTestimonials();
    loadProjects();
    updateContent();
    updateForScreenSize();

    // Initialize chat
    initializeChat();

    // Initialize event listeners
    initializeEventListeners();

    // PWA Support
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(console.error);
        });
    }

    // Install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        console.log('PWA install prompt available');
    });
});

// ===== GLOBAL FUNCTIONS =====
window.navigateToSection = navigateToSection;
window.performSearch = performSearch;
window.toggleMenu = toggleMenu;
window.toggleSearch = toggleSearch;
window.changeLanguage = changeLanguage;