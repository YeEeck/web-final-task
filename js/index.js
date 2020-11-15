function getelem(str) {
	return document.getElementById(str);
}

function login() {
	var account = getelem("account").value;
	var password = getelem("password").value;
	if (account == "" || password == "") {
		getelem("tip").innerText = "用户名或密码不能为空";
		return;
	}
	var url = "./resource/data.json";
	var request = new XMLHttpRequest();
	var json;
	request.open("GET", url);
	request.send(null);
	request.onload = function() {

		if (request.status == 200) {
			json = JSON.parse(request.responseText);
			for (var i = 0; i < json.num; i++) {
				if (json.account[i] == account) {
					if (json.password[i] == password) {
						window.location = "./list.html?"+account;
						return;
					} else {
						getelem("tip").innerText = "用户名或密码错误";
					}
				}
			}
			getelem("tip").innerText = "用户名不存在";
		}
	};
}

document.onkeydown = function(event) {
	var code = event.keyCode;
	if (code == 13) { //这是键盘的enter监听事件
		//绑定焦点，有可能不成功，需要多试试一些标签 
		login();
	}
};
