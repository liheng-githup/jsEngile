/**
 * Created by yunwa on 2016/9/28.
 */
var StringUtil = {
    //第一种
    getLength:function(str)
    {
        var realLength = 0;
        for (var i = 0; i < str.length; i++)
        {
            var charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    },
    //第二种（采取将255意外的字符替换成"aa"的做法，取长度）
    getLength2:function(str)
    {
        return str.replace(/[^\x00-\xff]/g,"aa").length;
    }
};
