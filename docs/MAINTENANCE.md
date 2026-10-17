# Wiki Maintenance

Đây là wiki player-facing. Các trang canonical và game snapshot **không cùng một nguồn số liệu**. Xem [DATA_AUDIT.md](DATA_AUDIT.md) trước khi chỉnh sửa số liệu hoặc nhập dữ liệu vào UI.

## Luồng dữ liệu

```text
Hu-gioi source ── npm run sync ──> src/content/gameData.js ─> lib/formulas.js ─> pages/{Skills,Crafts,Breakthrough,Secrets,Atlas,Updates}
                       │
                       └─ npm run verify: so formulas.js với TT.Player (runtime)

FINAL v1.2 ──> src/content/canon*.js ─> src/content/canonData.js ─> các trang canon và tìm kiếm
Hu-gioi/assets ── npm run sync:assets ──> assets/wiki/game/**.webp ─> lib/gameArt.js ─> GameArt
roadmap.html ────────────────────────────────> trang roadmap độc lập (không có nghĩa đã phát hành)
```

`src/App.jsx` là shell + điều hướng. `src/pages/` mỗi trang một file. `src/components/` chứa thành phần dùng chung. `src/lib/router.js` xử lý hash, trang 404, và cập nhật `document.title` ở App.

## Nguyên tắc nội dung

- Ưu tiên gameplay code/data đang chạy trong `zeplaovn/Hu-gioi`, sau đó migration/RPC cho hành vi online.
- Bộ canon là nguồn thiết kế đã chốt **ở phiên bản của nó**, nhưng khi mâu thuẫn với runtime phải mở `[CẦN XÁC MINH]`, không sửa số liệu theo trực giác.
- Label: `[ĐÃ XÁC NHẬN]`, `[CẦN XÁC MINH]`, `[KINH NGHIỆM CỘNG ĐỒNG]`, `[SUY ĐOÁN]`.
- Không công khai token, secret, admin bootstrap, log nội bộ, tài liệu cốt truyện ẩn/endgame, hoặc asset bí mật.
- Không coi roadmap là cơ chế game. Kế hoạch trong `roadmap.html` phải có nhãn trạng thái.

## Quy trình cập nhật

```bash
# Checkout mã nguồn game công khai tương thích với bản bạn chuẩn bị phát hành
GAME_REPO=../Hu-gioi npm run sync
GAME_REPO=../Hu-gioi npm run verify
GAME_REPO=../Hu-gioi npm run sync:assets
npm ci
npm run lint
npm run build
```

Lưu ý:

- `sync` cập nhật `src/content/gameData.js`. Không sửa tay file sinh. Các trang snapshot lấy dữ liệu thông qua `wikiData.js` nên thay đổi sẽ hiển thị.
- `verify` so công thức trong `src/lib/formulas.js` với `Player` của game. Nếu fail, dừng publish và sửa công thức có đối chiếu.
- `sync:assets` chỉ chuyển danh sách cho phép ở `src/lib/gameArtMap.js` thành WebP 256px chất lượng 82 trong `assets/wiki/game/`. Cần `magick` hoặc `convert`. Nếu thiếu source thì giữ ô trống, không hotlink nguồn game.
- Máy phát triển có thể không có kết nối npm hoặc GAME_REPO. **Không coi cú pháp JSX hợp lệ là một lần build thành công**.
- `npm run lint` hiện là parser JSX/import/safety kiểm tra tối thiểu, **chưa phải ESLint đầy đủ**. `.prettierrc` đã có, cần cài Prettier/ESLint phù hợp lockfile sau khi có registry rồi mới coi công việc format/lint chuẩn là hoàn tất.
- `roadmap.html`, `404.html` và `index.html` là ba entry chính, phải còn trong `dist/`.

## Kiểm thử Chromium trước push

Sau khi `npm ci` và build thành công, chạy:

```bash
npm run dev -- --host 127.0.0.1
```

Mở Chromium tại `http://127.0.0.1:5173/`, kiểm tra tối thiểu:

1. Hash `#/home`, `#/skills`, `#/crafts`, `#/breakthrough`, `#/secrets`, `#/atlas`, `#/updates`, `#/canon` render được.
2. `#/not-a-page` ra 404 và `document.title` đúng; click về Home hoạt động.
3. Ctrl/⌘+K tìm dữ liệu, bỏ dấu tiếng Việt, chuyển trang được; Escape đóng overlay.
4. Menu mobile 375px dùng được, sidebar cuộn tới tất cả nhóm; headings không bị che bởi sticky topbar.
5. Tương tác máy tính thay đổi kết quả, bảng dài có “Hiện thêm”, TOC đi tới heading, ảnh hỏng biến mất.
6. `http://127.0.0.1:5173/roadmap.html` là roadmap riêng, 404 tĩnh tồn tại.
7. Không request `raw.githubusercontent.com`, không có nội dung bí mật/endgame trong bundle.

Chụp screenshot desktop/mobile trước khi xin duyệt. **Không push/merge trước khi chủ repo xác nhận giao diện và kết quả test đạt**.

## Checklist publish

- [ ] Snapshot game đã sync và verify với đúng commit `Hu-gioi` (lưu SHA nguồn trong PR).
- [ ] Mâu thuẫn mới cập nhật `docs/DATA_AUDIT.md`, không tự chọn số liệu.
- [ ] Sync ảnh whitelist, kiểm tra mapping, xác nhận không có assets bí mật.
- [ ] `npm ci && npm run lint && npm run build` PASS.
- [ ] `dist/index.html`, `dist/roadmap.html`, `dist/404.html` tồn tại.
- [ ] Chromium test desktop/mobile và review ảnh bằng người thật.
- [ ] URL/SEO/sidebar/title/search/toC/PvP-lethal/meta TM đã rà.
- [ ] Không leak nội dung ẩn, token, tệp admin.
- [ ] Chủ repo xác nhận trước push.
