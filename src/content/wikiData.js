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
  {name:'Nhân',life:90,effect:'Không đổi chỉ số gốc; Thích Nghi giúp tốc độ tu luyện +8%.'},
  {name:'Ma',life:90,effect:'Căn Cốt +2, Tướng Mạo -2; Ma Thể giúp chiến lực +6%.'},
  {name:'Yêu',life:115,effect:'Căn Cốt +1, Ngộ Tính -1; Yêu Thể giúp hồi phục khí huyết +25%.'},
  {name:'Linh',life:100,effect:'Ngộ Tính +1, Căn Cốt -1; Thông Linh giúp tỉ lệ đột phá +3%.'},
  {name:'Tiên Duệ',life:135,effect:'Phúc Duyên +2, Vận Khí +1, Căn Cốt -2; Tiên Vận giúp cơ duyên hiếm dễ xuất hiện hơn.'},
  {name:'Thú',life:80,effect:'Căn Cốt +2, Ngộ Tính -2; Cường Thể giúp khí huyết tối đa +12%.'}
]

export const items = [
  ['Tụ Khí Đan','20 linh thạch','Phàm Nhân','Cộng 6% tu vi cần để lên tầng tiếp theo.'],
  ['Hồi Huyết Đan','15 linh thạch','Phàm Nhân','Hồi 60% khí huyết tối đa.'],
  ['Phá Cảnh Đan','90 linh thạch','Luyện Khí','+12% cho lần đột phá kế tiếp; giới hạn cộng dồn hiện [CẦN XÁC MINH].'],
  ['Trường Thọ Quả','160 linh thạch','Luyện Khí','Thọ nguyên +6 năm, có tăng theo cảnh giới.'],
  ['Ngưng Nguyên Đan','140 linh thạch','Trúc Cơ','Cộng 5% tu vi cần để lên tầng tiếp theo.'],
  ['Đại Hồi Đan','70 linh thạch','Trúc Cơ','Hồi đầy khí huyết.'],
  ['Dịch Cân Đan','420 linh thạch','Kim Đan','Một chỉ số gốc ngẫu nhiên +1, tối đa 40.'],
  ['Hóa Anh Đan','650 linh thạch','Nguyên Anh','Cộng 4,5% tu vi cần để lên tầng tiếp theo.'],
  ['Tục Mệnh Đan','800 linh thạch','Nguyên Anh','Thọ nguyên +12 năm, có tăng theo cảnh giới.'],
  ['Thiên Cơ Đan','1600 linh thạch','Hóa Thần','+20% cho lần đột phá kế tiếp; giới hạn cộng dồn hiện [CẦN XÁC MINH].'],
  ['Thái Hư Đan','3200 linh thạch','Luyện Hư','Cộng 4% tu vi cần để lên tầng tiếp theo.'],
  ['Tạo Hóa Dịch','5200 linh thạch','Đại Thừa','Một chỉ số gốc ngẫu nhiên +1, tối đa 40.'],
  ['Độ Kiếp Đan','9000 linh thạch','Độ Kiếp','+25% cho lần đột phá kế tiếp; giới hạn cộng dồn hiện [CẦN XÁC MINH].']
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

export const realmGuide = [
  {name:'Phàm Nhân',art:'realm1',region:'Phàm Nhân Thành',tone:'Khởi điểm của đạo đồ',desc:'Chưa thoát phàm tục. Đây là giai đoạn học cách quản lý tu vi, tuổi thọ, tài nguyên và nhịp thời gian thật.',tip:'Hiểu luật trước khi tối ưu. Một nền móng bình thường nhưng chắc chắn thường đi xa hơn một khởi đầu nóng vội.'},
  {name:'Luyện Khí',art:'realm2',region:'Thanh Vân Sơn',tone:'Dẫn linh nhập thể',desc:'Linh khí trở thành nền tảng tu luyện. Công pháp và tông môn bắt đầu có sức nặng rõ rệt.',tip:'Đừng dùng mọi tài nguyên tăng đột phá ngay khi gặp khó; bình cảnh sau thường đắt hơn bình cảnh trước.'},
  {name:'Trúc Cơ',art:'realm3',region:'Vạn Yêu Lâm',tone:'Dựng nền đạo cơ',desc:'Đạo cơ được củng cố và lịch luyện bắt đầu nguy hiểm hơn. Vạn Yêu Lâm là phép thử đầu tiên bên ngoài vùng an toàn.',tip:'Bắt đầu cân bằng giữa tiến cảnh giới, hồi phục và nghề phụ.'},
  {name:'Kim Đan',art:'realm4',region:'Hắc Phong Cốc',tone:'Kết đan định mệnh',desc:'Sức mạnh đủ để tranh đoạt di tích và tài nguyên quý. Con đường tu hành chuyển từ học hỏi sang cạnh tranh rõ rệt.',tip:'Sai lầm bắt đầu đắt giá; giữ dự phòng thường khôn ngoan hơn dồn sạch cho một lần thắng.'},
  {name:'Nguyên Anh',art:'realm5',region:'Thiên Hà Hải',tone:'Nguyên thần sơ hiện',desc:'Tu sĩ bước vào hải vực linh triều, nơi tài nguyên và hiểm họa đều vượt xa đất liền.',tip:'Theo dõi thọ nguyên song song với tu vi; sức mạnh tăng không làm thời gian chậm lại.'},
  {name:'Hóa Thần',art:'realm6',region:'Hoang Cổ Chi Địa',tone:'Thần ý chạm cổ tích',desc:'Bước vào vùng di tích của các thế lực đã biến mất, gặp cổ thi và dị tượng. Lịch sử thế giới bắt đầu chạm trực tiếp vào hiện tại.',tip:'Di tích không chỉ là cơ duyên; nơi càng cổ càng khó đoán cái giá phải trả.'},
  {name:'Luyện Hư',art:'realm7',region:'Hư Không Liệt Cốc',tone:'Lấy hư không làm đường',desc:'Không gian trở thành chướng ngại thật sự. Các mảnh vực rạn nứt và hư không chi lực tạo cảm giác vượt khỏi quy luật phàm giới.',tip:'Khả năng sống sót quan trọng không kém chiến lực.'},
  {name:'Đại Thừa',art:'realm8',region:'Đăng Thiên Cổ Lộ',tone:'Đạo thành, hỏi trời',desc:'Cổ lộ từng có vô số Đại Thừa đi qua. Vấn Đạo Thiên Đài còn chấp niệm người trước; con đường lên Thiên Môn vừa thử sức vừa thử tâm.',tip:'Gom đủ mọi chuẩn bị cho kiếp cuối của Hạ Giới.'},
  {name:'Độ Kiếp',art:'realm9',region:'Thiên Môn Sơn',tone:'Nghịch lôi vấn thiên',desc:'Đỉnh Hạ Giới. Thiên Môn Sơn phủ lôi vân; Cửu Tiêu Kiếp Hải là nơi tu sĩ Độ Kiếp mài giũa thân tâm trước phi thăng.',tip:'Đừng xem Độ Kiếp như một cấp cuối; đây là phép thử tổng hợp của cả đời tu.'}
]

export const historyTimeline = [
  {label:'Dấu tích thời cổ',status:'[ĐÃ XÁC NHẬN]',text:'Cổ Mộ Quần là nơi chôn cất của những tông môn đã biến mất trong lịch sử; Thái Cổ Tàn Điện vẫn còn dị tượng và thần văn. Điều này xác nhận Hạ Giới từng có các thế lực tu hành cổ xưa hơn hiện tại, nhưng tên tuổi và niên đại cụ thể chưa được công bố.'},
  {label:'Thời đại di tích & trận pháp',status:'[ĐÃ XÁC NHẬN]',text:'Hắc Phong Cốc còn Tàn Trận Đài và Cổ Khoáng Động với dấu vết trận pháp bị phá, cho thấy nơi đây từng chứng kiến hoạt động tu luyện và tranh đoạt quy mô lớn.'},
  {label:'Con đường của các Đại Thừa',status:'[ĐÃ XÁC NHẬN]',text:'Đăng Thiên Cổ Lộ được mô tả là con đường từng có vô số Đại Thừa đi qua. Vấn Đạo Thiên Đài còn chấp niệm của người trước, cho thấy phi thăng là một truyền thống lâu đời.'},
  {label:'Thiên Môn & Kiếp Hải',status:'[ĐÃ XÁC NHẬN]',text:'Thiên Môn Sơn là đỉnh Hạ Giới, nơi lôi kiếp và khí tức phi thăng giao nhau. Thiên Môn Kiếp Hải là biển lôi để tu sĩ Độ Kiếp mài giũa thân tâm trước khi phi thăng.'},
  {label:'Tiên Giới & Thần Giới',status:'[ĐÃ XÁC NHẬN]',text:'Thế giới được định hướng theo Hạ Giới → Tiên Giới → Thần Giới. Hai tầng trên hiện chưa mở cho người chơi; lịch sử cụ thể của chúng vẫn [CẦN XÁC MINH].'}
]

export const npcEntries = [
  {name:'Lão Dược Sư',place:'Thanh Khê Thành · Phàm Nhân Thành',role:'Dược sư địa phương',art:'alchemist',desc:'Có mặt ở nơi người mới bước vào tiên đồ. Tiểu sử, cảnh giới và quan hệ cá nhân hiện [CẦN XÁC MINH].'},
  {name:'Chấp Sự Thanh Vân',place:'Thanh Vân Sơn Môn',role:'Chấp sự tông môn',art:'elder',desc:'Đại diện rõ nhất cho hoạt động tông môn tại chân Thanh Vân Sơn. Chức danh cho thấy liên hệ với Thanh Vân Tông; quyền hạn cụ thể hiện [CẦN XÁC MINH].'},
  {name:'Kiếm Tu Mạc Vân',place:'Vọng Vân Đài · Thanh Vân Sơn',role:'Kiếm tu',art:'swordImmortal',desc:'Có mặt tại Vọng Vân Đài, nơi thiên phong mạnh và yêu cầm làm tổ. Công pháp và thân phận trong tông môn chưa được công bố.'},
  {name:'Yêu Tu Bạch Ly',place:'Hồ Thúy Tâm · Vạn Yêu Lâm',role:'Yêu tu',art:'foxMaiden',desc:'Xuất hiện tại hồ nơi thủy linh khí và yêu khí giao thoa. Quan hệ với yêu tộc khác hiện [CẦN XÁC MINH].'},
  {name:'Mộc Linh Ông',place:'Cổ Thụ Yêu Đình · Vạn Yêu Lâm',role:'Nhân vật gắn với mộc linh',art:'hermit',desc:'Gắn với cổ thụ ngàn năm che kín bầu trời. Nguồn gốc thật sự vẫn chưa được xác nhận.'},
  {name:'Luyện Khí Sư Lương Hạo',place:'Cổ Khoáng Động · Hắc Phong Cốc',role:'Luyện khí sư',art:'blacksmith',desc:'Hiện diện ở khoáng động giàu Huyền Thiết và Tinh Kim; là nhân vật gắn trực tiếp nhất với mạch luyện khí tại Hắc Phong Cốc.'},
  {name:'Trận Sư Tử Mặc',place:'Tàn Trận Đài · Hắc Phong Cốc',role:'Trận sư',art:'oracle',desc:'Có mặt tại trận đài hoang phế còn dư uy Kim Đan. Lịch sử cá nhân và mục tiêu hiện [CẦN XÁC MINH].'},
  {name:'Thương Nhân Kỷ Lam',place:'Thiên Hà Cảng · Thiên Hà Hải',role:'Thương nhân xuyên hải vực',art:'merchant',desc:'Xuất hiện tại bến tàu của tu sĩ Nguyên Anh và thương hội xuyên hải vực; là đầu mối rõ nhất cho mạch thương mại vùng biển.'},
  {name:'Tàn Hồn Cổ Tu',place:'Thái Cổ Tàn Điện · Hoang Cổ Chi Địa',role:'Tàn hồn của cổ tu',art:'demonScholar',desc:'Một dấu vết sống của thời đại cổ. Danh tính khi còn sống và tông môn cũ hiện [CẦN XÁC MINH].'},
  {name:'Không Gian Sư Phong Tịch',place:'Liệt Không Trạm · Hư Không Liệt Cốc',role:'Tu sĩ nghiên cứu không gian',art:'oracle',desc:'Xuất hiện tại tiền đồn trên một mảnh không gian tương đối ổn định; tên gọi cho thấy chuyên môn không gian.'},
  {name:'Vấn Đạo Lão Nhân',place:'Vấn Đạo Thiên Đài · Đăng Thiên Cổ Lộ',role:'Người giữ đạo đài',art:'hermit',desc:'Có mặt tại nơi thử tâm, nơi chấp niệm người trước còn lưu lại. Thân phận thực và tuổi đời hiện [CẦN XÁC MINH].'},
  {name:'Ngoại Quan Trấn Sứ',place:'Thiên Môn Ngoại Quan',role:'Trấn thủ cửa ải',art:'gatekeeper',desc:'Nhân vật gắn với cửa ải cuối của Đăng Thiên Cổ Lộ trước khi bước vào vùng lôi kiếp Thiên Môn.'},
  {name:'Hộ Sơn Linh',place:'Thiên Môn Sơn Đạo',role:'Linh thể hộ sơn',art:'celestialKnight',desc:'Xuất hiện trên sơn đạo phủ lôi vân. Bản chất và nguồn gốc cụ thể hiện [CẦN XÁC MINH].'}
]

export const sectEntries = [
  {name:'Thanh Vân Tông',alignment:'Chính đạo',color:'#7fdcff',summary:'Tông môn thiên về tu luyện ổn định, bảo vệ sơn môn, dân cư và linh mạch.',confirmed:['Tu luyện +10%, chiến lực +5, lương cơ sở 8 linh thạch/năm.','Nhiệm vụ gồm giảng đạo, cứu thôn, bảo vệ linh mạch, săn yêu vương.','Có nhiệm vụ phá trận pháp ma tu và chinh phạt ma đạo biên cương.'],relation:'Đối địch với Huyết Sát Môn được xác nhận qua chuỗi nhiệm vụ.'},
  {name:'Huyết Sát Môn',alignment:'Ma đạo',color:'#ff7060',summary:'Thế lực thiên chiến đấu và huyết khí, hành sự mạnh bạo hơn hai tông môn còn lại.',confirmed:['Chiến lực +20, lương cơ sở 4 linh thạch/năm.','Nhiệm vụ gồm thu thập huyết khí, chặn thương đội, tế luyện huyết đan, phục kích đệ tử chính đạo.','Có nhiệm vụ chiếm linh mạch môn phái nhỏ, huyết tế và trấn áp phản đồ.'],relation:'Đối địch với chính đạo; niên biểu từng cuộc xung đột chưa được công bố.'},
  {name:'Vạn Dược Cốc',alignment:'Đan đạo',color:'#7fffa0',summary:'Thế lực chuyên dược liệu, luyện đan và cứu chữa.',confirmed:['Tu luyện +5%, mua đồ giảm 30%, lương cơ sở 15 linh thạch/năm.','Nhiệm vụ gồm hái dược, chăm vườn, chữa bệnh cho phàm nhân, tìm Huyết Tham, phụ luyện đan.','Có nhiệm vụ hỗ trợ luyện Cửu Chuyển Hoàn Hồn Đan và tìm linh dược vạn năm.'],relation:'Quan hệ đồng minh hay đối địch với hai tông môn còn lại hiện [CẦN XÁC MINH].'}
]

export const factionRelations = [
  ['Thanh Vân Tông','Huyết Sát Môn','ĐỐI ĐỊCH','Nhiệm vụ hai phía xác nhận “phá trận pháp ma tu / chinh phạt ma đạo” và “phục kích đệ tử chính đạo”.'],
  ['Thanh Vân Tông','Vạn Dược Cốc','[CẦN XÁC MINH]','Chưa có dữ liệu xác nhận đồng minh hay thù địch trực tiếp.'],
  ['Huyết Sát Môn','Vạn Dược Cốc','[CẦN XÁC MINH]','Chưa có dữ liệu xác nhận quan hệ ngoại giao chính thức.']
]

export const bestiary = [
  {name:'Hắc Lang',realm:'Phàm Nhân',region:'Phàm Nhân Thành',art:'tier0',kind:'Yêu thú',status:'[ĐÃ XÁC NHẬN]',desc:'Một trong các quái đầu tiên quanh Thanh Khê Thành và Thanh Khê Lâm.'},
  {name:'Thiết Giáp Hùng',realm:'Luyện Khí',region:'Thanh Vân Sơn',art:'tier1',kind:'Yêu thú',status:'[ĐÃ XÁC NHẬN]',desc:'Xuất hiện ở Thanh Vân Sơn, nơi yêu thú Luyện Khí bắt đầu trở thành mối đe dọa đáng kể.'},
  {name:'Hỏa Lân Thú',realm:'Trúc Cơ',region:'Vạn Yêu Lâm',art:'electricQilin',kind:'Yêu thú',status:'[ĐÃ XÁC NHẬN]',desc:'Một trong các sinh vật mạnh của Vạn Yêu Lâm. Hình dùng linh thú chính thức có khí chất tương ứng; diện mạo chính xác hiện [CẦN XÁC MINH].'},
  {name:'Cửu Vĩ Hồ',realm:'Kim Đan',region:'Hắc Phong Cốc',art:'nineTailedFox',kind:'Yêu hồ',status:'[ĐÃ XÁC NHẬN]',desc:'Xuất hiện tại Phong Khẩu và Cổ Khoáng Động. Có hình Cửu Vĩ Hồ riêng trong bộ hình chính thức.'},
  {name:'Kim Dực Bằng',realm:'Kim Đan',region:'Hắc Phong Cốc',art:'tier3',kind:'Yêu cầm',status:'[ĐÃ XÁC NHẬN]',desc:'Yêu cầm Kim Đan xuất hiện ở Hắc Phong Cốc, gắn với vùng vách đá và địa hình gió mạnh.'},
  {name:'Thôn Thiên Mãng',realm:'Nguyên Anh',region:'Thiên Hà Hải',art:'tier4',kind:'Hải thú',status:'[ĐÃ XÁC NHẬN]',desc:'Hải thú Nguyên Anh xuất hiện tại Thiên Hà Cảng và Hải Nhãn Thâm Uyên. Cơ chế riêng chưa được mô tả chi tiết.'},
  {name:'Vạn Niên Cổ Thi',realm:'Hóa Thần',region:'Hoang Cổ Chi Địa',art:'armoredWarrior',kind:'Cổ thi',status:'[ĐÃ XÁC NHẬN]',desc:'Sinh vật gắn với Cổ Mộ Quần và Thái Cổ Tàn Điện. Hình chiến binh cổ chỉ dùng minh họa vai trò.'},
  {name:'Thái Hư Cổ Thú',realm:'Luyện Hư',region:'Hư Không Liệt Cốc',art:'celestialWolf',kind:'Cổ thú hư không',status:'[ĐÃ XÁC NHẬN]',desc:'Xuất hiện tại Liệt Không Trạm và Hư Không Tâm Nhãn; thuộc nhóm sinh vật gắn với không gian rạn vỡ.'},
  {name:'Hoang Cổ Chân Long Ảnh',realm:'Đại Thừa',region:'Đăng Thiên Cổ Lộ',art:'easternDragon',kind:'Long ảnh',status:'[ĐÃ XÁC NHẬN]',desc:'Một bóng chân long cổ đại xuất hiện trên Đăng Thiên Cổ Lộ. Từ “Ảnh” cho thấy đây không nhất thiết là chân long sống hoàn chỉnh.'},
  {name:'Đại Thừa Khôi Lỗi',realm:'Đại Thừa',region:'Đăng Thiên Cổ Lộ',art:'stoneGolem',kind:'Khôi lỗi',status:'[ĐÃ XÁC NHẬN]',desc:'Khôi lỗi canh giữ cổ lộ và Vấn Đạo Thiên Đài. Chủ nhân ban đầu hiện [CẦN XÁC MINH].'},
  {name:'Cửu Tiêu Lôi Linh',realm:'Độ Kiếp',region:'Thiên Môn Sơn',art:'electricQilin',kind:'Lôi linh',status:'[ĐÃ XÁC NHẬN]',desc:'Sinh vật của vùng sơn đạo phủ lôi vân. Hình linh thú lôi hệ dùng để tái hiện khí chất; diện mạo chính xác hiện [CẦN XÁC MINH].'},
  {name:'Thiên Môn Thủ Vệ',realm:'Độ Kiếp',region:'Thiên Môn Sơn',art:'celestialKnight',kind:'Thủ vệ',status:'[ĐÃ XÁC NHẬN]',desc:'Thủ vệ tại đỉnh Hạ Giới. Bản chất sinh linh hay khôi lỗi chưa được xác nhận.'},
  {name:'Kiếp Hải Ma Thần',realm:'Độ Kiếp',region:'Thiên Môn / Kiếp Hải',art:'cosmicMage',kind:'Đại địch cao tầng',status:'[ĐÃ XÁC NHẬN TÊN]',desc:'Nằm trong nhóm quái Độ Kiếp cuối Hạ Giới. Kỹ năng và phần thưởng riêng hiện [CẦN XÁC MINH].'}
]

export const pages = [
  {id:'home',title:'Thiên Thư',kicker:'Trang chủ',summary:'Thiên Vân Đại Lục Wiki là đạo tàng dành cho người chơi: cơ chế, lịch sử, cảnh giới, nhân vật, tông môn, quái vật và những dấu tích của Hạ Giới được nối lại thành một bức tranh thống nhất.',quote:'Tu tiên không tranh một sớm một chiều; người đi xa nhất thường là người biết lúc nào nên tiến, lúc nào nên giữ đạo tâm.'},
  {id:'history',title:'Thiên Sử',kicker:'Lịch sử thế giới',summary:'Không có niên biểu đầy đủ, nhưng Hạ Giới lưu lại đủ di tích để dựng nên một lược sử theo dấu vết: tông môn thất truyền, tàn điện Hóa Thần, cổ lộ Đại Thừa và Thiên Môn nơi vô số đời tu sĩ từng hướng tới.',quote:'Cổ tích không nói hết sự thật, nhưng đá vỡ và mộ cũ chưa từng biết nói dối.'},
  {id:'realms',title:'Cảnh Giới Lục',kicker:'Hệ thống tu luyện',summary:'Chín cảnh giới của Hạ Giới tạo thành một trục tiến triển từ phàm tục tới Độ Kiếp. Mỗi cảnh giới không chỉ tăng sức mạnh mà còn đổi môi trường, hiểm họa và cách quản lý thọ nguyên.',quote:'Một lần phá cảnh là thắng chính mình của hôm qua; một đời tu thành hay bại lại nằm ở cách giữ nền móng.'},
  {id:'characters',title:'Tu Sĩ',kicker:'Nhân vật & chỉ số',summary:'Chủng tộc, năm chỉ số nền, linh căn và thiên phú quyết định nhịp phát triển của mỗi đời tu. Không có lựa chọn mạnh nhất tuyệt đối, chỉ có lựa chọn hợp con đường hơn.',sections:[{title:'Năm chỉ số nền',bullets:['Tướng Mạo: quý nhân, giao tiếp và giá mua.','Phúc Duyên: cơ duyên và chất lượng kỳ ngộ.','Căn Cốt: tu luyện, khí huyết và chiến lực.','Ngộ Tính: đốn ngộ, hỗ trợ đột phá.','Vận Khí: tránh họa, may mắn và hỗ trợ đột phá.']},{title:'Chủng tộc',table:'races'}]},
  {id:'npcs',title:'Danh Giám Nhân Vật',kicker:'NPC quan trọng',summary:'Những nhân vật dưới đây đều xuất hiện tại các địa điểm cụ thể của Hạ Giới. Wiki chỉ khẳng định vai trò và nơi xuất hiện đã thấy rõ; tiểu sử chưa công bố giữ [CẦN XÁC MINH].',quote:'Người gặp trên đường có thể chỉ nói một câu, nhưng đôi khi một câu ấy đủ đổi cả vận mệnh.'},
  {id:'sects',title:'Tông Môn Phổ',kicker:'Thế lực & quan hệ',summary:'Ba tông môn hiện có bản sắc rõ: Thanh Vân Tông thiên chính đạo, Huyết Sát Môn đi ma đạo, Vạn Dược Cốc lấy đan đạo làm gốc. Chỉ quan hệ được thể hiện rõ mới được ghi là đã xác nhận.',quote:'Tông môn là nơi che mưa, cũng là nơi một ân oán cá nhân có thể hóa thành đại thế.'},
  {id:'bestiary',title:'Yêu Thú & Boss Đồ Lục',kicker:'Quái vật & đại địch',summary:'Từ Hắc Lang ngoài thành tới Kiếp Hải Ma Thần ở đỉnh Hạ Giới, quái vật tăng cấp cùng cảnh giới. Hình chỉ được dùng đúng mức độ xác nhận; hình đại diện sẽ được ghi rõ.',quote:'Yêu thú mạnh chưa chắc đáng sợ nhất; đáng sợ nhất là gặp đúng thứ mình chưa hiểu.'},
  {id:'items',title:'Bách Bảo Các',kicker:'Vật phẩm & trang bị',summary:'Đan dược, nguyên liệu và pháp khí là công cụ để rút ngắn thời gian, vá điểm yếu và sống sót qua bình cảnh.',sections:[{title:'Đan dược & vật phẩm cửa hàng',table:'items'},{title:'Nhập hàng',body:'Cửa hàng làm mới sau 30 phút thời gian thật; giá tăng theo cảnh giới hiện tại.'}]},
  {id:'beginner',title:'Nhập Đạo',kicker:'Hướng dẫn tân thủ',summary:'Người mới nên hiểu nhịp thời gian thật, thọ nguyên, khu vực và tài nguyên trước khi lao vào tối ưu từng con số.',sections:[{title:'Ba điều đầu tiên',bullets:['Thọ nguyên là tài nguyên.','Đột phá mở thêm thế giới nhưng cũng tăng cái giá của sai lầm.','Không tiêu sạch vật phẩm chỉ vì một lần thất bại.']}]},
  {id:'mechanics',title:'Đạo Pháp & Cơ Chế',kicker:'Cơ chế & chiến thuật',summary:'Tu luyện, đột phá, lịch luyện, linh điền, nghề phụ, bí cảnh và tông môn tạo thành vòng lặp chính của Hạ Giới.',sections:[{title:'Tu luyện & đột phá',body:'Ngộ Tính và Vận Khí có liên quan tỉ lệ đột phá; công thức chi tiết phải được đọc theo dữ liệu hiện hành.'},{title:'Linh điền',body:'Một tháng linh điền bằng 60 giây thật; Linh Thảo chín sau 6 tháng linh điền, khoảng 6 phút thật.'}]},
  {id:'world',title:'Thiên Vân Địa Đồ',kicker:'Bản đồ & địa điểm',summary:'Hạ Giới gồm chín khu vực từ Phàm Nhân Thành tới Thiên Môn Sơn. Tiên Giới và Thần Giới đã có hình giới thiệu nhưng hiện chưa mở cho người chơi.',sections:[{title:'Cửu vực Hạ Giới',table:'regions'}]},
  {id:'lore',title:'Vạn Cổ Ký',kicker:'Lore',summary:'Lore được ghi theo dấu tích, mô tả địa điểm và những gì game đã xác nhận; khoảng trống lịch sử không bị lấp bằng suy đoán vô căn cứ.',sections:[{title:'Ba tầng thế giới',body:'Trật tự hiện được xác nhận là Hạ Giới → Tiên Giới → Thần Giới. Hai tầng trên chưa mở cho người chơi.'}]},
  {id:'updates',title:'Thiên Biến',kicker:'Cập nhật',summary:'Nơi theo dõi thay đổi và lộ trình nội dung.',sections:[{title:'Nguyên tắc',body:'Nội dung dự kiến không được ghi như tính năng đã phát hành.'}]},
  {id:'glossary',title:'Đạo Điển',kicker:'Thuật ngữ',summary:'Giải thích thuật ngữ cốt lõi bằng tiếng Việt nhất quán.',sections:[{title:'Thuật ngữ',bullets:['Cảnh giới: bậc tu hành lớn.','Đột phá: vượt giới hạn hiện tại.','Thọ nguyên: tuổi thọ của đời tu.','Tọa hóa: kết thúc một đời tu sĩ.']}]},
  {id:'faq',title:'Giải Nghi',kicker:'FAQ',summary:'Những câu hỏi người chơi dễ gặp nhất.',sections:[{title:'Tiên Giới đã mở chưa?',body:'Chưa.'},{title:'Thần Giới đã mở chưa?',body:'Chưa.'}]}
]
