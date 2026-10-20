# Kiểm toán dữ liệu wiki v1.6.1

Nguồn: ZIP **Thiên Vân Đại Lục v1.6.1 — Excel đã kiểm tra**, ngày 20/10/2026, các CSV trong thư mục `03_DU_LIEU_CAN_BANG_v1.5`, `player_skills.csv` của Combat và văn bản NPC/Bách Quái Chí đã được biên tập.

## Phạm vi

- 480 thực thể công khai trong `src/content/wiki-v161.json`: 15 cảnh giới, 82 trang bị, 9 bộ trang bị, 60 đan dược, 72 linh dược, 54 nguyên liệu, 30 quái/boss, 7 linh căn, 17 mục Thiên Mệnh, 20 thuộc tính, 14 công pháp, 30 kỹ năng, 59 NPC, 11 thế lực.
- 135 mốc XP cho 15 cảnh giới × 9 tầng.
- 12 nhan đề chương chính; không chứa đoạn nội bộ/nhánh kết cục.
- Thông tin game hiện hành vẫn **chưa kiểm chứng** với runtime. Đừng viết “đã phát hành”.
- Không import thư mục `02_NOI_BO_BI_MAT` hoặc các gợi ý nội dung ẩn cuối game.

## Kiểm tra

```bash
npm run validate:data
npm run lint
npm run build
```

Mỗi hồ sơ ghi source tại popup. Khi số liệu đổi, thay dataset dựa trên gói được chủ dự án duyệt và cập nhật số lượng/validator tương ứng. Git history giữ bản cũ để phục hồi nếu cần.
