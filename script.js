const TwoTimesPI = 2 * Math.PI;
let Originxy = (BeforeX, BeforeY) => {
  let AfterX = BeforeX + 200;
  let AfterY = BeforeY + 200;
  return { x: AfterX, y: AfterY };
};
let CanvasClear = (ctx) => 
{
    ctx.clearRect(0,0,400,400)
}
let xy = document.querySelector("#xy");
/** @type {CanvasRenderingContext2D} */
let ctx = xy.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(200, 0, 1, 400);
ctx.fillRect(0, 200, 400, 1);
let dot = Originxy(0, 0);
ctx.arc(dot.x, dot.y, 5, 0, TwoTimesPI);
ctx.fill();
let i = 0
setInterval(() => {
    CanvasClear(ctx);
    ctx.fillRect(200, 0, 1, 400);
    ctx.fillRect(0, 200, 400, 1);
    ctx.beginPath();
    ctx.arc(dot.x+i*5, dot.y+i*5, 5, 0, TwoTimesPI);
    ctx.fill();
    i++
}, 1000);