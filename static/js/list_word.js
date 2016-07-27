/**
 * Created by Administrator on 2016/7/21.
 */
$(document).ready(readyHandler);
$(window ).resize(function(){
    circle_position();
    resize_position();
});
function resize_position(){
    $(window).bind("scroll",circle_position);
}
//小圆点定位
function circle_position(){
    var List = $(".left_list" );
    var li = List.find("li");
    var selfH = List.height();
    var _T = $(window ).height();
    List.css({right:50,bottom:50});
    //要移动的距离
    var moveL = _T-selfH-100;
    var top = $(this).scrollTop();
    if(top>=0&&top<=600){
        li.eq(0).css({top:-top*moveL/600});
    }else{
        li.eq(0).css({top:-moveL});
    }
    if(top<1000){
        li.eq(1).css({top:0});
    }else if(top>1600){
        li.eq(1).css({top:-moveL});
    }else{
        li.eq(1).css({top:-(top-1000)*moveL/600});
    }
    if(top<2000){
        li.eq(2).css({top:0});
    }else if(top>2600){
        li.eq(2).css({top:-moveL});
    }else{
        li.eq(2).css({top:-(top-2000)*moveL/600});
    }
    if(top<3000){
        li.eq(3).css({top:0});
    }else if(top>3600){
        li.eq(3).css({top:-moveL});
    }else{
        li.eq(3).css({top:-(top-3000)*moveL/600});
    }
    if(top<4000){
        li.eq(4).css({top:0});
    }else if(top>4600){
        li.eq(4).css({top:-moveL});
    }else{
        li.eq(4).css({top:-(top-4000)*moveL/600});
    }
    if(top<5000){
        li.eq(5).css({top:0});
    }else if(top>5600){
        li.eq(5).css({top:-moveL});
    }else{
        li.eq(5).css({top:-(top-5000)*moveL/600});
    }
    if(top<6000){
        li.eq(6).css({top:0});
    }else if(top>6600){
        li.eq(6).css({top:-moveL});
    }else{
        li.eq(6).css({top:-(top-6000)*moveL/600});
    }
    if(top<7000){
        li.eq(7).css({top:0});
    }else if(top>7600){
        li.eq(7).css({top:-moveL});
    }else{
        li.eq(7).css({top:-(top-7000)*moveL/600});
    }
}
function readyHandler(){
    circle_position();
    resize_position();
    var li = $(".left_list").find("li");
    li.hover(function(){
            var circle1 = $(this).find(".little_circle").eq(0);
            var word = $(this).find(".hide_word");
            var a = word.find("span");
            var w = a.outerWidth();
            circle1.stop().animate({left:"10px"},400);
            word.stop().animate({width:w},400);
        }, function(){
            var circle1 = $(this).find(".little_circle").eq(0);
            var word = $(this).find(".hide_word");
            circle1.stop().animate({left:0},400);
            word.stop().animate({width:0},400);
        });
}
