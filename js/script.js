const btnMobile = document.getElementById('checkbox-menu');    

function toggleMenu() {
    const nav = document.getElementById('nav');    
    nav.classList.toggle('active');

}

btnMobile.addEventListener('click', toggleMenu)