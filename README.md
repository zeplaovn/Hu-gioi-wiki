# Thiên Vân Đại Lục Wiki

Wiki tĩnh cho game **Thiên Vân Đại Lục**.

Nguồn gameplay chính: `zeplaovn/Hu-gioi`.

## Trang chính

```text
index.html      gameplay wiki
roadmap.html    roadmap dự án
404.html        fallback
styles.css      giao diện dùng chung
app.js          search + sidebar
```

Tài liệu maintain repo:

```text
docs/MAINTENANCE.md
```

## Chạy cục bộ

Không cần build:

```bash
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

## Deploy

Wiki là static site, phù hợp với Vercel, GitHub Pages, Netlify hoặc Cloudflare Pages.

Không tạo file tạm chỉ để kích redeploy. Nếu auto-deploy không chạy, sửa Git integration/deployment ở platform.

## Nguồn sự thật

- Gameplay/số liệu: code/data trong `Hu-gioi`.
- Online behavior: migration/RPC trong `Hu-gioi/supabase/` khi có liên quan đến player-facing behavior.
- Roadmap public: `roadmap.html`.

Không dùng note cũ hoặc file tạm làm nguồn cập nhật wiki.

## Khi project lớn hơn

Cấu trúc phẳng hiện tại phù hợp vì wiki còn ít trang. Khi số trang tăng và header/sidebar bắt đầu bị copy lặp lại, lúc đó mới chuyển sang `pages/` + shared layout hoặc static-site generator nhỏ.

Chi tiết xem `docs/MAINTENANCE.md`.

## Bảo mật nội dung

Wiki không chứa secret, token, database credential, admin bootstrap hoặc chi tiết vận hành nội bộ không dành cho người chơi.
