// Portfolio Item Filter
const filterContainer = document.querySelector('.portfolio-filter')
const filterBtns = filterContainer.children;
const portfolioItems = document.querySelectorAll('.portfolio-item')
let totalPortfolioItem = portfolioItems.length;

const lightboxImg = document.querySelector('.lightbox-img')
const lightboxText= document.querySelector('.caption-text')
const lightboxCounter= document.querySelector('.caption-counter')
var currentIndex = 0;
const nextBtns = document.querySelector('.next-item')
const prevBtns = document.querySelector('.prev-item')
const closeBtn = document.querySelector('.lightbox-close')
const lightbox = document.querySelector('.lightbox')









// Portfolio Filter

for(var i = 0; i < filterBtns.length; i ++) {
    filterBtns[i].addEventListener("click", function() {
     filterContainer.querySelector('.active').classList.remove('active');
     this.classList.add('active');
 
     const filterValue = this.getAttribute("data-filter");
     
     for( var j = 0; j < portfolioItems.length; j++) {
         if(filterValue === portfolioItems[j].getAttribute("data-category")) {
             portfolioItems[j].classList.remove('hide');
             portfolioItems[j].classList.add('show');
         }
         else {
             portfolioItems[j].classList.add('hide');
             portfolioItems[j].classList.remove('show');
         }
         if(filterValue === 'all') {
             portfolioItems[j].classList.remove('hide');
             portfolioItems[j].classList.add('show');
         }
     }
    })
 }
 

//  portfolio lightbox

portfolioItems.forEach((item,index)=>{
    item.addEventListener("click", function() {
        currentIndex = index;
        portfolioShow();
        toggleLightbox();
    })
})

function portfolioShow() {
    if(currentIndex == 0) {
        prevBtns.classList.add('hidden');
    }
    else {
        prevBtns.classList.remove('hidden')
    }

    if(currentIndex == totalPortfolioItem - 1) {
        nextBtns.classList.add('hidden');
    }
    else {
        nextBtns.classList.remove('hidden');
    }
 
    lightboxImg.src=portfolioItems[currentIndex].querySelector('.portfolio-img img').getAttribute("src")
    lightboxText.innerHTML = portfolioItems[currentIndex].querySelector('h4').innerHTML
    lightboxCounter.innerHTML = `${currentIndex + 1 } of ${totalPortfolioItem}`
}
function prevImg() {
        if(currentIndex > 0)
        {
            currentIndex--;
            portfolioShow();
        }
}

function nextImg() {
    if(currentIndex < totalPortfolioItem - 1)
    {
        currentIndex++;
        portfolioShow();
    }
}


lightbox.addEventListener('click',function(e) {
    if(e.target === closeBtn || e.target === lightbox) {
        lightbox.classList.remove('open')
    }
    
})


closeBtn.addEventListener('click',function() {
    
})

function toggleLightbox() {
    lightbox.classList.toggle('open')
}


// Aside Navbar

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');

navList.forEach((item) => {
    item.addEventListener('click', function() {
        for( let i = 0; i < navList.length; i++) {
            navList[i].querySelector("a").classList.remove('active');
           
        }
        item.querySelector("a").classList.add('active');
        if(window.innerWidth < 1200) {
            asideSectionToggleBtn();
        }
        
    })

})





// Toggler Button 
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

navTogglerBtn.addEventListener("click", ()=> {
    asideSectionToggleBtn()
});

function asideSectionToggleBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++) {
        allSection[i].classList.toggle('open');
    }
}

    

