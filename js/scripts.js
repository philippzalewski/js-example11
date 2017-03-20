// plik scripts.js

var buttonElem = document.getElementById('addElem'),
    ulElem = document.getElementById('list'),
	q = document.getElementsByTagName('li').length;

buttonElem.addEventListener('click', function(e) {

	ulElem.innerHTML += '<li>item '+q+'</li>'
	q++
	
});
