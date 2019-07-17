let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/josey-wales.jpg') {
		myImage.setAttribute ('src', 'images/doc-holliday.jpg');
	} else {
		myImage.setAttribute ('src', 'images/josey-wales.jpg');
	}
}

function setUserName() {
	let myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'The Outlaw, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'The Outlaw, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}