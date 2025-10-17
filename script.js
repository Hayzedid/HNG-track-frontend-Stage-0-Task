// Profile Card JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the profile card
    initializeProfileCard();
});

function initializeProfileCard() {
    // Update timestamp
    updateTimestamp();
    
    // Set up periodic timestamp updates (every second)
    setInterval(updateTimestamp, 1000);
    
    // Add keyboard navigation enhancements
    enhanceKeyboardNavigation();
    
    // Add avatar image error handling
    handleAvatarErrors();
    
    // Add smooth scrolling for better UX
    addSmoothScrolling();
}

function updateTimestamp() {
    const timestampElement = document.querySelector('[data-testid="test-user-time"]');
    if (timestampElement) {
        const currentTime = Date.now();
        timestampElement.textContent = currentTime.toString();
        timestampElement.setAttribute('aria-label', `Current timestamp: ${currentTime} milliseconds since epoch`);
    }
}

function enhanceKeyboardNavigation() {
    // Add focus management for social links
    const socialLinks = document.querySelectorAll('[data-testid="test-user-social-links"] a');
    
    socialLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            // Arrow key navigation
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (index + 1) % socialLinks.length;
                socialLinks[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (index - 1 + socialLinks.length) % socialLinks.length;
                socialLinks[prevIndex].focus();
            }
        });
        
        // Add visual feedback for keyboard users
        link.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        link.addEventListener('blur', function() {
            this.style.transform = '';
        });
    });
}

function handleAvatarErrors() {
    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    if (avatar) {
        avatar.addEventListener('error', function() {
            // Fallback to a default avatar if the image fails to load
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjNjY3ZWVhIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAgMjUwQzEwMCAyMTAgMTIwIDE4MCAxNTAgMTgwUzIwMCAyMTAgMjAwIDI1MEgxMDBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';
            this.alt = 'Default avatar - profile image failed to load';
        });
        
        // Add loading state
        avatar.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial loading state
        avatar.style.opacity = '0';
        avatar.style.transition = 'opacity 0.3s ease';
    }
}

function addSmoothScrolling() {
    // Add smooth scrolling behavior for any internal links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility function to validate all required data-testids are present
function validateTestIds() {
    const requiredTestIds = [
        'test-profile-card',
        'test-user-name',
        'test-user-bio',
        'test-user-time',
        'test-user-avatar',
        'test-user-social-links',
        'test-user-hobbies',
        'test-user-dislikes'
    ];
    
    const missingTestIds = [];
    
    requiredTestIds.forEach(testId => {
        const element = document.querySelector(`[data-testid="${testId}"]`);
        if (!element) {
            missingTestIds.push(testId);
        }
    });
    
    if (missingTestIds.length > 0) {
        console.warn('Missing required data-testids:', missingTestIds);
        return false;
    }
    
    console.log('All required data-testids are present ✓');
    return true;
}

// Run validation in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(validateTestIds, 1000);
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateTimestamp,
        validateTestIds,
        initializeProfileCard
    };
}
