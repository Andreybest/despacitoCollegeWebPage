$(document).ready(function () {

    let status1 = $('.current-slide-1');
    let slickElement1 = $('.slider-1');
    let status2 = $('.current-slide-2');
    let slickElement2 = $('.slider-2-1');

    slickElement1.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        status1.text('0' + i);
    });

    slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        status2.text('0' + i);
    });

    $('.slider-2-controll-right').click(function () {
        $(".slider-2-1").slick('slickNext');
        $(".slider-2-2").slick('slickNext');
        $(".slider-2-3").slick('slickNext');
    });
    $('.slider-2-controll-left').click(function () {
        $(".slider-2-1").slick('slickPrev');
        $(".slider-2-2").slick('slickPrev');
        $(".slider-2-3").slick('slickPrev');
    });

    $('.slider-1').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: $('.slider-1-conroll-left'),
        nextArrow: $('.slider-1-conroll-right')
    });

    $('.slider-2-1').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false
    });

    $('.slider-2-2').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false
    });

    $('.slider-2-3').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnHover: false
    });
});