// Main JavaScript for homepage
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
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

    // Load featured rooms
    loadFeaturedRooms();

    // Search functionality
    document.getElementById('searchBtn')?.addEventListener('click', handleSearch);

    // Category cards click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const type = this.dataset.type;
            window.location.href = `listing.html?type=${encodeURIComponent(type)}`;
        });
    });
});

function loadFeaturedRooms() {
    const container = document.getElementById('featuredRooms');
    if (!container) return;

    const featuredRooms = roomsData.filter(room => room.featured).slice(0, 6);
    
    container.innerHTML = featuredRooms.map(room => `
        <div class="room-card" onclick="window.location.href='detail.html?id=${room.id}'">
            <img src="${room.image}" alt="${room.title}" class="room-image">
            <div class="room-content">
                <h3>${room.title}</h3>
                <div class="room-details">
                    <span><i class="fas fa-map-marker-alt"></i> ${room.location}</span>
                    <span><i class="fas fa-expand"></i> ${room.area}m²</span>
                    <span><i class="fas fa-tag"></i> ${room.type}</span>
                </div>
                <div class="room-price-tag">${room.price.toLocaleString('vi-VN')}đ/tháng</div>
            </div>
        </div>
    `).join('');
}

function handleSearch() {
    const area = document.getElementById('searchArea')?.value || '';
    const type = document.getElementById('searchType')?.value || '';
    const price = document.getElementById('searchPrice')?.value || '';
    
    const params = new URLSearchParams();
    if (area) params.set('area', area);
    if (type) params.set('type', type);
    if (price) params.set('price', price);
    
    window.location.href = `listing.html?${params.toString()}`;
}