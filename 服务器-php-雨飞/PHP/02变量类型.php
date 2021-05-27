<!-- 
    【注意】：php代码非常严格，每一条语句后面都必须加分号
 -->
 <?php
    header('content-type:text/html;charset= "utf-8"');
    /* 
        定义变量：通过$符号进行声明
        弱引用数据类型：即给什么类型就是声明类型
        数字：int float
    */
    $username = "钢铁侠";
    $age = 18;
    var_dump($age);
    var_dump($username);

    /* 
        字符串拼接：用的不是加号而是.
        且是占位符的方式进行拼接    {变量/表达式}
    */
    echo "我是".$username."是".$age;
    echo "我是{$username},是{$age}";
 ?>
 