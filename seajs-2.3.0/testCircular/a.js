/**
 * 
 * @authors  ()
 * @date    2014-11-29 10:37:22
 * @version $Id$
 */

// define('a',['b','exports'],function(b,exports){
// 	//var b=require('b');

// 	exports.helloA=function(){
// 		console.log('a');
// 	};
// 	b();
// })


define('a',['b'],function(require,exports){

	var b=require('b');
	exports.helloA=function(){
		console.log('a');
	};
	b.f();
})
