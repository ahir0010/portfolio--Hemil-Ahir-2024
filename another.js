document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Hero section animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animate-hero');
    }

    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    projectSelector.addEventListener('change', function () {
        const selectedValue = projectSelector.value;
        uiuxShowcase.style.display = 'none';
        webdevShowcase.style.display = 'none';
        photographyShowcase.style.display = 'none';

        if (selectedValue === 'uiux') {
            uiuxShowcase.style.display = 'block';
        } else if (selectedValue === 'webdev') {
            webdevShowcase.style.display = 'block';
        } else if (selectedValue === 'photography') {
            photographyShowcase.style.display = 'block';
        }
    });

    // Project navigation for UI/UX
    const projects = [
        {
            mobile: 'image/Obscura-home-mobile-1.png',
            desktop: 'image/Obscura-home-web thing-1.png',
            label: 'Obscura tattoo home page design (School work)'
        },
        {
            mobile: 'image/Obscura-artist-mobile-1.png',
            desktop: 'image/Obscura-artist-web-1.png',
            label: 'Obscura tattoo artist page design (School work)'
        }
        // Add more projects as needed
    ];

    let currentIndex = 0;

    const iphoneImage = document.querySelector('.iphone-x .screen img');
    const macbookImage = document.querySelector('.macbook .macbook-screen img');
    const projectLabel = document.querySelector('.project-label');

    function updateProject() {
        iphoneImage.src = projects[currentIndex].mobile;
        macbookImage.src = projects[currentIndex].desktop;
        projectLabel.textContent = projects[currentIndex].label;
    }

    // Initial update
    updateProject();
});
document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            mobile: 'image/Obscura-home-mobile-1.png',
            desktop: 'image/Obscura-home-web thing-1.png',
            label: 'Obscura tattoo home page design (School work)'
        },
        {
            mobile: 'image/Obscura-artist-mobile-1.png',
            desktop: 'image/Obscura-artist-web-1.png',
            label: 'Obscura tattoo artist page design (School work)'
        },
       {
        mobile: 'image/Obscura-home-mobile-1.png',
        desktop: 'image/Obscura-home-web thing-1.png',
        label: 'Obscura tattoo home page design (School work)'
    },
    {
        mobile: 'image/Obscura-artist-mobile-1.png',
        desktop: 'image/Obscura-artist-web-1.png',
        label: 'Obscura tattoo artist page design (School work)'
    }
        
    ];

    let currentIndex = 0;

    const iphoneImage = document.querySelector('.iphone-x .screen img');
    const macbookImage = document.querySelector('.macbook .macbook-screen img');
    const projectLabel = document.querySelector('.project-label');

    function updateProject() {
        iphoneImage.src = projects[currentIndex].mobile;
        macbookImage.src = projects[currentIndex].desktop;
        projectLabel.textContent = projects[currentIndex].label;
    }

    // Initial update
    updateProject();

    document.getElementById('prev-project').addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateProject();
    });

    document.getElementById('next-project').addEventListener('click', function () {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateProject();
    });
});