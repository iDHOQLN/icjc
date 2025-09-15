// You can add simple animations or interactivity here later.
// For now, we'll just add a console log to show it's working.
console.log("Nexus website loaded successfully!");

// Example: Add a smooth scroll to all links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});