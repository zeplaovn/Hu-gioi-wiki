# Ảnh minh họa công khai — Thiên Vân Đại Lục Wiki

Cập nhật ngày 20/10/2026.

## Tài nguyên đặt trong public/assets/wiki

| Tên file web | Nguồn Library | Công dụng |
| --- | --- | --- |
| world-ha-gioi.png | assets(1).zip: assets/phong_canh/ha_gioi/lop_xa_mac_dinh.png | Phong cảnh Hạ Giới |
| world-linh-gioi.png | assets(1).zip: assets/phong_canh/linh_gioi/lop_xa_01.png | Phong cảnh Linh Giới |
| world-tien-gioi.png | assets(1).zip: assets/phong_canh/tien_gioi/lop_xa_01.png | Phong cảnh Tiên Giới |
| equipment-atlas.png | Six Xianxia Equipment Artifact Sprites.png | Trang bị / bộ trang bị, bố cục 3 cột × 2 hàng |
| pills-atlas.png | Xianxia Alchemy Pill Sprite Atlas.png | Đan dược, 3 × 2 |
| herbs-atlas.png | Six Enchanted Spiritual Herb Sprites.png | Linh dược, 3 × 2 |
| npc-atlas.png | Six fantasy sect NPC sprite sheet.png | Nhân vật / thế lực, 3 × 2 |
| monsters-atlas.png | Xianxia monster boss sprite atlas.png | Yêu thú, 3 × 2 |
| mixed-atlas.png | Thiên Vân Xianxia Sprite Atlas.png | Nguyên liệu, linh căn, pháp tắc và một số yêu thú, 5 × 3 |

## Quy tắc sử dụng

- Bảng màu cảnh giới (15 bậc) được định nghĩa trong src/App.jsx bằng REALM_PALETTE, theo đúng thứ tự 15 hồ sơ realms trong wiki-v161.json.
- Tên cảnh giới dùng cùng một màu ở thẻ, timeline, popup, kết quả tìm kiếm và liên kết từ khóa.
- Các atlas là tranh gợi ý theo nhóm: những ảnh áp dụng cho nhiều hồ sơ **chỉ mang tính minh họa**. Không coi hình nào là ngoại hình chính thức nếu hồ sơ chưa chỉ rõ.
- Sprite atlas dùng CSS background-size và background-position, không tải ảnh từ địa chỉ bên ngoài và không thu thập thông tin người xem.
- Thay đổi bộ atlas: giữ nguyên số ô hoặc điều chỉnh columns, rows, index trong hàm illustrationFor và kiểm tra desktop/mobile. File có thể được thay thế nhưng phải bảo toàn nguồn, tác quyền và không đưa asset nội bộ bí mật vào repo công khai.
