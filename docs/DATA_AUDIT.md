# Kiểm toán dữ liệu wiki v1.6.1

Nguồn: ZIP **Thiên Vân Đại Lục v1.6.1 — Excel đã kiểm tra**, ngày 20/10/2026, các CSV trong thư mục `03_DU_LIEU_CAN_BANG_v1.5`, `player_skills.csv` của Combat và văn bản NPC/Bách Quái Chí đã được biên tập.

## Phạm vi

- 476 thực thể công khai trong `src/content/wiki-v161.json`: 15 cảnh giới, 82 trang bị, 9 bộ trang bị, 60 đan dược, 72 linh dược, 54 nguyên liệu, 30 quái/boss, 7 linh căn, 17 mục Thiên Mệnh, 20 thuộc tính, 14 công pháp, 30 kỹ năng, 55 NPC, 11 thế lực.
- 135 mốc XP cho 15 cảnh giới × 9 tầng.
- 12 nhan đề chương chính; không chứa đoạn nội bộ/nhánh kết cục.
- Thông tin game hiện hành vẫn **chưa kiểm chứng** với runtime. Đừng viết “đã phát hành”.
- Không import thư mục nội bộ bí mật hoặc các gợi ý nội dung ẩn cuối game.

## Kiểm tra

```bash
npm run validate:data
npm run lint
npm run build
```

Trường `source` chỉ chứa nhãn trung tính (không tên file, không tên CSV) vì JSON được phát hành công khai, không hiển thị trích nguồn trong popup. Khi số liệu đổi, thay dataset dựa trên gói được chủ dự án duyệt và cập nhật số lượng/validator tương ứng. Git history giữ bản cũ để phục hồi nếu cần.

## Ghi nhận thay đổi tiền tệ ngày 20/10/2026

Theo chỉ đạo mới của chủ dự án, thay LS của Hạ Giới bằng **Linh Thạch hạ phẩm**, LT của Linh Giới bằng **Linh Thạch thượng phẩm**, TN của Tiên Giới bằng **Tiên Ngọc thượng phẩm**. Tiên Giới còn có **Tiên Ngọc cực phẩm** nhưng chưa gán mệnh giá hàng hóa hoặc tỷ lệ quy đổi vì kế hoạch chưa xác định. Giữ nguyên tất cả trị số `price`, `base_price` và `base_value` — cần tái duyệt cân bằng kinh tế sau khi chốt quy đổi phẩm cấp.
