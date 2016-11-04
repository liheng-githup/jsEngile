/**
 * Created by liheng on 2016/6/21.
 * cookie缓存控制工具类
 */

var CookieUtil = {

    set:function(name,value,expires,path,domain,secure){
        var cookieText = encodeURIComponent(name) + "=" +
            encodeURIComponent(value);

        if(expires instanceof Date){
            cookieText += ";expires=" + expires.toUTCString();
        }

        if(path){
            cookieText += ";path="+path;
        }

        if(domain){
            cookieText += ";domain="+domain;
        }

        if(secure){
            cookieText += ";secure";
        }

        document.cookie = cookieText;
    },

    get:function(name){
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if(cookieStart > -1){
            var cookieEnd = document.cookie.indexOf(";",cookieStart);
            if(cookieEnd == -1){
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length,cookieEnd));
        }

        return cookieValue;
    },

    del:function(name,path,domain,secure){
        this.set(name,"",new Date(0),path,domain,secure);
    },

    getSec:function(str){
        var str1=str.substring(1,str.length)*1;
        var str2=str.substring(0,1);
        if (str2=="s")
        {
            return str1*1000;
        }
        else if (str2=="h")
        {
            return str1*60*60*1000;
        }
        else if (str2=="d")
        {
            return str1*24*60*60*1000;
        }
    }

}
