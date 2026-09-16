/* MENU — burger button + slide drawer */
/* ---------- menu ---------- */
const menuBtn=document.getElementById('menuBtn');
menuBtn.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
document.getElementById('veil').addEventListener('click',()=>document.body.classList.remove('menu-open'));
document.querySelectorAll('.dlink').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
