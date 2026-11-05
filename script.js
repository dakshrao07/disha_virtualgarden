const data=[
{name:"My Lily",photo:"disha-1.jpg",message:"Aapki calm aur graceful si presence bahut pyaari hh. Aapke saath simple moments bhi special feel hote hh, Dishaaaa ji. ♡"},
{name:"My Lotus",photo:"disha-2.jpg",message:"Aapki apni ek alag si beauty hh. Aap jis tarah apne way mein bloom karti hh na, woh bahut lovely hh. ♡"},
{name:"My White Rose",photo:"disha-3.jpg",message:"Aapke little gestures aur aapka thoughtful nature — sab kuch kitna pyaara hh. Aap kindness ko bhi effortless bana deti hh. 🤍"},
{name:"My Tulip",photo:"disha-4.jpg",message:"Aapka effortless charm hi alag hh. Aapko kuch extra karne ki zaroorat hi nahi, aapki apni magic hh. ♡"},
{name:"My Sunflower",photo:"disha-5.jpg",message:"Aap bina notice kiye bhi itni positivity le aati hh. Bas aapke har din mein smile karne ki dher saari reasons ho. ☀️"},
{name:"My Lavender",photo:"disha-6.jpg",message:"Aapki voice aur baaton mein ek alag si sukoon wali feeling hh. Aapka chhota sa hello bhi din better bana deta hh. 💜"},
{name:"My Daisy",photo:"disha-7.jpg",message:"Aapke cute expressions, aapki hasi aur woh softy side — sab mm favourite hh. Isse hamesha aise hi sambhaal ke rakhiyega. ♡"},
{name:"My Orchid",photo:"disha-8.jpg",message:"Orchid ki tarah aap bhi one of a kind hh. Aap jaisi koi aur nahi, aur honestly hona bhi nahi chahiye. ♡"}
];
let current=0;const modal=document.querySelector('#modal');
function openFlower(i){current=(i+data.length)%data.length;const f=data[current];document.querySelector('#dishaPhoto').src='assets/'+f.photo;document.querySelector('#modalTitle').textContent=f.name;document.querySelector('#modalMessage').textContent=f.message;document.querySelector('#counter').textContent=String(current+1).padStart(2,'0')+' / 08';modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeFlower(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.querySelectorAll('.flower-card').forEach((b,i)=>b.addEventListener('click',()=>openFlower(i)));
document.querySelector('#close').addEventListener('click',closeFlower);modal.addEventListener('click',e=>{if(e.target===modal)closeFlower()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeFlower()});document.querySelector('#prev').addEventListener('click',()=>openFlower(current-1));document.querySelector('#next').addEventListener('click',()=>openFlower(current+1));
const layer=document.querySelector('#petals');function dropPetal(){const p=document.createElement('span');p.className='petal';p.textContent=['✿','❀','·','♡'][Math.floor(Math.random()*4)];p.style.left=Math.random()*100+'vw';p.style.fontSize=(10+Math.random()*12)+'px';p.style.animationDuration=(12+Math.random()*9)+'s';layer.appendChild(p);setTimeout(()=>p.remove(),22000)}setInterval(dropPetal,1100);
