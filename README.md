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

- `src/content/wiki-v161.json`: **476 hồ sơ tra cứu** công khai từ các bảng CSV đã rà soát, cộng 55 hồ sơ NPC ở mức giới thiệu và 11 thế lực biên tập; 135 mốc tầng XP.
- 15 cảnh giới, 82 trang bị, 60 đan dược, 72 linh dược, 54 nguyên liệu, 30 quái/boss, 7 linh căn, 17 mục Thiên Mệnh Các, 9 bộ trang bị, 20 affix, 14 công pháp, 30 kỹ năng, 55 NPC, 11 thế lực.
- Nguồn từng hồ sơ lưu trong trường `source` (chỉ nhãn trung tính "Thiết kế v1.6.1", không ghi tên file nội bộ), không hiển thị dòng trích nguồn trong popup. Trạng thái nguồn: **bản thiết kế v1.6.1, chưa xác minh live**.
- Cấu trúc dữ liệu: `{ id, name, type, world, summary, detail, source }` cho mỗi hồ sơ; `categories` cho menu; `chapters` cho 12 chương công khai; `xpThresholds` cho chín tầng của mỗi cảnh giới.
- `scripts/validate-wiki.mjs` xác minh ID trùng, count nhóm, cảnh giới/XP, nguồn, và dấu hiệu xuất hiện spoiler nội bộ.

## Quy tắc công khai và bảo trì

1. **Không nhập** thư mục nội bộ bí mật của gói thiết kế và không đưa lời giải nội dung ẩn vào frontend, mã nguồn, assets hay snapshot.
2. Bản gốc ZIP / Excel không được đưa thẳng lên site. Chỉ những CSV/JSON công khai đã biên tập và phần giới thiệu lore mới đi vào `wiki-v161.json`.
3. Không khẳng định số liệu simulation 30–45 ngày là kết quả production. Baseline không tử vong: 33 ngày; kết quả mô phỏng trung vị 35,49 ngày, P75 43,91 ngày với hazard chuẩn.
4. Thông số thiết kế có thể đổi theo beta. Giữ source/version cho từng hồ sơ và chạy `npm run validate:data` sau khi cập nhật.
5. Luật kế hoạch: Hạ → Linh → Tiên Giới cùng một kiếp; tử vong thật làm mất tài sản vật lý nhưng không xóa Thiên Mệnh thuộc tài khoản; Quy Phàm có trạng thái kết thúc riêng.

## Những gì đã loại bỏ

Các module canon v1.2, snapshot game cũ, trang React không còn dùng, assets gameplay cũ, công cụ đồng bộ từ repository khác và báo cáo audit v1.2 đã được thay bằng một nguồn dữ liệu v1.6.1 duy nhất. Nội dung có thể truy nguyên ở lịch sử Git, không còn trong bundle hiện tại.

## Tiền tệ theo yêu cầu cập nhật

- **Hạ Giới:** Linh Thạch hạ phẩm (LTHP).
- **Linh Giới:** Linh Thạch thượng phẩm (LTTP).
- **Tiên Giới:** Tiên Ngọc thượng phẩm (TNTP) và Tiên Ngọc cực phẩm (TNCP).

Các bản ghi giá gốc LS/LT/TN đã được đổi tên đơn vị phù hợp từng giới, **không thay đổi trị số giá** và không tự suy ra tỷ lệ quy đổi. Tiên Ngọc cực phẩm là đơn vị được giới thiệu tại Tiên Giới; chưa tự gán nó cho món hàng khi thiết kế không chỉ rõ.


## Thang màu cảnh giới & ảnh minh họa (20/10/2026)

- 15 cảnh giới có 15 sắc độ riêng theo lộ trình từ **Phàm Nhân** đến cảnh giới cuối, hiển thị nhất quán ở danh sách, hồ sơ, tìm kiếm và thuật ngữ được tô sáng. Mục “Ba giới & cảnh giới” có thang màu tham chiếu.
- Ảnh tĩnh đặt trong thư mục public/assets/wiki/, được Vite phục vụ qua /assets/wiki/. Gồm ba tranh phong cảnh giới và sáu atlas minh họa: trang bị, đan dược, linh dược, NPC, yêu thú và vật phẩm tổng hợp.
- Ảnh chọn lọc từ bộ assets(1).zip cùng các sprite atlas đã có trong Library của dự án, **không đưa toàn bộ ZIP và asset gameplay nội bộ lên web**.
- Atlas được hiển thị bằng CSS theo ô ảnh; những mục chưa có tạo hình riêng dùng tranh **minh họa chủ đề**, không được coi là chân dung hoặc vật phẩm canon chính thức.
- Danh sách tài sản và quy ước hiển thị: docs/ILLUSTRATIONS.md.
