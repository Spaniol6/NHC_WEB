var current = null;
var states = new Array("Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","DC","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennesse","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming");

function addFunctions(){
	var paths = document.getElementsByClassName("map_object");
	var text = document.getElementById('info-list');
	//document.getElementById("state_selected").innerHTML = "Select a state to view its stats";
	var i;
	for (i = 0; i < paths.length; i++){
		paths.item(i).setAttribute("onclick","stateSelect(this.id)");
		paths.item(i).setAttribute("onmouseover","stateHoverOn(this.id)");
		paths.item(i).setAttribute("onmouseout","stateHoverOff(this.id)");
	}
}

function stateSelect(evt){
	var text = document.getElementById('info-list');
	var object = document.getElementById(evt);
	if (current != null){
		current.setAttribute("fill","#58798d");
	}
	current = object;
	object.setAttribute("fill","#FF0000");
	object.setAttribute("opacity","1");
	document.getElementById("state_selected").innerHTML = states[evt];
}

function stateHoverOn(evt){
	var path = document.getElementById(evt);
	if(current != path){
		path.setAttribute("fill","#E9C2A6");
		path.setAttribute("opacity","0.5");
	}
}

function stateHoverOff(evt){
	var path = document.getElementById(evt);
	if(current != path){
		path.setAttribute("fill","#58798d");
		path.setAttribute("opacity","1");
	}
}