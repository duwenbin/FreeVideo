/**
 * Created by Administrator on 2016/7/19.
 */
var Symbol = ["1","2","3","4","5","6","7","8","9","0","!","d","u","⊙","♂",
    "☆","★","◇","→","◎","※","∷","¤","℃"];
var timer;
var startTimer = true;
function getRnd(max){
    return Math.random()*(max)>>0;
}
function creatSymbol(){
    var bd = $("#bg_container");
    var div = $("<div class='disapear'></div>").appendTo(bd);
    var span = $("<span>"+Symbol[getRnd(Symbol.length)]+"</span>").appendTo(div);
    var w = $(window).width();
    var t = $(window).height();
    var font_size = getRnd(120)+60+"px";
    div.css({position:"fixed",
             color:"white",
             "font-size": font_size,
             left:getRnd(w-600)+300,
             top:getRnd(t-600)+300,
             opacity:0.7
    });
    div.animate({opacity:0},600,function(){
        $(this).remove();
    });
}
$(window).on("scroll",function(e){
    if(startTimer){
        creatSymbol();
        startTimer = false;
    }
});
timer = setInterval(function(){
        startTimer = true;
},500);



