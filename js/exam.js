function DivClick(elemid) {
	var obj = document.getElementById(elemid);
	if (obj.checked == true) {
		obj.checked = false;
	} else {
		obj.checked = true;
	}

}

function DivClickSingle(elemid) {
	var obj = document.getElementById(elemid);

	obj.checked = true;


}
