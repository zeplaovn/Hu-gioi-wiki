# Thiên Vân Đại Lục Wiki

Wiki tĩnh cho game **Thiên Vân Đại Lục**, biên soạn từ repo `zeplaovn/Hu-gioi`.

## Chạy cục bộ

Không cần build:

```bash
python3 -m http.server 8080
```

Sau đó mở `http://localhost:8080`.

Bạn cũng có thể mở trực tiếp `index.html`.

## Deploy

Phù hợp với:
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

Không có dependency, không cần Node, không cần framework.

## Cấu trúc

- `index.html` — toàn bộ nội dung wiki
- `styles.css` — giao diện responsive
- `app.js` — tìm kiếm + sidebar
- `404.html` — fallback đơn giản

## Nguồn dữ liệu

Thông số được tổng hợp từ mã nguồn game và README. Khi cân bằng gameplay thay đổi, wiki nên được cập nhật tương ứng.

## Ghi chú

Wiki không công khai các chi tiết nhạy cảm về secret, khóa ký, token hay thông tin triển khai nội bộ.
