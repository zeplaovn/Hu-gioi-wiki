import fs from 'node:fs'
const data=JSON.parse(fs.readFileSync(new URL('../src/content/wiki-v161.json',import.meta.url),'utf8'))
const fail=message=>{throw new Error(message)}
const expected={realms:15,equipment:82,sets:9,pills:60,herbs:72,materials:54,monsters:30,roots:7,destiny:17,affixes:20,techniques:14,skills:30,npc:59,factions:11}
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
if(data.entities.length!==480)fail('Sai số hồ sơ v1.6.1')
if(data.chapters.length!==12||data.xpThresholds.length!==135)fail('Sai số chương hoặc tầng XP')
const realms=data.entities.filter(x=>x.type==='realms')
for(const realm of realms){
  const rows=data.xpThresholds.filter(x=>x.stage_id===realm.id)
  if(rows.length!==9||rows.some((x,i)=>x.tier!==i+1))fail('Sai dữ liệu tầng: '+realm.id)
}
const banned=/Hỗn Độn|Lục Mệnh|Cổ Môn|Kẻ Trấn Giữ|Bia Thiên Mệnh|02_NOI_BO_BI_MAT/i
if(banned.test(JSON.stringify(data.entities)))fail('Phát hiện nội dung nội bộ trong hồ sơ công khai')

const currencyLabels={'Hạ Giới':'Linh Thạch hạ phẩm','Linh Giới':'Linh Thạch thượng phẩm','Tiên Giới':'Tiên Ngọc thượng phẩm'}
for(const entry of data.entities){
  const unit=entry.detail.currency
  if(unit&&unit!=='TM'&&unit!==currencyLabels[entry.world])fail('Đơn vị tiền sai ở '+entry.id+': '+unit)
}
const currencyMeta=data.meta.currencySystem
if(!Array.isArray(currencyMeta)||currencyMeta.length!==3||!currencyMeta.some(x=>x.extra==='Tiên Ngọc cực phẩm'))fail('Thiếu khai báo phẩm cấp tiền tệ Tiên Giới')
console.log('PASS v1.6.1: '+data.entities.length+' hồ sơ, '+data.categories.length+' nhóm, '+data.xpThresholds.length+' tầng, '+data.chapters.length+' chương; không có chuỗi bí mật đã kiểm soát.')
