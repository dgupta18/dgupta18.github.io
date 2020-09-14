$(document).ready(function() {
    $(function () {
        
        $(".arrow").on("click", function () {
            $('html').animate({ scrollTop: 0 }, "slow");
        });

        // card flipping and icon enlarging
        var mdb = document.querySelector('#mdb');
        mdb.addEventListener('click', function () {
            mdb.classList.toggle('is-flipped');
        });
        $('#mdb').hover(function() {
            $('.flip')[0].classList.toggle('zoom');
        }, function(){
            $('.flip')[0].classList.toggle('zoom');
        });

        var nasa = document.querySelector('#nasa');
        nasa.addEventListener('click', function () {
            nasa.classList.toggle('is-flipped');
        });
        $('#nasa').hover(function () {
            $('.flip')[1].classList.toggle('zoom');
        }, function () {
            $('.flip')[1].classList.toggle('zoom');
        });

        var i4c = document.querySelector('#i4c');
        i4c.addEventListener('click', function () {
            i4c.classList.toggle('is-flipped');
        });
        $('#i4c').hover(function () {
            console.log('in hover')
            $('.flip')[2].classList.toggle('zoom');
        }, function () {
            $('.flip')[2].classList.toggle('zoom');
        });

        var technica = document.querySelector('#technica');
        technica.addEventListener('click', function () {
            technica.classList.toggle('is-flipped');
        });
        $('#technica').hover(function () {
            console.log('in hover')
            $('.flip')[3].classList.toggle('zoom');
        }, function () {
            $('.flip')[3].classList.toggle('zoom');
        });

        var pd = document.querySelector('#pd');
        pd.addEventListener('click', function () {
            pd.classList.toggle('is-flipped');
        });
        $('#pd').hover(function () {
            console.log('in hover')
            $('.flip')[4].classList.toggle('zoom');
        }, function () {
            $('.flip')[4].classList.toggle('zoom');
        });

        var jhu = document.querySelector('#jhu');
        jhu.addEventListener('click', function () {
            jhu.classList.toggle('is-flipped');
        });
        $('#jhu').hover(function () {
            console.log('in hover')
            $('.flip')[5].classList.toggle('zoom');
        }, function () {
            $('.flip')[5].classList.toggle('zoom');
        });

        // changing dots/underline based on scroll
        $(document).scroll(function () {
            var vh = $(window).height();

            // opener
            if ($(window).scrollTop() < (vh * .5)) {
                // make none underlined in navigation
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-experience').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                // dot-onpage
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
            }

            // about
            if ($(window).scrollTop() >= (vh * .5) 
            && Math.abs($(window).scrollTop() - $('#about').offset().top) < (vh * .5)) {
                // make "about" underlined in navigation (#content has class onpage)
                $('#nav-about').addClass('onpage');
                // remove from all other pages
                $('#nav-experience').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                // $('#nav-resume').removeClass('onpage');

                // dot-onpage
                $('#dot-about').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
                // $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // experience
            if (Math.abs($(window).scrollTop() - $('#about').offset().top) >= (vh * .5) 
            && Math.abs($(window).scrollTop() - $('#experience').offset().top) < (vh * .5)) {
                // make "experience" underlined in navigation (#content has class onpage)
                $('#nav-experience').addClass('onpage');
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                // $('#nav-resume').removeClass('onpage');
                // dot-onpage
                $('#dot-experience').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
                // $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // projects
            if (Math.abs($(window).scrollTop() - $('#projects').offset().top) < (vh * .5)) {
                // make "projects" underlined in navigation (#content has class onpage)
                $('#nav-projects').addClass('onpage');
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-experience').removeClass('onpage');
                // $('#nav-resume').removeClass('onpage');
                // dot-onpage
                $('#dot-projects').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                // $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // flip/stop bouncing arrow. link to scroll top
            if ($(window).scrollTop() > 900) {
                $('.arrow').removeClass('bounce');
                $('.arrow').css("transform", "rotate(180deg) translateY(20px)");
            } else {
                $('.arrow').css("transform", "rotate(180deg) translateY(-20px)");
                $('.arrow').addClass('bounce');
            }
        });

    });
});