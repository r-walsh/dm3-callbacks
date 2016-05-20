// function forEach( array, iterator ) {
//   for ( var i = 0; i < array.length; i++ ) {
//     iterator( array[ i ] );
//   }
// }

// function subtractOne( arrayNum ) {
//   console.log( arrayNum - 1 );
// }

// var testArr = [ 10, 9, 7, 12, 22 ];

// forEach( [ 10, 9, 7, 12, 22 ], function( arrayNum ) {
// 	console.log( arrayNum - 1 );
// } );



// var button = document.getElementById( 'alert-button' );
// var numberOfClicks = 0;

// button.addEventListener( 'click', function() {
// 	numberOfClicks++;
// 	alert( "I've been clicked " + numberOfClicks + " times!" );
// } );

// var movies = [
// 	{
// 		title: "Three Hundred",
// 		watched: true
// 	},
// 	{
// 		title: "Cars 2",
// 		watched: false
// 	},
// 	{
// 		title: "V for Vendetta",
// 		watched: false
// 	},
// 	{
// 		title: "ABC",
// 		watched: false
// 	}
// ];

// var moviesToWatch = movies.filter( function( movie ) {
// 	return movie.watched;
// } );

// function filter( array, callback ) {
// 	var returnArray = [];

// 	for ( var i = 0; i < array.length; i++ ) {
// 		if ( callback( array[ i ] ) ) {
// 			returnArray.push( array[ i ] );
// 		}
// 	}
// 	return returnArray;
// }

// function map( array, callback ) { debugger;
// 	var returnArray = [];

// 	for ( var i = 0; i < array.length; i++ ) {
// 		if ( callback( array[ i ] ) ) {
// 			returnArray.push( callback( array[ i ] ) );
// 		}
// 	}
// 	return returnArray;
// }

// var moviesToWatch = map( movies, function( movie ) {
// 	if ( !movie.watched ) {
// 		return movie.title;
// 	}
// } );


var test = [ 5, 4, 3, 2, 1 ].reduce( function( previous, current ) { debugger;
	return previous + current;
}, 0 );