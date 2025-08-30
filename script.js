// Smooth scrolling for navigation links
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

// Start journey animation
function startJourney() {
    const hero = document.querySelector('.hero');
    hero.style.transform = 'scale(0.8)';
    hero.style.opacity = '0.5';
    
    setTimeout(() => {
        document.querySelector('#cities').scrollIntoView({
            behavior: 'smooth'
        });
        hero.style.transform = 'scale(1)';
        hero.style.opacity = '1';
    }, 500);
}

// Tech details data
const techDetails = {
    cities: {
        title: "Smart Cities of 2070",
        content: `
            <h3>🌱 Vertical Farms</h3>
            <p>Towering 500-story agricultural complexes use AI to optimize crop growth. Each farm produces food for 1 million people using 95% less water and no pesticides.</p>
            
            <h3>🏙️ Floating Districts</h3>
            <p>Self-sustaining ocean cities built on bio-engineered coral foundations. These floating metropolises rise and fall with sea levels, housing climate refugees in luxury.</p>
            
            <h3>🧠 Neural Networks</h3>
            <p>City-wide quantum AI systems predict and prevent problems before they occur. Traffic flows like water, energy is distributed perfectly, and waste becomes resources instantly.</p>
        `
    },
    transport: {
        title: "Transportation Revolution",
        content: `
            <h3>🚄 Hyperloop Global</h3>
            <p>Vacuum tube networks span continents, moving passengers at 1000mph. London to Tokyo in 2 hours, powered entirely by renewable energy.</p>
            
            <h3>🚗 Flying Cars</h3>
            <p>Personal aerial vehicles navigate 3D traffic lanes managed by AI. Every car is autonomous, electric, and can transform into different configurations for various needs.</p>
            
            <h3>⚡ Teleportation</h3>
            <p>Quantum entanglement chambers allow instant matter transportation across short distances. Currently limited to 100km range but expanding rapidly.</p>
        `
    },
    energy: {
        title: "Energy Revolution",
        content: `
            <h3>☀️ Fusion Power</h3>
            <p>Miniaturized fusion reactors power entire cities. Clean, unlimited energy from hydrogen fusion, with reactors no larger than shipping containers.</p>
            
            <h3>🛰️ Space Solar</h3>
            <p>Massive solar arrays in orbit collect energy 24/7 and beam it to Earth via microwave transmission. Each array powers 10 million homes.</p>
            
            <h3>🌪️ Atmospheric Mining</h3>
            <p>Weather control systems harvest energy from storms, hurricanes, and atmospheric pressure changes. Turning natural disasters into power sources.</p>
        `
    },
    health: {
        title: "Healthcare Evolution",
        content: `
            <h3>🔬 Nano Medicine</h3>
            <p>Microscopic robots patrol your bloodstream, repairing damage at the cellular level. Cancer, heart disease, and aging are now preventable conditions.</p>
            
            <h3>💭 Mind Upload</h3>
            <p>Consciousness can be backed up to quantum storage. Death becomes optional as minds can be transferred to new bodies or digital realms.</p>
            
            <h3>🧬 Gene Editing</h3>
            <p>Real-time DNA modification eliminates genetic diseases before symptoms appear. Humans can adapt to any environment through controlled evolution.</p>
        `
    },
    space: {
        title: "Space Civilization",
        content: `
            <h3>🔴 Mars Colonies</h3>
            <p>Self-sustaining cities on Mars house 50 million people. Terraforming projects are turning the red planet green, with breathable atmosphere in domed regions.</p>
            
            <h3>💎 Asteroid Mining</h3>
            <p>Robotic fleets harvest precious metals and rare elements from asteroids. A single metallic asteroid contains more platinum than has ever been mined on Earth.</p>
            
            <h3>🚀 Interstellar Travel</h3>
            <p>The first crewed missions to Proxima Centauri launched in 2068. Using fusion ramjets and time dilation, the 25-year journey feels like 5 years to travelers.</p>
        `
    }
};

// Show detailed information
function showDetails(category) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const details = techDetails[category];
    
    modalBody.innerHTML = `
        <h2>${details.title}</h2>
        <div class="detail-content">
            ${details.content}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-city');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all tech cards
document.addEventListener('DOMContentLoaded', () => {
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Dynamic background particles
function createParticles() {
    const particleCount = 50;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            opacity: 0.5;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            z-index: -1;
        `;
        body.appendChild(particle);
    }
}

// Initialize particles on load
window.addEventListener('load', createParticles);