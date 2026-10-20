# Thiên Vân Đại Lục — Đạo Tàng Wiki v1.6.1

Wiki công khai theo gói kế hoạch **Thiên Vân Đại Lục v1.6.1, Excel đã kiểm tra (20/10/2026)**. Frontend: React 18 / Vite 5 / Tailwind 3. Dữ liệu thiết kế **không đồng nghĩa** tính năng đã có trên máy chủ game.

## Chạy và kiểm tra

```bash
npm ci
npm run validate:data
npm run lint
npm run build
npm run dev
```

Ứng dụng dùng hash routing, ví dụ: `#/home`, `#/worlds`, `#/catalog/equipment`, `#/people`. `Ctrl/⌘+K` mở tìm kiếm toàn wiki. Bấm vào thẻ hoặc thuật ngữ tô sáng để mở popup hồ sơ chi tiết. Popup đóng bằng Escape, nút X hoặc nền ngoài.

## Dữ liệu v1.6.1

- `src/content/wiki-v161.json`: **480 hồ sơ tra cứu** công khai từ các bảng CSV đã rà soát, cộng 59 hồ sơ NPC ở mức giới thiệu và 11 thế lực biên tập; 135 mốc tầng XP.
- 15 cảnh giới, 82 trang bị, 60 đan dược, 72 linh dược, 54 nguyên liệu, 30 quái/boss, 7 linh căn, 17 mục Thiên Mệnh Các, 9 bộ trang bị, 20 affix, 14 công pháp, 30 kỹ năng, 59 NPC, 11 thế lực.
- Nguồn cho từng hồ sơ hiển thị trong popup. Trạng thái nguồn: **bản thiết kế v1.6.1, chưa xác minh live**.
- Cấu trúc dữ liệu: `{ id, name, type, world, summary, detail, source }` cho mỗi hồ sơ; `categories` cho menu; `chapters` cho 12 chương công khai; `xpThresholds` cho chín tầng của mỗi cảnh giới.
- `scripts/validate-wiki.mjs` xác minh ID trùng, count nhóm, cảnh giới/XP, nguồn, và dấu hiệu xuất hiện spoiler nội bộ.

## Quy tắc công khai và bảo trì

1. **Không nhập** `02_NOI_BO_BI_MAT` và không đưa lời giải nội dung ẩn vào frontend, mã nguồn, assets hay snapshot.
2. Bản gốc ZIP / Excel không được đưa thẳng lên site. Chỉ những CSV/JSON công khai đã biên tập và phần giới thiệu lore mới đi vào `wiki-v161.json`.
3. Không khẳng định số liệu simulation 30–45 ngày là kết quả production. Baseline không tử vong: 33 ngày; kết quả mô phỏng trung vị 35,49 ngày, P75 43,91 ngày với hazard chuẩn.
4. Thông số thiết kế có thể đổi theo beta. Giữ source/version cho từng hồ sơ và chạy `npm run validate:data` sau khi cập nhật.
5. Luật kế hoạch: Hạ → Linh → Tiên Giới cùng một kiếp; tử vong thật làm mất tài sản vật lý nhưng không xóa Thiên Mệnh thuộc tài khoản; Quy Phàm có trạng thái kết thúc riêng.

## Những gì đã loại bỏ

Các module canon v1.2, snapshot game cũ, trang React không còn dùng, assets gameplay cũ, công cụ đồng bộ từ repository khác và báo cáo audit v1.2 đã được thay bằng một nguồn dữ liệu v1.6.1 duy nhất. Nội dung có thể truy nguyên ở lịch sử Git, không còn trong bundle hiện tại.
