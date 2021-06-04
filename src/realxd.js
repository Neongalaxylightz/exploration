async function myip() {
return await (await fetch("https://ifconfig.me/ip")).text();
}
var iplabelVar = iplbl;
iplabelVar.innerHTML = "Hello Person, Ur Ip For Coming Here Iz: "+await myip()+" :)";
