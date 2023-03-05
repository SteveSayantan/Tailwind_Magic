const menu= document.getElementById('menu');
const button= document.getElementById('button');

button.addEventListener('click', ()=>{ //Dynamically adding transition-transform property, to avoid transition of the sidebar onload.
   if(!menu.classList.contains('transition-transform')) menu.classList.add('transition-transform','ease-in-out', 'duration-300');
   
   if(menu.getAttribute('data-visible')=='false'){

     menu.setAttribute('data-visible', 'true');
     button.setAttribute('aria-expanded', 'true')
     document.body.style.overflowY='hidden'; //To stop scrolling when the sidebar is expanded
    
   } 
    else{
      menu.setAttribute('data-visible', 'false');
      button.setAttribute('aria-expanded', 'false');
      document.body.style.overflowY='auto';
    }
})

window.addEventListener('resize', ()=>{
    menu.classList.remove('transition-transform','ease-in-out', 'duration-300');
    menu.setAttribute('data-visible', 'false');
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflowY='auto';
})

