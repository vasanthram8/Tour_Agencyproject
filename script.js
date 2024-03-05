let navbarl = document.querySelector('.header .navbarl');

document.querySelector('#menu-btn').onclick = () =>{
    navbarl.classList.toggle('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btne =>{
    btne.onclick = () =>{
        let src = btne.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


let btno = document.getElementById("btno");


btno.onclick = function(){
    document.body.classList.toggle("bod");
}