$(document).ready(function () {

    $(window).on('scroll load resize', (function () {

        let theTop = $(document).scrollTop()

        if (theTop > 400) {
            $('.header').addClass('header-fixed')
        } else {
            $('.header').removeClass('header-fixed')
        }
    }))

    $('.header-top__burger').on('click', function() {
        $(this).toggleClass('is-active')
        $('.header-top__nav').toggleClass('header-top__nav--active')
        $('.search-top__overlay').fadeOut(300)
        $('.search-top__wrap').removeClass('is-active-search')
        $('body').toggleClass('body-lock')
    })

    $('.header-top__search-icon').on('click', function() {
        $('.search-top__wrap').toggleClass('is-active-search')
        $('.header-top__nav').removeClass('header-top__nav--active')
        $('.header-top__burger').removeClass('is-active')
        $('.search-top__overlay').fadeToggle(300)
        $('body').toggleClass('body-lock')
    })
    $('.search-top__overlay').on('click',function() {
        $('.search-top__overlay').fadeOut(300)
        $('.search-top__wrap').removeClass('is-active-search')
        $('body').removeClass('body-lock')
    })





})



/*
================================
    Header Bottom Sticky
================================
*/
let lastKnownScrollYbottom = 0,
currentScrollYbottom = 0,
ticking = false,
idOfHeader = 'header-bottom',
eleHeader = null


const classesBottom = {
    pinned: 'header-pin-bottom',
    unpinned: 'header-unpin-bottom',
}


function onScroll() {
    currentScrollYbottom = window.pageYOffset
    requestTick()
}


function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}

function update() {
    if (currentScrollYbottom < lastKnownScrollYbottom) {
        pin();
    } else if (currentScrollYbottom > lastKnownScrollYbottom) {
        unpin();
    }
    lastKnownScrollYbottom = currentScrollYbottom
    ticking = false
}


function pin() {
    if (eleHeader.classList.contains(classesBottom.unpinned)) {
        eleHeader.classList.remove(classesBottom.unpinned)
        eleHeader.classList.add(classesBottom.pinned)
    }
}


function unpin() {
    if (eleHeader.classList.contains(classesBottom.pinned) || !eleHeader.classList.contains(classesBottom.unpinned)) {
        eleHeader.classList.remove(classesBottom.pinned);
        eleHeader.classList.add(classesBottom.unpinned);
    }
}

window.onload = function () {
    eleHeader = document.getElementById(idOfHeader)
    console.log(eleHeader);
    document.addEventListener('scroll', onScroll, false)
}




















































































































































