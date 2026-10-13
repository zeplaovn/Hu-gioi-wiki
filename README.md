# Thiên Vân Đại Lục Wiki

Wiki tĩnh cho game **Thiên Vân Đại Lục**.

Nguồn gameplay chính: `zeplaovn/Hu-gioi`.

## Cấu trúc

```text
index.html              gameplay wiki
roadmap.html            roadmap dự án
404.html                fallback
assets/
  css/main.css          shared stylesheet source
  js/app.js             search + sidebar source
styles.css              stable compatibility entrypoint
app.js                  stable compatibility entrypoint
docs/MAINTENANCE.md
```

`index.html` và `roadmap.html` giữ ở root để không phá URL public hiện tại. Hai entrypoint `styles.css` / `app.js` được giữ tương thích trong giai đoạn chuyển cấu trúc; source tổ chức mới nằm dưới `assets/`.

## Chạy cục bộ

```bash
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Deploy

Wiki là static site, không cần build. Phù hợp với Vercel, GitHub Pages, Netlify hoặc Cloudflare Pages.

Không tạo file temp/redeploy trigger để ép deploy; sửa Git integration ở platform nếu auto-deploy không chạy.

## Nguồn sự thật

- Gameplay/số liệu: `Hu-gioi`.
- Online behavior: `Hu-gioi/supabase/` khi có ảnh hưởng player-facing.
- Roadmap public: `roadmap.html`.

## Hướng scale

Khi số trang tăng và layout/sidebar bắt đầu copy lặp lại, chuyển sang `pages/` + shared layout hoặc một static-site generator nhỏ. Không thêm framework chỉ để phục vụ vài trang tĩnh.

## Bảo mật nội dung

Wiki không chứa secret, token, database credential, admin bootstrap hoặc chi tiết vận hành nội bộ không dành cho người chơi.
