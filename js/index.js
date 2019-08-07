// Your code goes here

// mouseover
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('mouseover', e =>{
        e.target.style.background = 'orange';
        e.preventDefault();
    })
})

// mouseleave
btn.forEach(item =>{
    item.addEventListener('mouseleave', e =>{
        e.target.style.background = '#17A2B8';
    })
})

// keydown 
    const windowEvent = document.querySelector('body');
    windowEvent.addEventListener('keydown', () => {
        alert('Hello, did you press any keys?');
    });

//wheel
const header = document.querySelector('header');
header.addEventListener('wheel', e =>{
    e.target.style.background = 'lightyellow';
})

// drag/drop
// const introH2 = document.querySelector('.intro h2');
// introH2.addEventListener('dragover', e =>{
//     e.preventDefault();
//     // e.target.style.alignSelf = 'center';
// })
// introH2.addEventListener('dragenter', e =>{
//     e.preventDefault();
// })
// introH2.addEventListener('drop', e =>{
//     e.preventDefault();
// })

// load
window.addEventListener('load',() =>{
    alert('Page is fulled loaded.');
})
// focus
const a = document.querySelectorAll('nav a');
a.forEach(item =>{
    item.addEventListener('focus', e=>{
        e.target.style.color = 'orange';
        e.preventDefault();
    })
})

// blur 
a.forEach(item =>{
    item.addEventListener('blur', e=>{
        e.target.style.color = 'darkblue';
    })
})

// resize
const times = document.getElementById('demo');
let x = 0;
window.addEventListener('resize', ()=>{
    let txt = x +=1;
    times.innerText = txt;
})



// scroll
// const contentP1 = document.querySelector('.text-content p')
// contentP1.addEventListener('scroll', e=>{
//     e.target.style.fontSize = '2rem';
// })


// dbclick
const logo = document.querySelector('h1');
logo.addEventListener('dblclick', (e)=>{
    e.target.textContent = 'Welcome everyone!';
    e.stopPropagation();
})

// change
// const contentP1 = document.querySelector('.text-content p');
// contentP1.addEventListener('cut', (e) =>{
//     alert('You cut text!');
//     e.stopPropagation();
// })

// search
const search = document.getElementById('myInput');
const demo = document.getElementById('demo');
search.addEventListener('search', e=>{
    demo.innerText = "You're searching for:" + search.nodeValue;
})