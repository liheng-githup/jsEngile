/**
 * 数组工具类
 * Created by yunwa on 2016/9/3.
 */
var ArrayUtil;
(function(global){
    global.ArrayUtil = {
        pageing: pageing,
        bubbleSort:bubbleSort,
        systemSort:systemSort
    };
    /**
     * 数组分页
     * @param arr  需要分组的数组
     * @param num  每页数量
     * @returns {Array}  返回分好组的二维数组
     */
    function pageing(arr,num)
    {
        var result = [];
        if ( arr== null ) return [];
        if ( arr.length == 0 ) return [];
        for (var i=0; i<arr.length; i+=num )
        {
            var tempArray = [];
            for ( var j = 0 ; j < num && i+j<arr.length; j++ )
            {
                tempArray.push(arr[i+j]);
            }
            result.push(tempArray);
        }
        return result;
    }

    /**
     * 冒泡排序
     * @param arr
     */
    function bubbleSort(arr){
        for (var i = 0; i < arr.length; i++){

            for (var j = 0; j < arr.length-i-1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }

    /**
     * 系统sort排序,从小到大
     * @param arr
     * @param type  0-从小到大， 1-从大到小
     */
    function systemSort(arr,type){
        var up = function(a,b){
            if(a>b){
                return 1;
            }else if(a < b){
                return -1;
            }else{
                return 0;
            }
        }
        var down = function(a,b){
            if(a>b){
                return -1;
            }else if(a < b){
                return 1;
            }else{
                return 0;
            }
        }
        var t_type = 0;
        if(type){
            t_type = type;
        }
        if(t_type == 0){
            arr.sort(up);
        }else{
            arr.sort(down);
        }
        return arr;
    }

})(this)
