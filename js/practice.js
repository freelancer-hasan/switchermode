/*------------------ dark mode switcher -------------------*/

var icon = document.querySelector('#icon');

icon.onclick = function(){
	document.body.classList.toggle('dark-theme');
	if (document.body.classList.contains('dark-theme')) {
		icon.src = 'img/sun.jpg';
		icon.style.border = '3px solid white';
	}else{
		icon.src = 'img/moon.png';
		icon.style.border = '1px solid black';
	}
}
