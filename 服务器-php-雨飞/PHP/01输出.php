<?php
    header('content-type:text/html;charset= "utf-8"');

    /* 
        【注】PHP代码兼容html和css的所有代码
        原来： php 从数据库里取出数据
               php编写html代码
        前端：html + css +js 网站，可见
        后端：php + mysql
        php的输出函数,如果语句中含有标签会自动解析
    */
    echo "<h1>hello world </h1>";
    echo( "<h1>hello world </h1>");
    print_r("<h1>hello world </h1>");
    /* 
        类似与js 中的console.log()  一般用于测试程序
    */
    var_dump(100);
?>
