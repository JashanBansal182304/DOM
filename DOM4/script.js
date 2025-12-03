let grow = 0;
let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let inner = document.querySelector('.inner');

btn.addEventListener('click', ()=>{
    btn.style.pointerEvents = 'none';
    let num = 50 + Math.floor(Math.random() * 50);
    let downloaded = setInterval(()=>{
        grow++;
        h1.innerHTML = grow + '%';
        inner.style.width = grow + '%';
    }, num);
    setTimeout(()=>{
        clearInterval(downloaded);
        btn.innerHTML = 'Downloaded';
        btn.style.opacity = 0.5;
    }, num * 100);
})