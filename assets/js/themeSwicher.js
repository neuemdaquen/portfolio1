const links = document.querySelectorAll('.alternate-style');
const toggleThemeBtn = document.querySelector('.toggle-theme-swicher');
const themePanel = document.querySelector('.theme-switcher');
const bodySkins = document.querySelectorAll('.body-skin');

function setActiveStyle(color) {
   links.forEach((link)=> {
    if(color === link.getAttribute('title')) {
        link.removeAttribute('disabled');
    }
    else {
        link.setAttribute('disabled','true');
    }
   })
}

// function setBodySkin(mode) {
//     bodySkins.addEventListener('click', function() {
//         bodySkins.forEach((skin) => {
//             console.log(skin)
//         })
//     })
    
// }

bodySkins.forEach((skin) => {
    skin.addEventListener('change', function() {
        if(this.value === 'dark') {
            document.body.className='dark';
        } else {
            document.body.className='light';

        }
    })
})




toggleThemeBtn.addEventListener('click', function() {
    themePanel.classList.toggle('open');
})
