//设计当前的game类
function Game(){
    alert("我是一个Game");

    //创建表格
    this.row = 20;
    this.col = 20;
    this.init();
}
Game.prototype.init = function(){
    this.dom = document.createElement("table");
    var tr,td;
    //遍历行列进行上树
    for(var i = 0;i < this.row;i++){
        //遍历行，创建节点，上树
        tr = document.createElement("tr");

        //追加节点上树
        this.dom.appendChild(tr);

    }
    for(var j = 0;j < this.col;j++){
        td = document.getElementById("td");
    }
    //表格上树
    document.getElementById("app").appendChild("tr");
}