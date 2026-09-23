(()=>{
  const b=document.querySelector('.menu');
  const d=document.querySelector('.drawer');
  if(!b||!d)return;
  b.addEventListener('click',()=>{
    const open=d.classList.toggle('open');
    b.textContent=open?'×':'☰';
    b.setAttribute('aria-expanded',String(open));
  });
  d.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{d.classList.remove('open');b.textContent='☰';}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){d.classList.remove('open');b.textContent='☰';}});
})();
