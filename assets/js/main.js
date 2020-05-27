$(function () {

    $(window).on('scroll load resize', (function () {

        let theTop = $(document).scrollTop()

        if (theTop > 500) {
            $('.header').addClass('header-fixed')
        } else {
            $('.header').removeClass('header-fixed')
        }
    }))

    $('.header-top__burger').on('click', function() {
        $(this).toggleClass('is-active');
    });
})



/*
================================
    Header Bottom Sticky
================================
*/
var lastKnownScrollYbottom = 0
currentScrollYbottom = 0
ticking = false
idOfHeader = 'header-bottom'
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




















































































































































