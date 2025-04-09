// Smooth scrolling for anchor links
$(document).ready(function () {
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

// Activate current section in menu based on scroll position
$(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop();
    $('nav ul li a').each(function() {
        var sectionOffset = $($(this).attr('href')).offset().top - 100;
        if (scrollPos >= sectionOffset) {
            $('nav ul li a').removeClass('active');
            $(this).addClass('active');
        }
    });
});
