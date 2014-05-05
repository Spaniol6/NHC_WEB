var current = null;
var states = new Array("Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","DC","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennesse","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming");
var state_pop = new Array("4,822,023","731,449","6,553,255","2,949,131","38,041,430","5,187,582","3,590,347","917,092","632,323","19,317,568","9,919,945","1,392,313","1,595,728","12,875,255","6,537,334","3,074,186","2,885,905","4,380,415","4,601,893","1,329,192","5,884,563","6,646,144","9,883,360","5,379,139","2,984,926","6,021,988","1,005,141","1,855,525","2,758,931","1,320,718","8,864,590","2,085,538","19,570,261","9,752,073","699,628","11,544,225","3,814,820","3,899,353","12,763,536","1,050,292","4,723,723","833,354","6,456,243","26,059,203","2,855,287","626,011","8,185,867","6,897,012","1,855,413","5,726,398","576,412");
var scriptRanks = new Array;
var scriptNames = new Array;
var scriptMPop = new Array;
var scriptFPop = new Array;
var scriptPoints = new Array;


function addFunctions(){
	var paths = document.getElementsByClassName("map_object");
	var rlist = document.getElementsByClassName("rankings");

	scriptRanks = document.getElementById("val").getAttribute("value").split(",");
	scriptNames = document.getElementById("nam").getAttribute("value").split(",");
	scriptPoints = document.getElementById("point").getAttribute("value").split(",");
	scriptMPop = document.getElementById("mpop").getAttribute("value").split(",");
	var i;
	for (i = 0; i < paths.length; i++){
		paths.item(i).setAttribute("onclick","stateSelect(this.id)");
		paths.item(i).setAttribute("onmouseover","stateHoverOn(this.id)");
		paths.item(i).setAttribute("onmouseout","stateHoverOff(this.id)");
	}
	for (i = 0; i < rlist.length; i++){
			rlist.item(i).innerHTML = (i + 1) + ". " + scriptNames[i];
	}
}

function stateSelect(evt){
	var object = document.getElementById(evt);
	if (current != null){
		current.setAttribute("fill","#58798d");
	}
	current = object;
	object.setAttribute("fill","#FF0000");
	object.setAttribute("opacity","1");
	
	document.getElementById("state_selected").innerHTML = states[evt];
	if(evt == 7){
		document.getElementById("rank_selected").innerHTML = parseInt(scriptRanks[8]);
		document.getElementById("points_selected").innerHTML = scriptPoints[8];
	}
	else if(evt == 8){
		document.getElementById("rank_selected").innerHTML = parseInt(scriptRanks[7]);
		document.getElementById("points_selected").innerHTML = scriptPoints[7];
	}
	else{
		document.getElementById("rank_selected").innerHTML = parseInt(scriptRanks[evt]);
		document.getElementById("points_selected").innerHTML = scriptPoints[evt];
	}
	document.getElementById("mpop_selected").innerHTML = scriptMPop[evt];
	
	document.getElementById("pop_selected").innerHTML = state_pop[evt];

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
