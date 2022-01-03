var i = 0;
var a = 0;
var txt = "COMING SOON";
var txt2 = "MODVERSE";
var speed = 150;
var speed2 = 500;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("cs").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);        
    } else if (a < txt.length) {
        document.getElementById("cst").innerHTML += txt2.charAt(a);
        a++;
        setTimeout(typeWriter, speed2);
    }
}