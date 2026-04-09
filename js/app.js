// Handle switching between the Fake Study View and the True Portal View
const studyView = document.getElementById('study-view');
const portalView = document.getElementById('portal-view');
const panicBtn = document.getElementById('panic-btn');
const secretTrigger = document.getElementById('secret-trigger');

let pressTimer;

// Long press on "Focus Session" Title to unlock
secretTrigger.addEventListener('mousedown', () => {
    pressTimer = window.setTimeout(unlockPortal, 1500); // 1.5 second long press
});
secretTrigger.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});
secretTrigger.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
});

// For mobile (touch)
secretTrigger.addEventListener('touchstart', () => {
    pressTimer = window.setTimeout(unlockPortal, 1500);
});
secretTrigger.addEventListener('touchend', () => {
    clearTimeout(pressTimer);
});


function unlockPortal() {
    // Hide study, show portal
    studyView.style.display = 'none';
    portalView.style.display = 'block';
    
    // Add nice fade in animation
    portalView.classList.remove('fade-in');
    void portalView.offsetWidth; // trigger reflow
    portalView.classList.add('fade-in');

    // Change background to purely calming deep blue colors
    changeEnvironment('calm');
}

function lockPortal() {
    // Hide portal, show study
    portalView.style.display = 'none';
    studyView.style.display = 'block';
    
    studyView.classList.remove('fade-in');
    void studyView.offsetWidth;
    studyView.classList.add('fade-in');

    // Restore study background
    changeEnvironment('study');
}

// Panic button - instantaneous hide
panicBtn.addEventListener('click', lockPortal);

// Ensure pressing "Escape" key also hides mapping immediately mapping to panic
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portalView.style.display === 'block') {
        lockPortal();
    }
});

// Subtle background color shift based on mode
function changeEnvironment(mode) {
    if (mode === 'calm') {
        // Safe Space Environment
        particlesArray.forEach(p => {
            p.color = 'rgba(76, 175, 80, 0.3)'; // Switch to calming green
        });
        document.documentElement.style.setProperty('--panel-bg', 'rgba(10, 30, 20, 0.8)');
    } else {
        // Study Environment
        particlesArray.forEach(p => {
            p.color = 'rgba(92, 103, 255, 0.2)'; // Back to primary blue
        });
        document.documentElement.style.setProperty('--panel-bg', 'rgba(22, 25, 43, 0.6)');
    }
}
