const b=document.querySelector('.burger'),m=document.querySelector('.menu');
b.addEventListener('click',()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const lb=document.querySelector('.lb');
if(lb){const im=lb.querySelector('img'),cp=lb.querySelector('p');
document.querySelectorAll('.gi').forEach(g=>g.addEventListener('click',()=>{const i=g.querySelector('img');if(!i)return;im.src=i.src;cp.textContent=i.alt;lb.hidden=false}));
const x=()=>lb.hidden=true;lb.addEventListener('click',e=>{if(e.target!==im)x()});document.addEventListener('keydown',e=>e.key==='Escape'&&x())}
const f=document.getElementById('bk');
if(f){f.d.min=new Date().toISOString().slice(0,10);
f.addEventListener('submit',e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));
const t=`Hi Sahil Beach Hut! I'd like to book.\nName: ${v.n}\nService: ${v.s}\nLocation: ${v.l}\nDate: ${v.d}\nDuration: ${v.t}`;
window.open('https://wa.me/923091331516?text='+encodeURIComponent(t),'_blank')})}

const hb=document.getElementById('hb');
if(hb){hb.d.min=new Date().toISOString().slice(0,10);
hb.addEventListener('submit',e=>{e.preventDefault();const v=Object.fromEntries(new FormData(hb));
const t=`Hi Sahil Beach Hut! I'd like to book a hut.\nBeach: ${hb.dataset.beach}\nName: ${v.n}\nHut: ${v.h}\nDate: ${v.d}\nGuests: ${v.g}\nJet ski: ${v.j}`;
window.open('https://wa.me/923091331516?text='+encodeURIComponent(t),'_blank')})}

document.querySelectorAll('[data-hut]').forEach(l=>l.addEventListener('click',()=>{const f=document.getElementById('hb');if(f)f.h.value=l.dataset.hut}));
