/* CORE — shared constants, preloader, failsafe */

const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine=matchMedia('(pointer:fine)').matches;

/* ---------- PART 1: preloader ---------- */
const hellos=["Hello","Kumusta","Bonjour","Ciao","Olà","こんにちは","Hallo","안녕하세요","Hola"];
const helloEl=document.getElementById('hello');
const loader=document.getElementById('loader');
let loaderFinished=false;
function finishLoader(){
  if(loaderFinished)return;
  loaderFinished=true;
  loader.classList.add('up');
  document.body.classList.remove('lock');
  loader.addEventListener('transitionend',()=>loader.classList.add('done'),{once:true});
}
if(reduce){document.body.classList.remove('lock')}
else{
  let hi=0;
  function nextHello(){
    hi++;
    if(hi>=hellos.length){
      setTimeout(finishLoader,200);
      return;
    }
    helloEl.lastChild.textContent=hellos[hi];
    setTimeout(nextHello,180);
  }
  setTimeout(nextHello,700);
}

/* ---------- loader failsafe: never let the preloader get stuck ---------- */
setTimeout(finishLoader,4500);
