function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        // document.querySelector('.icon').src = "../assets/menu_white_36dp.png";
        document.querySelector('.icon').src = "../assets/menu_white_36dp.png";
    } else {
        menuMobile.classList.add('open');
        // document.querySelector('.icon').src ="../assets/close_white_36dp.png";
        document.querySelector('.icon').src = "../assets/close_white_36dp.png";
    }
}


/* SLIDE */

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index +1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index +1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 4000);


// menu lateral

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }