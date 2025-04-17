$(document).ready(function() {
    // Load header.html into #header
    $('#header').load('includes/header.html', function() {
        // Initialize sticky navigation after header is loaded
        initializeStickyNav();
    });
});

// Sticky Navbar--------------------------------
function initializeStickyNav() {
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        
        if (scrollElement.scrollTop() >= stickyTop) {
            stickyWrapper.height(stickyHeight);
            sticky.addClass("is-sticky");
        } else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height("auto");
        }
    };

    $('[data-toggle="sticky-onscroll"]').each(function() {
        var sticky = $(this);
        var stickyWrapper = $("<div>").addClass("sticky-wrapper");
        sticky.before(stickyWrapper);
        sticky.addClass("sticky");

      
        stickyToggle(sticky, stickyWrapper, $(window));

       
        $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
            stickyToggle(sticky, stickyWrapper, $(this));
        });
    });
}
// End Sticky Navbar--------------------------------
