/**
 * Created by Administrator on 16-5-23.
 */


    function getCookie(name){
        var result="";
        var sCookie=document.cookie;
        var arrsCookie=sCookie.split("; ");//["age=20","password=123456",username="xiaoming"]
        for(var i=0;i<arrsCookie.length;i++){
            var arrCookieItem=arrsCookie[i].split("=");//i==0  ["age","20"]
            if(arrCookieItem[0]==name){
                return decodeURIComponent(arrCookieItem[1]);//½âÂë
            }
        }
        return result;
    }

    //·â×°setCookie(ÉèÖÃ) getCookie  deleteCookie
    function setCookie(name,value,date){
        var oDate=new Date();
        value=encodeURIComponent(value);//ÒëÂë
        oDate.setDate(oDate.getDate()+date);
        document.cookie=name+"="+value+";expires="+oDate;//

    }

    function deleteCookie(name) {
        var oDate=new Date();
        oDate.setDate(oDate.getDate()-1);
        document.cookie=name+"=;expires="+oDate;
    }






