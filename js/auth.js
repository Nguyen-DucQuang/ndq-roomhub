// Authentication utilities
function getCurrentUser() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

function checkAuth() {
    if (!isLoggedIn()) {
        alert('Bạn cần đăng nhập để sử dụng chức năng này!');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Update login button based on auth state
function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        const user = getCurrentUser();
        if (user) {
            loginBtn.textContent = user.name || 'Đăng xuất';
            loginBtn.onclick = logout;
        } else {
            loginBtn.textContent = 'Đăng nhập';
            loginBtn.onclick = () => window.location.href = 'login.html';
        }
    }
}

// Call on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', updateAuthUI);
}