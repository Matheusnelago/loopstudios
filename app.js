let nav = document.querySelector('.nav');
const body = document.body;
let open = document.querySelector('.ham').addEventListener('click', (e) => {
    e.preventDefault();
    nav.style.display = 'block';
    body.style.overflowY = 'hidden';
});
let close = document.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    nav.style.display = 'none';
    body.style.overflowY = 'auto';
});

window.addEventListener('resize', (e) => {
    e.preventDefault();
    if(window.matchMedia('(max-width: 750px)').matches){
        nav.style.display = 'none';
    }
    else{
        nav.style.display = 'block';
    }
});