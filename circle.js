var params = {
    fitted: true
};

var ob1 = document.getElementById('canvas_1');
var two1 = new Two(params);
two1.appendTo(ob1);
var circle = two1.makeCircle((two1.width ) / 2, (two1.height ) / 2, 100);
circle.fill = '#06090c';
circle.stroke = '#5f8575';
circle.linewidth = 6;
two1.update();
var mouse = new Two.Vector();
var yaxis = two1.makeLine((two1.width/2), (two1.height/2)-100, (two1.width/2), (two1.height/2)+100);

yaxis.linewidth = 4;
yaxis.noFill();
yaxis.stroke = "#ffffff";

var xaxis = two1.makeLine((two1.width/2)-100, (two1.height/2), (two1.width/2)+100, (two1.height/2));
xaxis.linewidth = 4;
xaxis.noFill();
xaxis.stroke = "#ffffff";
two1.update();
var mouse1 = new Two.Vector();

var rectangle = two1.makeRectangle((two1.width/2)-150, (two1.height) / 2, 100, 40);
c = two1.makeText("k",(two1.width/2)-150, (two1.height) / 2)
// instead of k mention anything  

var rectangle1 = two1.makeRectangle((two1.width/2)+150, (two1.height) / 2, 100, 40);
d = two1.makeText("h",(two1.width/2)+150, (two1.height) / 2)

var dot = two1.makeCircle((two1.width/2)-100, (two1.height) / 2, 10);
dot.fill = '#06090c';
dot.stroke = '#13ffb9';
dot.linewidth = 3;
two1.update();

var dot1 = two1.makeCircle((two1.width/2)+100, (two1.height) / 2, 10);
dot1.fill = '#06090c';
dot1.stroke = '#13ffb9';
dot1.linewidth = 3;
two1.update();

ob1.addEventListener('pointermove', pointermove, false);

function pointermove(e) {
mouse1.x = e.clientX - getOffset1(ob1).left;
mouse1.y = e.clientY - getOffset1(ob1).top;
let r = 100;
let theta = Math.atan((mouse1.y -(two1.height/2))/(mouse1.x - (two1.width/2))) ; 
console.log(theta*(180/Math.PI ))
// console.log(mouse.x)
  
var yaxis1 = two1.makeLine(- r,0, r,0);
yaxis1.position.set(two1.width/2, two1.height/2)
    // console.log((two1.width/2) - r,(two1.height/2), (two1.width/2) + r, (two1.height/2))
yaxis1.linewidth = 4;
yaxis1.noFill();
yaxis1.stroke = "#097969";

dot.translation.set((two1.width/2)-r*Math.cos(theta), (two1.height/2)-r*Math.sin(theta));
dot1.translation.set((two1.width/2)+r*Math.cos(theta), (two1.height/2)+r*Math.sin(theta));
yaxis1.rotation = theta;
rectangle.translation.set((two1.width/2)-r*Math.cos(theta)-50, (two1.height/2)-r*Math.sin(theta));
rectangle1.translation.set((two1.width/2)+r*Math.cos(theta)+50, (two1.height/2)+r*Math.sin(theta));
c.translation.set((two1.width/2)-r*Math.cos(theta)-50, (two1.height/2)-r*Math.sin(theta));
d.translation.set((two1.width/2)+r*Math.cos(theta)+50, (two1.height/2)+r*Math.sin(theta));

two1.update();
yaxis1.remove()



}  
function getOffset1(el) {
const rect = el.getBoundingClientRect();
return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
}
}