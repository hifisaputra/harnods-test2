//menu toggleclass
$(".burger-icon").click(function(){
  $("#navigation").toggleClass("open");
  $(".main-menu").toggleClass("open");
  $(".burger-icon").toggleClass("open");
  $("h1").toggleClass("open");
});
$("header").find("a").click(function(){
  $(".main-menu").removeClass("open");
  $(".burger-icon").removeClass("open");
});

//menu scroll
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("#navigation").removeClass("open");
    $(".burger-icon").removeClass("open");
    $(".burger-icon").addClass("scrolled");
  }else{
    $(".burger-icon").removeClass("scrolled");
  }
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// Cache selectors
var lastId,
  topMenu = $("#navigation"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
    if(id=='section-beranda' || id=='section-footer'){
      $('#navigation').addClass('nav-light');
    } else {
      $('#navigation').removeClass('nav-light');
    }
  }

  moneyParallax();
});

function moneyParallax(){
  var scrolled = $(window).scrollTop();
  $('.money-beranda').css('top',-(scrolled*0.1)+'px');
  $('.money-top-l').css('top',-(scrolled*0.1)+'px');
  $('.money-top-r').css('top',-(scrolled*0.1)+'px');
  $('.money-bottom-l').css('top',-(scrolled*0.1)+'px');
  $('.money-bottom-r').css('top',-(scrolled*0.1)+'px');
}

//SLIDER EXTRA SMALL
function sliderXS() {
  var sliderS = $('.slider-xs');
  var sliderS2 = $('.slider-xs2');
  if ($(window).width() < 767) {

    sliderS.addClass('owl-carousel');
    sliderS.owlCarousel({
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      items: 1,
      loop: true,
      nav: true,
      dots: true,
      autoplay: false,
      responsive : {
        0 : {
          items: 1
        },
        480 : {
          items: 1
        }
      }
    });

    sliderS2.addClass('owl-carousel');
    sliderS2.owlCarousel({
      navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      items: 1,
      margin: 10,
      stagePadding: 40,
      loop: true,
      nav: true,
      dots: true,
      autoplay: false,
      responsive : {
        0 : {
          items: 1
        },
        480 : {
          items: 1
        }
      }
    });
  
  } else {
    sliderS.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    sliderS.find('.owl-stage-outer').children().unwrap();
    sliderS2.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
    sliderS2.find('.owl-stage-outer').children().unwrap();
  }
}sliderXS();


//ON WINDOW RESIZE
$(window).resize(function() {
  sliderXS();
});

$('.slider-xs2 li').on('click', function() {
  $('.slider-xs2 li').removeClass('active');
  $(this).addClass('active');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vbWVudSB0b2dnbGVjbGFzc1xyXG4kKFwiLmJ1cmdlci1pY29uXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgJChcIiNuYXZpZ2F0aW9uXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAkKFwiLm1haW4tbWVudVwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgJChcIi5idXJnZXItaWNvblwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgJChcImgxXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxufSk7XHJcbiQoXCJoZWFkZXJcIikuZmluZChcImFcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKFwiLm1haW4tbWVudVwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgJChcIi5idXJnZXItaWNvblwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbn0pO1xyXG5cclxuLy9tZW51IHNjcm9sbFxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkgeyAgICBcclxuICB2YXIgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gIGlmIChzY3JvbGwgPj0gMjAwKSB7XHJcbiAgICAkKFwiI25hdmlnYXRpb25cIikucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xyXG4gICAgJChcIi5idXJnZXItaWNvblwiKS5yZW1vdmVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAkKFwiLmJ1cmdlci1pY29uXCIpLmFkZENsYXNzKFwic2Nyb2xsZWRcIik7XHJcbiAgfWVsc2V7XHJcbiAgICAkKFwiLmJ1cmdlci1pY29uXCIpLnJlbW92ZUNsYXNzKFwic2Nyb2xsZWRcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBTZWxlY3QgYWxsIGxpbmtzIHdpdGggaGFzaGVzXHJcbiQoJ2FbaHJlZio9XCIjXCJdJylcclxuICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXHJcbiAgLm5vdCgnW2hyZWY9XCIjXCJdJylcclxuICAubm90KCdbaHJlZj1cIiMwXCJdJylcclxuICAuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIE9uLXBhZ2UgbGlua3NcclxuICAgIGlmIChcclxuICAgICAgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiZcclxuICAgICAgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cclxuICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcclxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xyXG4gICAgICAvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cclxuICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcclxuICAgICAgICAvLyBPbmx5IHByZXZlbnQgZGVmYXVsdCBpZiBhbmltYXRpb24gaXMgYWN0dWFsbHkgZ29ubmEgaGFwcGVuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcclxuICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIC8vIENhbGxiYWNrIGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgLy8gTXVzdCBjaGFuZ2UgZm9jdXMhXHJcbiAgICAgICAgICB2YXIgJHRhcmdldCA9ICQodGFyZ2V0KTtcclxuICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTtcclxuICAgICAgICAgIGlmICgkdGFyZ2V0LmlzKFwiOmZvY3VzXCIpKSB7IC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHRhcmdldC5hdHRyKCd0YWJpbmRleCcsICctMScpOyAvLyBBZGRpbmcgdGFiaW5kZXggZm9yIGVsZW1lbnRzIG5vdCBmb2N1c2FibGVcclxuICAgICAgICAgICAgJHRhcmdldC5mb2N1cygpOyAvLyBTZXQgZm9jdXMgYWdhaW5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcblxyXG4vLyBDYWNoZSBzZWxlY3RvcnNcclxudmFyIGxhc3RJZCxcclxuICB0b3BNZW51ID0gJChcIiNuYXZpZ2F0aW9uXCIpLFxyXG4gIHRvcE1lbnVIZWlnaHQgPSB0b3BNZW51Lm91dGVySGVpZ2h0KCkgKyAxNSxcclxuICAvLyBBbGwgbGlzdCBpdGVtc1xyXG4gIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcImFcIiksXHJcbiAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcclxuICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaXRlbSA9ICQoJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSk7XHJcbiAgICBpZiAoaXRlbS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4vLyBCaW5kIGNsaWNrIGhhbmRsZXIgdG8gbWVudSBpdGVtc1xyXG4vLyBzbyB3ZSBjYW4gZ2V0IGEgZmFuY3kgc2Nyb2xsIGFuaW1hdGlvblxyXG5tZW51SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgIG9mZnNldFRvcCA9IGhyZWYgPT09IFwiI1wiID8gMCA6ICQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG4gICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICBzY3JvbGxUb3A6IG9mZnNldFRvcFxyXG4gIH0sIDEwMDApO1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufSk7XHJcblxyXG4vLyBCaW5kIHRvIHNjcm9sbFxyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgdG9wTWVudUhlaWdodDtcclxuXHJcbiAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cclxuICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgfSk7XHJcbiAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XHJcbiAgY3VyID0gY3VyW2N1ci5sZW5ndGggLSAxXTtcclxuICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XHJcblxyXG4gIGlmIChsYXN0SWQgIT09IGlkKSB7XHJcbiAgICBsYXN0SWQgPSBpZDtcclxuICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXHJcbiAgICBtZW51SXRlbXNcclxuICAgICAgLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpXHJcbiAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgaWYoaWQ9PSdzZWN0aW9uLWJlcmFuZGEnIHx8IGlkPT0nc2VjdGlvbi1mb290ZXInKXtcclxuICAgICAgJCgnI25hdmlnYXRpb24nKS5hZGRDbGFzcygnbmF2LWxpZ2h0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcjbmF2aWdhdGlvbicpLnJlbW92ZUNsYXNzKCduYXYtbGlnaHQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vbmV5UGFyYWxsYXgoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBtb25leVBhcmFsbGF4KCl7XHJcbiAgdmFyIHNjcm9sbGVkID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICQoJy5tb25leS1iZXJhbmRhJykuY3NzKCd0b3AnLC0oc2Nyb2xsZWQqMC4xKSsncHgnKTtcclxuICAkKCcubW9uZXktdG9wLWwnKS5jc3MoJ3RvcCcsLShzY3JvbGxlZCowLjEpKydweCcpO1xyXG4gICQoJy5tb25leS10b3AtcicpLmNzcygndG9wJywtKHNjcm9sbGVkKjAuMSkrJ3B4Jyk7XHJcbiAgJCgnLm1vbmV5LWJvdHRvbS1sJykuY3NzKCd0b3AnLC0oc2Nyb2xsZWQqMC4xKSsncHgnKTtcclxuICAkKCcubW9uZXktYm90dG9tLXInKS5jc3MoJ3RvcCcsLShzY3JvbGxlZCowLjEpKydweCcpO1xyXG59XHJcblxyXG4vL1NMSURFUiBFWFRSQSBTTUFMTFxyXG5mdW5jdGlvbiBzbGlkZXJYUygpIHtcclxuICB2YXIgc2xpZGVyUyA9ICQoJy5zbGlkZXIteHMnKTtcclxuICB2YXIgc2xpZGVyUzIgPSAkKCcuc2xpZGVyLXhzMicpO1xyXG4gIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2Nykge1xyXG5cclxuICAgIHNsaWRlclMuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgc2xpZGVyUy5vd2xDYXJvdXNlbCh7XHJcbiAgICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWxlZnQnPjwvaT5cIixcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXJpZ2h0Jz48L2k+XCJdLFxyXG4gICAgICBpdGVtczogMSxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbmF2OiB0cnVlLFxyXG4gICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIHJlc3BvbnNpdmUgOiB7XHJcbiAgICAgICAgMCA6IHtcclxuICAgICAgICAgIGl0ZW1zOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0ODAgOiB7XHJcbiAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpZGVyUzIuYWRkQ2xhc3MoJ293bC1jYXJvdXNlbCcpO1xyXG4gICAgc2xpZGVyUzIub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1sZWZ0Jz48L2k+XCIsXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiXSxcclxuICAgICAgaXRlbXM6IDEsXHJcbiAgICAgIG1hcmdpbjogMTAsXHJcbiAgICAgIHN0YWdlUGFkZGluZzogNDAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIG5hdjogdHJ1ZSxcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICByZXNwb25zaXZlIDoge1xyXG4gICAgICAgIDAgOiB7XHJcbiAgICAgICAgICBpdGVtczogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNDgwIDoge1xyXG4gICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIFxyXG4gIH0gZWxzZSB7XHJcbiAgICBzbGlkZXJTLnRyaWdnZXIoJ2Rlc3Ryb3kub3dsLmNhcm91c2VsJykucmVtb3ZlQ2xhc3MoJ293bC1jYXJvdXNlbCBvd2wtbG9hZGVkJyk7XHJcbiAgICBzbGlkZXJTLmZpbmQoJy5vd2wtc3RhZ2Utb3V0ZXInKS5jaGlsZHJlbigpLnVud3JhcCgpO1xyXG4gICAgc2xpZGVyUzIudHJpZ2dlcignZGVzdHJveS5vd2wuY2Fyb3VzZWwnKS5yZW1vdmVDbGFzcygnb3dsLWNhcm91c2VsIG93bC1sb2FkZWQnKTtcclxuICAgIHNsaWRlclMyLmZpbmQoJy5vd2wtc3RhZ2Utb3V0ZXInKS5jaGlsZHJlbigpLnVud3JhcCgpO1xyXG4gIH1cclxufXNsaWRlclhTKCk7XHJcblxyXG5cclxuLy9PTiBXSU5ET1cgUkVTSVpFXHJcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgc2xpZGVyWFMoKTtcclxufSk7XHJcblxyXG4kKCcuc2xpZGVyLXhzMiBsaScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICQoJy5zbGlkZXIteHMyIGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==

//# sourceMappingURL=main.js.map
