var search_text;

window.onload = function() {
	search_text = document.location.search;
	document.getElementsByClassName("Cap")[0].href += search_text;
	document.getElementsByClassName("my_exam")[0].href += search_text;
	
	var account = document.location.search.split('?')[1];
	document.getElementById('username').innerText = account;
	var length1 = (150 + 10 * (account.length - 8)).toString() + "px";
	document.getElementById('user_td').style.width = length1;
	document.getElementsByClassName('usermenu2')[0].style.width = length1;
};
