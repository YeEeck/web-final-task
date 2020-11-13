function reg() {
	var url = "./resource/data.json";
	var request = new XMLHttpRequest();
	var json;
	request.open("GET", url);
	request.send(null);
	request.onload = function() {

		if (request.status == 200) {
			json = JSON.parse(request.responseText);
			var username = document.getElementById("account").value;
			var password = document.getElementById("password").value;
			if (!document.getElementById("check1").checked){
				document.getElementById("tip").innerText = "请确认信息填写无误并勾选";
				return;
			}
			if (username == ''||password == ''){
				document.getElementById("tip").innerText = "用户名或密码不能为空";
				return;
			}
			if (username.length < 8) {
				document.getElementById("tip").innerText = "用户名长度过短";
				return;
			} else if (username.length > 20) {
				document.getElementById("tip").innerText = "用户名长度过长";
				return;
			}
			if (password.length < 8) {
				document.getElementById("tip").innerText = "密码长度过短";
				return;
			} else if (password.length > 20) {
				document.getElementById("tip").innerText = "密码长度过长";
				return;
			}
			

			var userdata = {
				"account": [],
				"password": [],
				"num": 0
			};
			for (var i = 0; i < json.num; i++) {
				userdata.account[i] = json.account[i];
				userdata.password[i] = json.password[i];
			}
			userdata.account[json.num] = username;
			userdata.password[json.num] = password;
			userdata.num = json.num + 1;
			alert("由于未连接后端,请手动将下载的文件覆盖网页目录下的resource文件夹下的data.json文件以完成注册。");
			Object.assign(json, userdata);
			var file = new File([JSON.stringify(userdata)], "data.json", {
				type: "text/plain;charset=utf-8"
			});
			saveAs(file);
			window.location = "./index.html";
		}
	}

}

document.onkeydown=function(event){
    var code = event.keyCode;
    if(code ==13){ //这是键盘的enter监听事件
        //绑定焦点，有可能不成功，需要多试试一些标签 
        reg();
    }
}