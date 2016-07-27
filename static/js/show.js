/**
 * Created by Administrator on 2016/7/19.
 */
$(document).ready(
    function(){
        lighter();
        show_div();
    }
);
$(window).on("scroll",show_div);
//设置div的旋转角度、透明度、大小
function show_div(){
    var div = $(".aaa");
    var winTop = $(window).scrollTop();
    div.each(function(){
        var self = $(this);
        var changeDiv = self.find(".change");
        var divTop = self.offset().top;
        var T = divTop - winTop;
        if(T<=-300){
            changeDiv.css({opacity:0,"-webkit-transform":"rotateX(0deg) scale(1,1)",
                "-moz-transform":"rotateX(0deg) scale(1,1)",
                "-ms-transform":"rotateX(0deg) scale(1,1)",
                "transform":"rotateX(0deg) scale(1,1)"});
        }else if(T<=0){
            var o = 1+T/300;
            changeDiv.css({opacity:o,"-webkit-transform":"rotateX(0deg) scale(1,1)",
                "-moz-transform":"rotateX(0deg) scale(1,1)",
                "-ms-transform":"rotateX(0deg) scale(1,1)",
                "transform":"rotateX(0deg) scale(1,1)"});
            o = null;
        }else if(T<=200){
            changeDiv.css({opacity:1,"-webkit-transform":"rotateX(0deg) scale(1,1)",
                "-moz-transform":"rotateX(0deg) scale(1,1)",
                "-ms-transform":"rotateX(0deg) scale(1,1)",
                "transform":"rotateX(0deg) scale(1,1)"});
        }else if(T<=800){
            var c = 1-(T-200)/600;
            var d = (T-200)/10;
            var s = 1-(T-200)/1500;
            changeDiv.css({opacity:c,"-webkit-transform":"rotateX("+d+"deg) scale("+s+","+s+")",
                "-moz-transform":"rotateX("+d+"deg) scale("+s+","+s+")",
                "-ms-transform":"rotateX("+d+"deg) scale("+s+","+s+")",
                "transform":"rotateX("+d+"deg) scale("+s+","+s+")"});
            console.log(c);
            console.log(d);
            console.log(s);
            s = null;
            c = null;
            d = null;
        }else{
            changeDiv.css({opacity:0,"-webkit-transform":"rotateX(60deg) scale(0.6,0.6)",
                "-moz-transform":"rotateX(60deg) scale(0.6,0.6)",
                "-ms-transform":"rotateX(60deg) scale(0.6,0.6)",
                "transform":"rotateX(60deg) scale(0.6,0.6)"});
        }

    });
}
//鼠标hover调节亮度
function lighter(){
    $(".change" ).find("img" ).on({
        mouseenter:function(){
            $(this).removeClass("opLight2").addClass("opLight1");
        },
        mouseleave:function(){
            $(this).removeClass("opLight1").addClass("opLight2");
        }
    });
}
