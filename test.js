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
