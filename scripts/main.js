document.addEventListener('DOMContentLoaded', () => {
    // 1. Typewriter Effect Logic
    const text = "./init.sh\n> Hello, World.\n> I am Anuj Sain.\n> Self-taught programmer.";
    const typewriterElement = document.getElementById('typewriter');
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < text.length) {
            const char = text.charAt(charIndex);

            // Check for newline character to render as HTML break
            if (char === '\n') {
                typewriterElement.innerHTML += '<br>';
            } else {
                typewriterElement.innerHTML += char;
            }

            charIndex++;

            // Randomize typing speed for a realistic mechanical feel
            const speed = Math.random() * 60 + 30; // 30ms to 90ms

            // Pause longer on punctuation and newlines
            let delay = speed;
            if (char === '.' || char === '\n') {
                delay += 400;
            }

            setTimeout(typeWriter, delay);
        }
    }

    // Start typing effect after a short delay so the user has time to see it begin
    setTimeout(typeWriter, 800);

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply animation
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Unobserve after animating once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Setup skill cards for animation
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        // Initial state
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        // Stagger the transition delay based on index
        card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;

        // Start observing
        scrollObserver.observe(card);
    });
});
