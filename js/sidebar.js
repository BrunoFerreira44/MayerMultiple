const menuHamburguer = document.getElementById('menu-hamburguer');
const sidebar = document.getElementById('sidebar');
const sidebarBgBlur = document.getElementById('sidebarBgBlur');
const sidebarButtonClose = document.getElementById('sidebarButtonClose');
const openMenuFooter = document.getElementById('openMenuFooter');


function showSidebar () {
    sidebar.style.left = '0';

    if(window.innerWidth > 699){
        sidebar.style.animationDuration = '1s';
        sidebar.style.animationName = 'showSidebarDesk';
    } else {
        sidebar.style.animationDuration = '1s';
        sidebar.style.animationName = 'showSidebar';
    }

    sidebarBgBlur.style.visibility = 'visible';
}

function hideSidebar () {
    
    if(window.innerWidth > 699){
        sidebar.style.left = '-40vw';
        sidebar.style.animationDuration = '1s';
        sidebar.style.animationName = 'hideSidebarDesk';
    } else {
        sidebar.style.left = '-80vw';
        sidebar.style.animationDuration = '1s';
        sidebar.style.animationName = 'hideSidebar';
    }

    sidebarBgBlur.style.visibility = 'hidden';
    // sidebarBgBlur.style.animationDuration = '1s';
    // sidebarBgBlur.style.animationName = 'hideBgBlur';
}

menuHamburguer.addEventListener('click', showSidebar);
sidebarButtonClose.addEventListener('click', hideSidebar);
sidebarBgBlur.addEventListener('click', hideSidebar);
