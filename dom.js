var b = document.getElementById("b");

b.addEventListener('click', callback) {

};

var callback = function(e) {
	var l = document.getElementById("thelist");
	var newDiv = document.createElement("li");
	newDiv.innerHTML = "item";
	l.appendChild(newDiv);
};