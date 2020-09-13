$(document).ready(function() {
    $(function () {
        
        $(".arrow").on("click", function () {
            $('html').animate({ scrollTop: 0 }, "slow");
        });

        var mdb = document.querySelector('#mdb');
        mdb.addEventListener('click', function () {
            mdb.classList.toggle('is-flipped');
        });
        var nasa = document.querySelector('#nasa');
        nasa.addEventListener('click', function () {
            nasa.classList.toggle('is-flipped');
        });
        var pd = document.querySelector('#pd');
        pd.addEventListener('click', function () {
            pd.classList.toggle('is-flipped');
        });
        var i4c = document.querySelector('#i4c');
        i4c.addEventListener('click', function () {
            i4c.classList.toggle('is-flipped');
        });
        var jhu = document.querySelector('#jhu');
        jhu.addEventListener('click', function () {
            jhu.classList.toggle('is-flipped');
        });
        
        var cmsc389 = document.querySelector('#cmsc389');
        cmsc389.addEventListener('click', function () {
            cmsc389.classList.toggle('is-flipped');
        });
        var cmsc436 = document.querySelector('#cmsc436');
        cmsc436.addEventListener('click', function () {
            cmsc436.classList.toggle('is-flipped');
        });
        var capstone = document.querySelector('#capstone');
        capstone.addEventListener('click', function () {
            capstone.classList.toggle('is-flipped');
        });

        $(document).scroll(function () {
            console.log('in');

            var vh = $(window).height();

            // FIX

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
            if ($(window).scrollTop() >= (vh * .5) && $(window).scrollTop() < (vh * 1.5)) {
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
            if ($(window).scrollTop() >= (vh * 1.5) && $(window).scrollTop() < (vh * 2.5)) {
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
            if ($(window).scrollTop() >= (vh * 2.5) && $(window).scrollTop() < (vh * 3.5)) {
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
            if ($(window).scrollTop() > 900 ) {
                $('.arrow').addClass('flip').removeClass('bounce');
            } else {
                $('.arrow').addClass('bounce').removeClass('flip');
            }
        });

    });
});