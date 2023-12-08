// Create Dynamic Variables

const modal = document.querySelector('[data-modal]');
const modalClosebtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

//Create Functions
const modalClosefunc = function(){
    modal.classList.add('closed')
}

//Add Event Listener

modalCloseOverlay.addEventListener('click', modalClosefunc);
modalClosebtn.addEventListener('click', modalClosefunc);  



//Notification Placard

const notification = document.querySelector('[data-Placard]');
const placardClosebtn = document.querySelector('[data-Placard-close]');


// Add function 
const placardfunc = function(){
    notification.classList.add('closed');
}

//Notification Event Listener
placardClosebtn.addEventListener('click', placardfunc)




//Mobile Menu Variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for(let i= 0; i < mobileMenuOpenBtn.length; i++){
    const mobileMenuCloseFunc = function(){
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
    }
    
     mobileMenuOpenBtn[i].addEventListener('click', function(){
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
     });
     
mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);

overlay.addEventListener('click', mobileMenuCloseFunc)
}




/* Accordion Variable */
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

console.log(accordionBtn.length)

 for(let i = 0; i < accordionBtn.length; i++ ){ 
accordionBtn[i].addEventListener('click', function(){
    const clickedBtn = this.nextElementSibling.classList.contains('active');
for(let i =0; i < accordion.lenght; i++){
    if(clickedBtn) break;
    if(accordion[i].classList.contains('active')){
        accordion[i].classList.remove('active');
        accordion[i].classList.remove('active');
    }
}
this.nextElementSibling.classList.toggle('active')
this.classList.toggle('active');
});
 }