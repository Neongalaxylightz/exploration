async function myip() {
return await (await fetch("https://ipconfig.me/ip"));
}
var iplabelVar = document.getElementById("iplbl");
iplabelVar.innerHTML = "Hello Person, Ur Ip For Coming Here Iz: "+myip()+" :)";
