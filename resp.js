burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
    // navbar.classList.toggle('background'); //I have added it so when I click burger button, it will remove background class from navbar as it was getting messy...
})