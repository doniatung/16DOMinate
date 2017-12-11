var b = document.getElementById("b");
var list = document.getElementsByTagName("li");
var heading = document.getElementById("h");
var num = 8;
var b2 = document.getElementById("b2");
var counter = 1;

var buttonCallback = function(e) {
    var l = document.getElementById("thelist");
    var newDiv = document.createElement("li");
    newDiv.innerHTML = "item " + num;
    l.appendChild(newDiv);
    num ++;
   	newDiv.addEventListener("mouseenter", listOverCallback);
	newDiv.addEventListener("mouseleave", listLeaveCallback);
	newDiv.addEventListener("click", listClickCallback);
};

b.addEventListener('click', buttonCallback);

var listOverCallback = function(e){
    heading.innerHTML = this.innerHTML;
};
 
var listLeaveCallback = function(e){
    heading.innerHTML = "Hello World!";
}
		   
var listClickCallback = function(e){
    this.remove();
};

var fibonacci = function(n) {
	if (n == 2) {
		return 1;
	}
	else if (n == 1) {
		return 1;
	}
	else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

var button2Callback = function(e) {
    var l = document.getElementById("fib");
    var newDiv = document.createElement("li");
    newDiv.innerHTML = fibonacci(counter);
    l.appendChild(newDiv);
    counter ++;
};

b2.addEventListener('click', button2Callback);

for (i = 0; i < list.length; i ++) {
	list[i].addEventListener("mouseenter", listOverCallback);
	list[i].addEventListener("mouseleave", listLeaveCallback);
	list[i].addEventListener("click", listClickCallback);
}
