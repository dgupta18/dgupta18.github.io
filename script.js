$(document).ready(function() {
    $(function () {
        $(document).scroll(function () {
            console.log('in');

            var vh = $(window).height();
            // REPLACE NUBMERS W/ LINKS TO THE IDS OF THE PAGES????

            // about
            if ( $(window).scrollTop() < vh - 100) {
                // make "about" underlined in navigation (#content has class onpage)
                $('#nav-about').addClass('onpage');
                // remove from all other pages
                $('#nav-experience').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                $('#nav-resume').removeClass('onpage');

                // dot-onpage
                $('#dot-about').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
                $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // experience
            if ($(window).scrollTop() >= vh-100 && $(window).scrollTop() < (vh*2 - 100)) {
                // make "experience" underlined in navigation (#content has class onpage)
                $('#nav-experience').addClass('onpage');
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                $('#nav-resume').removeClass('onpage');
                // dot-onpage
                $('#dot-experience').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
                $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // projects
            if ($(window).scrollTop() >= (vh * 2 - 100) && $(window).scrollTop() < (vh * 3 - 100)) {
                // make "projects" underlined in navigation (#content has class onpage)
                $('#nav-projects').addClass('onpage');
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-experience').removeClass('onpage');
                $('#nav-resume').removeClass('onpage');
                // dot-onpage
                $('#dot-projects').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                $('#dot-resume').removeClass('dot-onpage').addClass('dot');
            }

            // resume
            if ($(window).scrollTop() >= (vh * 3 - 100)) {
                // make "resume" underlined in navigation (#content has class onpage)
                $('#nav-resume').addClass('onpage');
                // remove from all other pages
                $('#nav-about').removeClass('onpage');
                $('#nav-experience').removeClass('onpage');
                $('#nav-projects').removeClass('onpage');
                // dot-onpage
                $('#dot-resume').removeClass('dot').addClass('dot-onpage');
                // remove all other empty dots
                $('#dot-about').removeClass('dot-onpage').addClass('dot');
                $('#dot-experience').removeClass('dot-onpage').addClass('dot');
                $('#dot-projects').removeClass('dot-onpage').addClass('dot');
            }
        });
    });
});