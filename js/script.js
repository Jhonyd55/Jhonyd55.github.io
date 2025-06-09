     // Animaciones adicionales con JavaScript
     document.addEventListener('DOMContentLoaded', function() {
        // Animación de elementos al hacer scroll
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.project-card, .soft-skill-card, .skill-item');
            elements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.85) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }
            });
        };
        
        // Inicializar opacidad para animación
        const cards = document.querySelectorAll('.project-card, .soft-skill-card, .skill-item');
        
        cards.forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        });
        
        // Añadir eventos
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Ejecutar al cargar
        
        // Efecto de partículas al hacer clic
        const buttons = document.querySelectorAll('a');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                createTechParticles(e.clientX, e.clientY);
            });
        });
        
        function createTechParticles(x, y) {
            const particles = 12;
            
            for (let i = 0; i < particles; i++) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                particle.style.width = '8px';
                particle.style.height = '8px';
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = getRandomTechColor();
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                particle.style.boxShadow = '0 0 10px currentColor';
                
                document.body.appendChild(particle);
                
                // Animación
                const angle = Math.random() * Math.PI * 2;
                const velocity = 1 + Math.random() * 2;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                let posX = x;
                let posY = y;
                
                function animate() {
                    posX += vx;
                    posY += vy;
                    
                    particle.style.left = `${posX}px`;
                    particle.style.top = `${posY}px`;
                    particle.style.opacity = `${1 - (posY - y) / 200}`;
                    
                    if (posY < window.innerHeight + 50) {
                        requestAnimationFrame(animate);
                    } else {
                        particle.remove();
                    }
                }
                
                animate();
            }
        }
        
        function getRandomTechColor() {
            const colors = [
                'var(--tech-blue)', 
                'var(--electronic-purple)', 
                'var(--code-green)', 
                'var(--circuit-orange)', 
                'var(--data-cyan)'
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        }
    });