import fs from 'node:fs'
import {createHash} from 'node:crypto'
const data=JSON.parse(fs.readFileSync(new URL('../src/content/wiki-v161.json',import.meta.url),'utf8'))
const fail=message=>{throw new Error(message)}
const expected={realms:15,equipment:82,sets:9,pills:60,herbs:72,materials:54,monsters:30,roots:7,destiny:17,affixes:20,techniques:14,skills:30,npc:55,factions:11}
const ids=new Set()
if(data.meta.version!=='1.6.1')fail('Sai phiên bản dữ liệu')
for(const entry of data.entities){
  if(!entry.id||!entry.name||!entry.type||!entry.source||!entry.detail)fail('Hồ sơ thiếu trường bắt buộc: '+entry.id)
  if(ids.has(entry.id))fail('ID trùng: '+entry.id)
  ids.add(entry.id)
}
for(const [type,count] of Object.entries(expected)){
  const actual=data.entities.filter(x=>x.type===type).length
  const group=data.categories.find(x=>x.id===type)
  if(actual!==count||group?.count!==count)fail('Số lượng sai nhóm '+type+': '+actual)
}
if(data.entities.length!==476)fail('Sai số hồ sơ v1.6.1')
if(data.chapters.length!==12||data.xpThresholds.length!==135)fail('Sai số chương hoặc tầng XP')
const realms=data.entities.filter(x=>x.type==='realms')
for(const realm of realms){
  const rows=data.xpThresholds.filter(x=>x.stage_id===realm.id)
  if(rows.length!==9||rows.some((x,i)=>x.tier!==i+1))fail('Sai dữ liệu tầng: '+realm.id)
}
// Danh sách chuỗi cấm chỉ lưu dạng SHA-256 (chuẩn hóa chữ thường, 1–3 từ liền nhau) để chính repo công khai không tiết lộ chúng.
const bannedHashes=new Set(['13e372bc39d50b6046db4e75e41a22eee04e4c5974112e51761762204a9f7d44','502ca68acf76f81ed240e59b58b63e95d4508dee4baa662f9d51a440fcde586c','28e94269af7944c4ee52dca274dd39ccb6d916efbcbf80096dc5e0ccf422c463','43ced87732d8c601ebc97c86d1c25c697e4ad4e5042666724fb26abb94496c17','56b47b16b49f6f1e2592d8f9d507d8d2b3263e4ca2fd6cbaa289e318217a075c','adabef77303fde672fb7cfb4858f31068ac3afb02c8e1598c25efe79dc487d0b'])
const sha=t=>createHash('sha256').update(t).digest('hex')
const containsBanned=text=>{const w=text.toLowerCase().split(/[^\p{L}\p{N}_]+/u).filter(Boolean);for(let n=1;n<=3;n++)for(let i=0;i+n<=w.length;i++)if(bannedHashes.has(sha(w.slice(i,i+n).join(' '))))return true;return false}
if(containsBanned(JSON.stringify(data)))fail('Phát hiện nội dung nội bộ trong dữ liệu công khai')
// Nhãn nguồn công khai phải trung tính: không lộ tên file thiết kế, CSV hay vai trò "bí mật".
for(const entry of data.entities){
  if(/\.(csv|md|xlsx|json|zip)\b/i.test(entry.source))fail('Nhãn nguồn lộ tên file nội bộ: '+entry.id)
  if(/bí mật/i.test(JSON.stringify(entry.detail)))fail('Hồ sơ gắn nhãn bí mật: '+entry.id)
}
if(/\.(csv|md|xlsx|zip)\b|Balance Master/i.test(JSON.stringify(data.meta)))fail('Meta lộ nguồn nội bộ')

const currencyLabels={'Hạ Giới':'Linh Thạch hạ phẩm','Linh Giới':'Linh Thạch thượng phẩm','Tiên Giới':'Tiên Ngọc thượng phẩm'}
for(const entry of data.entities){
  const unit=entry.detail.currency
  if(unit&&unit!=='TM'&&unit!==currencyLabels[entry.world])fail('Đơn vị tiền sai ở '+entry.id+': '+unit)
}
const currencyMeta=data.meta.currencySystem
if(!Array.isArray(currencyMeta)||currencyMeta.length!==3||!currencyMeta.some(x=>x.extra==='Tiên Ngọc cực phẩm'))fail('Thiếu khai báo phẩm cấp tiền tệ Tiên Giới')
console.log('PASS v1.6.1: '+data.entities.length+' hồ sơ, '+data.categories.length+' nhóm, '+data.xpThresholds.length+' tầng, '+data.chapters.length+' chương; không có chuỗi bí mật đã kiểm soát.')
