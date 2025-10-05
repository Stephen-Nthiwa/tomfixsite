// Shared functions for all pages

// Get all posters
function getPosters() {
    return posters;
}

// Add new poster
function addPoster(posterData) {
    const newPoster = {
        id: Date.now(),
        ...posterData,
        dateAdded: new Date().toISOString().split('T')[0]
    };
    posters.push(newPoster);
    return newPoster;
}

// Delete poster
function deletePoster(posterId) {
    posters = posters.filter(poster => poster.id !== posterId);
}

// Filter posters by category
function filterPostersByCategory(category) {
    if (category === 'all') return posters;
    return posters.filter(poster => poster.category === category);
}

// Search posters
function searchPosters(query) {
    const searchTerm = query.toLowerCase();
    return posters.filter(poster => 
        poster.title.toLowerCase().includes(searchTerm) ||
        poster.description.toLowerCase().includes(searchTerm) ||
        poster.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
}

// Save request
function saveRequest(requestData) {
    const requests = JSON.parse(localStorage.getItem('tomfixsite_requests') || '[]');
    const newRequest = {
        id: Date.now(),
        ...requestData,
        date: new Date().toISOString(),
        status: 'pending'
    };
    requests.push(newRequest);
    localStorage.setItem('tomfixsite_requests', JSON.stringify(requests));
    return newRequest;
}

// Admin authentication
function adminLogin(password) {
    if (password === CONFIG.ADMIN_PASSWORD) {
        localStorage.setItem('tomfixsite_admin', 'true');
        return true;
    }
    return false;
}

function isAdminAuthenticated() {
    return localStorage.getItem('tomfixsite_admin') === 'true';
}

function adminLogout() {
    localStorage.removeItem('tomfixsite_admin');
}
