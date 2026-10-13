# Wiki Maintenance Guide

Wiki là tài liệu public-facing cho **Thiên Vân Đại Lục**. Nguồn dữ liệu chính là repo game `zeplaovn/Hu-gioi`.

## Nguồn sự thật

Ưu tiên theo thứ tự:

1. gameplay code/data trong `Hu-gioi`;
2. migration/RPC nếu nội dung liên quan online/server behavior;
3. roadmap chính thức trong `roadmap.html`;
4. README/docs kỹ thuật của game.

Không lấy số liệu từ note cũ, commit message hoặc file tạm.

## Khi nào phải cập nhật wiki

Cập nhật khi thay đổi một trong các nhóm sau:

- cảnh giới/progression;
- chỉ số, linh căn, race;
- bí cảnh, tông môn, vật phẩm;
- cơ chế thời gian thật, thọ nguyên, tọa hóa;
- online feature mà người chơi nhìn thấy;
- roadmap/product direction.

Không cần đưa chi tiết triển khai nội bộ như secret, database credential, admin bootstrap hoặc security key lên wiki.

## Roadmap

`roadmap.html` là nguồn public chuẩn cho roadmap dự án.

Không tạo thêm file kiểu `UPDATE.txt`, `todo.txt`, `vercel-redeploy.txt` để chứa roadmap hoặc ghi chú tạm trong repo wiki.

## Cấu trúc hiện tại

```text
index.html
roadmap.html
404.html
styles.css
app.js
docs/
```

Cấu trúc phẳng này phù hợp khi wiki còn ít trang.

## Khi wiki lớn hơn

Khi số trang tăng đáng kể, chuyển dần sang:

```text
pages/
  progression/
  systems/
  world/
  roadmap.html
assets/
  css/
  js/
docs/
```

Nếu bắt đầu copy header/sidebar vào nhiều file, nên cân nhắc static-site generator hoặc build script nhỏ để dùng shared layout. Không cần thêm framework trước khi có nhu cầu thật.

## Quy tắc nội dung

- một khái niệm có một tên chuẩn;
- tránh lặp cùng bảng số liệu ở nhiều trang nếu khó đồng bộ;
- số liệu cân bằng nên ghi nguồn/code location trong comment hoặc maintenance note;
- roadmap không trộn với hướng dẫn gameplay;
- nội dung đã bỏ khỏi định hướng phải xóa, không để cạnh roadmap mới gây hiểu nhầm.

## Deploy

Repo wiki là static site. Không commit file chỉ để kích redeploy.

Nếu auto-deploy không chạy, xử lý ở Vercel/Git integration thay vì thêm file tạm vào repo.

## Checklist trước publish

- link nội bộ còn đúng;
- `roadmap.html` khớp định hướng hiện tại;
- không còn số liệu cũ mâu thuẫn game;
- không có secret/internal admin instructions;
- mobile/sidebar/search vẫn hoạt động;
- không có file redeploy/debug tạm.
