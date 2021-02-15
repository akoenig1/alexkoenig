$(document).ready(function() {
    
    var scrolllink = $('.scroll');

    // Smooth Scrolling //

    scrolllink.click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    // Bind URL to Scroll //

    var lastId;
    var scrollItems = $('body').find(".scroll-anchor").map(function(){
        var item = $($(this).attr("id"));
        if (item.length) {return item}; 
    });
    
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop();
        // Get ID of current scroll item
        var cur = scrollItems.prevObject.map(function() {
            if ($(this).offset().top < fromTop + 100)
                return this;
        });
        // Get the ID of the current element
        cur = cur[cur.length-1];
        var id = cur ? cur.id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            window.location.hash = (id)
        }
    });

});