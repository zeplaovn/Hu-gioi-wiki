// Nội dung wiki. Số liệu gameplay lấy từ ./gameData.js (SINH TỰ ĐỘNG từ repo Hu-gioi bằng
// `npm run sync`); phần còn lại là biên tập. Đừng chép số liệu tay vào đây.
import {game} from './gameData.js'
export {game}

const pctN = x => String(Number((x * 100).toFixed(1))).replace('.', ',')
const sgn = n => (n > 0 ? `+${n}` : `${n}`)
const R = i => game.realms[i].name

export const meta = {
  game: 'Thiên Vân Đại Lục',
  platform: 'Trình duyệt (PC/Mobile)',
  version: game.gameVersion,
  versionNote: 'Lấy từ package.json của repo game. Nếu bản production khác, [CẦN XÁC MINH].',
  lastUpdated: '15/10/2026'
}

export const realms = game.realms.map(r => [r.name, r.color])

export const races = game.races.map(r => ({
  name: r.name,
  life: r.life,
  effect: [Object.entries(r.bonus).map(([k, v]) => `${k} ${sgn(v)}`).join(', ') || 'Không đổi chỉ số gốc', r.trait].filter(Boolean).join('; ')
}))

const itemEffect = it => {
  const lim = it.lim ? ` Mua tối đa ${it.lim} lần mỗi kỳ nhập hàng.` : ''
  switch (it.kind) {
    case 'exp': return `Cộng ${pctN(it.v)}% tu vi cần để lên tầng tiếp theo.${lim}`
    case 'heal': return (it.v >= 1 ? 'Hồi đầy khí huyết.' : `Hồi ${pctN(it.v)}% khí huyết tối đa.`) + lim
    case 'pill': return `+${pctN(it.v)}% tỉ lệ cho lần đột phá kế tiếp (tổng cộng dồn tối đa 30%).${lim}`
    case 'life': return `Thọ nguyên +${it.v} năm, tăng 50% mỗi cảnh giới.${lim}`
    case 'stat': return `Một chỉ số gốc ngẫu nhiên +${it.v}, tối đa 40.${lim}`
    default: return it.desc
  }
}
export const items = game.items.map(it => [it.name, `${it.cost} linh thạch`, R(it.realm), itemEffect(it)])
export const regions = game.world.regions.map(r => [r.name, R(r.realm), r.desc])

export const realmGuide = [
  {name:'Phàm Nhân',art:'realm1',region:'Phàm Nhân Thành',tone:'Khởi điểm của đạo đồ',desc:'Định nghĩa — Phàm Nhân là trạng thái trước khi tu sĩ thực sự dẫn linh khí vào con đường tu luyện. Thân thể, tuổi thọ và nhận thức vẫn chịu giới hạn của người thường; vì vậy đây là giai đoạn học luật trời trước khi thử nghịch trời. Trong Thiên Vân Đại Lục, Phàm Nhân cũng là tầng nhập môn để người chơi làm quen với tu vi, thọ nguyên, tài nguyên và nhịp thời gian thật. Có thể xem đây là phần móng của cả một đời tu: móng càng hiểu rõ, những cảnh giới sau càng ít phải trả giá vì sai lầm ban đầu.',tip:'Hiểu luật trước khi tối ưu. Một nền móng bình thường nhưng chắc chắn thường đi xa hơn một khởi đầu nóng vội.'},
  {name:'Luyện Khí',art:'realm2',region:'Thanh Vân Sơn',tone:'Dẫn linh nhập thể',desc:'Định nghĩa — Luyện Khí là cảnh giới đầu tiên trong đó linh khí trở thành một phần có thể chủ động hấp thu và vận hành trong cơ thể. Tu sĩ bắt đầu tách mình khỏi đời sống phàm tục bằng việc tích lũy linh lực, làm quen công pháp và đặt bước chân đầu tiên vào thế giới tông môn. Đây chưa phải cảnh giới của đại thần thông; ý nghĩa lớn nhất của Luyện Khí nằm ở việc biến “có duyên tu hành” thành “thật sự biết tu hành”. Từ mốc này, lựa chọn tài nguyên, công pháp và thời điểm đột phá bắt đầu ảnh hưởng rõ tới đường dài.',tip:'Đừng dùng mọi tài nguyên tăng đột phá ngay khi gặp khó; bình cảnh sau thường đắt hơn bình cảnh trước.'},
  {name:'Trúc Cơ',art:'realm3',region:'Vạn Yêu Lâm',tone:'Dựng nền đạo cơ',desc:'Định nghĩa — Trúc Cơ nghĩa là xây nền móng cho con đường tu hành lâu dài. Nếu Luyện Khí thiên về tích lũy linh lực, Trúc Cơ nhấn mạnh việc củng cố “đạo cơ”: nền tảng để sức mạnh về sau có chỗ bám và phát triển. Trong hành trình Hạ Giới, đây là lúc lịch luyện bắt đầu nguy hiểm hơn rõ rệt, vì người chơi bước ra khỏi vùng tương đối an toàn để đối mặt yêu khí, yêu thú và nhu cầu chuẩn bị hồi phục tốt hơn. Trúc Cơ vì thế là bài kiểm tra đầu tiên về cân bằng giữa tiến cảnh giới và độ bền của một đời tu.',tip:'Bắt đầu cân bằng giữa tiến cảnh giới, hồi phục và nghề phụ.'},
  {name:'Kim Đan',art:'realm4',region:'Hắc Phong Cốc',tone:'Kết đan định mệnh',desc:'Định nghĩa — Kim Đan là giai đoạn sức mạnh tu hành được cô đọng thành một nền tảng ổn định và có tính “thành hình” rõ rệt hơn. Từ đây, tu sĩ không còn chỉ là người đang học đạo mà đã đủ tư cách tranh đoạt di tích, tài nguyên quý và đối đầu những kẻ cùng cấp trong môi trường khắc nghiệt hơn. Ở Thiên Vân Đại Lục, Kim Đan đánh dấu sự chuyển biến từ tích lũy cá nhân sang cạnh tranh thực sự: một quyết định thiếu chuẩn bị có thể tốn nhiều thời gian, vật phẩm và thọ nguyên hơn trước.',tip:'Sai lầm bắt đầu đắt giá; giữ dự phòng thường khôn ngoan hơn dồn sạch cho một lần thắng.'},
  {name:'Nguyên Anh',art:'realm5',region:'Thiên Hà Hải',tone:'Nguyên thần sơ hiện',desc:'Định nghĩa — Nguyên Anh là cảnh giới trong đó con đường tu hành không còn chỉ được hình dung qua thân thể và linh lực, mà bắt đầu mang sắc thái của thần hồn và bản ngã tu sĩ. Tên gọi “Nguyên Anh” biểu trưng cho một cấp độ sinh mệnh tinh luyện hơn Kim Đan; tuy nhiên những cơ chế thần hồn chi tiết riêng của game hiện chưa được công bố đầy đủ, nên wiki không suy diễn thêm. Về tiến trình, đây là ngưỡng mở ra Thiên Hà Hải — một không gian rộng hơn, nguy hiểm hơn và đòi hỏi người chơi bắt đầu nhìn thọ nguyên như một nguồn lực chiến lược thực sự.',tip:'Theo dõi thọ nguyên song song với tu vi; sức mạnh tăng không làm thời gian chậm lại.'},
  {name:'Hóa Thần',art:'realm6',region:'Hoang Cổ Chi Địa',tone:'Thần ý chạm cổ tích',desc:'Định nghĩa — Hóa Thần là bước chuyển từ sức mạnh được tích lũy trong bản thân sang tầng tu hành có liên hệ sâu hơn với thần ý, dấu tích cổ và những quy luật vượt khỏi kinh nghiệm của các cảnh giới thấp. Trong game, Hóa Thần gắn với Hoang Cổ Chi Địa, nơi cổ mộ, tàn điện, cổ thi và dị tượng khiến lịch sử không còn là chuyện kể xa xưa mà trở thành hiểm họa hiện hữu. Ý nghĩa của cảnh giới này nằm ở việc tu sĩ bắt đầu bước vào phần “cổ xưa” của thế giới — nơi sức mạnh cá nhân phải đối mặt với tàn dư của những thời đại đã mất.',tip:'Di tích không chỉ là cơ duyên; nơi càng cổ càng khó đoán cái giá phải trả.'},
  {name:'Luyện Hư',art:'realm7',region:'Hư Không Liệt Cốc',tone:'Lấy hư không làm đường',desc:'Định nghĩa — Luyện Hư là cảnh giới đặt tu sĩ trước những hiện tượng không gian và hư không mà các tầng thấp chưa đủ sức chạm tới. “Hư” ở đây không nên được hiểu đơn giản là khoảng trống, mà là ranh giới nơi quy luật quen thuộc bắt đầu mất ổn định. Trong Thiên Vân Đại Lục, Hư Không Liệt Cốc thể hiện điều đó qua các mảnh vực rạn nứt và hư không chi lực. Vì cơ chế bản thể/không gian chi tiết chưa được xác nhận đầy đủ, wiki chỉ khẳng định vai trò tiến trình: đây là giai đoạn khả năng sống sót và chuẩn bị trở nên quan trọng ngang với chiến lực thuần túy.',tip:'Khả năng sống sót quan trọng không kém chiến lực.'},
  {name:'Đại Thừa',art:'realm8',region:'Đăng Thiên Cổ Lộ',tone:'Đạo thành, hỏi trời',desc:'Định nghĩa — Đại Thừa là cảnh giới gần như hoàn tất một chu kỳ tu hành của Hạ Giới: nền móng, linh lực, đạo tâm và kinh nghiệm nhiều đời bình cảnh đã được đẩy tới ngưỡng chuẩn bị vấn thiên. Đăng Thiên Cổ Lộ cho thấy đây không phải con đường chưa ai từng đi; vô số Đại Thừa trước đó đã từng bước qua, để lại chấp niệm và dấu vết trên Vấn Đạo Thiên Đài. Vì vậy “Đại Thừa” trong wiki được giới thiệu như cảnh giới của sự viên mãn trước kiếp cuối — mạnh, nhưng chưa phải đã thoát khỏi phép thử của Hạ Giới.',tip:'Gom đủ mọi chuẩn bị cho kiếp cuối của Hạ Giới.'},
  {name:'Độ Kiếp',art:'realm9',region:'Thiên Môn Sơn',tone:'Nghịch lôi vấn thiên',desc:'Định nghĩa — Độ Kiếp là đỉnh cao hiện tại của con đường tu hành Hạ Giới, nơi tu sĩ phải đối diện lôi kiếp và phép thử trước ngưỡng phi thăng. “Độ” là vượt qua, “Kiếp” là tai kiếp: sức mạnh ở cảnh giới này không chỉ nằm ở chiến lực mà còn ở việc toàn bộ nền tảng tích lũy từ những cảnh giới trước có đủ để chịu được thử thách cuối hay không. Thiên Môn Sơn và Cửu Tiêu Kiếp Hải là biểu tượng rõ nhất của mốc này. Độ Kiếp vì thế không nên được xem như một cấp độ cuối đơn thuần, mà là bài tổng kiểm tra của cả một đời tu trước khi hướng tới tầng thế giới cao hơn.',tip:'Đừng xem Độ Kiếp như một cấp cuối; đây là phép thử tổng hợp của cả đời tu.'}
]

export const historyTimeline = [
  {label:'Dấu tích thời cổ',status:'[ĐÃ XÁC NHẬN]',text:'Cổ Mộ Quần là nơi chôn cất của những tông môn đã biến mất trong lịch sử; Thái Cổ Tàn Điện vẫn còn dị tượng và thần văn. Điều này xác nhận Hạ Giới từng có các thế lực tu hành cổ xưa hơn hiện tại, nhưng tên tuổi và niên đại cụ thể chưa được công bố.'},
  {label:'Thời đại di tích & trận pháp',status:'[ĐÃ XÁC NHẬN]',text:'Hắc Phong Cốc còn Tàn Trận Đài và Cổ Khoáng Động với dấu vết trận pháp bị phá, cho thấy nơi đây từng chứng kiến hoạt động tu luyện và tranh đoạt quy mô lớn.'},
  {label:'Con đường của các Đại Thừa',status:'[ĐÃ XÁC NHẬN]',text:'Đăng Thiên Cổ Lộ được mô tả là con đường từng có vô số Đại Thừa đi qua. Vấn Đạo Thiên Đài còn chấp niệm của người trước, cho thấy phi thăng là một truyền thống lâu đời.'},
  {label:'Thiên Môn & Kiếp Hải',status:'[ĐÃ XÁC NHẬN]',text:'Thiên Môn Sơn là đỉnh Hạ Giới, nơi lôi kiếp và khí tức phi thăng giao nhau. Thiên Môn Kiếp Hải là biển lôi để tu sĩ Độ Kiếp mài giũa thân tâm trước khi phi thăng.'},
  {label:'Tiên Giới & Thần Giới',status:'[ĐÃ XÁC NHẬN]',text:'Thế giới được định hướng theo Hạ Giới → Tiên Giới → Thần Giới. Hai tầng trên hiện chưa mở cho người chơi; lịch sử cụ thể của chúng vẫn [CẦN XÁC MINH].'}
]

const npcCore = [
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

const bestiaryCore = [
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

/* ---- Bổ sung từ dữ liệu bản đồ: quái & NPC chưa có mục biên tập riêng ---- */
const allSites = game.world.regions.flatMap(r => r.sites.map(s => ({...s, region: r.name, realm: r.realm})))
const TIER_ART = ['tier0', 'tier1', 'electricQilin', 'tier3', 'tier4', 'armoredWarrior', 'celestialWolf', 'easternDragon', 'celestialKnight']
const realmIdx = n => game.realms.findIndex(r => r.name === n)
const seen = new Set(bestiaryCore.map(m => m.name))
const monsterExtras = []
game.monstersByTier.forEach((list, tier) => list.forEach(name => {
  if (seen.has(name)) return
  seen.add(name)
  const at = allSites.filter(s => s.monsters.includes(name))
  monsterExtras.push({
    name, realm: R(tier), region: [...new Set(at.map(s => s.region))].join(' · ') || R(tier), art: TIER_ART[tier], kind: 'Quái Hạ Giới',
    status: '[ĐÃ XÁC NHẬN TÊN]', generated: true,
    desc: at.length ? `Xuất hiện tại ${at.map(s => s.name).join(', ')}. Kỹ năng riêng và phần thưởng chưa được mô tả chi tiết.` : 'Thuộc bảng quái của cảnh giới này. Nơi xuất hiện cụ thể [CẦN XÁC MINH].'
  })
}))
export const bestiary = [...bestiaryCore, ...monsterExtras].sort((a, b) => realmIdx(a.realm) - realmIdx(b.realm))

const knownNpc = new Set(npcCore.map(n => n.name))
export const npcEntries = npcCore
export const npcOthers = allSites.flatMap(s => s.npcs.filter(n => !knownNpc.has(n)).map(n => ({name: n, place: `${s.name} · ${s.region}`, realm: R(s.realm)})))

export const sectRanks = game.sectRanks

/* Thiên Mệnh & Mảnh Phi Thăng: đọc từ src/game/features/meta.js (chưa sinh tự động). */
export const destinyUpgrades = [
  ['Thiên Tư', '+1 điểm phân bổ chỉ số khi tạo nhân vật mỗi cấp', [3, 5, 8, 12, 18]],
  ['Túi Càn Khôn', '+20 linh thạch khởi đầu mỗi cấp', [2, 3, 4, 6, 8]],
  ['Trường Sinh', '+5 năm thọ nguyên khởi đầu mỗi cấp', [3, 4, 6, 8, 12]],
  ['Đạo Tâm', '+3% tốc độ tu luyện vĩnh viễn mỗi cấp', [4, 6, 9, 13, 18]],
  ['Thiên Vận', '+1 Vận Khí khởi đầu mỗi cấp', [5, 9, 14]]
]
export const ascendFragments = {cost: [8, 10, 13, 17, 22, 28, 36, 46, 58, 73, 92, 115], titles: {3: 'Hành giả cầu phi', 6: 'Lữ khách thiên môn', 9: 'Chân nhân vấn đỉnh', 12: 'Thiên Đạo Chi Chủ'}}

const G = game
const N = n => String(n).replace('.', ',')

export const pages = [
  {id: 'home', title: 'Thiên Thư', kicker: 'Trang chủ',
    summary: 'Thiên Vân Đại Lục Wiki là đạo tàng dành cho người chơi: cơ chế, lịch sử, cảnh giới, nhân vật, tông môn, quái vật và những dấu tích của Hạ Giới được nối lại thành một bức tranh thống nhất.',
    quote: 'Tu tiên không tranh một sớm một chiều; người đi xa nhất thường là người biết lúc nào nên tiến, lúc nào nên giữ đạo tâm.'},

  {id: 'history', title: 'Thiên Sử', kicker: 'Lịch sử thế giới',
    summary: 'Không có niên biểu đầy đủ, nhưng Hạ Giới lưu lại đủ di tích để dựng nên một lược sử theo dấu vết: tông môn thất truyền, tàn điện Hóa Thần, cổ lộ Đại Thừa và Thiên Môn nơi vô số đời tu sĩ từng hướng tới.',
    quote: 'Cổ tích không nói hết sự thật, nhưng đá vỡ và mộ cũ chưa từng biết nói dối.'},

  {id: 'realms', title: 'Cảnh Giới Lục', kicker: 'Hệ thống tu luyện',
    summary: 'Chín cảnh giới của Hạ Giới tạo thành một trục tiến triển từ phàm tục tới Độ Kiếp. Mỗi cảnh giới không chỉ tăng sức mạnh mà còn đổi môi trường, hiểm họa và cách quản lý thọ nguyên.',
    quote: 'Một lần phá cảnh là thắng chính mình của hôm qua; một đời tu thành hay bại lại nằm ở cách giữ nền móng.'},

  {id: 'characters', title: 'Tu Sĩ', kicker: 'Nhân vật & chỉ số',
    summary: 'Chủng tộc, năm chỉ số nền, linh căn và thiên phú quyết định nhịp phát triển của mỗi đời tu. Không có lựa chọn mạnh nhất tuyệt đối, chỉ có lựa chọn hợp con đường hơn.',
    source: 'Nguồn: core/data.js, core/player.js, features/ha_gioi_fix.js (bản vá cuối cùng ghi đè bảng chủng tộc).',
    sections: [
      {title: 'Năm chỉ số nền', bullets: G.stats.map(s => `${s}: ${G.statDesc[s]}`)},
      {title: 'Khởi tạo một đời tu', bullets: [
        'Mỗi chỉ số gốc = 5 + điểm phân bổ + bổ chính chủng tộc (tối thiểu 1).',
        'Thọ nguyên khởi đầu = thọ nguyên cơ sở của chủng tộc + ngẫu nhiên từ −5 đến +10 năm.',
        'Khởi đầu với 15 linh thạch.',
        'Có 5 lượt gieo lại Tuổi / Chủng Tộc / Linh căn khi tạo nhân vật; đạo hiệu gieo không giới hạn.',
        'Thiên Mệnh của các kiếp trước cộng thêm điểm phân bổ, linh thạch, thọ nguyên và Vận Khí khởi đầu (xem Đạo Pháp & Cơ Chế).'
      ]},
      {title: 'Chủng tộc', table: 'races'},
      {title: 'Chỉ số hóa thành sức mạnh thế nào', bullets: [
        'Cấp = cảnh giới × 9 + tầng (Phàm Nhân tầng 1 là cấp 1; Độ Kiếp tầng 9 là cấp 81).',
        'Tu vi mỗi tháng nhập định = (4 + Căn Cốt × 1,5 + Ngộ Tính × 2 + cấp × 1,5) × (1 + tổng tăng tốc) × 1,25; mỗi tháng dao động ngẫu nhiên 0,8–1,3 lần.',
        'Tổng tăng tốc tu luyện cộng từ: linh căn, công pháp, pháp khí, tông môn, chức vị, Đạo Tâm (Thiên Mệnh) và Thích Nghi (chủng tộc Nhân).',
        'Khí huyết tối đa = (80 + Căn Cốt × 8 + cảnh giới × 40 + công pháp + pháp khí) × (1 + thưởng linh căn), nhân thêm 1,12 với chủng tộc Thú.',
        'Chiến lực = (cấp × 3 + Căn Cốt × 2 + 5 + công pháp + pháp khí + tông môn) × (1 + thưởng linh căn), nhân thêm 1,06 với chủng tộc Ma.',
        'Phòng ngự = (6 + cấp × 1,1 + Căn Cốt × 1,5 + cảnh giới × 4) × (1 + thưởng linh căn).',
        'Chí mạng = 5% + Vận Khí × 0,4% + thưởng linh căn, tối đa 60%.',
        'Né tránh = 3% + Phúc Duyên × 0,5% + thưởng linh căn, tối đa 42%.',
        'Hồi phục khí huyết mỗi tháng nhập định = 4% × (1 + thưởng linh căn), nhân thêm 1,25 với chủng tộc Yêu.',
        'Giá mua ở cửa hàng giảm 0,5% cho mỗi điểm Tướng Mạo trên 5, tối đa 15%.'
      ]}
    ]},

  {id: 'roots', title: 'Linh Căn Phổ', kicker: 'Linh căn & ngũ hành',
    summary: 'Linh căn quyết định bạn tu nhanh hay chậm, bền hay mỏng, hợp bí cảnh nào. Ít nguyên tố thì nhanh nhưng ít được bù; nhiều nguyên tố thì chậm nhưng được bù thọ nguyên và giữ tu vi khi đột phá hỏng.',
    quote: 'Căn cốt thuần là đường tắt; căn cốt tạp là đường dài, nhưng trời không bỏ rơi kẻ đi đường dài.',
    source: 'Nguồn: features/idle_data.js. Bản cân bằng linh căn 14/10/2026.',
    sections: [{title: 'Năm loại linh căn'}, {title: 'Nguyên tố & hiệu ứng'}, {title: 'Tương khắc & bí cảnh'}],
    keywords: G.elements.map(e => e.name).concat(G.rootTypes.map(r => r.name), ['Dị Linh Căn', 'tôi luyện'])},

  {id: 'skills', title: 'Tàng Kinh Các', kicker: 'Công pháp & pháp khí',
    summary: 'Công pháp học bằng linh thạch, pháp khí rèn bằng quặng. Công pháp mở theo cảnh giới và cộng dồn với nhau; pháp khí nhân theo phẩm chất khi rèn.',
    quote: 'Công pháp cao mà thân thể không theo kịp thì chỉ là quyển sách đẹp.',
    source: 'Nguồn: core/data.js + features/ha_gioi_fix.js (5 công pháp và 5 pháp khí hậu kỳ được thêm ở bản vá).',
    sections: [{title: 'Công pháp'}, {title: 'Pháp khí'}],
    keywords: G.skills.map(s => s.name).concat(G.gear.map(g => g.name))},

  {id: 'npcs', title: 'Danh Giám Nhân Vật', kicker: 'NPC quan trọng',
    summary: 'Những nhân vật dưới đây đều xuất hiện tại các địa điểm cụ thể của Hạ Giới. Wiki chỉ khẳng định vai trò và nơi xuất hiện đã thấy rõ; tiểu sử chưa công bố giữ [CẦN XÁC MINH].',
    quote: 'Người gặp trên đường có thể chỉ nói một câu, nhưng đôi khi một câu ấy đủ đổi cả vận mệnh.'},

  {id: 'sects', title: 'Tông Môn Phổ', kicker: 'Thế lực & quan hệ',
    summary: 'Ba tông môn hiện có bản sắc rõ: Thanh Vân Tông thiên chính đạo, Huyết Sát Môn đi ma đạo, Vạn Dược Cốc lấy đan đạo làm gốc. Chỉ quan hệ được thể hiện rõ mới được ghi là đã xác nhận.',
    quote: 'Tông môn là nơi che mưa, cũng là nơi một ân oán cá nhân có thể hóa thành đại thế.'},

  {id: 'bestiary', title: 'Yêu Thú & Boss Đồ Lục', kicker: 'Quái vật & đại địch',
    summary: 'Từ Hắc Lang ngoài thành tới Kiếp Hải Ma Thần ở đỉnh Hạ Giới, quái vật tăng cấp cùng cảnh giới. Hình chỉ được dùng đúng mức độ xác nhận; hình đại diện sẽ được ghi rõ.',
    quote: 'Yêu thú mạnh chưa chắc đáng sợ nhất; đáng sợ nhất là gặp đúng thứ mình chưa hiểu.'},

  {id: 'items', title: 'Bách Bảo Các', kicker: 'Vật phẩm & cửa hàng',
    summary: 'Đan dược, nguyên liệu và pháp khí là công cụ để rút ngắn thời gian, vá điểm yếu và sống sót qua bình cảnh.',
    source: 'Nguồn: core/data.js (TT.ITEMS, TT.SHOP), core/game.js (shopPrice), features/ha_gioi_fix.js. Trần cộng dồn Phá Cảnh Đan là 30% theo bản vá; một số dòng mô tả trong game vẫn ghi 40%.',
    sections: [
      {title: 'Đan dược & vật phẩm cửa hàng', table: 'items'},
      {title: 'Nhập hàng & giá', bullets: [
        `Cửa hàng nhập hàng lại sau ${G.shop.RESTOCK_S / 60} phút thật; vật phẩm có giới hạn mua được tính theo từng kỳ nhập.`,
        'Giá mua = giá gốc × (1 + 0,5 × cảnh giới hiện tại) × hệ số tông môn (Vạn Dược Cốc nhân 0,7), rồi giảm thêm theo Tướng Mạo (tối đa 15%).',
        'Hàng của cảnh giới kế tiếp hiển thị nhưng bị khóa cho tới khi bạn đạt cảnh giới đó.',
        'Nguyên liệu nghề phụ (Hạt Linh Thảo, Quặng Linh Thiết, Giấy Phù) cũng mua ở đây với cùng quy tắc giá; bán lại bằng một nửa giá gốc.'
      ]}
    ]},

  {id: 'crafts', title: 'Đan Phòng', kicker: 'Nghề phụ: linh điền, luyện đan, vẽ phù, luyện khí',
    summary: 'Bốn nghề phụ chạy theo thời gian thật và có minigame riêng. Điểm tổng của các công đoạn quyết định phẩm chất thành phẩm; dưới 30% là thất bại.',
    quote: 'Lò lửa không phân biệt kẻ giàu người nghèo, chỉ phân biệt kẻ giữ được tay ổn và kẻ không.',
    source: 'Nguồn: core/data.js, features/farm.js, features/crafts.js, ui guide.',
    sections: [{title: 'Phẩm chất'}, {title: 'Linh điền'}, {title: 'Luyện đan'}, {title: 'Vẽ phù lục'}, {title: 'Luyện khí'}],
    keywords: ['Linh Thảo', 'Giấy Phù', 'Quặng Linh Thiết', 'minigame'].concat(G.alch.map(a => a.name), G.talis.map(t => t.name))},

  {id: 'beginner', title: 'Nhập Đạo', kicker: 'Hướng dẫn tân thủ',
    summary: 'Người mới nên hiểu nhịp thời gian thật, thọ nguyên, khu vực và tài nguyên trước khi lao vào tối ưu từng con số.',
    quote: 'Hiểu luật trước, tối ưu sau.',
    sections: [
      {title: 'Ba điều đầu tiên', bullets: [
        'Thọ nguyên là tài nguyên. Tuổi chạm thọ nguyên là tọa hóa, kể cả khi bạn đang đóng game (thời gian vắng mặt vẫn được tính).',
        'Đột phá do bạn chủ động bấm; nhập định không bao giờ tự đột phá. Mỗi lần thử đều tiêu hết cộng dồn từ đan/phù, dù thành hay bại.',
        'Tu vi tăng chủ yếu theo thời gian thật. Lịch Luyện và Nghỉ ngơi chỉ hồi chiêu 10 giây, không phải nút để bấm liên tục.'
      ]},
      {title: 'Lộ trình mở đầu', bullets: [
        'Khởi đầu có 15 linh thạch. Dưỡng Khí Quyết (30 linh thạch) cộng 20% tốc độ tu luyện, là công pháp đầu tiên đáng mua.',
        'Vào tông môn khi đủ Luyện Khí: mỗi tông môn nghiêng về một hướng (tu luyện, chiến lực hoặc đan đạo). Xem Tông Môn Phổ để chọn.',
        'Bật Linh điền sớm: Linh Thảo là nguyên liệu của Tụ Khí Đan, Hồi Huyết Đan và Phá Cảnh Đan.',
        'Nhớ nghỉ ngơi trước đột phá lớn: từ Kim Đan trở lên, đại đột phá phải qua Thiên Kiếp và khí huyết về 0 là chết.'
      ]},
      {title: 'Lỗi dễ mắc (suy ra từ cơ chế đã xác nhận)', bullets: [
        'Cộng dồn đan/phù đột phá vượt 30% là lãng phí: phần dư bị cắt.',
        'Bỏ lỡ kỳ nhập hàng 30 phút: hàng có giới hạn mua không cộng dồn sang kỳ sau.',
        'Chỉ nhìn tu vi mà quên thọ nguyên: linh căn nhiều nguyên tố có thọ nguyên bù thêm, linh căn thuần thì ít hơn.',
        'Đóng game quá 2 giờ mỗi lần: phần vượt quá không được tính thêm, nhưng thọ nguyên cạn trong lúc vắng mặt vẫn gây tọa hóa.',
        'Đi vực quá sức: vực cao hơn cho thưởng lớn hơn nhưng mức nguy hiểm tăng theo từng bậc.'
      ]}
    ]},

  {id: 'mechanics', title: 'Đạo Pháp & Cơ Chế', kicker: 'Cơ chế & chiến thuật',
    summary: 'Tu luyện, đột phá, lịch luyện, linh điền, nghề phụ, bí cảnh và tông môn tạo thành vòng lặp chính của Hạ Giới.',
    source: `Nguồn: features/idle_data.js, features/ha_gioi_fix.js, core/game.js, features/sect.js, features/meta.js · bản ${G.gameVersion}.`,
    sections: [
      {title: 'Nhịp thời gian thật', bullets: [
        `1 nhịp = ${G.idle.TICK_MS / 1000} giây thật; ${G.idle.MONTH_TICKS} nhịp = 1 tháng trong game, tức khoảng ${G.idle.MONTH_TICKS * G.idle.TICK_MS / 1000} giây thật mỗi tháng.`,
        `Khi đóng game, thời gian vẫn trôi: ${G.idle.FULL_RATE_S / 60} phút đầu tính đủ, phần sau tính ${G.idle.OFFLINE_RATE * 100}%, tối đa ${G.idle.OFFLINE_CAP_S / 3600} giờ (đã quy đổi) mỗi lần vắng mặt.`,
        'Nếu thọ nguyên cạn trong lúc vắng mặt, nhân vật tọa hóa. Màn chính luôn hiển thị thời gian vắng mặt an toàn.',
        `Lịch Luyện và Nghỉ ngơi có hồi chiêu ${G.idle.ACT_CD_S} giây thật.`
      ]},
      {title: 'Nhập định & linh thạch', bullets: [
        'Tu vi tăng theo từng tháng nhập định (công thức ở trang Tu Sĩ).',
        'Luyện hóa linh thạch: tiêu 10 linh thạch để nhận tu vi bằng 1,5 tháng nhập định.',
        'Nghỉ ngơi hồi 50% khí huyết tối đa.'
      ]},
      {title: 'Lịch luyện', bullets: [
        'Mỗi lần lịch luyện gieo một số d100 cộng thêm (Phúc Duyên × 1,1 + Vận Khí × 0,7), rồi xét theo ngưỡng:',
        '≥ 118: cơ duyên, nhận tu vi bằng 3–5 tháng nhập định × hệ số vực.',
        '86–117: tìm thấy tài nguyên, nhận (5–20 + cảnh giới × 10) × hệ số vực linh thạch.',
        '54–85: chạm trán yêu thú (xem mục kế).',
        '28–53: gặp tu sĩ; khả năng được tặng linh thạch phụ thuộc Tướng Mạo.',
        '< 28: hiểm họa. Xác suất tránh được = 8% + Vận Khí × 1,8%, tối đa 55%; nếu không tránh được, mất (5–15 + nguy hiểm × 4) khí huyết và có thể chết.'
      ]},
      {title: 'Chạm trán yêu thú', bullets: [
        'Lực quái = cấp × 3 + ngẫu nhiên 3–16 + bậc quái × 7 + nguy hiểm vực × 3. Bậc quái bằng cảnh giới của bạn.',
        'Chiến lực của bạn = chiến lực + ngẫu nhiên 0–10 + phù đang dùng; chí mạng nhân 1,45. Thắng khi chiến lực của bạn ≥ lực quái.',
        'Thắng: nhận tu vi và linh thạch nhân hệ số vực, mất một ít khí huyết.',
        'Thua: có thể né; nếu không, chịu sát thương giảm theo phòng ngự. Hộ Thân Phù giảm thêm sát thương cho trận kế tiếp. Khí huyết về 0 là chết.'
      ]},
      {title: 'Kỳ ngộ', bullets: [
        'Mỗi tháng nhập định có xác suất gặp kỳ ngộ = 6% + Phúc Duyên × 0,6% + Vận Khí × 0,2% (+1,2% với Tiên Duệ), tối đa 30%; sau mỗi kỳ ngộ phải chờ 3–6 tháng nhập định.',
        'Độ hiếm theo trọng số: Thường 62, Hiếm 26, Cực hiếm 10, Thiên cơ 2. Phúc Duyên làm tăng cơ hội ra loại hiếm; Vận Khí giảm cơ hội dính kỳ ngộ xấu.'
      ]},
      {title: 'Tông môn & chức vị', body: 'Nhiệm vụ tông môn chạy theo thời gian thật, kể cả khi đóng game; cần khí huyết từ 40% và không đang ở bí cảnh. Hoàn thành nhận linh thạch, tu vi, cống hiến; thất bại mất khí huyết. Nhiệm vụ nổi bật trong ngày thưởng gấp 1,5 lần. Chức vị tăng theo tổng cống hiến đã kiếm và mở thêm bậc nhiệm vụ.'},
      {title: 'Thiên Mệnh, thành tựu & Phi Thăng', bullets: [
        'Khi chết hoặc phi thăng, bạn nhận điểm Thiên Mệnh để mua nâng cấp vĩnh viễn (xem bảng ở trang Thiên Biến).',
        'Có 12 Mảnh Phi Thăng đổi bằng điểm Thiên Mệnh, giá tăng dần, có danh hiệu ở mốc 3/6/9/12 mảnh.',
        'Thành tựu và Bia Thiên Đạo (lịch sử các kiếp) được lưu theo tài khoản.'
      ]},
      {title: 'Lưu dữ liệu', body: 'Game dùng mô hình database-only: tiến trình nằm trên máy chủ, tab đang chơi chỉ giữ bản tạm thời. Không có chế độ chơi offline rồi đồng bộ sau. Khi máy chủ có bản mới hơn, bản trên máy chủ thắng và game tải lại, vì vậy tránh mở cùng một tài khoản ở nhiều tab.'}
    ]},

  {id: 'breakthrough', title: 'Đột Phá Pháp', kicker: 'Công thức & máy tính đột phá',
    summary: 'Đột phá là cửa ải quyết định tốc độ và độ an toàn của cả một đời tu. Trang này gồm công thức đang chạy trong game và một máy tính để bạn thử trước khi liều.',
    quote: 'Tính trước một lần, đỡ tiếc ba lần.',
    source: 'Nguồn: core/player.js + features/ha_gioi_fix.js. Công thức trên trang này được kiểm chứng tự động với lớp Player thật của game.',
    sections: [{title: 'Máy tính đột phá'}, {title: 'Quy tắc đột phá'}, {title: 'Tu vi cần theo cảnh giới'}],
    keywords: ['tỉ lệ đột phá', 'thiên kiếp', 'tu vi', 'thọ nguyên', 'áp chế']},

  {id: 'secrets', title: 'Bí Cảnh Lục', kicker: 'Bí cảnh & thám hiểm',
    summary: 'Bí cảnh là các chuyến thám hiểm chạy theo thời gian thật, nhiều tầng, tầng cuối có Thủ Lĩnh. Nguyên tố của bí cảnh tương tác với linh căn của bạn.',
    source: 'Nguồn: features/idle_data.js, features/ha_gioi_fix.js.',
    sections: [{title: 'Danh sách bí cảnh'}, {title: 'Cách một chuyến thám hiểm diễn ra'}],
    keywords: G.secrets.map(s => s.name)},

  {id: 'world', title: 'Thiên Vân Địa Đồ', kicker: 'Bản đồ & địa điểm',
    summary: 'Hạ Giới gồm chín khu vực từ Phàm Nhân Thành tới Thiên Môn Sơn, mỗi khu có ba địa điểm với quái, tài nguyên và nhân vật riêng. Tiên Giới và Thần Giới đã có hình giới thiệu nhưng hiện chưa mở cho người chơi.',
    source: 'Nguồn: maps/ha_gioi.js (27 địa điểm), features/ha_gioi_fix.js (hệ số thưởng & nguy hiểm đang dùng).',
    sections: [{title: 'Cửu vực Hạ Giới'}, {title: 'Tiên Giới & Thần Giới'}],
    keywords: G.world.regions.flatMap(r => [r.name, ...r.sites.map(s => s.name)])},

  {id: 'lore', title: 'Vạn Cổ Ký', kicker: 'Lore',
    summary: 'Lore được ghi theo dấu tích, mô tả địa điểm và những gì game đã xác nhận; khoảng trống lịch sử không bị lấp bằng suy đoán vô căn cứ.',
    sections: [{title: 'Ba tầng thế giới', body: 'Trật tự hiện được xác nhận là Hạ Giới → Tiên Giới → Thần Giới. Hai tầng trên chưa mở cho người chơi.'}]},

  {id: 'updates', title: 'Thiên Biến', kicker: 'Cập nhật',
    summary: 'Nhật ký thay đổi chính thức lấy thẳng từ hộp "Hướng dẫn & Cập nhật" trong game, cùng các quy tắc đang áp dụng. Nội dung dự kiến không được ghi như tính năng đã phát hành.',
    source: `Nguồn: ui/guide.js (TT.GUIDE_DOCS) · bản game ${G.gameVersion}.`,
    sections: [{title: 'Nhật ký cập nhật'}, {title: 'Quy tắc đang áp dụng'}, {title: 'Nâng cấp Thiên Mệnh'}, {title: 'Lộ trình công khai'}]},

  {id: 'glossary', title: 'Đạo Điển', kicker: 'Thuật ngữ',
    summary: 'Giải thích thuật ngữ cốt lõi bằng tiếng Việt nhất quán với game.',
    sections: [{title: 'Thuật ngữ', bullets: [
      'Cảnh giới: bậc tu hành lớn. Có 9 cảnh giới từ Phàm Nhân tới Độ Kiếp, mỗi cảnh giới 9 tầng.',
      'Tầng: bậc nhỏ trong một cảnh giới. Tầng 9 là điểm chuyển cảnh giới.',
      'Tu vi: điểm kinh nghiệm tu hành; đủ tu vi cần cho tầng hiện tại mới được thử đột phá.',
      'Đột phá: vượt giới hạn hiện tại. Đại đột phá là lần đột phá ở tầng 9 để sang cảnh giới mới.',
      'Thiên Kiếp: chuỗi lôi kiếp giáng xuống khi đại đột phá lên Kim Đan trở lên; khí huyết về 0 là chết.',
      'Thọ nguyên: tuổi thọ của đời tu. Tăng khi đại đột phá và khi dùng một số vật phẩm.',
      'Tọa hóa: kết thúc một đời tu sĩ, gồm cả chết do thọ nguyên cạn.',
      'Linh căn: thiên phú nguyên tố của nhân vật (Thiên, Song, Tam, Tứ, Ngũ hoặc Dị Linh Căn).',
      'Tôi luyện: cường hóa nguyên tố linh căn, mỗi cấp tăng 8% hiệu quả nguyên tố, tối đa 10 cấp.',
      'Linh thạch: tiền tệ của Hạ Giới.',
      'Chiến lực / Khí huyết: sức công kích tổng hợp / sinh lực tối đa.',
      'Lịch luyện: hành động khám phá vực hiện tại (tìm tài nguyên, gặp quái, kỳ ngộ).',
      'Nhập định: trạng thái tu luyện nền, tu vi tăng theo thời gian thật.',
      'Kỳ ngộ: sự kiện ngẫu nhiên khi tu luyện, chia thành Thường, Hiếm, Cực hiếm, Thiên cơ.',
      'Bí cảnh: chuyến thám hiểm nhiều tầng có Thủ Lĩnh ở tầng cuối.',
      'Linh điền: ruộng thuốc, trồng Linh Thảo theo thời gian thật.',
      'Thiên Mệnh: điểm và nâng cấp vĩnh viễn nhận được sau mỗi kiếp.',
      'Phi thăng: vượt qua đại đột phá cuối ở Độ Kiếp, kết thúc hành trình Hạ Giới.'
    ]}]},

  {id: 'faq', title: 'Giải Nghi', kicker: 'FAQ',
    summary: 'Những câu hỏi người chơi dễ gặp nhất, trả lời theo đúng cơ chế đang chạy.',
    sections: [
      {title: 'Tiên Giới và Thần Giới đã mở chưa?', body: 'Chưa. Cả hai đã có module bản đồ và hình giới thiệu nhưng gameplay chưa bật.'},
      {title: 'Phá Cảnh Đan cộng dồn tối đa bao nhiêu?', body: 'Tối đa 30% tỉ lệ đột phá cho lần thử kế tiếp. Một số mô tả trong game vẫn ghi 40% (văn bản cũ); giá trị chạy thực tế là 30% theo bản vá cân bằng.'},
      {title: 'Đột phá có tự động không?', body: 'Không. Nhập định không bao giờ tự đột phá; bạn phải chủ động bấm khi đủ tu vi.'},
      {title: 'Đột phá thất bại mất gì?', body: 'Mất một phần tu vi (giữ lại 65% ở tầng nhỏ, 55% ở đại đột phá, cộng thêm phần bù của linh căn và không quá 80%), mất khí huyết, và tiêu hết cộng dồn đan/phù.'},
      {title: 'Đóng game thì sao?', body: 'Thời gian vẫn trôi: 2 phút đầu tính đủ, sau đó 50%, tối đa 2 giờ mỗi lần. Nếu thọ nguyên cạn lúc vắng mặt, nhân vật tọa hóa.'},
      {title: 'Vì sao không chơi offline được?', body: 'Tiến trình lưu trên cơ sở dữ liệu máy chủ. Game không còn lưu gameplay vào trình duyệt và không có chế độ offline rồi đồng bộ sau.'},
      {title: 'Mở nhiều tab thì có sao không?', body: 'Nên tránh. Khi máy chủ có bản lưu mới hơn, bản máy chủ thắng và tab cũ phải tải lại, có thể mất tiến trình chưa kịp lưu ở tab đó.'},
      {title: 'Chủng tộc nào tốt nhất?', body: 'Không có chủng tộc mạnh tuyệt đối. Thú nhiều khí huyết nhưng Ngộ Tính thấp; Linh dễ đột phá hơn nhưng Căn Cốt thấp; Nhân tu nhanh hơn 8% và không có điểm yếu chỉ số. Hãy chọn theo lối chơi.'},
      {title: 'Bảo trì là gì?', body: 'Khi máy chủ bảo trì, người chơi được chuyển sang trang bảo trì; banner thông báo hiển thị trước đó. Thông tin chi tiết nằm ở roadmap và thông báo trong game.'}
    ]}
]
