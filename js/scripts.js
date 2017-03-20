// plik scripts.js

var buttonElem = document.getElementById('addElem'),
    ulElem = document.getElementById('list');

buttonElem.addEventListener('click', function(e) {
	ulElem.innerHTML += "<li>item</li>"
	
	var q = ulElem.length;
	console.log(q);
	
	var itemsByTagName = document.getElementsByTagName('li');
	itemsByTagName.innerText += [q];

});
