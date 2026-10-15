# Thiên Vân Đại Lục Wiki

Player-facing wiki cho game **Thiên Vân Đại Lục**.

Nguồn gameplay chính: `zeplaovn/Hu-gioi`.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide icons
- Hash routing nhẹ, không phụ thuộc router package

## Chạy cục bộ

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

Output nằm trong `dist/`.

## Cấu trúc

```text
index.html
roadmap.html                 legacy/public roadmap URL
404.html
src/
  App.jsx                    wiki shell + search + navigation + TOC
  main.jsx
  styles.css                 Tailwind entry + visual system
  content/
    wikiData.js              player-facing content/data
assets/
  wiki/                      original wiki artwork
  css/                       legacy compatibility assets
  js/                        legacy compatibility assets
docs/
  MAINTENANCE.md
```

`roadmap.html` và `404.html` tiếp tục được đưa vào Vite multi-page build để giữ URL public hiện tại.

## Nguồn sự thật

Ưu tiên theo thứ tự:

1. gameplay code/data trong `Hu-gioi`;
2. migration/RPC trong `Hu-gioi/supabase/` nếu nội dung liên quan hành vi online;
3. roadmap public trong repo wiki;
4. README/docs kỹ thuật của game.

Không lấy số liệu từ note cũ, commit message hoặc file tạm.

## Quy tắc nội dung

- thông tin chắc chắn mới ghi như dữ liệu đã xác nhận;
- nội dung chưa đủ nguồn dùng `[CẦN XÁC MINH]`;
- kinh nghiệm cộng đồng dùng `[KINH NGHIỆM CỘNG ĐỒNG]`;
- suy đoán phải ghi `[SUY ĐOÁN]`;
- số liệu cân bằng phải gắn phiên bản áp dụng; nếu version X.X chưa xác nhận thì không tự đặt;
- không đưa secret, token, credential, admin bootstrap hoặc chi tiết vận hành nội bộ lên wiki.

## Visual system

Wiki kế thừa DNA giao diện game: **mực núi + ngọc bích + giấy dó**, nền xanh than, ngọc lục làm primary và ấn chu sa làm điểm nhấn. Artwork trong `assets/wiki/` là minh họa; artwork không phải nguồn gameplay.
