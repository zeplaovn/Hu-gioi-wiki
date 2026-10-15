# Wiki Maintenance Guide

Wiki là tài liệu public-facing cho **Thiên Vân Đại Lục**. Nguồn dữ liệu chính là repo game `zeplaovn/Hu-gioi`.

## Nguồn sự thật

Ưu tiên theo thứ tự:

1. gameplay code/data trong `Hu-gioi`;
2. migration/RPC nếu nội dung liên quan online/server behavior;
3. roadmap chính thức trong repo wiki;
4. README/docs kỹ thuật của game.

Không lấy số liệu từ note cũ, commit message hoặc file tạm.

## Quy tắc xác minh nội dung

- dữ liệu chắc chắn: `[ĐÃ XÁC NHẬN]` khi cần hiển thị nhãn;
- kinh nghiệm người chơi: `[KINH NGHIỆM CỘNG ĐỒNG]`;
- suy đoán: `[SUY ĐOÁN]`;
- thiếu nguồn hoặc chưa đối chiếu: `[CẦN XÁC MINH]`;
- mọi con số cân bằng phải ghi phiên bản áp dụng; nếu version X.X chưa xác nhận thì giữ `[CẦN XÁC MINH]` thay vì tự đặt.

## Khi nào phải cập nhật wiki

Cập nhật khi thay đổi một trong các nhóm sau:

- cảnh giới/progression;
- chỉ số, linh căn, chủng tộc;
- bí cảnh, tông môn, vật phẩm;
- cơ chế thời gian thật, thọ nguyên, tọa hóa;
- map/world progression;
- online feature mà người chơi nhìn thấy;
- roadmap/product direction.

## Kiến trúc hiện tại

```text
src/
  App.jsx
  main.jsx
  styles.css
  content/wikiData.js
assets/wiki/
roadmap.html
404.html
```

React phụ trách UI; nội dung/player-facing data đặt riêng dưới `src/content/` để giảm coupling và dễ đối chiếu source game.

## Artwork

`assets/wiki/` chứa artwork minh họa cho wiki. Artwork chỉ phục vụ nhận diện thị giác, không được dùng làm bằng chứng về lore, mechanic, NPC, map hoặc feature đã phát hành.

## Roadmap

Roadmap public không được trộn với dữ liệu gameplay hiện hành. Feature nằm trong roadmap/preview phải được ghi rõ trạng thái và không trình bày như content playable.

## Build & deploy

```bash
npm install
npm run build
```

Vite tạo `dist/`. `roadmap.html` và `404.html` là các HTML input bổ sung để giữ URL public cũ.

Không commit file chỉ để kích redeploy. Nếu auto-deploy không chạy, xử lý ở Vercel/Git integration.

## Checklist trước publish

- `npm run build` thành công;
- link/navigation/search/TOC hoạt động;
- dark/light mode không mất tương phản;
- mobile sidebar hoạt động;
- `roadmap.html` vẫn build và truy cập được;
- không có số liệu cũ mâu thuẫn game;
- không có secret/internal admin instructions;
- mọi `[CẦN XÁC MINH]` mới được rà lại;
- artwork mới đã được nén hợp lý và có alt text.
