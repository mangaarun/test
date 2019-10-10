// ==UserScript==
// @name         Login OTP
// @version      0.35
// @match        https://onlinebooking.sand.telangana.gov.in/Masters/Home.aspx
// @match        https://onlinebooking.sand.telangana.gov.in/Masters/HOME.aspx
// @match        https://onlinebooking.sand.telangana.gov.in/MASTERS/HOME.ASPX
// @grant        none
// ==/UserScript==

 var p = "8008248859";
    var interval = setInterval(function() {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var obj = JSON.parse(xmlHttp.responseText);
                if (obj[0] != undefined) {
                    document.getElementById('txtCOTP').value = obj[0].otp;
                }
            }
        };
        var obj = {
            "where": {
                "phone": p
            },
            "order": "dateOfInsert desc"
        };
        xmlHttp.open("GET", "https://sandsolver.com/sandotps?filter=" + JSON.stringify(obj), true);
        xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "https://onlinebooking.sand.telangana.gov.in");
        xmlHttp.send(null);
    }, 1000);

