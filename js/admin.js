// Admin functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if admin is logged in
    if (!isAdminAuthenticated()) {
        window.location.href = 'admin-login.html';
        return;
    }

    loadAdminInterface();
});

function loadAdminInterface() {
    // Load current posters
    displayPostersList();
    
    // Setup form submission
    document.getElementById('upload-form').addEventListener('submit', handlePosterUpload);
    
    // Setup logout
    document.getElementById('logout-btn').addEventListener('click', function() {
        adminLogout();
        window.location.href = 'index.html';
    });
}

function displayPostersList() {
    const postersList = document.getElementById('posters-list');
    const posters = getPosters();
    
    postersList.innerHTML = posters.map(poster => `
        <div class="poster-admin-item">
            <img src="${poster.image}" alt="${poster.title}" class="poster-admin-thumb">
            <div class="poster-admin-info">
                <h4>${poster.title}</h4>
                <span class="poster-category category-${poster.category}">${poster.category}</span>
                <p>${poster.description}</p>
                <div class="poster-admin-actions">
                    <button onclick="deletePoster(${poster.id})" class="btn danger-btn">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function handlePosterUpload(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const posterData = {
        title: formData.get('title'),
        category: formData.get('category'),
        description: formData.get('description'),
        image: formData.get('image-url'), // You'll upload to ImgBB and paste URL here
        downloadUrl: formData.get('download-url'),
        tags: formData.get('tags').split(',').map(tag => tag.trim()),
        size: formData.get('size'),
        format: formData.get('format')
    };
    
    addPoster(posterData);
    displayPostersList();
    
    // Show success message
    alert('Poster uploaded successfully!');
    e.target.reset();
}

// Make functions global for HTML onclick
window.deletePoster = function(posterId) {
    if (confirm('Are you sure you want to delete this poster?')) {
        deletePoster(posterId);
        displayPostersList();
    }
};
