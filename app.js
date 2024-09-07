let body = document.querySelector('body');
let scroll = document.querySelector('.scroll');

window.addEventListener('scroll', function(){
    let totalHeight = body.clientHeight;
    let fromTop = window.scrollY;
    let internalHeight = window.innerHeight;
    let subHeight = totalHeight - internalHeight;

    let rslt = Math.round((100 / subHeight) * fromTop);

    scroll.style.background = `conic-gradient(#192a56, #192a56 ${rslt}%, red ${rslt}%)`;

});


let nav = document.querySelector('nav');
let initValue = 0;

window.addEventListener('scroll', function(){
    if(initValue > window.scrollY){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }

    initValue = window.scrollY
})