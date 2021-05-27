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