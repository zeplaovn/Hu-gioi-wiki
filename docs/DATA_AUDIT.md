# DATA AUDIT — Game snapshot so với canon

**Trạng thái:** [CẦN XÁC MINH]. Không được xem snapshot của `src/content/gameData.js` là bản gameplay production mới nhất nếu chưa đối chiếu `GAME_REPO` và chạy `npm run sync && npm run verify`.

## Nguồn và phạm vi

- `src/content/canon*.js`: dữ liệu thiết kế FINAL v1.2, giữ các trang canonical hiện có.
- `src/content/gameData.js`: snapshot **được sinh** từ `Hu-gioi`, dùng cho trang Công pháp, Nghề phụ, Máy tính đột phá, Bí cảnh, Địa đồ, Nhật ký cập nhật. Mỗi trang đều có nhãn `[CẦN XÁC MINH]` về phiên bản đang triển khai.
- `src/content/wikiData.js`: dữ liệu biên tập/đối chiếu cho phần Hạ Giới. Không được lấy roadmap hay note cũ làm bằng chứng cân bằng.

## Phần trùng đã đối chiếu ngay trong snapshot

- **Tên cảnh giới**: 7 tên chung đầu gồm Phàm Nhân, Luyện Khí, Trúc Cơ, Kim Đan, Nguyên Anh, Hóa Thần, Luyện Hư; còn có Đại Thừa, Độ Kiếp nhưng **thứ tự khác nhau**.
- **Giá đan dược**: 12 tên trùng cả tên và giá: Tụ Khí Đan (20), Hồi Huyết Đan (15), Phá Cảnh Đan (90), Ngưng Nguyên Đan (140), Đại Hồi Đan (70), Dịch Cân Đan (420), Hóa Anh Đan (650), Tục Mệnh Đan (800), Thiên Cơ Đan (1.600), Thái Hư Đan (3.200), Tạo Hóa Dịch (5.200), Độ Kiếp Đan (9.000). **Chưa xác minh** rằng cùng tồn tại trong runtime hiện tại.

## Mâu thuẫn còn mở

| Chủ đề | `canon*.js` FINAL v1.2 | `gameData.js` snapshot | Quyết định |
| --- | --- | --- | --- |
| Progression | 15 mốc qua Hạ/Linh/Tiên; có Hợp Thể, Ngụy Tiên, Chân Tiên… | 9 cảnh giới; không có Hợp Thể; Độ Kiếp kết thúc danh sách | [CẦN XÁC MINH]. Không đồng nhất hai hệ index/cảnh giới. Máy tính chỉ tính cho 9 mốc snapshot. |
| Linh căn | Thiên Linh Căn 0,9%, Song 14%, Tam 22%, Tứ 27%, Ngũ 30%, Biến Dị 0,1% | Thiên 6%, Song 18%, Tam 34%, Tứ 27%, Ngũ 12%; trang legacy bổ sung Dị 3% | [CẦN XÁC MINH]. Giữ bảng canon hiện có; không dùng bảng snapshot cho trang Linh căn. |
| Hệ số tu luyện linh căn | Thiên ×1,20; Song ×1,08; Tam ×1,02; Tứ ×0,96; Ngũ ×0,90 | Bảng `exp`/`scale`: Thiên 0,4/1; Song 0,22/0,8; Tam 0,08/0,62; Tứ -0,02/0,5; Ngũ -0,1/0,4 | Không so trực tiếp hai loại đơn vị. [CẦN XÁC MINH]. |
| Đột phá & tính thời gian | Thiết kế liên giới + lethal death/meta TM | Công thức cụ thể của Hạ Giới 9 mốc, chưa chạy verify với GAME_REPO | [CẦN XÁC MINH] độ áp dụng. Tránh suy diễn Phi Thăng = kết thúc kiếp. |
| Thiên Mệnh & Phi Thăng | TM cho milestone đột phá, không thưởng riêng khi chuyển giới; Phi Thăng không kết thúc kiếp | Một số note biên tập cũ nói nhận TM khi chết/phi thăng | Không hiển thị bảng/shop cũ từ `pages.jsx`; loại câu mâu thuẫn và thay nhãn xác minh. |
| Map Tiên/Thần Giới | Canon công khai gồm Hạ/Linh/Tiên, không có world thứ tư | Page địa đồ cũ nói Tiên/Thần Giới chờ mở | Đã bỏ block unverified; giữ Hạ Giới từ game snapshot, có nhãn [CẦN XÁC MINH]. |

## Quy định tiếp theo

- `sync` thực sự cập nhật `gameData.js`, nên các trang mới dùng dữ liệu đồng bộ, không phải code chết.
- `verify` đối chiếu công thức với Player thật. **Chưa chạy được ở môi trường local này nếu thiếu thư mục GAME_REPO hợp lệ**.
- Không tích hợp `RootsPage` cũ vì xác suất/hệ số mâu thuẫn rõ rệt; giữ module phục vụ đối chiếu, không đưa vào NAV.
- `UpdatesPage` chỉ trình bày guide snapshot (có cảnh báo) và link roadmap riêng, không đưa bảng Mảnh Phi Thăng/TM cũ lên site.
- Không đưa tư liệu spoiler/endgame vào UI public. Nếu nguồn nội dung hoặc phạm vi hiển thị chưa chắc chắn: không xuất bản.
