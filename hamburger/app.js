const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.wrapper');
const links = document.querySelectorAll('.navlinks');

hamburger.addEventListener('click' , () =>{
    container.classList.toggle('click');
    hamburger.classList.toggle('click');
})

links.forEach(link =>{
        link.addEventListener('click' , () =>{
            container.classList.remove('click');
            hamburger.classList.remove('click');
        })
    })
   
