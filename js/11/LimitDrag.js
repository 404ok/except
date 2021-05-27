/* 
    限制出界的拖拽，要拥有拖拽原有的所有功能
*/

function LimitDrag(id){
    //继承父一级所有的属性  构造函数的伪装
    Drag.apply(this,[id]);
}
//继承方法  原型链
for(var funcName in Drag.prototype){
    LimitDrag.prototype[funcName] = Drag.prototype[funcName];
}
//子一级重写父级的方法，只会在子一级有用  ：  多态
LimitDrag.prototype.funcMove = function(ev){
    var e = ev || window.event;
    var l = e.clientX - this.offsetX;
    var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if(l <= 0){
        l = 0;
    }
    if(l >= windowWidth - this.div.offsetWidth){
        l = windowWidth - this.div.offsetWidth;
    }
    var t = e.clientY - this.offsetY;
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    if(t <= 0){
        t = 0;
    }
    if(t >= windowHeight - this.div.offsetHeight){
        t = windowHeight - this.div.offsetHeight;
    }
    this.div.style.left = l+"px";
    this.div.style.top =t +"px";
}