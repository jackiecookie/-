/**
 * 
 * @date    2014-11-29 10:38:11
 */

// define('b',['require','a'],function(require){
// 	return function(){
// 	var a=	require('a');
// 	a.helloA();
// 	}
// })



define('b',['a'],function(require,exports){

	exports.f=function (argument) {
		var a=	require('a');
		a.helloA();
	}
	
})