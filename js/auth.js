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
            // Create user menu
            const userMenuHTML = `
                <div class="user-menu" id="userMenu">
                    <button class="user-menu-btn" id="userMenuBtn">
                        <i class="fas fa-user"></i>
                    </button>
                    <div class="user-menu-dropdown">
                        <div class="user-menu-header">
                            <div class="user-menu-name">${user.name || 'Người dùng'}</div>
                            <div class="user-menu-email">${user.email || ''}</div>
                        </div>
                        <div class="user-menu-items">
                            <a href="dashboard.html" class="user-menu-item">
                                <i class="fas fa-th-large"></i>
                                <span>Quản lý tin đăng</span>
                            </a>
                            <a href="post.html" class="user-menu-item">
                                <i class="fas fa-plus-circle"></i>
                                <span>Đăng tin mới</span>
                            </a>
                            <div class="user-menu-divider"></div>
                            <button class="user-menu-item logout" id="logoutBtn">
                                <i class="fas fa-sign-out-alt"></i>
                                <span>Đăng xuất</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Replace login button with user menu
            loginBtn.outerHTML = userMenuHTML;
            
            // Add event listeners after creating the menu
            setTimeout(() => {
                const userMenuBtn = document.getElementById('userMenuBtn');
                const userMenu = document.getElementById('userMenu');
                const logoutBtn = document.getElementById('logoutBtn');
                
                if (userMenuBtn && userMenu) {
                    // Toggle dropdown on button click
                    userMenuBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        userMenu.classList.toggle('active');
                    });
                    
                    // Close dropdown when clicking outside
                    document.addEventListener('click', (e) => {
                        if (!userMenu.contains(e.target)) {
                            userMenu.classList.remove('active');
                        }
                    });
                }
                
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', logout);
                }
            }, 0);
        } else {
            loginBtn.textContent = 'Đăng nhập';
            loginBtn.onclick = () => window.location.href = 'login.html';
        }
    }
}

// Hamburger menu functionality
function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const body = document.body;
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
            themeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }
}

// Call on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        updateAuthUI();
        initHamburgerMenu();
        initThemeToggle();
    });
}