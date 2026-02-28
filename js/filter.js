// Filter and listing functionality
let currentPage = 1;
const itemsPerPage = 5;
let filteredRooms = [...roomsData];

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

    // Login button
    document.getElementById('loginBtn')?.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    // Load URL parameters
    loadURLParams();

    // Apply filter button
    document.getElementById('applyFilter')?.addEventListener('click', applyFilters);

    // Reset filter button
    document.getElementById('resetFilter')?.addEventListener('click', resetFilters);

    // Sort change
    document.getElementById('sortBy')?.addEventListener('change', applyFilters);

    // Initial load
    applyFilters();
});

function loadURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    const area = urlParams.get('area');
    const type = urlParams.get('type');
    const price = urlParams.get('price');
    
    if (area) document.getElementById('filterArea').value = area;
    if (type) document.getElementById('filterType').value = type;
    if (price) document.getElementById('filterPrice').value = price;
}

function applyFilters() {
    const area = document.getElementById('filterArea')?.value || '';
    const type = document.getElementById('filterType')?.value || '';
    const price = document.getElementById('filterPrice')?.value || '';
    const sortBy = document.getElementById('sortBy')?.value || 'newest';
    
    // Filter rooms
    filteredRooms = roomsData.filter(room => {
        let match = true;
        
        if (area && room.location !== area) match = false;
        if (type && room.type !== type) match = false;
        
        if (price) {
            const [min, max] = price.split('-').map(Number);
            const roomPrice = room.price / 1000000;
            if (roomPrice < min || roomPrice > max) match = false;
        }
        
        return match;
    });
    
    // Sort rooms
    switch(sortBy) {
        case 'newest':
            filteredRooms.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'price-asc':
            filteredRooms.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredRooms.sort((a, b) => b.price - a.price);
            break;
        case 'area-asc':
            filteredRooms.sort((a, b) => a.area - b.area);
            break;
        case 'area-desc':
            filteredRooms.sort((a, b) => b.area - a.area);
            break;
    }
    
    currentPage = 1;
    renderRooms();
    renderPagination();
}

function resetFilters() {
    document.getElementById('filterArea').value = '';
    document.getElementById('filterType').value = '';
    document.getElementById('filterPrice').value = '';
    document.getElementById('sortBy').value = 'newest';
    applyFilters();
}

function renderRooms() {
    const container = document.getElementById('roomList');
    if (!container) return;
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const roomsToShow = filteredRooms.slice(start, end);
    
    // Update result count
    document.getElementById('resultCount').textContent = filteredRooms.length;
    
    if (roomsToShow.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy phòng nào</h3>
                <p>Vui lòng thử thay đổi bộ lọc tìm kiếm</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = roomsToShow.map(room => `
        <div class="room-card" onclick="window.location.href='detail.html?id=${room.id}'" style="display: grid; grid-template-columns: 280px 1fr; gap: 24px; cursor: pointer;">
            <img src="${room.image}" alt="${room.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 12px;">
            <div>
                <h3 style="font-size: 22px; margin-bottom: 12px; color: var(--text-primary);">${room.title}</h3>
                <div class="room-details" style="margin-bottom: 12px;">
                    <span><i class="fas fa-map-marker-alt"></i> ${room.location}</span>
                    <span><i class="fas fa-expand"></i> ${room.area}m²</span>
                    <span><i class="fas fa-tag"></i> ${room.type}</span>
                    <span><i class="fas fa-eye"></i> ${room.views} lượt xem</span>
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 16px; line-height: 1.6;">${room.description.substring(0, 150)}...</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div class="room-price-tag">${room.price.toLocaleString('vi-VN')}đ/tháng</div>
                    <button style="padding: 10px 24px; background: var(--primary); color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;" onclick="event.stopPropagation(); window.location.href='detail.html?id=${room.id}'">
                        Xem chi tiết
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPagination() {
    const container = document.getElementById('pagination');
    if (!container) return;
    
    const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `<button onclick="changePage(${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += '<button disabled>...</button>';
        }
    }
    
    // Next button
    paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    container.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredRooms.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    renderRooms();
    renderPagination();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}