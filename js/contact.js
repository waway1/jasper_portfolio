/* CONTACT — form, toast, footer clock */
/* ---------- contact form → opens email app pre-filled ---------- */
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2400);
}
document.getElementById('cfSend').addEventListener('click',()=>{
  const name=document.getElementById('cfName').value.trim();
  const email=document.getElementById('cfEmail').value.trim();
  const msg=document.getElementById('cfMsg').value.trim();
  if(!msg){showToast('Please write a short message first 🙂');document.getElementById('cfMsg').focus();return;}
  const subject='Project Inquiry'+(name?' from '+name:'');
  const body=(name?'Name: '+name+'\n':'')+(email?'Email: '+email+'\n':'')+'\n'+msg;
  location.href='mailto:jasperfgarce@gmail.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  showToast('Opening your email app… ✉️');
});

/* ---------- footer: year + live PH time ---------- */
document.getElementById('yr').textContent=new Date().getFullYear();
function tick(){
  document.getElementById('clock').textContent=
    new Intl.DateTimeFormat('en-PH',{hour:'2-digit',minute:'2-digit',second:'2-digit',
      timeZone:'Asia/Manila',hour12:true}).format(new Date())+' PHT';
}
tick();setInterval(tick,1000);
