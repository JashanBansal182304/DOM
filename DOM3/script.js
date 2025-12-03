let btn = document.querySelector('button');
let main = document.querySelector('main');

let arr = ['Success starts with your mindset', 'Small steps create big success', 'Failure is the best teacher', 'Consistency beats talent every time','Dream big, work for it', 'Discipline builds the strongest future'];

btn.addEventListener('click', ()=>{
    let h1 = document.createElement("h1");
    let a = Math.floor(Math.random() * arr.length);
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);
    let rot = Math.floor(Math.random() * 361);
    let scl = Math.floor(Math.random() * 3);
    let c1 = Math.floor(Math.random() * 256);
    let c2 = Math.floor(Math.random() * 256);
    let c3 = Math.floor(Math.random() * 256);
    h1.innerHTML = arr[a];
    h1.style.left = x + '%';
    h1.style.top = y + '%';
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`;
    h1.style.position = 'absolute';
    h1.style.rotate = rot + 'deg';
    h1.style.scale = scl;
    main.appendChild(h1);
})