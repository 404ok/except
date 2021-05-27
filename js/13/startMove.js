
//假如差值不一致，定时器会提前关闭
//解决：当所有动画到达目的值时，才能关闭定时器

/* 
回调函数：我们把函数当作函数当作参数传入，并且在合适地方调用的方式，我们叫回调。在C/C++叫函数指针
*/
function startMove(node,cssObj,complete){
    clearInterval(node.timer);
    node.timer = setInterval(function(){
        var isEnd = true;//假设所有动画到达目的值
        for(var attr in cssObj){
            var iTarget = cssObj[attr];
            //计算速度
            //获取有效样式  这里opacity取的是0.3,取整后，为0
            // var iCur = parseInt(getStyle(node,attr));
            
            var iCur = null;
            if(attr == "opacity"){
                //取得是"0.3"字符串，用取浮点数
                iCur = parseInt(parseFloat(getStyle(node,"opacity")) * 100);
            }else{
                iCur = parseInt(getStyle(node,attr));
            }
            var speed = (iTarget - iCur)/8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            
                //取样式，必须要用style[attr]来取它的样式,这里是+px进行赋值 所以需要进行判断
            if(attr == "opacity"){
                iCur += speed;
                node.style.opacity = iCur / 100;
                node.style.filter = "alpha(opacity = "+ iCur/100 + ")";
            }else{
                node.style[attr] = iCur + speed + "px";
            }
            if(iCur != iTarget){
                isEnd = false;
            }
            }
            if(isEnd){
                clearInterval(node.timer);
                if(complete){
                    complete.call(node);
                }
            }
    }, 30);
}

    //获取当前样式 跨浏览器的兼容    node:谁的样式   cssStyle:什么样式
    function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentSTyle[cssStyle] : getComputedStyle(node)[cssStyle];
    //三目运算符
}