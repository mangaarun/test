// auto login
javascript:{
$i=200;
var intId = setInterval(function(){
    if($("#btnLogin").get(0).style.display != "none") {
        $("#btnLogin").click();
        clearInterval(intId);
    }
},$i);
void(0);}


//prompt for login captcha
javascript:{$i=200;var intId = setInterval(function(){if($("#btnLogin").get(0).style.display != "none") {$("#btnLogin").click();clearInterval(intId);}
    },$i);var cap = prompt("Please enter captcha", "");document.getElementById("ccMain_txtEnterCode").value = cap;void(0);
}


// reload captcha
//  ==UserScript
// @name        Reload captcha
// @version     1.0
// @match       https://onlinebooking.sand.telangana.gov.in/Masters/HOME.aspx
// @match       https://onlinebooking.sand.telangana.gov.in/Masters/Home.aspx
// @match       https://onlinebooking.sand.telangana.gov.in/MASTERS/HOME.aspx
// @grant       none
// ==/UserScript==

(function(){
    'use strict';
    var captcha = null;
    var imgs = document.querySelectorAll("img");
    for(var i=0; i < imgs.length; i++){
        if(typeof imgs[i].src !== 'undefined' && imgs[i].src !== null && imgs[i].src.length > 120){
            captcha = imgs[i];
            break;
        }
    }

    var a = document.createElement("a");
    a.setAttribute("id", 'ReloadCaptcha');
    a.innerHTML = "Reload captcha";
    a.setAttribute('target', '_blank');
    a.setAttribute('href', 'view-source:' + imgs[i].src);
    a.style.width = "80px";
    a.style.height = "30px";
    a.style.textAlign = "center";
    a.style.display = "block";
    a.style.fontWeight = "bold";
    a.style.fontFamily = "Arial,Helvetica,sans-serif";
    a.style.backgroundColor = "rgb(0,255,12)";
    captcha.parentNode.appendChild(a);
})();
