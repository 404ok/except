<?php
    header('content-type:text/html;charset= "utf-8"');
    error_reporting(0);

    /* 
        json_encode();  //将数据结构转成字符串
        json_decode();  //将字符串转成数据结构
     */
    //数组
    $arr1 = array("leo","memo","zhangsan");

    //对象
    $arr2 = array("username" => "leo","age" => 32);
    //将索引数组转成字符串
    echo json_encode($arr2);
?>