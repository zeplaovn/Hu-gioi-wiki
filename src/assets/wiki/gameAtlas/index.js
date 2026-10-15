import p1 from './part1.js'
import p2 from './part2.js'
import p3 from './part3.js'
import p4 from './part4.js'
import p5 from './part5.js'
import p6 from './part6.js'
import p7 from './part7.js'
import p8 from './part8.js'
import p9 from './part9.js'

export const gameAtlas=`data:image/webp;base64,${p1}${p2}${p3}${p4}${p5}${p6}${p7}${p8}${p9}`

const tiles={
 alchemist:0,elder:1,swordImmortal:2,foxMaiden:3,hermit:4,blacksmith:5,
 oracle:6,merchant:7,demonScholar:8,gatekeeper:9,disciple:10,emperor:11,
 armoredWarrior:12,celestialKnight:13,celestialWolf:14,cosmicMage:15,
 easternDragon:16,electricQilin:17,emeraldGuardian:18,fantasyCrane:19,
 nineTailedFox:20,stoneGolem:21,
 realm1:22,realm2:23,realm3:24,realm4:25,realm5:26,realm6:27,realm7:28,realm8:29,realm9:30,
 tier0:14,tier1:12,tier3:20,tier4:16
}

export const atlasTile=key=>{
 const i=tiles[key]
 if(i===undefined)return null
 return {index:i,col:i%6,row:Math.floor(i/6)}
}
