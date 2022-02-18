const iconMenu = document.getElementById('icon-menu');
const menu = document.querySelector('.menu');

iconMenu.addEventListener('click', () => {
    if(menu.style.visibility === 'hidden') {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }

    console.log(document)
});