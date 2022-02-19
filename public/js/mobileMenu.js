const btnMobile = document.querySelector('.btn-mobile');

function toggleMenu(event){
    if(event.type == "touchstart") event.precentDefault();
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded',active);
    if(active) {
        currentTarget.setAttribute('aria-label','Fechar Menu');
    }else{
        currentTarget.setAttribute('aria-label','Abrir Menu');
    }
}

btnMobile.addEventListener("click",toggleMenu);
btnMobile.addEventListener("touchstart",toggleMenu);