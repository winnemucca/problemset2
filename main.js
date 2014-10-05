// problem set 2 # 1.  below flip the words in reverse order.  

var firstReverse = function(string) {
var split= string.split('');
var flip = split.reverse();
return flip.join();
}
console.log(firstReverse('hippo'));






function swapCase (string) {
	var chars = string.split('')
	for (var i = 0; i < chars.length; i++) {
		if(chars[i].toUpperCase() === chars[i]) {chars[i] = chars[i].toLowerCase()
		}
		else{chars[i] = chars[i].toUpperCase()}
	};
	return chars.join('')
}
console.log(swapCase('hELLO World'));


