// Version 1
    // $("#homeHero h1:nth-of-type(1)").delay(100).fadeOut(500, function() {
    //     $(this).text('Are We').fadeIn(500);
    // });

    // $("#homeHero h1:nth-of-type(2)").delay(100).fadeOut(500, function() {
    //     $(this).text('Parallel with you?').fadeIn(500);
    // });



	// // Version 2
    // var items = ["Is Moving Forward", "Begins Today", "Is With Your Future"],
    //     $text = $( '#homeHero h1:nth-of-type(2)' ),
    //     delay = 4; //seconds
    
    // function loop ( delay ) {
    //     $.each( items, function ( i, elm ){
    //         $text.delay( delay*1E3).fadeOut();
    //         $text.queue(function(){
    //             $text.html( items[i] );
    //             $text.dequeue();
    //         });
    //         $text.fadeIn(10);
    //         $text.queue(function(){
    //             if ( i == items.length -1 ) {
    //                 loop(delay);   
    //             }
    //             $text.dequeue();
    //         });
    //     });
    // }

    // loop( delay );


	// // Version 3
 //    var items = ["Is Moving Forward", "Begins Today", "Is With Your Future"],
 //        $text = $( '#homeHero h1:nth-of-type(2)' ),
 //        delay = 0; //seconds
    
 //    function loop ( delay ) {
 //        $.each( items, function ( i, elm ){
 //            $text.delay(4000).fadeOut(0);
 //            $text.queue(function(){
 //                $text.html( items[i] );
 //                $text.dequeue();
 //                $('#logoOrange').toggleClass('open');
 //            });
 //            $text.fadeIn(0);
 //            $text.queue(function(){
 //                if ( i == items.length -1 ) {
 //                    loop(delay);   
 //                }
 //                $text.dequeue();
 //            });
 //        });
 //    }




// Version 4



 	$('#modal').mouseenter(function() {
		$('#logoOrange').animate({marginLeft: "75%"});


	    var items = ["Is Moving Forward"],
	        $text = $( '#homeHero h1:nth-of-type(2)' ),
	        delay = 0; //seconds
	    
	    function loop ( delay ) {
	        $.each( items, function ( i, elm ){
	            $text.delay( delay*1E3).fadeOut();
	            $text.queue(function(){
	                $text.html( items[i] );
	                $text.dequeue();
	            });
	            $text.fadeIn(10);
	            $text.queue(function(){
	                if ( i == items.length -1 ) {
	                    // loop(delay);   
	                }
	                $text.dequeue();
	            });
	        });
	    }

	    loop( delay );


 		console.log('mouseEnter');
	});

 	$('#modal').mouseleave(function() {
 		$('#logoOrange').animate({marginLeft: "0%"});
 		console.log('mouseLeave');
	});




    loop( delay );
