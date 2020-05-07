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

// working 07/05/2020
/// new booking
//  ==UserScript
// @name        New Booking
// @version     1.0
// @include       https://onlinebooking.sand.telangana.gov.in/Order/*
// @include       https://onlinebooking.sand.telangana.gov.in/*
// @grant   GM_getValue
// @grant   GM_setValue
// ==/UserScript==

(function(){
    'use strict';
    if(window.location.href.indexOf("Order/BOOKINGHOME.aspx") !=-1){
        var alreadyOpened = JSON.parse(GM_getValue("alreadyOpened",null));
        if(!alreadyOpened){
            GM_setValue("alreadyOpened", JSON.stringify(true));
            document.querySelector(".menuH").querySelectorAll("li")[0].querySelector("a").click();
        }
    } else {
        GM_setValue("alreadyOpened", JSON.stringify(false));
    }
})();

// working 07/05/2020
// ==UserScript==
// @name        District
// @version     1.0
// @include     https://onlinebooking.sand.telangana.gov.in/Order/NEWBOOKING.aspx?KLM=*
// @include     https://onlinebooking.sand.telangana.gov.in/*
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at  document-end
// ==/UserScript==

(function(){
    'use strict';
    if(window.location.href.indexOf("Order/NEWBOOKING.aspx") !=-1){
        var distselected = JSON.parse(GM_getValue("distselected",null));
        if(!distselected){
            GM_setValue("distselected", JSON.stringify(true));
            document.querySelector(".Dropdown").value = "27";
            PopulateGrid("27");
        }
    } else {
        GM_setValue("distselected", JSON.stringify(false));
    }
})();

//login
// ==UserScript==
// @name         Login
// @version      0.35
// @match        http://onlinebooking.sand.telangana.gov.in/Masters/HOME.aspx
// @match        https://onlinebooking.sand.telangana.gov.in/MASTERS/HOME.ASPX
// @match        https://onlinebooking.sand.telangana.gov.in/Masters/Home.aspx
// @match        http://onlinebooking.sand.telangana.gov.in/*
// @require https://onlinebooking.sand.telangana.gov.in/Scripts/jquery-1.9.0.min.js
// @grant        none
// ==/UserScript==

var username = '7731867897';
var pass='7731867897';

var b = new Event('blur');
var list = document.querySelectorAll('input[type="text"]');
if(list.length > 0){
    for(var i=0; i < list.length; i++){
        if(list[i].style.width == '140px'){
            list[i].value= username;
        }
    }
}
var list1 = document.querySelectorAll('input[type="password"]');
if(list1.length > 0){
    for(var j=0; j < list1.length; j++){
        if(list1[j].style.width == '140px'){
            list1[j].value= pass;
             list1[j].dispatchEvent(b);
        }
    }
}

