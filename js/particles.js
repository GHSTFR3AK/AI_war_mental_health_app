const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particlesArray = [];
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor(x, y, directX, directY, size, color) {
        this.x = x;
        this.y = y;
        this.directX = directX;
        this.directY = directY;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        if (this.x > canvas.width || this.x < 0) this.directX = -this.directX;
        if (this.y > canvas.height || this.y < 0) this.directY = -this.directY;

        this.x += this.directX;
        this.y += this.directY;

        // Interaction
        if (mouse.x && mouse.y) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = mouse.radius;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * 5;
                const directionY = forceDirectionY * force * 5;

                this.x -= directionX;
                this.y -= directionY;
            }
        }

        this.draw();
    }
}

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    const numberOfParticles = (canvas.height * canvas.width) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        const directX = (Math.random() * 0.4) - 0.2;
        const directY = (Math.random() * 0.4) - 0.2;
        const color = 'rgba(92, 103, 255, 0.2)'; 
        particlesArray.push(new Particle(x, y, directX, directY, size, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                           ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                // Draw connecting lines with dynamic color/opacity
                ctx.strokeStyle = `rgba(92, 103, 255, ${opacityValue * 0.15})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

initParticles();
animate();
