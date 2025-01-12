// Function to toggle dark mode and save preference
function toggleDarkMode() {
    // Toggle dark class
    document.body.classList.toggle('dark');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark');
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to load dark mode preference
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark');
    }
}

// Apply dark mode preference when page loads
document.addEventListener('DOMContentLoaded', loadDarkModePreference);