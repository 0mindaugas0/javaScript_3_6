let x1;
x1 = prompt("Įveskite A taško X koordinates");
x1 = + x1;

let y1;
y1 = prompt("Įveskite A taško Y koordinates");
y1 = + y1;

let x2;
x2 = prompt("Įveskite B taško X koordinates");
x2 = + x2;

let y2;
y2 = prompt("Įveskite B taško Y koordinates");
y2 = + y2;

let AB = atkarposIlgis(x1, y1, x2, y2);
console.log(+ AB);

function atkarposIlgis(Ax, Ay, Bx, By){
    return Math.sqrt((Bx - Ax) * (Bx - Ax) + (By - Ay) * (By - Ay));
}
