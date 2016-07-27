/**
 * Created by Administrator on 2016/7/22.
 */

$(document).ready(function(){

    $(".navbar-nav").find("li").on("click",function(){
       $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });
});