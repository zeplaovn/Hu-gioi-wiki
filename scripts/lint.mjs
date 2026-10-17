/** Dependency-light static lint. Until ESLint/Prettier can be installed, use
 * esbuild's JSX parser (installed with Vite) or local TypeScript parser.
 * This does not claim to implement ESLint's full rule set.
 */
import fs from 'node:fs'
import path from 'node:path'
import {execFileSync} from 'node:child_process'
import {createRequire} from 'node:module'

const require = createRequire(import.meta.url)
const collect = dir => fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
  const file=path.join(dir,entry.name)
  return entry.isDirectory() ? collect(file) : /\.(mjs|js|jsx)$/.test(entry.name) ? [file] : []
})
const files=[...collect('src'),...collect('scripts'),'vite.config.js','postcss.config.js','tailwind.config.js']
let parser
try { parser={name:'esbuild',parse:async(file,source)=>{const {transform}=await import('esbuild');await transform(source,{loader:file.endsWith('.jsx')?'jsx':'js',format:'esm',jsx:'automatic'})}} }
catch { /* import is deferred; fallback below */ }
async function getParser() {
  try {await import('esbuild');return parser} catch {}
  try {
    const ts=require('typescript')
    return {name:'TypeScript (local fallback)',parse:async(file,source)=>{
      const out=ts.transpileModule(source,{fileName:file,reportDiagnostics:true,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}})
      if(out.diagnostics?.length)throw new Error(out.diagnostics.map(d=>ts.flattenDiagnosticMessageText(d.messageText,' ')).join('\n'))
    }}
  } catch {throw new Error('Thiếu parser JSX (cần npm ci để cài esbuild)')}
}
const errors=[]
const jsx=await getParser()
for(const file of files){
  const source=fs.readFileSync(file,'utf8')
  try{await jsx.parse(file,source)}catch(e){errors.push(`${file}: ${e.message}`)}
  for(const m of source.matchAll(/(?:import|export)\s+[^\n;]*?from\s+['"](\.[^'"]+)['"]/g)){
    const dest=path.resolve(path.dirname(file),m[1])
    if(!fs.existsSync(dest)&&!['.js','.jsx','.mjs','.json','.webp','.css'].some(ext=>fs.existsSync(dest+ext))) errors.push(`${file}: import không tồn tại ${m[1]}`)
  }
}
const app=fs.readFileSync('src/App.jsx','utf8')
if(app.includes('ASSET_ROOT')||app.includes('raw.githubusercontent.com/zeplaovn/Hu-gioi/main'))errors.push('App còn dùng hotlink chưa pin')
if(!app.includes('aria-current'))errors.push('Navigation thiếu aria-current')
if(!app.includes('NotFound'))errors.push('Không có route 404')
for(const required of ['index.html','roadmap.html','404.html'])if(!fs.existsSync(required))errors.push(`Thiếu public URL: ${required}`)
const output=`${jsx.name}: ${files.length} JS/JSX được phân tích; ${errors.length} lỗi\n`
console.log(output)
for(const error of errors)console.error('ERROR:',error)
process.exitCode=errors.length?1:0
