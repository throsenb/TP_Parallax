// Version 1
    // $("#homeHero h1:nth-of-type(1)").delay(100).fadeOut(500, function() {
    //     $(this).text('Are We').fadeIn(500);
    // });

    // $("#homeHero h1:nth-of-type(2)").delay(100).fadeOut(500, function() {
    //     $(this).text('Parallel with you?').fadeIn(500);
    // });




    var items = ["Is Moving Forward", "Begins Today", "Is With Your Future"],
        $text = $( '#homeHero h1:nth-of-type(2)' ),
        delay = 4; //seconds
    
    function loop ( delay ) {
        $.each( items, function ( i, elm ){
            $text.delay( delay*1E3).fadeOut();
            $text.queue(function(){
                $text.html( items[i] );
                $text.dequeue();
            });
            $text.fadeIn();
            $text.queue(function(){
                if ( i == items.length -1 ) {
                    loop(delay);   
                }
                $text.dequeue();
            });
        });
    }

    loop( delay );
