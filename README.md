# Thiên Vân Đại Lục Wiki

Wiki công khai cho người chơi Thiên Vân Đại Lục. Stack: **React 18 + Vite 5 + Tailwind CSS 3**. Dữ liệu gameplay được tách nguồn; không mặc định coi roadmap là nội dung đang chơi được.

## Chạy local

```bash
npm ci
npm run dev
# Mở URL Vite hiển thị (mặc định http://localhost:5173)
```

Kiểm tra:

```bash
npm run lint
npm run build
npm run preview
```

Ba URL `index.html`, `roadmap.html`, `404.html` phải tồn tại trong `dist/` sau build. Navigation React dùng hash (`#/home`, `#/skills`, v.v.) để không cần cấu hình rewrite phía server.

**Tình trạng kiểm thử:** Bản local chỉ nên đưa lên production sau khi `npm ci`, `npm run build`, `npm run lint` và smoke test Chromium chạy thành công. Chi tiết môi trường/test xem `docs/MAINTENANCE.md`.

## Cấu trúc thực tế

```text
index.html                    React wiki SPA
roadmap.html                  roadmap công khai, tách biệt gameplay
404.html                      URL 404 tĩnh
assets/wiki/                  hero, ảnh wiki sở hữu và WebP đã đồng bộ
scripts/
  sync-game-data.mjs          sinh snapshot gameData.js từ Hu-gioi
  verify-formulas.mjs         đối chiếu máy tính với Player nguồn game
  sync-game-assets.mjs       đồng bộ ảnh game whitelist -> WebP
  lint.mjs                   kiểm tra cú pháp/import/security nhẹ
src/
  App.jsx                    sidebar + topbar + route dispatch
  main.jsx                   React entry
  styles.css                 Tailwind + giao diện wiki dark
  components/                GameArt/Pill/SectionTitle/DataTable/SearchBox/GlobalSearch/PageTOC
  pages/                     mỗi trang một module; dữ liệu canon và game snapshot tách biệt
  lib/
    router.js                 hash route, 404 fallback
    text.js                   normalize tiếng Việt, lọc bảng
    gameArtMap.js             whitelist tên -> đường dẫn game asset
    gameArt.js                resolve URL asset đã copy vào wiki
    formulas.js               công thức cho máy tính đột phá
  content/
    canon*.js                 các bảng canon thiết kế FINAL v1.2
    gameData.js               sinh tự động từ gameplay repo
    wikiData.js               nội dung/tiện ích tham khảo cho snapshot game
legacy/                       code cũ không an toàn để đưa lên public UI
.github/workflows/ci.yml     build/lint và đối chiếu công thức khi checkout game được
docs/DATA_AUDIT.md            bảng đối chiếu hai hệ dữ liệu và các mâu thuẫn còn mở
```

## Nguồn dữ liệu và trách nhiệm xác minh

1. **Game hiện hành**: `zeplaovn/Hu-gioi` (code, dữ liệu, patches, RPC/migration cho hành vi server).
2. **Bộ canon**: `src/content/canon*.js` dựa trên FINAL v1.2; giữ làm nguồn hiển thị cho các trang vốn có nhưng **không tự áp đặt** số liệu đó lên runtime khác phiên bản.
3. **Snapshot game**: `src/content/gameData.js` là kết quả đồng bộ game qua script. Các trang Công pháp, Nghề phụ, Máy tính đột phá, Bí cảnh, Địa đồ, Cập nhật có nhãn `[CẦN XÁC MINH]` cho tới khi đối chiếu game triển khai.
4. **Roadmap** (`roadmap.html`): các ý tưởng/tính năng tương lai, **không chứng minh gameplay đã phát hành**.

Đọc `docs/DATA_AUDIT.md` trước khi thay đổi cảnh giới, linh căn, giá và số liệu cân bằng. Không âm thầm lựa chọn giữa hai nguồn đang mâu thuẫn.

## Đồng bộ có kiểm soát

```bash
# Đặt GAME_REPO đến checkout game hợp lệ (không dùng URL)
GAME_REPO=../Hu-gioi npm run sync
GAME_REPO=../Hu-gioi npm run verify
GAME_REPO=../Hu-gioi npm run sync:assets
npm run lint
npm run build
```

Ảnh thuộc `assets/wiki/game/` được chọn **bằng whitelist**, không copy tràn toàn bộ game assets. Nếu `GAME_REPO` không có ảnh đã map, ảnh tương ứng sẽ để trống; không gán minh họa thay thế để tránh sai lore. Mọi thay đổi ảnh phải kiểm tra nguồn và nội dung bí mật trước khi đưa vào Git.

## Quy tắc nội dung

- Đủ chứng cứ mới gắn `[ĐÃ XÁC NHẬN]` khi cần.
- Thiếu nguồn, chưa kiểm tra runtime, hoặc mâu thuẫn: `[CẦN XÁC MINH]`.
- Trải nghiệm từ cộng đồng: `[KINH NGHIỆM CỘNG ĐỒNG]`.
- Suy đoán: `[SUY ĐOÁN]`.
- Số liệu cân bằng cần có phiên bản áp dụng; không tự đặt số/version.
- Không đưa secret, token, credential, nội dung cốt truyện ẩn, tài liệu nội bộ, hoặc assets endgame bí mật vào repo/bundle public.
- Không gộp dữ liệu **roadmap** với cơ chế gameplay hiện hành.

## Giao diện & khả năng truy cập

Tìm kiếm toàn wiki bằng ô trên topbar hoặc **Ctrl/⌘+K**, hỗ trợ tiếng Việt có/không dấu. Mục lục trang được tạo từ heading nội dung. Hash không hợp lệ hiển thị 404 trong app. Navbar có `aria-current`, bảng có `scope="col"`, và nút “Hiện thêm” cho bảng dài. Giao diện nền tối dùng màu ngọc/bút mực thống nhất.
