var b = document.getElementById("b");
var list = document.getElementsByTagName("li");
var heading = document.getElementById("h");
var num = 8;
 
b.addEventListener('click', buttonCallback);

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

for (i = 0; i < list.length; i ++) {
	list[i].addEventListener("mouseenter", listOverCallback);
	list[i].addEventListener("mouseleave", listLeaveCallback);
	list[i].addEventListener("click", listClickCallback);
}
