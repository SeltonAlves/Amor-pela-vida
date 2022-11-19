class MobileNavBar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass= "active";  
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks(){
        this.navLinks.forEach((link, index) =>{
            console.log(index/ 7 + 0.3);
            link.style.animation 
            ?(link.style.animation = "") 
            :(link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }


    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click",this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}  

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();

var slideIndex =1 ;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex =n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {  slideIndex = 1}
    if (n < 1) { slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display ="block";
    dots[slideIndex - 1].className +="active";
}