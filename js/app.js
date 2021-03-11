'use strict'

AOS.init();

//Trending
$(document).ready(function () {
    $('#Tour-header').click(function () {
        if (document.getElementById('Tour-content').style.display === 'none') {
            document.getElementById('Tour-content').style.display = 'block'
        } else {
            document.getElementById('Tour-content').style.display = 'none'
        }
    })
});
//Trending
$(document).ready(function () {
    $('.alt').slick(
        {slidesToShow: 4, slidesToScroll: 1, dots: true, }
    );
})

