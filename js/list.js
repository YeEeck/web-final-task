var normal;

window.onload = function(){
	var t = document.getElementsByClassName("examListElem");
	normal = t[0].style.display;
};

function change_display(str) {
	var t = document.getElementsByClassName("examListElem");
	for (var i = 0; i < t.length; i++) {
		t[i].style.display = "none";
	}
	if (str == 'dt') {
		var t = document.getElementsByClassName("dtExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
	} else if(str == 'all'){
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
	
	} else if(str == 'kh'){
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = "none";
		}
		var t = document.getElementsByClassName("khExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
	} else if(str == 'qm'){
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = "none";
		}
		var t = document.getElementsByClassName("qmExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
	}

}

function list_apper(str){
	document.getElementById(str).style.display = 'block';
}

function list_disapper(str){
	document.getElementById(str).style.display = 'none';
}