// plik scripts.js

var withButtonClass = document.getElementsByClassName('button');
// console.log(withButtonClass);

var q = withButtonClass.length;
console.log(withButtonClass.length);

for ( var a = 0; q != a; a++) {

	function textButton () {
	console.log(withButtonClass.innerText);
	}
}