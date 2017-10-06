window.onload = evt => {

const alucard = new Image(800, 800);
alucard.src = 'sprites/alucard.png';
alucard.onload = () => {
  ctx.drawImage(alucard, 50, 10);
}
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
c.width  = 800;
c.height = 600;

const width = 750;
const frames = 16;
const walkStart = 145;
const walkWidth = width / frames;
const walkHeight = 60;

const mapW = 922;
const mapH = 1330;
const i = document.createElement('P');
i.innerHTML = 'underthecanvas';
document.body.appendChild(i);
console.log("working")
};
