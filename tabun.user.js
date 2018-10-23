// ==UserScript==
// @name         Tabun bot by Ghost
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Ghost
// @match        https://tabun.everypony.ru/
// @downloadURL  https://mindofghost.github.io/test/tabun.user.js
// @updateURL    https://mindofghost.github.io/test/tabun.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var settings;
	var xhr = new XMLHttpRequest();
				xhr.open('GET', 'https://mindofghost.github.io/test/tabun.setup.json', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.onload = function () {
					if (xhr.status == 200 || ajax.status == 304) {
						settings = JSON.parse(xhr.responseText);
						
					}
                    else{console.log(xhr)}
				};
    xhr.send();

var securitykey = document.scripts[2].innerHTML.slice(36,68);
    console.log(securitykey);
    var params = new FormData();
    params.append("security_ls_key", securitykey);
    var ajax = new XMLHttpRequest();
	var lastid = [];

ajax.onreadystatechange = function() {
    if (ajax.readyState == 4) {
        if (ajax.status == 200 || ajax.status == 304) {
			for (var i = 0; i < settings.length; i++) {

				if( ajax.response.search(settings[i]['name']) != -1) {
					var point = ajax.response.search(settings[i]['name']);
					var cut = ajax.response.slice(point, point+500);
					point = cut.search('comment') + 7;
					cut = cut.slice(point, point+8);
					if (lastid[i] != cut){
						ls.vote.vote(cut,this,settings[i]['direction'],'comment');
						lastid[i] = cut;
						console.log('новый пост обнаружен');
					}
				}
			}
        }
    }
}

var timerId = setInterval(function() {
	ajax.open('POST', '/ajax/stream/comment/');
    ajax.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    ajax.send(params);
			}, 4000);

})();
