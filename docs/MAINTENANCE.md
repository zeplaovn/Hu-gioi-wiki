# Bảo trì Wiki Đạo Tàng v1.6.1

- `src/App.jsx`: một giao diện React duy nhất, hash routing, sidebar, bộ lọc, tìm kiếm Ctrl/⌘+K, highlight và popup.
- `src/content/wiki-v161.json`: dữ liệu công khai, phân loại theo `type`, liên kết thuật ngữ bằng `name`, nguồn ở `source`.
- `src/styles.css`: thiết kế responsive, trạng thái focus và chế độ giảm chuyển động.
- `scripts/validate-wiki.mjs`: kiểm tra số lượng, ID, XP tầng và chuỗi bí mật đã biết.
- `roadmap.html`: trang tĩnh tóm tắt nhịp ba giới; không thay thế gameplay thực.

Sau khi sửa, chạy `npm ci && npm run validate:data && npm run lint && npm run build`. Thử trên mobile: sidebar, bộ lọc, mở/đóng popup, click thuật ngữ, Esc, Ctrl/⌘+K, quay lại bằng hash URL.

Không nhập dữ liệu từ snapshot cũ. Gói Excel kiểm tra dùng để đối chiếu với CSV đầu vào, không tự đẩy vào web. Không phát hành nội dung spoiler nội bộ hoặc tuyên bố đã triển khai khi chưa được kiểm chứng.
