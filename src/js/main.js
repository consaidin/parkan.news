$(function () {

    $(window).on('scroll load resize', (function () {

        let theTop = $(document).scrollTop()

        if (theTop > 500) {
            $('.header').addClass('header-fixed')
        } else {
            $('.header').removeClass('header-fixed')
        }
    }))


    // let header = $('.header-top-bg'),
    //     scrollPrev = 0
    //
    // $(window).on('scroll load resize', (function () {
    //     let scrolled = $(window).scrollTop()
    //
    //     if (scrolled > 300 && scrolled > scrollPrev) {
    //         header.addClass('out')
    //     } else {
    //         header.removeClass('out')
    //     }
    //     scrollPrev = scrolled
    // }))
    //
    //
    // let headerBottom = $('.header-bottom'),
    //     scrollNext = 0
    //
    // $(window).on('scroll load resize', (function () {
    //     let scrolled = $(window).scrollTop()
    //
    //     if (scrolled > 300 && scrolled > scrollNext) {
    //         headerBottom.addClass('bottom-out')
    //     } else {
    //         headerBottom.removeClass('bottom-out')
    //     }
    //     scrollNext = scrolled
    // }))

})


/*
//Add class other element on hover
$(document).ready(function(){
    $('.top-block__title-link').hover(function(){
        $('.top-block__item--video-text').toggleClass('top-block__item-shadow'); return false;
    })
})

 */












































