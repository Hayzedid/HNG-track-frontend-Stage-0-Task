// Contact Form Validation and Handling
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
});

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (!form) return;
    
    // Add real-time validation
    addRealTimeValidation();
    
    // Handle form submission
    form.addEventListener('submit', handleFormSubmission);
    
    // Enhance keyboard navigation
    enhanceFormKeyboardNavigation();
}

function addRealTimeValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        // Validate on blur (when user leaves the field)
        input.addEventListener('blur', () => validateField(input));
        
        // Clear errors on input (when user starts typing)
        input.addEventListener('input', () => clearFieldError(input));
        
        // Special handling for email field
        if (input.type === 'email') {
            input.addEventListener('input', () => {
                if (input.value.length > 0) {
                    validateEmail(input);
                }
            });
        }
        
        // Special handling for message field (character count)
        if (input.name === 'message') {
            input.addEventListener('input', () => validateMessageLength(input));
        }
    });
}

function validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (!value) {
        showFieldError(field, `${getFieldDisplayName(fieldName)} is required.`);
        return false;
    }
    
    // Field-specific validation
    switch (fieldName) {
        case 'email':
            return validateEmail(field);
        case 'message':
            return validateMessageLength(field);
        case 'fullName':
            return validateName(field);
        case 'subject':
            return validateSubject(field);
        default:
            return true;
    }
}

function validateEmail(field) {
    const email = field.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showFieldError(field, 'Please enter a valid email address (e.g., name@example.com).');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function validateMessageLength(field) {
    const message = field.value.trim();
    const minLength = 10;
    
    if (message.length < minLength) {
        showFieldError(field, `Message must be at least ${minLength} characters long. Current: ${message.length}`);
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function validateName(field) {
    const name = field.value.trim();
    
    if (name.length < 2) {
        showFieldError(field, 'Full name must be at least 2 characters long.');
        return false;
    }
    
    // Check for at least one space (first and last name)
    if (!name.includes(' ')) {
        showFieldError(field, 'Please enter your full name (first and last name).');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function validateSubject(field) {
    const subject = field.value.trim();
    
    if (subject.length < 3) {
        showFieldError(field, 'Subject must be at least 3 characters long.');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

function showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    // Add error styling to field
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    // Announce error to screen readers
    announceToScreenReader(`Error: ${message}`);
}

function clearFieldError(field) {
    const errorElement = document.getElementById(`${field.id}-error`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    // Remove error styling
    field.classList.remove('error');
    field.setAttribute('aria-invalid', 'false');
}

function getFieldDisplayName(fieldName) {
    const displayNames = {
        'fullName': 'Full name',
        'email': 'Email address',
        'subject': 'Subject',
        'message': 'Message'
    };
    
    return displayNames[fieldName] || fieldName;
}

function handleFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const isValid = validateForm(form);
    
    if (!isValid) {
        // Focus on first error field
        const firstErrorField = form.querySelector('.error');
        if (firstErrorField) {
            firstErrorField.focus();
            announceToScreenReader('Please correct the errors in the form before submitting.');
        }
        return;
    }
    
    // Simulate form submission
    submitForm(formData);
}

function validateForm(form) {
    const fields = form.querySelectorAll('.form-input, .form-textarea');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function submitForm(formData) {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const submitButton = form.querySelector('[data-testid="test-contact-submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call delay
    setTimeout(() => {
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Focus on success message for screen readers
        successMessage.focus();
        
        // Announce success to screen readers
        announceToScreenReader('Your message has been sent successfully!');
        
        // Reset form after showing success (for potential retry)
        setTimeout(() => {
            form.reset();
            clearAllErrors();
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }, 1000);
        
    }, 1500); // Simulate network delay
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const inputElements = document.querySelectorAll('.form-input, .form-textarea');
    
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
    
    inputElements.forEach(input => {
        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
    });
}

function enhanceFormKeyboardNavigation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Add keyboard shortcuts
    form.addEventListener('keydown', function(event) {
        // Ctrl/Cmd + Enter to submit form
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
        
        // Escape to clear current field
        if (event.key === 'Escape') {
            const activeElement = document.activeElement;
            if (activeElement && (activeElement.classList.contains('form-input') || activeElement.classList.contains('form-textarea'))) {
                clearFieldError(activeElement);
            }
        }
    });
}

function announceToScreenReader(message) {
    // Create a temporary element for screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Utility function to validate all contact form test IDs
function validateContactTestIds() {
    const requiredTestIds = [
        'test-contact-name',
        'test-contact-email',
        'test-contact-subject',
        'test-contact-message',
        'test-contact-submit',
        'test-contact-error-name',
        'test-contact-error-email',
        'test-contact-error-subject',
        'test-contact-error-message',
        'test-contact-success'
    ];
    
    const missingTestIds = [];
    
    requiredTestIds.forEach(testId => {
        const element = document.querySelector(`[data-testid="${testId}"]`);
        if (!element) {
            missingTestIds.push(testId);
        }
    });
    
    if (missingTestIds.length > 0) {
        console.warn('Missing required contact form data-testids:', missingTestIds);
        return false;
    }
    
    console.log('All required contact form data-testids are present ✓');
    return true;
}

// Run validation in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(validateContactTestIds, 1000);
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateField,
        validateEmail,
        validateMessageLength,
        validateForm,
        validateContactTestIds
    };
}
