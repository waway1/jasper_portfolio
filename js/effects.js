/* EFFECTS — custom cursor, scroll parallax, magnetic buttons, reveal */
/* ---------- custom dot cursor ---------- */
if(fine&&!reduce){
  const dot=document.getElementById('dot');
  addEventListener('mousemove',e=>{
    document.body.classList.add('cursor-on');
    dot.style.left=e.clientX+'px';dot.style.top=e.clientY+'px';
  },{passive:true});
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>dot.classList.add('grow'));
    el.addEventListener('mouseleave',()=>dot.classList.remove('grow'));
  });
}

/* ---------- scroll effects: menu btn, hero parallax, showcase parallax ---------- */
const heroPhoto=document.getElementById('heroPhoto');
const pxLayer=document.getElementById('pxLayer');
const toTop=document.getElementById('toTop');
toTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
addEventListener('scroll',()=>{
  const y=scrollY;
  menuBtn.classList.toggle('show',y>innerHeight*.6||document.body.classList.contains('menu-open'));
  toTop.classList.toggle('show',y>innerHeight*1.5);
  if(!reduce&&innerWidth>820){
    if(y<innerHeight)heroPhoto.style.transform='translateY('+y*.18+'px)';
    const r=pxLayer.parentElement.getBoundingClientRect();
    if(r.top<innerHeight&&r.bottom>0){
      pxLayer.style.transform='translateY('+((r.top-innerHeight)*.12)+'px)';
    }
  }
},{passive:true});

/* ---------- magnetic buttons ---------- */
if(fine&&!reduce){
  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      el.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.25+'px)';
    });
    el.addEventListener('mouseleave',()=>{el.style.transform=''});
  });
}

/* ---------- reveal ---------- */
const io=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
