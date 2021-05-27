
function $ajax({method = "get",url,data,success,error}){//ECMA结构
     //1.创建ajax对象
     var xhr = null;
     try{
         xhr = new XMLHttpRequest();
     }catch{
         xhr = new ActiveXObject("Microsoft.XMLHTTP");
     }
     //2.调用open
     //判断是否有数据要传给它
     if(data){
         data = querystring(data);
     }
     //先进行判断method是否等于get且数据不为空，则为get
     if(method == "get" && data){
         url +="?" + data;
     }
     xhr.open(method,url,true);
     //3.调用send方法
     if(method == "get"){
         xhr.send();
     }else{
         //必须在send方法之前，去设置请求的格式 
         xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
         xhr.send(data);
     }
     //4.等待数据响应
     xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
             if(xhr.status == 200){
                 /* 
                     如何处理数据 待定，回调函数
                     即需要数据请求的人自己去编写
                 */
                 if(success){
                     success(xhr.responseText);
                 }
             }else{
                 if(error){
                     error("error" + xhr.status);
                 }
             }
         }
     }
}
//将传入对象转成querystring
function querystring(obj){
    var str = "";
     //拿到对象,用for...in进行遍历
     for(var attr in obj){   //attr为键
         str += attr + "=" + obj[attr] + "&";
     }
     //用substring进行提取
     str = str.substring(0,str.length - 1);
     return str;
}
