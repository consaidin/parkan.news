$(function () {

    $(window).on('scroll load resize', (function () {

        let theTop = $(document).scrollTop()

        if (theTop > 500) {
            $('.header').addClass('header-fixed')
        } else {
            $('.header').removeClass('header-fixed')
        }
    }))


})



/*
============================
    Header Top Sticky
============================
 */
var lastKnownScrollY = 0
currentScrollY = 0
ticking = false
idOfHeader = 'header-top'
eleHeader = null


const classes = {
    pinned: 'header-pin',
    unpinned: 'header-unpin',
}


function onScroll() {
    currentScrollY = window.pageYOffset
    requestTick()
}


function requestTick() {
    if (!ticking) {
        requestAnimationFrame(update);
    }
    ticking = true;
}

function update() {
    if (currentScrollY < lastKnownScrollY) {
        pin();
    } else if (currentScrollY > lastKnownScrollY) {
        unpin();
    }
    lastKnownScrollY = currentScrollY
    ticking = false
}


function pin() {
    if (eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.unpinned)
        eleHeader.classList.add(classes.pinned)
    }
}


function unpin() {
    if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.pinned);
        eleHeader.classList.add(classes.unpinned);
    }
}

window.onload = function () {
    eleHeader = document.getElementById(idOfHeader)
    console.log(eleHeader);
    document.addEventListener('scroll', onScroll, false)
}

/*
================================
    Header Bottom
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




















































































































































