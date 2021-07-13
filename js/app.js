function menu(){
    var toggleMenu = document.querySelector('header')
    toggleMenu.classList.toggle('header-flex')
    // document.body.classList.toggle('body-overflow-none')
    $(window).scrollTop(0);
    $(window).bind('scroll', setTopo);
}