$(document).ready(function() {
  // Stiky navigation
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "76px"
    }
  );

  // Scroll on buttons

  $(".js--go-to-section-plan").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--plan").offset().top
      },
      750
    );
  });

  $(".js--go-to-section-features").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".js--section-features").offset().top
      },
      1000
    );
  });

  // Smooth scroll

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  // Animations on scroll

  $(".js--section-features").waypoint(
    function(direction) {
      $(".js--animate-1").addClass("animate fadeIn");
    },
    {
      offset: "40%"
    }
  );
  $(".js--animate-2").waypoint(
    function(direction) {
      $(".js--animate-2").addClass("animate zoomInUp");
    },
    {
      offset: "-100%"
    }
  );
  $(".js--animate-3").waypoint(
    function(direction) {
      $(".js--animate-3").addClass("animate fadeIn");
    },
    {
      offset: "70%"
    }
  );
  $(".js--plan").waypoint(
    function(direction) {
      $(".js--animate-4-1").addClass("animate rubberBand");
    },
    {
      offset: "40%"
    }
  );
  $(".js--plan").waypoint(
    function(direction) {
      $(".js--animate-4-2").addClass("animate bounce");
    },
    {
      offset: "40%"
    }
  );
  $(".js--plan").waypoint(
    function(direction) {
      $(".js--animate-4-3").addClass("animate bounce");
    },
    {
      offset: "40%"
    }
  );

  // Mobile nav

  $(".nav-btn").click(function() {
    $(".main-nav").slideToggle(300);
    $(".nav-btn").toggleClass("ion-md-reorder");
    $(".nav-btn").toggleClass("ion-md-close");
  });
});
