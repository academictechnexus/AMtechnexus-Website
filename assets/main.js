document.addEventListener('DOMContentLoaded',()=>{
  // Nav sticky
  const nav=document.getElementById('nav');
  if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('stuck',scrollY>10),{passive:true});
  // Active link
  const p=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav__links a').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active');});
  // Hamburger
  const ham=document.getElementById('ham'),mob=document.getElementById('mob');
  if(ham&&mob){
    ham.addEventListener('click',()=>{ham.classList.toggle('open');mob.classList.toggle('open');document.body.style.overflow=mob.classList.contains('open')?'hidden':'';});
    mob.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ham.classList.remove('open');mob.classList.remove('open');document.body.style.overflow='';}));
  }
  // Fade up
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('in'),+e.target.dataset.delay||0);io.unobserve(e.target);}});
  },{threshold:.08});
  document.querySelectorAll('.fade-up').forEach((el,_,arr)=>{
    const sibs=Array.from(el.parentElement.querySelectorAll('.fade-up'));
    el.dataset.delay=sibs.indexOf(el)*80;io.observe(el);
  });
  // FAQ
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q')?.addEventListener('click',()=>{
      const open=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!open)item.classList.add('open');
    });
  });
  // Contact form
  document.querySelectorAll('.contact-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const btn=form.querySelector('[type=submit]'),orig=btn.textContent;
      btn.textContent='Sending…';btn.disabled=true;
      setTimeout(()=>{btn.textContent='✓ Sent!';btn.style.background='#38A169';
        setTimeout(()=>{btn.textContent=orig;btn.disabled=false;btn.style.background='';form.reset();},3000);
      },1400);
    });
  });
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'});}});
  });
  // Counter
  const cio=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){
      const el=e.target,target=+el.dataset.target,suffix=el.dataset.suffix||'',prefix=el.dataset.prefix||'',dec=+el.dataset.dec||0;
      let v=0;const step=target/60;
      const t=setInterval(()=>{v+=step;if(v>=target){v=target;clearInterval(t);}el.textContent=prefix+v.toFixed(dec)+suffix;},16);
      cio.unobserve(el);
    }});
  },{threshold:.5});
  document.querySelectorAll('.counter').forEach(el=>cio.observe(el));
});
