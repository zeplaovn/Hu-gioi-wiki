# Bảo trì Wiki Đạo Tàng v1.6.1

- `src/App.jsx`: một giao diện React duy nhất, hash routing, sidebar, bộ lọc, tìm kiếm Ctrl/⌘+K, highlight và popup.
- `src/content/wiki-v161.json`: dữ liệu công khai, phân loại theo `type`, liên kết thuật ngữ bằng `name`, nguồn ở `source`.
- `src/styles.css`: thiết kế responsive, trạng thái focus và chế độ giảm chuyển động.
- `scripts/validate-wiki.mjs`: kiểm tra số lượng, ID, XP tầng và chuỗi bí mật đã biết (lưu dạng băm SHA-256, không ghi rõ trong repo) và nhãn nguồn nội bộ.
- `roadmap.html`: trang tĩnh tóm tắt nhịp ba giới; không thay thế gameplay thực.

Sau khi sửa, chạy `npm ci && npm run validate:data && npm run lint && npm run build`. Thử trên mobile: sidebar, bộ lọc, mở/đóng popup, click thuật ngữ, Esc, Ctrl/⌘+K, quay lại bằng hash URL.

Không nhập dữ liệu từ snapshot cũ. Gói Excel kiểm tra dùng để đối chiếu với CSV đầu vào, không tự đẩy vào web. Không phát hành nội dung spoiler nội bộ hoặc tuyên bố đã triển khai khi chưa được kiểm chứng.

## Quy ước giao diện & tiền tệ cập nhật

- Font chữ tăng kích thước toàn trang; highlight và tiêu đề hồ sơ được tô màu theo nhóm dữ liệu. Tên hồ sơ và từng thuật ngữ có thể bấm để mở popup.
- Popup chỉ hiển thị thuộc tính gameplay, không có dòng thông tin trích file nguồn.
- Schema tiền tệ ở `meta.currencySystem` trong JSON. Khi cập nhật bảng giá, không tự đổi trị số hoặc quy đổi Tiên Ngọc cực phẩm nếu chưa có quyết định cân bằng.
