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
- **Animations mượt mà**: Hiệu ứng chuyển động hiện đại (Fade In Up, Slide In Left)
- **Gradient Colors**: Màu sắc gradient đẹp mắt (Blue → Cyan, Orange with accents)
- **Icons Font Awesome**: Hệ thống icon phong phú
- **Card-Based Design**: Các section được style như modern cards với shadows

### 🔐 Xác thực người dùng
- **Đăng ký/Đăng nhập**: Hệ thống authentication cơ bản
- **Social Login**: Đăng nhập bằng Google và Facebook (Modal popups)
- **Phân quyền**: Người thuê và Chủ nhà

### 📋 Trang Chính sách & Thông tin
- **Điều khoản sử dụng** (Terms of Service)
- **Chính sách bảo mật** (Privacy Policy)
- **Quy định đăng tin** (Posting Rules & Guidelines)
- **Hướng dẫn thanh toán** (Payment Guide)

## 🛠️ Công nghệ sử dụng

### Frontend
- **HTML5**: Cấu trúc trang web semantic
- **CSS3**: Styling với CSS Variables, Flexbox, Grid, Animations
- **JavaScript (Vanilla)**: Logic xử lý không cần framework
- **Font Awesome 6.4**: Icon library
- **Google Fonts (Inter)**: Typography hiện đại

### Storage
- **LocalStorage**: Lưu trữ dữ liệu phía client (users, posts, favorites, theme)

### Design System
- **Color Palette**: 
  - Primary: #2563eb (Blue)
  - Accent: #f97316 (Orange)
  - Cyan: #06b6d4
  - Purple: #a855f7
  - Success/Warning/Error colors
- **Typography**: Font Inter với weights 300-700
- **Spacing**: Consistent spacing scale
- **Shadows**: Multiple shadow levels (shadow, shadow-lg, shadow-xl) cho depth
- **Animations**: @keyframes (fadeInUp, slideInLeft, slideInRight, pulse)

## 📁 Cấu trúc thư mục

```
newproject/
│
├── index.html              # Trang chủ - Khám phá & Featured listings
├── listing.html            # Danh sách phòng - Hiển thị tất cả phòng trọ
├── detail.html             # Chi tiết phòng - Thông tin đầy đủ về 1 phòng
├── post.html               # Đăng tin - Form đăng tin cho chủ nhà
├── dashboard.html          # Quản lý tin đăng - Quản lý các tin đã đăng
├── login.html              # Đăng nhập/Đăng ký - With Google & Facebook OAuth
│
├── terms.html              # Điều khoản sử dụng
├── privacy.html            # Chính sách bảo mật
├── posting-rules.html      # Quy định đăng tin & hướng dẫn
├── payment-guide.html      # Hướng dẫn thanh toán & phương thức thanh toán
│
├── css/
│   └── style.css           # Stylesheet chính (2200+ lines)
│                            # - Header & Navigation
│                            # - Hero section & Animations
│                            # - Cards & Listings
│                            # - Forms & Modals
│                            # - Policy page styling
│                            # - Dark mode support
│                            # - Responsive breakpoints
│
├── js/
│   ├── auth.js             # Xác thực người dùng
│   │                        # - Register/Login logic
│   │                        # - Social auth (Google/Facebook)
│   │                        # - Session management
│   │                        
│   ├── data.js             # Dữ liệu mẫu phòng trọ (20+ listings)
│   │                        # - Room objects with full details
│   │                        # - Sample users & posts
│   │
│   ├── filter.js           # Logic lọc và tìm kiếm
│   │                        # - Search by area, type, price, size
│   │                        # - Favorites system
│   │
│   └── main.js             # JavaScript utilities & helpers
│                            # - Theme toggle
│                            # - DOM manipulation
│                            # - Event listeners
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
   git clone https://github.com/Nguyen-DucQuang/ndq-roomhub.git
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
   - Giá thuê (Từ - Đến)
   - Diện tích (Từ - Đến)
3. Click vào phòng để xem chi tiết đầy đủ
4. Liên hệ chủ nhà qua số điện thoại hoặc email

### Đăng tin cho thuê
1. Click "Đăng tin" trên menu (sẽ yêu cầu đăng nhập nếu chưa)
2. Điền thông tin phòng:
   - Tiêu đề, loại hình, khu vực
   - Giá thuê, diện tích
   - Mô tả chi tiết
   - Tiện ích (WiFi, Điều hòa, Máy giặt, Bếp, v.v.)
   - Hình ảnh (URL)
   - Thông tin liên hệ
3. Click "Đăng tin"

### Quản lý tin đăng
1. Vào "Quản lý tin" (yêu cầu đăng nhập)
2. Xem danh sách tin đã đăng
3. Xem chi tiết, chỉnh sửa hoặc xóa tin

### Đăng nhập
- **Đăng ký tài khoản mới**:
  - Nhập họ tên, email, SĐT, mật khẩu
  - Chọn loại tài khoản (Người thuê/Chủ nhà)
  
- **Đăng nhập**:
  - Dùng email và mật khẩu đã đăng ký
  - Hoặc đăng nhập nhanh bằng Google/Facebook (Modal popup)

### Theme Toggle
- Click nút Moon/Sun ở góc trên phải header để đổi sang Dark/Light mode
- Theme được lưu trong localStorage và sẽ giữ lại khi load lại trang

## 🎨 Tính năng UI/UX nổi bật

### Modern Design
- **Gradient Backgrounds**: Từ Blue sang Cyan, hoặc Orange với accents
- **Responsive Grid**: Hiển thị 1-4 cột tùy theo kích thước màn hình
- **Card-Style Sections**: Các section chính (policy pages) được style như cards
- **Border Accents**: Khung màu primary ở cạnh trái của các cards

### Animations
- **Fade In Up**: Các card lần lượt hiện lên từ dưới lên
- **Slide In**: Sidebar và modals có animation mượt mà
- **Hover Effects**: Buttons và cards có hover effects với transform & shadow
- **Modal Animations**: Modal popups (Google/Facebook login) có fade-in effect

### Interactive Elements
- **Smooth Transitions**: Tất cả các state changes có transition mượt mà
- **Hover States**: Buttons/links có hover effects, cards nâng lên (lift effect)
- **Focus States**: Form inputs có focus states rõ ràng

### Responsive Breakpoints
- **Desktop**: > 1024px - hiển thị 4 items per row
- **Tablet**: 768px - 1024px - hiển thị 2-3 items per row
- **Mobile**: < 768px - hiển thị 1 item per row, stack layout

## 💾 Dữ liệu mẫu

Website đi kèm với **20+ phòng trọ mẫu** bao gồm:
- Nhà trọ (giá 2-5 triệu/tháng)
- Chung cư (giá 3-6 triệu/tháng)
- Homestay (giá 4-8 triệu/tháng)
- Khách sạn (giá 5-10 triệu/tháng)

Dữ liệu được lưu trong `js/data.js` và có thể dễ dàng chỉnh sửa hoặc thêm dữ liệu mới.

### Cấu trúc dữ liệu phòng
```javascript
{
    id: 1,
    title: "Phòng trọ 25m2 tại Quận 1",
    type: "Nhà trọ",
    area: "Quận 1",
    price: 3500000,
    size: 25,
    description: "Phòng sáng, yên tĩnh...",
    image: "https://...",
    utilities: ["WiFi", "Điều hòa", "Tủ lạnh"],
    phone: "0377487457",
    beds: 1,
    rating: 4.5
}
```

## 📄 Trang Chính sách & Thông tin

### Điều khoản sử dụng (terms.html)
- Điều khoản chung
- Tài khoản và trách nhiệm người dùng
- Nội dung và Bài đăng
- Miễn trừ trách nhiệm
- Giới hạn trách nhiệm pháp lý
- Liên hệ

### Chính sách bảo mật (privacy.html)
- Thông tin chúng tôi thu thập
- Cách sử dụng thông tin
- Bảo mật thông tin
- Chia sẻ dữ liệu
- Quyền người dùng
- Cookies & Tracking
- Thay đổi chính sách
- Liên hệ

### Quy định đăng tin (posting-rules.html)
- Yêu cầu chung
- Nội dung được phép
- Nội dung không được phép
- Yêu cầu hình ảnh
- Thông tin giá & Thời gian lưu
- Điều khoản & Quy tắc vi phạm
- Giải quyết tranh chấp
- Hỗ trợ khách hàng

### Hướng dẫn thanh toán (payment-guide.html)
- Loại hình dịch vụ
- Phương thức thanh toán (Chuyển khoản, Thẻ tín dụng, E-wallet)
- Bảng giá chi tiết
- Hướng dẫn từng bước
- Bảo mật giao dịch
- Chính sách hoàn tiền
- Thông báo giao dịch
- Xử lý sự cố
- Hóa đơn & Biên lai
- Hỗ trợ & Liên hệ

## 🔐 Bảo mật

### Hiện tại
- Password được lưu dưới dạng plain text (⚠️ Chỉ dùng cho demo)
- Authentication dựa trên localStorage

### Trong production nên:
- Sử dụng backend API (Node.js, Laravel, Django)
- Hash passwords (bcrypt hoặc scrypt)
- Implement JWT tokens
- HTTPS required
- Secure cookies
- Rate limiting
- SQL injection prevention
- XSS protection

## 🌟 Các tính năng có thể mở rộng

- [ ] Kết nối Backend API (Node.js, Laravel, Django)
- [ ] Database thực (MySQL, MongoDB, PostgreSQL)
- [ ] Upload hình ảnh thực (AWS S3, CloudFront)
- [ ] Google Maps integration (Hiển thị vị trí phòng)
- [ ] Chat realtime giữa người thuê và chủ nhà (Socket.io)
- [ ] Payment gateway (Stripe, VNPay, MoMo)
- [ ] Email notifications (Nodemailer, SendGrid)
- [ ] Admin dashboard (Quản lý users, posts, reports)
- [ ] Rating & Reviews system (5-star ratings, comments)
- [ ] Advanced search với AI (Recommendation engine)
- [ ] SMS notifications (Twilio)
- [ ] Video tours of rooms
- [ ] Virtual tours / 360° views
- [ ] Verification system (Verified landlords)
- [ ] Spam detection & moderation

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |
| IE      | ❌ Not supported |

## 🔗 Social Links & Các đường liên kết

### Theo dõi & Kết nối
- **Website**: https://nguyen-ducquang.github.io/newprofile/
- **Facebook**: https://www.facebook.com/gnauq.notwang16
- **Instagram**: https://www.instagram.com/_dukwanxg/

### Thông tin liên hệ
- **Email**: sssquang992@gmail.com
- **Phone**: 0377 487 457
- **Địa chỉ**: TP. Hồ Chí Minh

## 👨‍💻 Tác giả

**Nguyễn Đức Quang**
- 🌐 Website: https://nguyen-ducquang.github.io/newprofile/
- 📧 Email: sssquang992@gmail.com
- 🐙 GitHub: https://github.com/Nguyen-DucQuang

## 🙏 Lời cảm ơn

- [Font Awesome](https://fontawesome.com) - Icons & symbols
- [Google Fonts](https://fonts.google.com) - Typography (Inter font family)
- [Unsplash](https://unsplash.com) - Stock Images
- [Modern CSS](https://web.dev) - CSS technologies & best practices

## 📞 Hỗ trợ & Đóng góp

Nếu bạn có câu hỏi hoặc muốn đóng góp:
1. Fork project
2. Tạo branch feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

---

<p align="center">Made with ❤️ by Nguyễn Đức Quang</p>
<p align="center">© 2024 NDQ RoomHub. All rights reserved.</p>
<p align="center"><a href="https://github.com/Nguyen-DucQuang/ndq-roomhub">GitHub Repository</a></p>
