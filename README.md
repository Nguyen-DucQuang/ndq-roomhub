# 🏠 NDQ RoomHub

**NDQ RoomHub** là một nền tảng web hiện đại giúp bạn tìm kiếm và đăng tin cho thuê phòng trọ, chung cư, homestay một cách dễ dàng và nhanh chóng.

![NDQ RoomHub Banner](https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=400&fit=crop)

## ✨ Tính năng chính

### 🔍 Cho người tìm phòng
- **Tìm kiếm thông minh**: Lọc theo khu vực, loại hình, giá thuê, diện tích
- **Xem chi tiết phòng**: Hình ảnh, mô tả, tiện ích, thông tin liên hệ
- **Lưu tin yêu thích**: Đánh dấu các phòng ưng ý để xem lại sau
- **Responsive Design**: Hiển thị tốt trên mọi thiết bị (Desktop, Tablet, Mobile)

### 📝 Cho chủ nhà
- **Đăng tin miễn phí**: Form đăng tin đơn giản, dễ sử dụng
- **Quản lý tin đăng**: Xem, sửa, xóa các tin đã đăng
- **Thống kê lượt xem**: Theo dõi hiệu quả của từng tin đăng
- **Yêu cầu đăng nhập**: Bảo mật thông tin người đăng

### 🎨 Giao diện & Trải nghiệm
- **Dark Mode/Light Mode**: Chế độ sáng tối linh hoạt
- **Animations mượt mà**: Hiệu ứng chuyển động hiện đại
- **Gradient Colors**: Màu sắc gradient đẹp mắt
- **Icons Font Awesome**: Hệ thống icon phong phú

### 🔐 Xác thực người dùng
- **Đăng ký/Đăng nhập**: Hệ thống authentication cơ bản
- **Social Login**: Đăng nhập bằng Google và Facebook
- **Phân quyền**: Người thuê và Chủ nhà

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Cấu trúc trang web semantic
- **CSS3**: Styling với CSS Variables, Flexbox, Grid
- **JavaScript (Vanilla)**: Logic xử lý không cần framework
- **Font Awesome 6.4**: Icon library
- **Google Fonts (Inter)**: Typography hiện đại

### Storage
- **LocalStorage**: Lưu trữ dữ liệu phía client (users, posts, favorites, theme)

### Design System
- **Color Palette**: Primary (Blue), Accent (Orange), Success/Warning/Error
- **Typography**: Font Inter với weights 300-700
- **Spacing**: Consistent spacing scale
- **Shadows**: Multiple shadow levels cho depth

## 📁 Cấu trúc thư mục

```
newproject/
│
├── index.html              # Trang chủ
├── listing.html            # Danh sách phòng
├── detail.html             # Chi tiết phòng
├── post.html               # Đăng tin
├── dashboard.html          # Quản lý tin đăng
├── login.html              # Đăng nhập/Đăng ký
│
├── css/
│   └── style.css           # Stylesheet chính (1900+ lines)
│
├── js/
│   ├── auth.js             # Xác thực người dùng
│   ├── data.js             # Dữ liệu mẫu phòng trọ
│   ├── filter.js           # Logic lọc và tìm kiếm
│   └── main.js             # JavaScript utilities
│
└── README.md               # Tài liệu này
```

## 🚀 Cài đặt và Sử dụng

### Yêu cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Web server (hoặc Live Server extension cho VS Code)

### Cách 1: Chạy trực tiếp
1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/ndq-roomhub.git
   cd ndq-roomhub
   ```

2. **Mở bằng Live Server**
   - Cài đặt extension "Live Server" trong VS Code
   - Right-click vào `index.html` → "Open with Live Server"
   - Website sẽ chạy tại `http://127.0.0.1:5500`

### Cách 2: Deploy lên hosting
1. Upload toàn bộ files lên web hosting
2. Truy cập domain của bạn

### Cách 3: Chạy với Python
```bash
# Python 3
python -m http.server 8000

# Mở trình duyệt tại http://localhost:8000
```

## 📖 Hướng dẫn sử dụng

### Tìm kiếm phòng trọ
1. Vào trang chủ hoặc trang "Tìm phòng"
2. Sử dụng bộ lọc để tìm theo:
   - Khu vực (Quận 1, 2, 3, 4, 5, 7, 10, Bình Thạnh, Thủ Đức)
   - Loại hình (Nhà trọ, Chung cư, Khách sạn, Homestay)
   - Giá thuê
   - Diện tích
3. Click vào phòng để xem chi tiết
4. Liên hệ chủ nhà qua số điện thoại

### Đăng tin cho thuê
1. Click "Đăng tin" trên menu
2. Hệ thống yêu cầu đăng nhập (nếu chưa)
3. Điền thông tin phòng:
   - Tiêu đề, loại hình, khu vực
   - Giá thuê, diện tích
   - Mô tả chi tiết
   - Tiện ích (WiFi, Điều hòa, Máy giặt...)
   - Hình ảnh (URL)
   - Thông tin liên hệ
4. Click "Đăng tin"

### Quản lý tin đăng
1. Vào "Quản lý tin" (yêu cầu đăng nhập)
2. Xem danh sách tin đã đăng
3. Chỉnh sửa hoặc xóa tin

### Đăng nhập
- **Đăng ký tài khoản mới**:
  - Nhập họ tên, email, SĐT, mật khẩu
  - Chọn loại tài khoản (Người thuê/Chủ nhà)
  
- **Đăng nhập**:
  - Dùng email và mật khẩu đã đăng ký
  - Hoặc đăng nhập nhanh bằng Google/Facebook

## 🎨 Tính năng UI/UX nổi bật

### Theme Customization
- Toggle Dark/Light mode với nút trên header
- Theme được lưu trong localStorage
- Smooth transition giữa các themes

### Animations
- Fade In Up cho cards và sections
- Slide In cho sidebar
- Hover effects với transform và shadow
- Modal animations

### Gradient Effects
- Gradient backgrounds cho buttons
- Gradient text cho headings và prices
- Gradient borders và shadows

### Responsive Breakpoints
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 💾 Dữ liệu mẫu

Website đi kèm với **20+ phòng trọ mẫu** bao gồm:
- Nhà trọ (giá 2-5 triệu/tháng)
- Chung cư (giá 3-6 triệu/tháng)
- Homestay (giá 4-8 triệu/tháng)
- Khách sạn (giá 5-10 triệu/tháng)

Dữ liệu được lưu trong `js/data.js` và có thể dễ dàng chỉnh sửa.

## 🔐 Bảo mật

- Password được lưu dưới dạng plain text (⚠️ Chỉ dùng cho demo)
- Trong production, nên:
  - Sử dụng backend API
  - Hash passwords
  - Implement JWT tokens
  - HTTPS required

## 🌟 Các tính năng có thể mở rộng

- [ ] Kết nối Backend API (Node.js, Laravel, Django)
- [ ] Database thực (MySQL, MongoDB)
- [ ] Upload hình ảnh thực
- [ ] Google Maps integration
- [ ] Chat realtime giữa người thuê và chủ nhà
- [ ] Payment gateway
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Rating & Reviews system
- [ ] Advanced search với AI

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE      | ❌ Not supported |


## 👨‍💻 Tác giả

**NDQ Team**
- Website: https://nguyen-ducquang.github.io/newprofile/
- Email: sssquang992@gmail.com
- Facebook: ![Nguyễn Đức Quang](https://www.facebook.com/gnauq.notwang16)

## 🙏 Lời cảm ơn

- [Font Awesome](https://fontawesome.com) - Icons
- [Google Fonts](https://fonts.google.com) - Typography
- [Unsplash](https://unsplash.com) - Stock Images

---

<p align="center">Made with ❤️ by NDQ Team</p>
<p align="center">© 2024 NDQ RoomHub. All rights reserved.</p>
