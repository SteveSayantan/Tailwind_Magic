const button= document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

button.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')) return menu.classList.remove('hidden');
    menu.classList.add('hidden')
})