/* ========================================
   ANIMATIONS.JS - Animation Utility Functions
   ======================================== */

/**
 * Animation utility functions that can be reused across components
 */

/**
 * Creates an IntersectionObserver for animating elements when they enter the viewport
 * @param {Object} options - Configuration options
 * @param {string} options.rootMargin - Margin around the root element
 * @param {number} options.threshold - Threshold at which the callback is triggered
 * @param {Function} options.callback - Function to call when element intersects
 * @returns {IntersectionObserver} The created observer
 */
function createScrollAnimator(options = {}) {
    const defaults = {
        rootMargin: '0px',
        threshold: 0.1,
        callback: () => {}
    };

    const settings = { ...defaults, ...options };

    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                settings.callback(entry.target);
                observer.unobserve(element);
            }
        });
    }, {
        root: null,
        rootMargin: settings.rootMargin,
        threshold: settings.threshold
    });
}

/**
 * Animates a counter from 0 to a target value
 * @param {HTMLElement} element - The element to animate
 * @param {number} target - The target value to count to
 * @param {number} duration - The duration of the animation in milliseconds
 */
function animateCounter(element, target, duration = 2000) {
    const startTime = performance.now();
    const startValue = 0;

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(startValue + (target - startValue) * progress);

        // Add any suffix that might be in the original text (like % or +)
        const originalText = element.textContent;
        const suffix = originalText.replace(/[0-9]/g, '');

        element.textContent = currentValue.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

/**
 * Creates a staggered animation effect for a list of elements
 * @param {NodeList|HTMLCollection} elements - The elements to animate
 * @param {string} animationClass - The CSS class to add for animation
 * @param {number} delay - The delay between each element in milliseconds
 */
function staggerAnimation(elements, animationClass, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add(animationClass);
        }, index * delay);
    });
}

/**
 * Smoothly scrolls to an element
 * @param {string|HTMLElement} target - The element to scroll to (selector or element)
 * @param {number} offset - Optional offset in pixels (e.g., for fixed headers)
 */
function smoothScrollTo(target, offset = 0) {
    let element;
    if (typeof target === 'string') {
        element = document.querySelector(target);
    } else {
        element = target;
    }

    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Adds a CSS class when an element enter the viewport using IntersectionObserver
 * @param {string} selector - CSS selector for elements to observe
 * @param {string} className - Class to add when element is visible
 * @param {Object} options - Observer options
 */
function animateOnScroll(selector, className, options = {}) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(className);
                obs.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1,
        ...options
    });

    elements.forEach(el => observer.observe(el));
}

/**
 * Removes an element with a fade-out effect
 * @param {HTMLElement} element - The element to remove
 * @param {number} duration - The duration of the fade-out in milliseconds
 */
function fadeOutAndRemove(element, duration = 300) {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease`;

    setTimeout(() => {
        element.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, duration);
}

/**
 * Creates a pulse animation effect
 * @param {HTMLElement} element - The element to animate
 * @param {number} duration - The duration of one pulse cycle in milliseconds
 * @param {number} iterations - Number of times to repeat (infinite if not specified)
 */
function pulseElement(element, duration = 2000, iterations = Infinity) {
    element.style.animation = `pulse ${duration}ms ease-in-out ${iterations}`;
}

// Export functions for use in other modules (if using ES modules)
// In this case, we're attaching to window for global access in the browser
window.AnimationUtils = {
    createScrollAnimator,
    animateCounter,
    staggerAnimation,
    smoothScrollTo,
    animateOnScroll,
    fadeOutAndRemove,
    pulseElement
};