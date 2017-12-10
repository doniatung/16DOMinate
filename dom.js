var b = document.getElementById("b");
var list = document.getElementsByTagName("li");
var heading = document.getElementById("h");

var buttonCallback = function(e) {
    var l = document.getElementById("thelist");
    var newDiv = document.createElement("li");
    newDiv.innerHTML = "new item";
    l.appendChild(newDiv);
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

list.addEventListener("mouseenter", listOverCallback);
list.addEventListener("mouseleave", listLeaveCallback);
list.addEventListener("click", listClickCallback);
