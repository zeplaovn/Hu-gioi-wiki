export const meta = {
  game: 'Thiên Vân Đại Lục',
  platform: 'Trình duyệt (PC/Mobile)',
  version: '[CẦN XÁC MINH]',
  lastUpdated: '15/10/2026',
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
    summary:'Thiên Vân Đại Lục là game tu tiên theo thời gian thật trên trình duyệt. Wiki này chỉ công bố thông tin dành cho người chơi và đánh dấu rõ những phần chưa đủ căn cứ.',
    sections:[
      {title:'Đạo đồ hiện tại', body:'Tiến trình cảnh giới đã xác nhận gồm 9 bậc từ Phàm Nhân đến Độ Kiếp. Hạ Giới hiện là nơi người chơi có thể khám phá; Tiên Giới và Thần Giới chưa mở.'},
      {title:'Nguyên tắc tra cứu', body:'Mọi chỉ số quan trọng đều được ghi kèm trạng thái xác nhận. Phiên bản X.X hiện chưa có thông tin đủ chắc chắn để công bố nên vẫn để [CẦN XÁC MINH].'},
      {title:'Ba lối vào nhanh', bullets:['Nhập Đạo: hướng dẫn cho người mới.','Đạo Pháp & Cơ Chế: tra luật chơi và hệ thống.','Thiên Vân Địa Đồ: xem chín khu vực của Hạ Giới.']}
    ]
  },
  {
    id:'characters', title:'Tu Sĩ', kicker:'Nhân vật & chỉ số',
    summary:'Mỗi tu sĩ được định hình bởi chủng tộc, năm chỉ số nền và tiến trình cảnh giới. Chủng tộc khác nhau có thọ nguyên và thiên hướng khác nhau.',
    sections:[
      {title:'Năm chỉ số nền', bullets:['Tướng Mạo: ảnh hưởng cơ hội được quý nhân giúp đỡ và thuận lợi khi vào tông môn.','Phúc Duyên: liên quan cơ duyên và nhặt bảo vật khi lịch luyện.','Căn Cốt: liên quan tốc độ tu luyện, khí huyết và sức chiến đấu.','Ngộ Tính: liên quan đốn ngộ khi tu luyện và tỉ lệ đột phá.','Vận Khí: liên quan may mắn khi lịch luyện, tránh họa và tỉ lệ đột phá.']},
      {title:'Chủng tộc', table:'races'},
      {title:'Mẹo thực chiến', body:'[KINH NGHIỆM CỘNG ĐỒNG] Chưa có đủ dữ liệu để xếp hạng chủng tộc. Không nên mặc định thọ nguyên cao đồng nghĩa với mạnh hơn trong mọi lối chơi.'}
    ]
  },
  {
    id:'items', title:'Bách Bảo Các', kicker:'Vật phẩm & trang bị',
    summary:'Đan dược, nguyên liệu và pháp khí là những công cụ quan trọng trên con đường tu luyện. Bảng dưới chỉ giữ các chỉ số đã xác nhận; phiên bản X.X vẫn [CẦN XÁC MINH].',
    sections:[
      {title:'Đan dược & vật phẩm cửa hàng', table:'items'},
      {title:'Nhập hàng', body:'[ĐÃ XÁC NHẬN] Cửa hàng nhập lại sau 1800 giây thời gian thật, tương đương 30 phút; giá tăng 50% theo mỗi cảnh giới.'},
      {title:'Trang bị chế tạo', bullets:['Phi Kiếm: dùng 3 Quặng Linh Thiết, mở từ Phàm Nhân, chiến lực cơ sở +6 trước hệ số phẩm chất.','Pháp Bào: dùng 3 Quặng Linh Thiết, mở từ Phàm Nhân, khí huyết cơ sở +24 trước hệ số phẩm chất.','Linh Giới: dùng 2 Quặng Linh Thiết, mở từ Luyện Khí, tốc độ tu luyện cơ sở +4% trước hệ số phẩm chất.']}
    ]
  },
  {
    id:'beginner', title:'Nhập Đạo', kicker:'Hướng dẫn tân thủ',
    summary:'Người mới nên hiểu nhịp thời gian thật, thọ nguyên và điều kiện mở khóa trước khi tối ưu tài nguyên. Không có một con đường duy nhất phù hợp với mọi nhân vật.',
    sections:[
      {title:'Việc nên hiểu trước', bullets:['Tu luyện và nhiều hoạt động diễn ra theo thời gian thật.','Thọ nguyên và tuổi là tài nguyên sống còn; tọa hóa là một phần của vòng đời nhân vật.','Đột phá mở cảnh giới mới và dẫn tới khu vực, lựa chọn mới.','Tiến trình được lưu trực tuyến; hiện không có chế độ chơi ngoại tuyến rồi đồng bộ sau.']},
      {title:'Sai lầm tân thủ hay gặp', bullets:['[KINH NGHIỆM CỘNG ĐỒNG] Chưa đủ dữ liệu để khẳng định thứ tự mua vật phẩm tối ưu.','Không coi Tiên Giới hoặc Thần Giới là nội dung đã mở.','Không dùng số liệu cũ hoặc truyền miệng để lập lộ trình nếu chưa được xác nhận.']},
      {title:'Checklist nhập đạo', bullets:['Đọc mô tả năm chỉ số.','Kiểm tra thọ nguyên cơ sở của chủng tộc.','Theo dõi tu vi trước khi dùng vật phẩm tăng tu vi.','Tra điều kiện khu vực trước khi lịch luyện.']}
    ]
  },
  {
    id:'mechanics', title:'Đạo Pháp & Cơ Chế', kicker:'Cơ chế & chiến thuật',
    summary:'Hệ thống cốt lõi xoay quanh tu luyện, đột phá, thọ nguyên, lịch luyện, bí cảnh và nghề phụ. Phần nào chưa xác định đủ chắc chắn sẽ không được tự suy diễn.',
    sections:[
      {title:'Tu luyện & đột phá', body:'[ĐÃ XÁC NHẬN] Game có tốc độ tu luyện, tầng, cảnh giới và cơ chế đột phá. Ngộ Tính và Vận Khí có liên quan tới tỉ lệ đột phá. Công thức chính xác hiện [CẦN XÁC MINH].'},
      {title:'Linh điền', body:'[ĐÃ XÁC NHẬN] Một tháng linh điền bằng 60 giây thật; Linh Thảo chín sau 6 tháng linh điền, tức khoảng 6 phút thật. Khi người chơi vắng mặt, cây chỉ lớn đến lúc chín và không tiếp tục chịu sâu bệnh, khô hoặc héo.'},
      {title:'Nghề phụ', bullets:['Luyện đan dùng Linh Thảo theo công thức.','Vẽ phù dùng các hình mẫu phù lục.','Luyện khí tạo Phi Kiếm, Pháp Bào và Linh Giới; phẩm chất ảnh hưởng kết quả cuối.']}
    ]
  },
  {
    id:'world', title:'Thiên Vân Địa Đồ', kicker:'Bản đồ & địa điểm',
    summary:'Hạ Giới hiện có chín khu vực gắn với tiến trình cảnh giới. Tiên Giới và Thần Giới chưa mở cho người chơi.',
    sections:[
      {title:'Cửu vực Hạ Giới', table:'regions'},
      {title:'Tiên Giới', body:'[ĐÃ XÁC NHẬN] Tiên Giới đã được giới thiệu trong định hướng thế giới nhưng hiện chưa mở để khám phá.'},
      {title:'Thần Giới', body:'[ĐÃ XÁC NHẬN] Thần Giới được định vị là tầng thế giới sau Tiên Giới và hiện chưa mở.'}
    ]
  },
  {
    id:'lore', title:'Vạn Cổ Ký', kicker:'Lore',
    summary:'Phần ghi chép thế giới chỉ giữ những gì đã được công bố hoặc thể hiện rõ trong game. Những khoảng trống lịch sử sẽ không được tự bịa thêm.',
    sections:[
      {title:'Ba tầng thế giới', body:'[ĐÃ XÁC NHẬN] Trật tự thế giới hiện được biết đến gồm Hạ Giới, Tiên Giới và Thần Giới. Hạ Giới là điểm khởi đầu của đạo đồ.'},
      {title:'Phi Thăng', body:'[ĐÃ XÁC NHẬN] Phi Thăng là cột mốc vượt khỏi Hạ Giới sau chặng Độ Kiếp. Chi tiết đầy đủ của hành trình sau Phi Thăng hiện [CẦN XÁC MINH].'},
      {title:'Dòng thời gian', body:'[CẦN XÁC MINH] Chưa có đủ dữ liệu để dựng một dòng thời gian lore chính thức mà không suy đoán.'}
    ]
  },
  {
    id:'updates', title:'Thiên Biến', kicker:'Cập nhật phiên bản',
    summary:'Nơi theo dõi những thay đổi ảnh hưởng trực tiếp đến người chơi. Chỉ những nội dung đã công bố mới được xem là đã có trong game.',
    sections:[
      {title:'Tình trạng hiện tại', body:'Phiên bản X.X hiện [CẦN XÁC MINH]. Khi có số phiên bản chính thức, toàn bộ chỉ số trên wiki cần gắn với phiên bản tương ứng.'},
      {title:'Định hướng thế giới', bullets:['Hạ Giới: đang mở.','Tiên Giới: chưa mở.','Thần Giới: chưa mở.']},
      {title:'Nguyên tắc đọc cập nhật', body:'Thông tin dự kiến hoặc định hướng tương lai không được xem như tính năng đã phát hành.'}
    ]
  },
  {
    id:'glossary', title:'Đạo Điển', kicker:'Thuật ngữ',
    summary:'Bảng thuật ngữ giúp thống nhất cách gọi trong toàn wiki và tránh hiểu nhầm giữa những khái niệm gần nhau.',
    sections:[
      {title:'Thuật ngữ cốt lõi', bullets:['Cảnh giới: bậc lớn trên con đường tu luyện.','Tầng: tiến trình nhỏ bên trong một cảnh giới.','Đột phá: bước vượt giới hạn để tiến lên.','Thọ nguyên: số năm sống còn lại của tu sĩ.','Tọa hóa: kết thúc một đời tu khi thọ nguyên hoặc điều kiện sống không còn.','Phi Thăng: cột mốc rời Hạ Giới để tiến tới tầng thế giới cao hơn.','Thiên Mệnh: hệ tiến triển lâu dài gắn với hành trình của người chơi.']},
      {title:'Trạng thái thông tin', bullets:['[ĐÃ XÁC NHẬN]: thông tin đủ chắc chắn để công bố.','[KINH NGHIỆM CỘNG ĐỒNG]: nhận định thực chiến, không phải luật tuyệt đối.','[SUY ĐOÁN]: giả thuyết chưa được xác nhận.','[CẦN XÁC MINH]: còn thiếu căn cứ, không được tự điền.']}
    ]
  },
  {
    id:'faq', title:'Giải Nghi', kicker:'FAQ',
    summary:'Các câu hỏi thường gặp về tiến trình, thế giới và độ tin cậy của thông tin trên wiki.',
    sections:[
      {title:'Tiên Giới đã chơi được chưa?', body:'Chưa. Tiên Giới hiện chưa mở cho người chơi.'},
      {title:'Thần Giới đã chơi được chưa?', body:'Chưa. Thần Giới là tầng thế giới về sau và hiện chưa mở.'},
      {title:'Wiki có tự đoán chỉ số không?', body:'Không. Chỉ số không đủ căn cứ sẽ được đánh dấu [CẦN XÁC MINH].'},
      {title:'Bảng xếp hạng build nào mạnh nhất?', body:'[KINH NGHIỆM CỘNG ĐỒNG] Chưa có đủ dữ liệu để công bố một bảng xếp hạng build đáng tin cậy.'}
    ]
  }
]
