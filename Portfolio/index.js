const barBtn = document.querySelector('.bars');
const open =document.querySelector('.open-icon');
const close =document.querySelector('.close-icon');
const mobileNav =document.getElementById('mobile-menu');
const mobileExtra =document.getElementById('mobile-extras');


barBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hide');
    open.classList.toggle('hide');
    close.classList.toggle('hide');
    mobileExtra.classList.toggle('hide');
})