// Debug script to verify mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Debug script loaded');
    
    // Test mobile menu
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        console.log('Mobile menu elements found');
        
        // Add a visible indicator for debugging
        const debugIndicator = document.createElement('div');
        debugIndicator.style.position = 'fixed';
        debugIndicator.style.bottom = '10px';
        debugIndicator.style.right = '10px';
        debugIndicator.style.padding = '5px 10px';
        debugIndicator.style.background = 'rgba(0,0,0,0.7)';
        debugIndicator.style.color = 'white';
        debugIndicator.style.borderRadius = '5px';
        debugIndicator.style.fontSize = '12px';
        debugIndicator.style.zIndex = '9999';
        debugIndicator.textContent = 'Menu: Closed';
        document.body.appendChild(debugIndicator);
        
        // Update the original event listener
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            debugIndicator.textContent = isActive ? 'Menu: Closed' : 'Menu: Open';
        });
    } else {
        console.error('Mobile menu elements not found!');
    }
}); 