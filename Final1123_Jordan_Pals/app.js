gsap.registerPlugin(ScrollTrigger);

gsap.to("#but3", {
    onComplete: swoop,
    scrollTrigger: ".bottomstuf",
  });

  function swoop() {
    if ( $( ".circlediv" ).first().is( ":hidden" ) ) {
        $( ".circlediv" ).slideDown( 1500 );
      } else {
        $( ".circlediv" ).hide();
      }

      if ( $( ".jumpingdiv" ).first().is( ":hidden" ) ) {
        $( ".jumpingdiv" ).slideDown( 1500 );
      } else {
        $( ".jumpingdiv" ).hide();
      }

}

$( "#but3" ).on( "click", function() {
    $( "#p1:hidden" ).first().fadeIn( "slow" );
  } );

  $( "#but4" ).on( "click", function() {
    $( "#p2:hidden" ).first().fadeIn( "slow" );
  } );

  $( "#hide1" ).on( "click", function() {
    $( "#p1" ).first().fadeOut( "slow" );
  } );

  $( "#hide2" ).on( "click", function() {
    $( "#p2" ).first().fadeOut( "slow" );
  } );

  /*-------AHHHH--------------*/

  $( "#but1" ).on( "click", function() {
    $( "header" ).animate(
        {
          height: 400,
        },
        2500
      );
      $("#vid:hidden").first().fadeIn(2000);
  } );

  $( "#but2" ).on( "click", function() {
    $( "header" ).animate(
        {
          height: 75,
        },
        2500
      );
      $("#vid").first().fadeOut(2000);
  } );