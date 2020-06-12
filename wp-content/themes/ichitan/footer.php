            </main>
        <footer></footer>
    </div>
</body>

<script src="<?php bloginfo('template_url'); ?>/assets/plugins/jquery-1.12.0.min/index.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/plugins/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/plugins/bootstrap-select/dist/js/bootstrap-select.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/plugins/owl.carousel/owl.carousel.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/plugins/lity/lity.min.js"></script>
<script src="<?php bloginfo('template_url'); ?>/assets/scripts/main.js"></script>
<script>
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player=[];
  var pid = $('#player').data('id');

  onYouTubeIframeAPIReady = function() {
    player[0] = new YT.Player('player', {
      videoId: 'oUYFyc49znk',
      playerVars: {
        'autoplay': 0,
        'rel': 0,
        'showinfo': 0
      },
      events: {
        'onStateChange': onPlayerStateChange(0)
      }
    });
    player[1] = new YT.Player('player2', {
      videoId: 'EMnZ0mu6mQ8',
      playerVars: {
        'autoplay': 0,
        'rel': 0,
        'showinfo': 0
      },
      events: {
        'onStateChange': onPlayerStateChange(1)
      }
    });
  }

  var p = document.getElementById("player");
  $(p).hide();

  var p2 = document.getElementById("player2");
  $(p2).hide();

  var t = document.getElementById("thumbnail");
  t.src = "http://img.youtube.com/vi/oUYFyc49znk/0.jpg";

  var t2 = document.getElementById("thumbnail2");
  t2.src = "http://img.youtube.com/vi/EMnZ0mu6mQ8/0.jpg";

  onPlayerStateChange = function (event) {
    if (event.data == YT.PlayerState.ENDED) {
      $('.start-video').fadeIn('normal');
    }
  }
  $('.start-video').each(function (i){
    $(this).click(function(){
      $(this).hide();
      $(this).siblings(".player").show();
      $(this).siblings(".thumbnail_container").hide();
      player[i].playVideo();
    })
  });

  //Video Thumbnail script

  function YouTubeGetID(url){
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
    return ID;
  }
  $('.video-thumbnail li[data-video] .vframe').click(function(){
    var t = $(this),
      li = t.closest('li'),
      url = li.data('video'),
      videoId = YouTubeGetID(url),
      vPlayer = $('#player2'),
      top = parseInt($('#section-video-pemenang').offset().top) - 30,
      title = li.find('h4').html(),
      p = li.find('p').html();

    $("html, body").animate({ scrollTop: top+"px" },'slow',function(){
      vPlayer.show();
      vPlayer.siblings('.start-video').hide()
      vPlayer.siblings(".thumbnail_container").hide();
      player[1].loadVideoById(videoId, 0, "default");


      $('#video_text').html('<h3>'+title+'</h3><p>'+p+'</p>');

    });

  })
</script>

<?php wp_footer(); ?>

</html>