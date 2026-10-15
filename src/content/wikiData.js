export const meta = {
  game: 'Thiên Vân Đại Lục',
  platform: 'Trình duyệt (PC/Mobile)',
  version: '[CẦN XÁC MINH]',
  lastUpdated: '15/10/2026',
  source: 'zeplaovn/Hu-gioi',
}

export const realms = [
  ['Phàm Nhân','#cfd8dc'],['Luyện Khí','#7fdcff'],['Trúc Cơ','#7fffa0'],['Kim Đan','#ffd24a'],['Nguyên Anh','#ff9f43'],['Hóa Thần','#d980ff'],['Luyện Hư','#ff6b9d'],['Đại Thừa','#ffffff'],['Độ Kiếp','#ffe27a']
]

export const races = [
  {name:'Nhân',life:80,effect:'Không có hiệu chỉnh chỉ số.'},
  {name:'Ma',life:90,effect:'Căn Cốt +2, Tướng Mạo -1.'},
  {name:'Yêu',life:120,effect:'Căn Cốt +1, Ngộ Tính -1.'},
  {name:'Linh',life:100,effect:'Ngộ Tính +2, Căn Cốt -1.'},
  {name:'Tiên Duệ',life:150,effect:'Phúc Duyên +2, Vận Khí +1, Căn Cốt -2.'},
  {name:'Thú',life:70,effect:'Căn Cốt +3, Ngộ Tính -2.'}
]

export const items = [
  ['Tụ Khí Đan','20 linh thạch','Phàm Nhân','Cộng 6% tu vi cần để lên tầng tiếp theo.'],
  ['Hồi Huyết Đan','15 linh thạch','Phàm Nhân','Hồi 60% khí huyết tối đa.'],
  ['Phá Cảnh Đan','90 linh thạch','Luyện Khí','+12% cho lần đột phá kế tiếp; cộng dồn tối đa 40%.'],
  ['Trường Thọ Quả','160 linh thạch','Luyện Khí','Thọ nguyên +6 năm, có tăng theo cảnh giới.'],
  ['Ngưng Nguyên Đan','140 linh thạch','Trúc Cơ','Cộng 5% tu vi cần để lên tầng tiếp theo.'],
  ['Đại Hồi Đan','70 linh thạch','Trúc Cơ','Hồi đầy khí huyết.'],
  ['Dịch Cân Đan','420 linh thạch','Kim Đan','Một chỉ số gốc ngẫu nhiên +1, tối đa 40.'],
  ['Hóa Anh Đan','650 linh thạch','Nguyên Anh','Cộng 4,5% tu vi cần để lên tầng tiếp theo.'],
  ['Tục Mệnh Đan','800 linh thạch','Nguyên Anh','Thọ nguyên +12 năm, có tăng theo cảnh giới.'],
  ['Thiên Cơ Đan','1600 linh thạch','Hóa Thần','+20% tỉ lệ cho lần đột phá kế tiếp; cộng dồn tối đa 40%.'],
  ['Thái Hư Đan','3200 linh thạch','Luyện Hư','Cộng 4% tu vi cần để lên tầng tiếp theo.'],
  ['Tạo Hóa Dịch','5200 linh thạch','Đại Thừa','Một chỉ số gốc ngẫu nhiên +1, tối đa 40.'],
  ['Độ Kiếp Đan','9000 linh thạch','Độ Kiếp','+25% tỉ lệ cho lần đột phá kế tiếp; cộng dồn tối đa 40%.']
]

export const regions = [
  ['Phàm Nhân Thành','Phàm Nhân','Thành trấn và núi rừng quanh nơi nhập đạo.'],
  ['Thanh Vân Sơn','Luyện Khí','Linh mạch sơ khai, yêu thú Luyện Khí thường lui tới.'],
  ['Vạn Yêu Lâm','Trúc Cơ','Rừng yêu khí dày đặc, tài nguyên Trúc Cơ phong phú.'],
  ['Hắc Phong Cốc','Kim Đan','Kim Đan tu sĩ tranh đoạt di tích trong cốc sâu.'],
  ['Thiên Hà Hải','Nguyên Anh','Hải vực Nguyên Anh, linh triều và hải thú cùng tồn tại.'],
  ['Hoang Cổ Chi Địa','Hóa Thần','Di tích Hóa Thần, cổ thi và dị tượng không ngừng xuất hiện.'],
  ['Hư Không Liệt Cốc','Luyện Hư','Không gian rạn vỡ, chỉ Luyện Hư mới đủ sức đặt chân.'],
  ['Đăng Thiên Cổ Lộ','Đại Thừa','Con đường Đại Thừa hướng tới Thiên Môn.'],
  ['Thiên Môn Sơn','Độ Kiếp','Đỉnh Hạ Giới, nơi lôi kiếp và khí tức phi thăng giao nhau.']
]

export const pages = [
  {
    id:'home', title:'Thiên Thư', kicker:'Trang chủ',
    summary:'Thiên Vân Đại Lục là game tu tiên idle theo thời gian thật chạy trên trình duyệt. Wiki này ưu tiên dữ liệu đọc trực tiếp từ repo game và tách rõ phần đã xác nhận khỏi nội dung cần kiểm chứng.',
    sections:[
      {title:'Đạo đồ hiện tại', body:'Tiến trình cảnh giới đã xác nhận gồm 9 bậc từ Phàm Nhân đến Độ Kiếp. Hạ Giới hiện là đại thế giới playable; Tiên Giới và Thần Giới đã có module/preview nhưng chưa mở gameplay.'},
      {title:'Nguyên tắc tra cứu', body:'Mọi số liệu trên wiki phải đi kèm nguồn và phiên bản áp dụng. Phiên bản public hiện tại chưa thấy một nhãn X.X đủ chắc chắn trong tài liệu đã kiểm tra nên vẫn để [CẦN XÁC MINH].'},
      {title:'Ba lối vào nhanh', bullets:['Nhập Đạo: hướng dẫn cho người mới.','Đạo Pháp & Cơ Chế: nơi tra công thức và luật gameplay.','Thiên Vân Địa Đồ: tiến trình 9 khu vực của Hạ Giới.']}
    ]
  },
  {
    id:'characters', title:'Tu Sĩ', kicker:'Nhân vật & chỉ số',
    summary:'Nhân vật được định hình bởi chủng tộc, năm chỉ số nền và tiến trình cảnh giới. Mỗi chủng tộc có thọ nguyên cơ sở và hiệu chỉnh chỉ số riêng đã được khai báo trong gameplay data.',
    sections:[
      {title:'Năm chỉ số nền', bullets:['Tướng Mạo: ảnh hưởng cơ hội được quý nhân giúp đỡ và thuận lợi khi vào tông môn.','Phúc Duyên: liên quan cơ duyên và nhặt bảo vật khi lịch luyện.','Căn Cốt: liên quan tốc độ tu luyện, khí huyết và sức chiến đấu.','Ngộ Tính: liên quan đốn ngộ khi tu luyện và tỉ lệ đột phá.','Vận Khí: liên quan may mắn khi lịch luyện, tránh họa và tỉ lệ đột phá.']},
      {title:'Chủng tộc', table:'races'},
      {title:'Mẹo thực chiến', body:'[KINH NGHIỆM CỘNG ĐỒNG] Chưa có dữ liệu cộng đồng đủ tin cậy trong nguồn đã đọc để xếp hạng chủng tộc. Không nên mặc định chủng tộc có thọ nguyên cao là lựa chọn mạnh nhất.'}
    ]
  },
  {
    id:'items', title:'Bách Bảo Các', kicker:'Vật phẩm & trang bị',
    summary:'Cửa hàng, đan dược và trang bị có dữ liệu định lượng trong source game. Bảng dưới ghi theo dữ liệu hiện có trong `src/game/core/data.js`; phiên bản X.X vẫn [CẦN XÁC MINH].',
    sections:[
      {title:'Đan dược & vật phẩm cửa hàng', table:'items'},
      {title:'Nhập hàng', body:'[ĐÃ XÁC NHẬN] Cửa hàng nhập lại sau 1800 giây thời gian thật, tương đương 30 phút; giá có hệ số tăng 50% mỗi cảnh giới theo cấu hình hiện tại.'},
      {title:'Trang bị chế tạo', bullets:['Phi Kiếm: dùng 3 Quặng Linh Thiết, mở từ Phàm Nhân, chiến lực cơ sở +6 trước hệ số phẩm chất.','Pháp Bào: dùng 3 Quặng Linh Thiết, mở từ Phàm Nhân, khí huyết cơ sở +24 trước hệ số phẩm chất.','Linh Giới: dùng 2 Quặng Linh Thiết, mở từ Luyện Khí, tốc độ tu luyện cơ sở +4% trước hệ số phẩm chất.']}
    ]
  },
  {
    id:'beginner', title:'Nhập Đạo', kicker:'Hướng dẫn tân thủ',
    summary:'Mục tiêu của người mới là hiểu nhịp thời gian thật, giữ nhân vật sống đủ lâu và mở dần hệ thống theo cảnh giới. Wiki không giả định chiến lược tối ưu khi chưa có số liệu đầy đủ.',
    sections:[
      {title:'Việc nên hiểu trước', bullets:['Tu luyện và một số hệ thống tiếp tục dựa trên thời gian thật.','Thọ nguyên và tuổi là tài nguyên sống còn; tọa hóa là một phần của vòng đời nhân vật.','Đột phá mở ra cảnh giới mới và kéo theo hệ thống/khu vực mới.','Save gameplay bền vững nằm ở database; game hiện không có chế độ chơi offline rồi đồng bộ sau.']},
      {title:'Sai lầm tân thủ hay gặp', bullets:['[KINH NGHIỆM CỘNG ĐỒNG] Chưa đủ dữ liệu để khẳng định route mua vật phẩm tối ưu.','Không coi preview Tiên Giới/Thần Giới là content đang chơi được.','Không dùng số liệu cũ ngoài source hiện tại để lập build.']},
      {title:'Checklist nhập đạo', bullets:['Đọc mô tả năm chỉ số.','Kiểm tra thọ nguyên cơ sở của chủng tộc.','Theo dõi tiến độ tu vi trước khi dùng vật phẩm tăng tu vi.','Tra điều kiện khu vực trước khi lịch luyện.']}
    ]
  },
  {
    id:'mechanics', title:'Đạo Pháp & Cơ Chế', kicker:'Cơ chế & chiến thuật',
    summary:'Hệ thống cốt lõi xoay quanh tu luyện idle, đột phá, thọ nguyên, lịch luyện, bí cảnh, nghề phụ và meta progression. Công thức nào chưa đọc được trực tiếp từ source sẽ không được tự suy ra.',
    sections:[
      {title:'Tu luyện & đột phá', body:'[ĐÃ XÁC NHẬN] Game có tốc độ tu luyện, tầng/cảnh giới và cơ chế đột phá; Ngộ Tính và Vận Khí được mô tả là có liên quan tỉ lệ đột phá. Công thức chính xác của tỉ lệ hiện [CẦN XÁC MINH] trong wiki này.'},
      {title:'Linh điền', body:'[ĐÃ XÁC NHẬN] Một tháng linh điền bằng 60 giây thật; Linh Thảo chín sau 6 tháng linh điền, tức khoảng 6 phút thật theo cấu hình hiện tại. Khi được coi là vắng mặt, cây chỉ lớn đến lúc chín và không tiếp tục chịu sâu bệnh/khô/héo.'},
      {title:'Nghề phụ', bullets:['Luyện đan dùng Linh Thảo theo công thức.','Vẽ phù dùng hình mẫu phù lục trong minigame.','Luyện khí tạo Phi Kiếm, Pháp Bào và Linh Giới với phẩm chất ảnh hưởng hệ số kết quả.']}
    ]
  },
  {
    id:'world', title:'Thiên Vân Địa Đồ', kicker:'Bản đồ & địa điểm',
    summary:'Hạ Giới là đại thế giới playable với chín khu vực tương ứng tiến trình cảnh giới. Tiên Giới và Thần Giới hiện chỉ ở trạng thái module/preview và phải được ghi rõ là chưa playable.',
    sections:[
      {title:'Cửu vực Hạ Giới', table:'regions'},
      {title:'Tiên Giới', body:'[ĐÃ XÁC NHẬN] Có module và preview asset riêng nhưng `playable: false`. Flow Phi Thăng hiện tại chưa được thay đổi để mở gameplay Tiên Giới.'},
      {title:'Thần Giới', body:'[ĐÃ XÁC NHẬN] Có module và preview asset riêng, `playable: false`, được định vị là expansion sau Tiên Giới.'}
    ]
  },
  {
    id:'lore', title:'Vạn Cổ Ký', kicker:'Lore',
    summary:'Lore trên wiki chỉ ghi những gì hiện có trong mô tả gameplay và tên địa điểm. Các diễn giải về lịch sử, nhân vật hoặc đại thế giới chưa có nguồn rõ ràng sẽ được đánh dấu thay vì viết thành sự thật.',
    sections:[
      {title:'Khung thế giới đã xác nhận', body:'Thiên Vân Đại Lục hiện thuộc Hạ Giới. Progression bản đồ dẫn từ vùng phàm tục, qua linh sơn, yêu lâm, hải vực và di tích cổ, tới Hư Không, Đăng Thiên Cổ Lộ và Thiên Môn Sơn.'},
      {title:'Các đại thế giới', bullets:['Hạ Giới — playable.','Tiên Giới — preview, chưa playable.','Thần Giới — preview, chưa playable.']},
      {title:'Dòng thời gian', body:'[CẦN XÁC MINH] Chưa có tài liệu lore chronology đủ rõ trong các file đã đọc để dựng một timeline lịch sử chính thức.'}
    ]
  },
  {
    id:'updates', title:'Thiên Biến', kicker:'Cập nhật & roadmap',
    summary:'Roadmap public thuộc repo wiki; gameplay hiện hành phải đối chiếu source game. Những lời hứa tương lai không được trình bày như tính năng đã phát hành.',
    sections:[
      {title:'Trạng thái hiện tại', bullets:['Hạ Giới: playable, 9 khu vực.','Tiên Giới: module + preview, chưa playable.','Thần Giới: module + preview, chưa playable.']},
      {title:'Phiên bản', body:'[CẦN XÁC MINH] Repo/tài liệu hiện chưa cung cấp một số phiên bản X.X đủ chắc chắn để wiki công bố.'},
      {title:'Nguồn roadmap', body:'Roadmap public chuẩn nằm trong repo Hu-gioi-wiki. Khi chuyển sang React, nội dung roadmap cũ cần được giữ tương thích URL hoặc redirect rõ ràng.'}
    ]
  },
  {
    id:'glossary', title:'Đạo Điển', kicker:'Thuật ngữ',
    summary:'Thuật ngữ giữ nguyên cách gọi trong game để người chơi có thể tra cứu ngược vào giao diện và source. Chỉ thêm diễn giải tiếng Việt khi cần làm rõ chức năng.',
    sections:[
      {title:'Thuật ngữ cốt lõi', bullets:['Cảnh Giới — bậc tu hành lớn.','Tầng — tiến trình nhỏ bên trong cảnh giới.','Đột Phá — hành động vượt ngưỡng progression.','Thọ Nguyên — giới hạn tuổi thọ của nhân vật.','Tọa Hóa — kết thúc một đời tu khi hết thọ nguyên/theo cơ chế game.','Thiên Mệnh — lớp meta progression của tài khoản/chu kỳ.','Phi Thăng — mốc vượt khỏi Hạ Giới; chi tiết flow hiện cần đọc source sâu hơn.']}
    ]
  },
  {
    id:'faq', title:'Giải Nghi', kicker:'FAQ',
    summary:'Các câu trả lời dưới đây chỉ dùng dữ liệu đã xác nhận từ repo hiện tại. Nội dung thay đổi theo patch phải được kiểm lại trước khi công bố.',
    sections:[
      {title:'Game có chơi offline rồi đồng bộ sau không?', body:'Không. README hiện xác nhận save gameplay dùng database-only persistence; không còn chế độ chơi offline rồi đồng bộ sau.'},
      {title:'Tiên Giới đã chơi được chưa?', body:'Chưa. Module và preview đã có nhưng `playable: false`.'},
      {title:'Thần Giới đã chơi được chưa?', body:'Chưa. Đây là expansion sau Tiên Giới và hiện `playable: false`.'},
      {title:'Wiki lấy số liệu ở đâu?', body:'Ưu tiên gameplay code/data trong `Hu-gioi`; hành vi online đối chiếu migration/RPC; roadmap public lấy từ repo wiki.'}
    ]
  }
]
