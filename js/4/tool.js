//拖拽
function drag(node){
    node.onmousedown = function(ev){
           var e = ev || window.event;
           var offsetX = e.clientX - node.offsetLeft;
           var offsetY = e.clientY - node.offsetTop;

           document.onmousemove = function(ev){
                var e = ev || window.event;
                node.style.left = e.clientX - offsetX + "px";
                node.style.top = e.clientY - offsetY + "px";
           }
       }
       document.onmouseup = function(){
           document.onmousemove = null;
       }
}
//限制拖拽出界
function limitDrag(node){
    node.onmousedown = function(ev){
           var e = ev || window.event;
           var offsetX = e.clientX - node.offsetLeft;
           var offsetY = e.clientY - node.offsetTop;

           document.onmousemove = function(ev){
                var e = ev || window.event;
                var l = e.clientX - offsetX;
                var t = e.clientY - offsetY;

                //限制出界
                if(l <= 0){
                    l = 0;
                }
                var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
                if(l >= windowWidth-node.offsetWidth){
                    l = windowWidth-node.offsetWidth;
                }
                if(t <= 0){
                    t = 0;
                }
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                if(t >= windowHeight-node.offsetHeight){
                    t = windowHeight-node.offsetHeight;
                }
                node.style.left = l + "px";
                node.style.top = t + "px";
           }
       }
       document.onmouseup = function(){
           document.onmousemove = null;
       }
}
//随机颜色
function randomColor(){
    var str = "rgba("+ parseInt(Math.random() * 256) + "," +parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256)+ ",1)"; 
    return str;
}
//获取当前样式 跨浏览器的兼容    node:谁的样式   cssStyle:什么样式
function getStyle(node,cssStyle){
    return node.currentStyle ? node.currentSTyle[cssStyle] : getComputedStyle(node)[cssStyle];
    //三目运算符
}

//node代表从node这个节点开始查找 classStr查找名字
function elementsByClassName(node,classStr){
    //1.获取node下的所有子节点
    var nodes =  node.getElementsByTagName("*");//全选node下所有节点
    var arr = [];//存放符合条件的子节点
    for (let i = 0; i < nodes.length; i++) {
        if(nodes[i].className == classStr){
            arr.push(nodes[i]);
        }
    }
    return arr;
}
function showTime(){
    var d = new Date();
    var year = d.getFullYear(); //0~11
    var month = d.getMonth() + 1;
    var date =d.getDate();

    //根据以上推出星期几，只有get方法、
    var week = d.getDay();//0~6 0是周日
    week = numOfChinese(week);
    var hour = d.getHours();
    hour = doubleNum(hour);
    var min = d.getMinutes();
    min = doubleNum(min);
    var sec = d.getSeconds();
    sec = doubleNum(sec);
    var str = year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec; 
    return str;
}
showTime();

//1.星期几：中文    时间小时各位需要补0

//数字转成中文
function numOfChinese(num){
    var arr = ["日","一","二","三","四","五","六"];
    return arr[num];
}

function doubleNum(n){
    if(n < 10){
        return "0" + n;
    }else{
        return n;
    }
}

function $(id){
    return document.getElementById(id)
}

function bubbleSortAsc(arr){    //升序
    for( var i = 0 ;i < arr.length - 1;i++){
    for( var j = 0;j < arr.length-(i+1);j++){
        if(arr[j] > arr[j + 1]){
            //交换两个数位置
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
}
function bubbleSortDesc(arr){    //降序
    for( var i = 0 ;i < arr.length - 1;i++){
    for( var j = 0;j < arr.length-(i+1);j++){
        if(arr[j] < arr[j + 1]){
            //交换两个数位置
            var tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
}

function changeSortAsc(arr) {   //升序
    for(var i = 0;i < arr.length - 1;i++){
        //确定被比较的数的下标
        for(var j = i+1;j < arr.length;j++){
            if(arr[i] > arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

    }
}
function changeSortDesc(arr) {   //降序
    for(var i = 0;i < arr.length - 1;i++){
        //确定被比较的数的下标
        for(var j = i+1;j < arr.length;j++){
            if(arr[i] < arr[j]){
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }

    }
}