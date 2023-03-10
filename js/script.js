const mobileLinks = document.querySelector('.mobile-nav')
const icon = document.querySelectorAll('.mobile-icon')

/*
console.log(icon)
icon.addEventListener('click',function(e){
    mobileLinks.classList.toggle('active')
})*/

icon.forEach(function(e){
    e.addEventListener('click',function(){
        e.classList.toggle('nav-open')
        mobileLinks.classList.toggle('active')
    })
})