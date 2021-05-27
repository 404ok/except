
        /* 
            改造原则：
                1.不能有函数嵌套
                2.可以有全局变量 
            拖拽div1    面向对象方法

            面向过程 => 面向对象
                1.window.onload => 构造函数
                2.全局变量 => 构造函数的属性
                3.全局函数 => 构造函数的方法
         */
         function Drag(id){
             this.div = document.getElementById(id);
             var _this = this;
             this.div.onmousedown = function(ev){
                 _this.funcDown(ev);
             }
             document.onmouseup = this.funcUp; //不需要，因为函数内没用到this
         }
         Drag.prototype.funcDown = function(ev){
             var e = ev || window.event;
             this.offsetX = e.clientX - this.div.offsetLeft;
             this.offsetY = e.clientY - this.div.offsetTop;
             var _this = this;
             document.onmousemove = function(ev){
                 _this.funcMove(ev);
             }
         }

         Drag.prototype.funcMove = function(ev){
             var e = ev || window.event;
             this.div.style.left = e.clientX - this.offsetX +"px";
             this.div.style.top = e.clientY - this.offsetY +"px";
         }
         Drag.prototype.funcUp = function(){
             document.onmousemove = null;
         }

         

