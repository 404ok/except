<?php
    header('content-type:text/html;charset= "utf-8"');
    
    //$_POST(全局关联数组) 用于存放通过post提交 提交的所有数据

    $username = $_POST["username"];
    $age = $_POST["age"];
    $password = $_POST["password"];
    echo "你的名字：{$username},年龄:{$age},密码：{$password}";
?>