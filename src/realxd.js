async function myip() {
return await (await fetch("https://ifconfig.me/ip")).txt;
}
var iplabelVar = document.
iplabelVar.innerHTML = "Hello Person, Ur Ip For Coming Here Iz: "+myip()+" :)";
