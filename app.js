const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const input=$("#searchInput"), sections=$$(".searchable"), empty=$("#searchEmpty"), side=$("#sidebar"), menu=$("#menuBtn");

menu.addEventListener("click",()=>side.classList.toggle("open"));
$$(".sidebar a").forEach(a=>a.addEventListener("click",()=>side.classList.remove("open")));

function normalize(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function runSearch(){
  const q=normalize(input.value.trim());
  let visible=0;
  sections.forEach(s=>{
    const ok=!q || normalize((s.dataset.title||"")+" "+s.innerText).includes(q);
    s.classList.toggle("search-hidden",!ok); if(ok) visible++;
  });
  empty.hidden=visible>0;
}
input.addEventListener("input",runSearch);

const links=$$(".sidebar a");
const obs=new IntersectionObserver(entries=>{
  const hit=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!hit)return;
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+hit.target.id));
},{rootMargin:"-15% 0px -70% 0px",threshold:[0,.25,.6]});
sections.forEach(s=>obs.observe(s));
