$(document).on("ready", () => { //інструкція по slick;
    new WOW().init();//підключення анімаціх wow;
    $(".slider-wrapper").slick({ //підключення налаштувань slick;
        slidesPerRow: 1,
        dots: true
    }); 
});  