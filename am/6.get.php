<?php
    header('content-type:text/html;charset= "utf-8"');
    
    //$_GET(全局关联数组) 用于存放通过get提交 提交的所有数据

    $username = $_GET['username'];
    $age = $_GET['age'];
    $password = $_GET['password'];
    echo "你的名字：{$username},年龄:{$age},密码：{$password}";
?>