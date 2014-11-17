var wishList = new Array();

function compile() {
	'use strict';
	
	var name = document.getElementById('Name').value;
	var genre = document.getElementById('Genre').value;
	
	var output = document.getElementById('output');
	
	var list = " ";
	
	var game = {
		name: name,
		genre: genre,
	};
	
	wishList[wishList.length] = game;
	
	for (var count = 0; count<wishList.length; count++){
		list += wishList[count].name + "\t\t"+ wishList[count].genre + "\n";
		}
	
	output.innerHTML = list;
	return false;
}

function init() {
	'use strict';
    document.getElementById('theForm').onsubmit = compile;
}
window.onload = init;