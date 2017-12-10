var b = document.getElementById("b");
var num = 8;

var callbackButton = function(e) {
	//console.log("This ran.");
	var list = document.getElementById("thelist");
	var newDiv = document.createElement("li");
	newDiv.innerHTML = "item " + num;
	num ++;
	element = list.appendChild(newDiv);
	element.addEventListener('mouseover', callbackHover);
	element.addEventListener('mouseleave', callbackLeave);
	element.addEventListener('click', callbackRemove);
};

b.addEventListener('click', callbackButton);

var list = document.getElementsByTagName("li");

var callbackHover = function(e) {
	var heading = document.getElementById("h");
	heading.innerHTML = this.innerHTML;
}

var callbackLeave = function(e) {
	var heading = document.getElementById("h");
	heading.innerHTML = "Hello World!";
}

var callbackRemove = function(e) {
	var list = document.getElementById("thelist");
	list.removeChild(this);
}

for (i = 0; i < list.length; i ++) {
	element = list[i];
	element.addEventListener('mouseover', callbackHover);
	element.addEventListener('mouseleave', callbackLeave);
	element.addEventListener('click', callbackRemove);
}