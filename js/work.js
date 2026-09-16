/* WORK — hover previews + project case-study panel */
/* ---------- work hover preview + View cursor ---------- */
const preview=document.getElementById('preview');
const viewCur=document.getElementById('viewCursor');
const slides=preview.querySelectorAll('.slide');
const list=document.getElementById('workList');
let px=0,py=0,cx=0,cy=0,raf;
function lerpLoop(){
  px+=(cx-px)*.12;py+=(cy-py)*.12;
  preview.style.transform='translate('+(px-170)+'px,'+(py-125)+'px) scale(1)';
  viewCur.style.transform='translate('+(cx-48)+'px,'+(cy-48)+'px)';
  raf=requestAnimationFrame(lerpLoop);
}
if(list&&fine){
  list.addEventListener('mouseenter',e=>{
    px=cx=e.clientX;py=cy=e.clientY;
    preview.classList.add('on');viewCur.classList.add('on');
    cancelAnimationFrame(raf);lerpLoop();
  });
  list.addEventListener('mousemove',e=>{cx=e.clientX;cy=e.clientY;});
  list.addEventListener('mouseleave',()=>{
    preview.classList.remove('on');viewCur.classList.remove('on');
    cancelAnimationFrame(raf);
  });
  list.querySelectorAll('.work-row').forEach(row=>{
    row.addEventListener('mouseenter',()=>{
      slides.forEach((s,i)=>s.classList.toggle('cur',i==row.dataset.pv));
    });
  });
}

/* ---------- project case-study panel ---------- */
const projects=[
 {cat:"Web System · Capstone · 2026",title:"Student Violation Tracking System",
  media:"pv1",mediaText:"VTS screenshot / demo video<br>images/vts.png",
  desc:"A multi-role platform for Golden West Colleges — Admin, OSA, Dean, Guard, and Student dashboards with QR-based violation recording, an offline-first PWA scanner that queues scans and auto-syncs, roster-gated registration, and email OTP verification. Deployed live and in active use.",
  chips:["PHP","MySQL","PWA","QR Scanning","OTP Email"],
  live:"https://student-violation-tracking-system.site.je"},
 {cat:"Web System · POS · 2026",title:"PharmaLink",
  media:"pv2",mediaText:"PharmaLink screenshot<br>images/pharmalink.png",
  desc:"Complete pharmacy management and point-of-sale system with an offline transaction queue that syncs automatically when back online, hardened security (CSRF protection, login rate limiting, audit logging), automated SKU generation, and low-stock purchasing reports.",
  chips:["PHP / PDO","MySQL","Service Worker","Security"],live:null},
 {cat:"Mobile App · Android · 2026",title:"Class Scheduler App",
  media:"pv3",mediaText:"Scheduler app screenshot<br>images/scheduler.png",
  desc:"A React application packaged as a native Android APK. It scans a printed class schedule using AI vision and converts it into a live schedule with native background alarms, a task manager, and daily taglines.",
  chips:["React","Capacitor","AI Vision","Notifications"],live:null},
 {cat:"UI Design · Prototype · 2025",title:"QUICKBITE",
  media:"pv4",mediaText:"QUICKBITE prototype<br>images/quickbite.png",
  desc:"A campus food ordering and queue management concept built as a working React prototype with a refined dark interface — customers order ahead, vendors manage the queue in real time.",
  chips:["React","UI/UX","Prototype"],live:null},
 {cat:"Game Development · 2026",title:"2D Platformer",
  media:"pv5",mediaText:"Gameplay video / GIF<br>videos/platformer.mp4",
  desc:"A Unity 2D platformer featuring a runtime auto-builder that procedurally spawns levels, custom C# player physics, and moving platform mechanics.",
  chips:["Unity","C#","Procedural Generation"],live:null},
 {cat:"Front-End Craft · 2025–26",title:"UI Recreations",
  media:"pv6",mediaText:"UI showcase<br>images/ui-work.png",
  desc:"Glassmorphism login interfaces with animated gradient borders, institutional design systems, and detailed front-end recreations — built pixel-by-pixel with pure CSS and JavaScript.",
  chips:["CSS Animation","Design Systems","Glassmorphism"],live:null}
];
const casePanel=document.getElementById('casePanel');
const caseMedia=document.getElementById('caseMedia');
function openCase(i){
  const p=projects[i];
  document.getElementById('caseCat').textContent=p.cat;
  document.getElementById('caseTitle').textContent=p.title;
  caseMedia.className='';caseMedia.classList.add(p.media);
  caseMedia.querySelectorAll('.autoimg').forEach(x=>x.remove());
  document.getElementById('caseMediaText').innerHTML=p.mediaText;
  document.getElementById('caseDesc').textContent=p.desc;
  document.getElementById('caseChips').innerHTML=p.chips.map(c=>'<span class="chip">'+c+'</span>').join('');
  let ctas='';
  if(p.live)ctas+='<a class="cta solid" href="'+p.live+'" target="_blank" rel="noopener">Visit live site ↗</a>';
  ctas+='<a class="cta '+(p.live?'line':'solid')+'" href="mailto:jasperfgarce@gmail.com?subject='+encodeURIComponent('About '+p.title)+'">Inquire about this project</a>';
  document.getElementById('caseCtas').innerHTML=ctas;
  /* auto-load real screenshot in the panel if the file exists */
  const im=new Image();
  im.className='autoimg';im.alt=p.title;
  im.src='images/'+({pv1:'vts.png',pv2:'pharmalink.png',pv3:'scheduler.png',pv4:'quickbite.png',pv5:'platformer.png',pv6:'ui-work.png'})[p.media];
  im.onload=()=>caseMedia.appendChild(im);
  document.body.classList.add('case-open');
}
function closeCase(){document.body.classList.remove('case-open')}
document.getElementById('caseClose').addEventListener('click',closeCase);
document.getElementById('caseVeil').addEventListener('click',closeCase);
addEventListener('keydown',e=>{if(e.key==='Escape'){closeCase();document.body.classList.remove('menu-open')}});
document.querySelectorAll('.work-row').forEach(row=>{
  row.addEventListener('click',e=>{e.preventDefault();openCase(+row.dataset.pv)});
});
