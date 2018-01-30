var myInterval;
var interval_delay = 500;
var is_interval_running = false; //Optional

$(document).ready(function () {

    var i = 5;

    var idLeft = '';
    var idRight = '';

    autoRun();


    var isRunningRight = true;
    var isRunningLeft = false;


    $('.rightArr').click(function () {

        if (!isRunningRight) {
            clearInterval(idLeft);
            autoRun();
        }


    })


    $('.leftArr').click(function () {
        if (isRunningLeft) return;
        clearInterval(idRight);

        $('.bigImgContent').css('left', '-920px');

        var classMask = $('.mask');
        console.log(classMask);
        if (i >= 2) {
            $('.img1').attr('src', 'images/img920x360/' + (i - 1) + '.jpg');
            $('.img2').attr('src', 'images/img920x360/' + (i) + '.jpg');
        } else {
            $('.img2').attr('src', 'images/img920x360/1' + '.jpg');
            $('.img1').attr('src', 'images/img920x360/12' + '.jpg');
            i = 13;
        }


        idLeft = setInterval(function () {

            var id = setInterval(function () {
                $('.bigImgContent').css('left', '+=10px');
                var left = $('.bigImgContent').css('left');

                if (left == '0px') {
                    clearInterval(id);
                    i--;


                    var classMask1 = classMask[i - 1];
                    $('.mask').attr('class', 'mask');
                    classMask1.className += " maskHover";

                    $('.img1').attr('src', 'images/img920x360/' + (i - 1) + '.jpg');
                    $('.img2').attr('src', 'images/img920x360/' + (i) + '.jpg');

                    if (i === 1) {
                        $('.img1').attr('src', 'images/img920x360/12' + '.jpg');
                        i = 13;
                    }

                    $('.bigImgContent').css('left', '-920px');

                }
            }, 1)
        }, 3000);
    })


    $('ul li').bind('click', function(){

        i = $('ul li').index(this) + 1
        $('.img1').attr('src', 'images/img920x360/' + (i) + '.jpg');
        $('.img2').attr('src', 'images/img920x360/' + (i) + '.jpg');
        var classMask = $('.mask');
        var classMask1 = classMask[i - 1];
        $('.mask').attr('class', 'mask');
        classMask1.className += " maskHover";
    });

    function autoRun() {
        var classMask = $('.mask');

        idRight = setInterval(function () {

            $('.bigImgContent').css('left', '0px');
            var id = setInterval(function () {
                $('.bigImgContent').css('left', '-=10px');
                var left = $('.bigImgContent').css('left');

                if (left == '-920px') {
                    clearInterval(id);
                    i++;

                    if (i == 8) {
                        $('ul').css('left', '-460px');
                        $('ul').css('transition', 'all 1s ease');
                    }
                    if (i == 12) {
                        $('ul').css('left', '-496px');
                    }
                    if (i == 1) {
                        console.log("Click");

                        $('ul').css('left', '0px');
                    }
                    var classMask1 = classMask[i - 1];
                    $('.mask').attr('class', 'mask');

                    classMask1.className += " maskHover";
                    $('.img1').attr('src', 'images/img920x360/' + i + '.jpg');
                    $('.img2').attr('src', 'images/img920x360/' + (i + 1) + '.jpg');
                    if (i === 12) {
                        $('.img2').attr('src', 'images/img920x360/1' + '.jpg');
                        i = 0;
                    }
                    $('.bigImgContent').css('left', '0px');

                }
            }, 1)
        }, 3000);
    }


    $(window).focus(function () {
        console.log("focus: " + i);
    }).blur(function () {
        console.log("blur: " + i);
    })

});



