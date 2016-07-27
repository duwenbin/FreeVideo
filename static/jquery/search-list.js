/**
 * Created by Administrator on 2016/7/22.
 */
//搜索列表插件
(function(jq){
    jq.fn.search = function(option){
        var _opt = {};
       if(!(option==void(0)||option===null||option== "")){
            jq.extend(_opt,option);
        }
        var _ipt =this;
        console.log(_ipt);
        var _div = jq("<ul class='_list'></ul>").appendTo("body");
        var _left = _ipt.offset().left;
        var _top = _ipt.offset().top;
        var _width = _ipt.outerWidth();
        var _height = _ipt.outerHeight();
        _ipt.keyup(function(){
            //每次按键获得数据
            var url = "https://suggest.taobao.com/sug?code=utf-8&q="+$(this).val()+"&callback=?";
            jq.ajax({
                url:url,
                type:"get",
                dataType:"jsonp",
                success:function(json){
                    console.log(json);
                    var arr = json.result;
                    if(arr.length ==0 ){
                        _div.hide();
                    }else{
                        //清空列表
                        _div.html("");
                        _div.show();
                        _div.outerWidth(_width);
                        _div.css({position:"absolute",left:_left-1,top:_top+_height+2});
                        for(var i = 0 ;i < arr.length ;i++){
                            var li = jq("<li><a>"+arr[i][0]+"</a></li>").appendTo(_div);
                            li.on("click",function(){
                                var _text = jq(this).find("a").text();
                                _ipt.val(_text);
                                $(this).parent().hide();
                            });
                        }
                    }
                }
            });
        });
    };
})(jQuery);
$(document).ready(function(){
    $("input[data-search='true']").search();
});
