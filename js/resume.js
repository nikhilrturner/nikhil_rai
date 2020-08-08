function changeActive(element){
	var current = document.getElementsByClassName("active");
 	current[0].className = current[0].className.replace(" active", "");
 	element.className += " active";
}
