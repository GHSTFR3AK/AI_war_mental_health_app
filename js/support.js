function switchTab(tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Add active class to clicked tab based on event target
    const currentEventTab = event.target;
    currentEventTab.classList.add('active');

    // Show the target tab content
    const targetContent = document.getElementById(`tab-${tabId}`);
    targetContent.style.display = 'block';
    
    // Animate the entrance
    targetContent.classList.remove('fade-in');
    void targetContent.offsetWidth; // Trigger reflow
    targetContent.classList.add('fade-in');
}
