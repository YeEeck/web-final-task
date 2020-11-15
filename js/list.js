var normal;

window.onload = function() {
	var t = document.getElementsByClassName("examListElem");
	normal = t[0].style.display;

	var account = document.location.search.split('?')[1];
	document.getElementById('username').innerText = account;
	if (account.length - 8 >= 0) {
		var length1 = (150 + 10 * (account.length - 8)).toString() + "px";
		document.getElementById('user_td').style.width = length1;
		document.getElementsByClassName('usermenu2')[0].style.width = length1;
	}
};


function change_display(str) {
	var t = document.getElementsByClassName("examListElem");
	var menu_choice = document.getElementsByClassName("menu_elem");
	for (var i = 0; i < t.length; i++) {
		t[i].style.display = "none";
	}
	for (var i = 0; i < menu_choice.length; i++) {
		menu_choice[i].style.background = "rgb(247, 247, 247)";
	}
	if (str == 'dt') {
		var t = document.getElementsByClassName("dtExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
		document.getElementById('dt_choice').style.backgroundColor = 'lightgray';
	} else if (str == 'all') {
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
		document.getElementById('normal_choice').style.backgroundColor = 'lightgray';
	} else if (str == 'kh') {
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = "none";
		}
		var t = document.getElementsByClassName("khExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
		document.getElementById('kh_choice').style.backgroundColor = 'lightgray';
	} else if (str == 'qm') {
		var t = document.getElementsByClassName("examListElem");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = "none";
		}
		var t = document.getElementsByClassName("qmExam");
		for (var i = 0; i < t.length; i++) {
			t[i].style.display = normal;
		}
		document.getElementById('qm_choice').style.backgroundColor = 'lightgray';
	}

}

function list_apper(str) {
	document.getElementById(str).style.display = 'block';
}

function list_disapper(str) {
	document.getElementById(str).style.display = 'none';
}
