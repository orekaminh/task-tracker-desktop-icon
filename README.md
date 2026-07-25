# Task Pro — trang PWA (icon đẹp + toàn màn hình)

Trang wrapper nhỏ để **"Thêm vào màn hình chính"** ra **icon riêng**, mở **toàn màn hình** (ẩn thanh URL),
và **không còn banner "ứng dụng do người dùng GAS tạo"** ở khung ngoài. App thật (Apps Script) được
nhúng trong `<iframe>`.

## Cách dùng (1 lần ~5 phút)

1. **Sửa link app**: mở [index.html](index.html), tìm dòng `var APP_URL = "..."` → dán **link `/exec`**
   của bản web app (lấy ở Apps Script của khách → *Triển khai → Quản lý bản triển khai → URL Web app*).
2. **Host miễn phí** (chọn 1):
   - **GitHub Pages**: tạo repo → upload cả 3 file (`index.html`, `manifest.webmanifest`, `icon.svg`) →
     Settings → Pages → Branch `main` /root → Save → được link dạng `https://<user>.github.io/<repo>/`.
   - **Netlify Drop**: kéo-thả cả thư mục `pwa/` vào https://app.netlify.com/drop → ra link ngay.
3. **Mở link đó trên điện thoại** → menu trình duyệt → **"Thêm vào màn hình chính"**.
   - iPhone (Safari): nút Chia sẻ → *Thêm vào MH chính*. Mở từ icon → chạy full màn hình, không thanh URL.
   - Android (Chrome): menu ⋮ → *Thêm vào màn hình chính / Cài đặt ứng dụng*.

> ⚠️ **Mỗi khách = 1 link /exec riêng** → mỗi khách cần 1 bản copy của thư mục này với `APP_URL` của họ.

## Icon trên iPhone cho nét

Android + trình duyệt PC dùng được `icon.svg` luôn. Riêng **iOS chỉ nhận PNG** cho icon home-screen.
Muốn icon nét trên iPhone: chuyển `icon.svg` → **`icon-180.png`** (180×180, ví dụ bằng cloudconvert.com
hoặc bất kỳ trình xuất PNG nào), bỏ vào cùng thư mục, rồi đổi dòng trong `index.html`:

```html
<link rel="apple-touch-icon" href="icon-180.png">
```

## Nếu app không đăng nhập được trong iframe

Vài trình duyệt chặn cookie bên-thứ-ba trong iframe (Safari, Chrome mới). Nếu mở ra trắng / bắt đăng nhập lặp:
- Bấm link **"Mở trực tiếp →"** ở đáy trang (mở thẳng /exec để đăng nhập 1 lần), rồi quay lại.
- Hoặc đăng nhập Google trên trình duyệt đó trước, sau đó mở lại shortcut.

## Lưu ý

- Trang này **không** thay thế bản /exec — nó chỉ là "vỏ" cho đẹp. App + dữ liệu vẫn ở Sheet như cũ.
- Banner GAS chỉ hiện với người **không phải chủ**; vỏ PWA này giấu được khung ngoài cùng, nhưng nếu
  Google vẫn chèn cảnh báo bên trong iframe cho người lạ thì đó là giới hạn của nền tảng.
