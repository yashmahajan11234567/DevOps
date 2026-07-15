/* ========================================
   SCRIPT.JS - General Interactive Functionality
   ======================================== */

/**
 * UTILITY FUNCTIONS FOR DOM MANIPULATION
 */
const DomUtils = {
    /**
     * Sets the text content of an element by its ID.
     * @param {string} elementId - The ID of the element.
     * @param {string} content - The text content to set.
     */
    setTextContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = content;
        }
    },

    /**
     * Sets the inner HTML of an element by its ID.
     * @param {string} elementId - The ID of the element.
     * @param {string} html - The HTML string to set.
     */
    setInnerHTML(elementId, html) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    },

    /**
     * Sets multiple attributes for an element by its ID.
     * @param {string} elementId - The ID of the element.
     * @param {object} attributes - An object where keys are attribute names and values are their values.
     */
    setAttributes(elementId, attributes) {
        const element = document.getElementById(elementId);
        if (element) {
            for (const attr in attributes) {
                if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
                    element.setAttribute(attr, attributes[attr]);
                }
            }
        }
    },

    /**
     * Renders a list of items as badges inside a container.
     * @param {string} containerId - The ID of the container element.
     * @param {string[]} items - An array of strings to be rendered as badges.
     * @param {string} className - The CSS class name for each badge.
     */
    renderBadges(containerId, items, className = 'tech-badge') {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = items.map(item =>
                `<span class="${className}">${item}</span>`
            ).join('');
        }
    },

    /**
     * Renders a list of items as <li> elements inside a <ul> container.
     * @param {string} containerId - The ID of the <ul> container element.
     * @param {string[]} items - An array of strings to be rendered as list items.
     */
    renderList(containerId, items) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        }
    },

    /**
     * Attaches an event listener to a parent element and delegates it to child elements matching a selector.
     * @param {string} parentSelector - The CSS selector for the parent element.
     * @param {string} childSelector - The CSS selector for the child elements to delegate to.
     * @param {string} eventType - The type of event to listen for (e.g., 'click').
     * @param {function(Event): void} callback - The callback function to execute when the event occurs on a delegated child.
     */
    delegate(parentSelector, childSelector, eventType, callback) {
        document.querySelector(parentSelector)?.addEventListener(eventType, (event) => {
            const target = event.target.closest(childSelector);
            if (target && document.querySelector(parentSelector)?.contains(target)) {
                callback.call(target, event);
            }
        });
    },

    /**
     * Creates a new HTML element with optional classes and attributes.
     * @param {string} tagName - The tag name of the element to create (e.g., 'div', 'a').
     * @param {string[]} classNames - An array of CSS class names to add.
     * @param {object} attributes - An object where keys are attribute names and values are their values.
     * @returns {HTMLElement} The newly created HTML element.
     */
    createElement(tagName, classNames = [], attributes = {}) {
        const element = document.createElement(tagName);
        if (classNames.length > 0) {
            element.classList.add(...classNames);
        }
        for (const attr in attributes) {
            if (Object.prototype.hasOwnProperty.call(attributes, attr)) {
                element.setAttribute(attr, attributes[attr]);
            }
        }
        return element;
    }
};


/**
 * MOBILE NAVIGATION HANDLER
 * Toggles hamburger menu on mobile devices
 */
class MobileNav {
    constructor() {
        this.hamburger = document.getElementById('hamburgerBtn');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');

        if (this.hamburger) {
            this.init();
        }
    }

    init() {
        this.hamburger.addEventListener('click', () => this.toggle());

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.close());
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && this.hamburger.classList.contains('active')) {
                this.close();
            }
        });
    }

    toggle() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
    }

    close() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }
}

/**
 * NAVIGATION ACTIVE STATE HANDLER
 * Manages active class on navigation links based on scroll position
 * Works for both index.html (hash links) and other pages (full URL matching)
 */
class NavActiveState {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');

        if (this.navLinks.length > 0) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => this.updateActiveLink());
        window.addEventListener('hashchange', () => this.updateActiveLink());
        this.updateActiveLink();
    }

    updateActiveLink() {
        const currentPath = window.location.pathname.split('/').pop();
        let currentActive = '';

        if (currentPath === 'index.html' || currentPath === '') {
            this.sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= sectionTop - 100) {
                    currentActive = section.getAttribute('id');
                }
            });
        } else if (currentPath === 'projects.html' || currentPath === 'project-detail.html') {
            currentActive = 'projects';
        } else if (currentPath === 'about.html') {
            currentActive = 'about';
        } else if (currentPath === 'contact.html') {
            currentActive = 'contact';
        }

        this.navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');

            if (linkHref === currentPath || (linkHref.includes('#') && linkHref.split('#')[1] === currentActive)) {
                link.classList.add('active');
            } else if ((currentPath === 'project-detail.html' || currentPath === 'projects.html') && linkHref === 'projects.html') {
                link.classList.add('active');
            }
        });

        if ((currentPath === 'index.html' || currentPath === '') && window.pageYOffset < 100) {
            document.querySelector('[href="index.html#home"]')?.classList.add('active');
        }
    }
}

/**
 * NAVBAR SHADOW ON SCROLL
 * Adds shadow to navbar when page is scrolled
 */
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');

        if (this.navbar) {
            this.init();
        }
    }

    init() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 10) {
                this.navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
            } else {
                this.navbar.style.boxShadow = 'none';
            }
        });
    }
}

/**
 * DASHBOARD MODAL HANDLER (For index.html)
 * Manages dashboard preview modals
 */
class DashboardModal {
    constructor() {
        this.modal = document.getElementById('dashboardModal');
        this.overlay = document.getElementById('modalOverlay');
        this.closeBtn = document.getElementById('modalClose');
        this.triggers = document.querySelectorAll('.btn-modal-trigger');

        this.dashboardData = window.projects || {};

        if (this.modal && this.triggers.length > 0) {
            this.init();
        }
    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const dashboardId = trigger.getAttribute('data-dashboard');
                this.open(dashboardId);
            });
        });

        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open(dashboardId) {
        const data = this.dashboardData[dashboardId];

        if (!data) return;

        DomUtils.setTextContent('modalTitle', data.title);
        DomUtils.setTextContent('modalSubtitle', data.subtitle);
        DomUtils.setAttributes('modalImage', { src: data.dashboardImage, alt: data.title });
        DomUtils.setAttributes('modalGithubBtn', { href: data.github });

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * SMOOTH SCROLL BEHAVIOR
 * Handles smooth scrolling to anchor links
 */
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const target = link.getAttribute('href');

                if (target === '#') return;

                const targetElement = document.querySelector(target);

                if (targetElement) {
                    e.preventDefault();

                    const navbarHeight = document.querySelector('.navbar').clientHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                } else if (link.getAttribute('href').startsWith('#') && link.closest('.navbar')) {
                    const targetPage = link.getAttribute('href').split('#')[0];
                    if (targetPage && targetPage !== '' && targetPage !== window.location.pathname.split('/').pop()) {
                        window.location.href = link.getAttribute('href');
                    }
                }
            });
        });
    }
}

/**
 * LAZY IMAGE LOADING
 * Progressive image loading for performance
 */
class LazyImageLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.removeAttribute('loading');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            this.images.forEach(img => {
                img.src = img.dataset.src || img.src;
                img.removeAttribute('loading');
            });
        }
    }
}

/**
 * CARD INTERSECTION ANIMATION
 * Fade in cards as they enter viewport
 */
class CardAnimation {
    constructor() {
        this.cards = document.querySelectorAll(
            '.skill-card, .dashboard-card, .project-card, .cert-card'
        );
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        cardObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            this.cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                cardObserver.observe(card);
            });
        }
    }
}

/**
 * ACCESSIBILITY ENHANCEMENTS
 * Improves keyboard navigation and screen reader support
 */
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.addSkipLink();
        this.enhanceButtons();
    }

    addSkipLink() {
        const skipLink = DomUtils.createElement('a', ['skip-link'], { href: '#main', textContent: 'Skip to main content' });
        document.body.insertBefore(skipLink, document.body.firstChild);

        const mainElement = document.querySelector('main');
        if (mainElement && !mainElement.id) {
            mainElement.id = 'main';
        }
    }

    enhanceButtons() {
        const iconButtons = document.querySelectorAll('button[aria-label]');
        iconButtons.forEach(btn => {
            if (!btn.getAttribute('type')) {
                btn.setAttribute('type', 'button');
            }
        });
    }
}

/**
 * FORM VALIDATION HANDLER
 * Validates contact form if it exists
 */
class FormValidator {
    constructor() {
        this.form = document.querySelector('form');

        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            if (!this.validateForm()) {
                e.preventDefault();
                this.showErrors();
            }
        });

        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
        });
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateField(field) {
        const value = field.value.trim();

        if (field.hasAttribute('required') && !value) {
            field.classList.add('error');
            return false;
        }

        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                return false;
            }
        }

        field.classList.remove('error');
        return true;
    }

    showErrors() {
        const errorFields = this.form.querySelectorAll('.error');
        if (errorFields.length > 0) {
            errorFields[0].focus();
        }
    }
}

/**
 * PERFORMANCE MONITOR
 * Logs performance metrics (development only)
 */
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('load', () => {
            if ('performance' in window) {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

                console.log('Page Load Performance:', {
                    pageLoadTime: `${pageLoadTime}ms`,
                    domContentLoaded: perfData.domContentLoadedEventEnd - perfData.navigationStart,
                    resourcesLoaded: perfData.loadEventEnd - perfData.responseEnd
                });
            }
        });
    }
}

/**
 * PROJECTS PAGE FILTER HANDLER
 * Manages project filtering by category and search
 */
class ProjectFilter {
    constructor() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.searchInput = document.getElementById('projectSearch');
        this.resultsCount = document.getElementById('resultNumber');
        this.noResults = document.getElementById('noResults');

        if (this.projectsGrid && this.filterBtns.length > 0) {
            this.init();
        }
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });

        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }

        // Initialize with 'all' filter active
        document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
        this.filterProjects('all');
    }

    handleFilter(e) {
        const selectedFilter = e.target.getAttribute('data-filter');

        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        this.filterProjects(selectedFilter);
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        this.filterProjects(activeFilter, searchTerm);
    }

    filterProjects(category = 'all', searchTerm = '') {
        const cards = this.projectsGrid.querySelectorAll('.project-card');
        let visibleCount = 0;

        cards.forEach(card => {
            let shouldShow = true;

            if (category && category !== 'all') {
                const filters = card.getAttribute('data-filters').split(',');
                shouldShow = filters.includes(category);
            }

            if (shouldShow && searchTerm) {
                const keywords = card.getAttribute('data-keywords').toLowerCase();
                const title = card.querySelector('.project-title').textContent.toLowerCase();
                const description = card.querySelector('.project-description').textContent.toLowerCase();

                shouldShow = keywords.includes(searchTerm) ||
                           title.includes(searchTerm) ||
                           description.includes(searchTerm);
            }

            if (shouldShow) {
                card.style.display = 'block';
                visibleCount++;
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.display = 'none';
            }
        });

        if (this.resultsCount) {
            this.resultsCount.textContent = visibleCount;
        }

        if (this.noResults) {
            this.noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }
}

/**
 * STATISTICS COUNTER ANIMATION (For projects.html)
 * Animates KPI counters on page load/scroll
 */
class StatisticsCounter {
    constructor() {
        this.counters = document.querySelectorAll('.projects-stats [data-target]');
        this.statsSection = document.querySelector('.projects-stats');
        this.hasAnimated = false;

        if (this.counters.length > 0 && this.statsSection) {
            this.init();
        }
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.animateCounters();
                        this.hasAnimated = true;
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(this.statsSection);
        } else {
            this.animateCounters();
        }
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            let start = 0;
            const increment = target / (duration / 16);

            const updateCounter = () => {
                start += increment;
                if (start < target) {
                    counter.textContent = Math.floor(start);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            requestAnimationFrame(updateCounter);
        });
    }
}

/**
 * EXTENDED DASHBOARD MODAL FOR PROJECTS (For index.html & projects.html)
 * Updated to handle project-specific modals
 */
class ProjectDashboardModal {
    constructor() {
        this.modal = document.getElementById('dashboardModal');
        this.overlay = document.getElementById('modalOverlay');
        this.closeBtn = document.getElementById('modalClose');
        this.triggers = document.querySelectorAll('.btn-modal-trigger, .btn-view-modal');

        if (this.modal && this.triggers.length > 0) {
            this.init();
        }
    }

    init() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = trigger.getAttribute('data-dashboard') || trigger.getAttribute('data-project');
                this.open(projectId);
            });
        });

        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.close();
            }
        });
    }

    open(projectId) {
        const data = window.projects[projectId];

        if (!data) return;

        DomUtils.setTextContent('modalTitle', data.title);
        DomUtils.setTextContent('modalSubtitle', data.subtitle);
        DomUtils.setAttributes('modalImage', { src: data.dashboardImage, alt: data.title });
        DomUtils.setAttributes('modalGithubBtn', { href: data.github });

        const exploreBtn = this.modal.querySelector('.btn-primary');
        if (exploreBtn) {
            exploreBtn.onclick = () => {
                if (window.location.pathname.includes('projects.html') || window.location.pathname.includes('index.html')) {
                    window.location.href = `project-detail.html?project=${projectId}`;
                } else {
                    window.open(data.github, '_blank');
                }
            };
            exploreBtn.textContent = (window.location.pathname.includes('projects.html') || window.location.pathname.includes('index.html')) ? "Explore Project" : "View on GitHub";
        }

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/* ========================================
   FAQ ACCORDION HANDLER
   ======================================== */
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => this.toggleAnswer(item));
        });

        // Close all FAQ answers initially
        this.faqItems.forEach(item => {
            const answer = item.querySelector('.faq-answer');
            if (answer) {
                answer.hidden = true;
                const question = item.querySelector('.faq-question');
                question.setAttribute('aria-expanded', 'false');
                question.querySelector('::after')?.textContent = '+';
            }
        });
    }

    toggleAnswer(item) {
        const answer = item.querySelector('.faq-answer');
        const question = item.querySelector('.faq-question');
        const isOpen = question.getAttribute('aria-expanded') === 'true';

        // Close all other FAQ items
        this.faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                const otherAnswer = otherItem.querySelector('.faq-answer');
                const otherQuestion = otherItem.querySelector('.faq-question');
                if (otherAnswer) {
                    otherAnswer.hidden = true;
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Toggle current item
        if (answer) {
            answer.hidden = !isOpen;
            question.setAttribute('aria-expanded', String(!isOpen));
        }
    }
}

/* ========================================
   PROJECT DETAIL PAGE SPECIFIC CLASSES
   ======================================== */

/**
 * PROJECT DETAIL LOADER
 * Dynamically loads and renders project details based on URL parameter
 */
class ProjectDetailLoader {
    constructor() {
        this.projectContent = document.getElementById('projectContent');
        this.notFoundSection = document.getElementById('notFoundSection');
        this.currentProjectId = null;

        if (typeof window.projects === 'undefined') {
            console.error("Error: projects.js not loaded or window.projects is undefined.");
            this.showNotFound();
            return;
        }

        this.init();
    }

    init() {
        window.addEventListener('DOMContentLoaded', () => this.loadProject());
        window.addEventListener('popstate', () => this.loadProject());

        DomUtils.delegate('#relatedProjectsGrid', '.btn-link', 'click', (e) => {
            e.preventDefault();
            const link = e.target.closest('.btn-link');
            const newProjectId = new URL(link.href).searchParams.get('project');
            if (newProjectId) {
                this.navigateProject(newProjectId);
            }
        });
    }

    navigateProject(projectId) {
        if (projectId === this.currentProjectId) return;
        history.pushState({ projectId: projectId }, '', `project-detail.html?project=${projectId}`);
        this.loadProject();
    }

    loadProject() {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');

        if (projectId && window.projects[projectId]) {
            const projectData = window.projects[projectId];
            this.currentProjectId = projectId;
            this._renderProject(projectData, projectId);
            this.projectContent.style.display = 'block';
            this.notFoundSection.style.display = 'none';
        } else {
            this.currentProjectId = null;
            this.showNotFound();
        }
    }

    _renderProject(project, projectId) {
        DomUtils.setTextContent('pageTitle', `${project.title} - Project Details | Yash Mahajan`);
        DomUtils.setTextContent('breadcrumbProjectName', project.title);

        this._renderHeroSection(project);
        this._renderOverviewSection(project);
        this._renderDashboardPreview(project);
        this._renderKeyInsights(project);
        this._renderTechnicalWorkflow(project);
        this._renderTechnologiesStack(project);
        this._renderBusinessImpact(project);
        this._renderGitHubSection(project);
        this._renderRelatedProjects(project, projectId);

        new ProjectDetailImageModal().init();
        new InsightCounters().init();
    }

    _renderHeroSection(project) {
        DomUtils.setTextContent('heroProjectCategory', project.category);
        DomUtils.setTextContent('heroProjectYear', `${project.year} CASE STUDY`);
        DomUtils.setTextContent('heroProjectTitle', project.title);
        DomUtils.setTextContent('heroProjectSubtitle', project.subtitle);
        DomUtils.setAttributes('heroGithubBtn', { href: project.github });
        DomUtils.setAttributes('heroProjectImage', { src: project.dashboardImage, alt: project.title + " Dashboard" });
        DomUtils.renderBadges('heroTechBadges', project.technologies);
    }

    _renderOverviewSection(project) {
        DomUtils.setTextContent('overviewBusinessProblem', project.businessProblem);
        DomUtils.renderList('overviewObjectives', project.objectives);
        DomUtils.setInnerHTML('overviewDataset', `<strong>Volume:</strong> ${project.dataset.volume}<br><strong>Sources:</strong> ${project.dataset.sources.join(', ')}<br><strong>Time Period:</strong> ${project.dataset.timePeriod}<br><strong>Fields:</strong> ${project.dataset.fields}`);
        DomUtils.renderBadges('overviewTools', project.technologies, 'tool-badge');
        DomUtils.setTextContent('overviewMethodology', project.methodology.map(m => `(${m.number}) ${m.title}`).join('; '));
    }

    _renderDashboardPreview(project) {
        DomUtils.setAttributes('dashboardPreviewImageElement', { src: project.dashboardImage, alt: project.title + " Dashboard - Full Preview" });
    }

    _renderKeyInsights(project) {
        const insightsGrid = document.getElementById('insightsGrid');
        if (insightsGrid) {
            insightsGrid.innerHTML = project.kpis.map((kpi, index) => `
                <div class="insight-card" data-insight="${index}">
                    <div class="insight-icon">${kpi.icon}</div>
                    <div class="insight-content">
                        <p class="insight-value" data-target="${kpi.value}">${kpi.value}</p>
                        <p class="insight-label">${kpi.label}</p>
                        <p class="insight-description">${kpi.description}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    _renderTechnicalWorkflow(project) {
        const workflowTimeline = document.getElementById('workflowTimeline');
        if (workflowTimeline) {
            workflowTimeline.innerHTML = project.methodology.map(stage => `
                <div class="workflow-stage">
                    <div class="workflow-card">
                        <div class="stage-number">${stage.number}</div>
                        <h3 class="stage-title">${stage.title}</h3>
                        <p class="stage-description">${stage.description}</p>
                        <div class="stage-tech">
                            ${stage.tech.map(t => `<span class="tech-small">${t}</span>`).join('')}
                        </div>
                    </div>
                    ${stage.number !== project.methodology[project.methodology.length - 1].number ? '<div class="workflow-arrow">↓</div>' : ''}
                </div>
            `).join('');
        }
    }

    _renderTechnologiesStack(project) {
        const techStackGrid = document.getElementById('techStackGrid');
        if (techStackGrid) {
            techStackGrid.innerHTML = project.techStack.map(tech => `
                <div class="tech-card">
                    <div class="tech-name">${tech.name}</div>
                    <p class="tech-description">${tech.description}</p>
                </div>
            `).join('');
        }
    }

    _renderBusinessImpact(project) {
        DomUtils.setTextContent('impactSubtitle', project.businessImpact.subtitle);
        DomUtils.setTextContent('impactDescription', project.businessImpact.description);
        DomUtils.renderList('impactOutcomes', project.businessImpact.outcomes);

        const impactMetricsGrid = document.getElementById('impactMetrics');
        if (impactMetricsGrid) {
            impactMetricsGrid.innerHTML = project.businessImpact.metrics.map(metric => `
                <div class="metric-card">
                    <p class="metric-value">${metric.value}</p>
                    <p class="metric-label">${metric.label}</p>
                </div>
            `).join('');
        }
    }

    _renderGitHubSection(project) {
        DomUtils.setTextContent('githubRepoDescription', project.repoDetails.description);
        DomUtils.setTextContent('githubRepoLanguage', project.repoDetails.language);
        DomUtils.setTextContent('githubRepoStatus', project.repoDetails.status);
        DomUtils.setAttributes('githubRepoLink', { href: project.github });
    }

    _renderRelatedProjects(project, currentProjectId) {
        const relatedProjectsGrid = document.getElementById('relatedProjectsGrid');
        if (relatedProjectsGrid) {
            relatedProjectsGrid.innerHTML = project.relatedProjects
                .filter(relatedId => relatedId !== currentProjectId)
                .map(relatedId => {
                    const relatedProject = window.projects[relatedId];
                    if (!relatedProject) return '';
                    return `
                        <article class="related-card">
                            <div class="related-image-container">
                                <img
                                    src="${relatedProject.dashboardImage}"
                                    alt="${relatedProject.title}"
                                    class="related-image"
                                    loading="lazy"
                                >
                            </div>
                            <div class="related-content">
                                <div class="related-tags">
                                    ${relatedProject.technologies.slice(0, 2).map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                                <h3 class="related-title">${relatedProject.title}</h3>
                                <p class="related-description">
                                    ${relatedProject.subtitle.split('. ')[0] + '.'}
                                </p>
                                <a href="project-detail.html?project=${relatedId}" class="btn-link">View Details →</a>
                            </div>
                        </article>
                    `;
                }).join('');
        }
    }

    showNotFound() {
        this.projectContent.style.display = 'none';
        this.notFoundSection.style.display = 'flex';
        DomUtils.setTextContent('pageTitle', "Project Not Found | Yash Mahajan");
    }
}

/**
 * PROJECT DETAIL IMAGE MODAL (For project-detail.html)
 * Handles expansion of dashboard images in full-screen modal
 */
class ProjectDetailImageModal {
    constructor() {
        this.modal = document.getElementById('imageModal');
        this.modalOverlay = document.getElementById('imageModalOverlay');
        this.modalImage = document.getElementById('imageModalImage');
        this.modalClose = document.getElementById('imageModalClose');
        this.expandHeroBtn = null;
        this.expandPreviewBtn = null;
    }

    init() {
        if (!this.modal) return;

        this.expandHeroBtn = document.getElementById('expandHeroImage');
        this.expandPreviewBtn = document.getElementById('expandPreviewImage');

        this.expandHeroBtn?.addEventListener('click', (e) => this._handleExpand(e, 'heroProjectImage'));
        this.expandPreviewBtn?.addEventListener('click', (e) => this._handleExpand(e, 'dashboardPreviewImageElement'));

        this.modalClose?.addEventListener('click', () => this.closeModal());
        this.mobileOverlay?.addEventListenervent('click', () => this.closeModal());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal?.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    _handleExpand(e, imageId) {
        e.preventDefault();
        const imageElement = document.getElementById(imageId);
        if (imageElement) {
            this.openModal(imageElement.src, imageElement.alt);
        }
    }

    openModal(src, alt) {
        if (this.modal) {
            this.modalImage.src = src;
            this.modalImage.alt = alt;
            this.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal() {
        if (this.mobile) {
            this.mobile.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

/**
 * INSIGHT COUNTERS (For project-detail.html)
 * Animates KPI numbers when the insights section comes into view
 */
class InsightCounters {
    constructor() {
        this.insightCards = [];
        this.hasAnimated = false;
    }

    init() {
        this.insightCards = document.querySelectorAll('.insight-card');
        if (this.insightCards.length === 0) return;

        this.hasAnimated = false;

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.hasAnimated) {
                        this.hasAnimated = true;
                        this.animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            this.insightCards.forEach(card => observer.observe(card));
        } else {
            this.animateCounters();
        }
    }

    animateCounters() {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            this.insightCards.forEach(card => {
                const valueElement = card.querySelector('.insight-value');
                if (valueElement) {
                    const target = parseInt(valueElement.getAttribute('data-target'), 10);
                    const suffix = valueElement.textContent.replace(/[^%+\-.,]/g, '');

                    if (!isNaN(target)) {
                        let current = Math.round(target * progress);
                        valueElement.textContent = `${current.toLocaleString()}${suffix}`;
                    }
                }
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                 this.insightCards.forEach(card => {
                    const valueElement = card.querySelector('.insight-value');
                    if (valueElement) {
                        const target = parseInt(valueElement.getAttribute('data-target'), 10);
                        const suffix = valueElement.textContent.replace(/[^%+\-.,]/g, '');
                        if (!isNaN(target)) {
                            valueElement.textContent = `${target.toLocaleString()}${suffix}`;
                        }
                    }
                });
            }
        };

        requestAnimationFrame(animate);
    }
}

/* ========================================
   INITIALIZATION
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize common components
    new MobileNav();
    new NavActiveState();
    new NavbarScroll();
    new SmoothScroll();
    new LazyImageLoader();
    new CardAnimation();
    new AccessibilityEnhancer();
    new FormValidator();
    new PerformanceMonitor();

    // Initialize Projects page components (if on projects page)
    if (document.getElementById('projectsGrid')) {
        new ProjectFilter();
        new StatisticsCounter();
        new ProjectDashboardModal();
    }

    // Initialize Project Detail page components (if on project-detail.html)
    if (document.getElementById('projectContent')) {
        new ProjectDetailLoader();
        // ProjectDetailImageModal and InsightCounters are initialized by ProjectDetailLoader.renderProject
    }

    // Initialize FAQ accordion (if on contact page)
    if (document.querySelector('.faq-item')) {
        new FAQAccordion();
    }

    console.log('✓ Portfolio website initialized successfully');
});

/* ========================================
   UTILITY FUNCTIONS (Debounce, Throttle - kept for completeness if needed elsewhere)
   ======================================== */

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for repeated events
 */
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}