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


//DOM ELEMENTS
// $("div").each(function(index, value) { 
//     console.log('div' + index + ':' + $(this).attr('id')); 
// });
// //outputs the ids of every div on the web page
// //ie - div1:header, div2:body, div3:footer
 
// //ARRAYS
// var arr = [ "one", "two", "three", "four", "five" ];
// jQuery.each(arr, function(index, value) {
//        console.log(this);
//        return (this != "three"); // will stop running after "three"
//    });
// //outputs: one two three
 
//OBJECTS
var obj = { one:1, two:2, three:3, four:4, five:5 };
    $.each(obj, function(i, val) {
       console.log(val);
    });
//outputs: 1 2 3 4 5

		var arr = ["Is Moving Forward", "Begins Today", "Is With Your Future"];
		var index = 0;

 	$('#modal').mouseenter(function() {
		$('#logoOrange').animate({marginLeft: "75%"});

	// // Method 1
		// var nextWord = (function() {
		// 	var wordArray = ['fe','fi','fo','fum'];
		// 	var count = -1;
		// 	return function() {
		// 		return wordArray[++count % wordArray.length];
		//   	}
		// }());

		// $('#homeHero h1:nth-of-type(2)').innerHTML = nextWord();


	// // Method 2
	    // var items = ["Is Moving Forward", "Likes Puppies"],
	    //     $text = $( '#homeHero h1:nth-of-type(2)' ),
	    //     delay = 0; //seconds
	    
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
	    //                 // loop(delay);   
	    //             }
	    //             $text.dequeue();
	    //         });

	    //     });
	    // }

	    // loop( delay );




		$('#homeHero h1:nth-of-type(2)').html(arr[index]); 
		index = (index + 1) % arr.length ;



 		console.log('mouseEnter');
	});

 	$('#modal').mouseleave(function() {
 		$('#logoOrange').animate({marginLeft: "0%"});
 			    
 		console.log('mouseLeave');
	});




    loop( delay );
