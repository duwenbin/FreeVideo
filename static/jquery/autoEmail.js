/**
 * Created by Administrator on 2016/6/23.
 */
(function(jq){
    jq.fn.autoEmail = function(option){
        var _opt = ["@126.com","@yeah.net","@163.com","@sina.com"];
        if(!(option==void(0)||option===null||option== "")){
            _opt = _opt.concat(option);
        }
        var _ipt = this;
        var _div = jq("<ul class='_list'></ul>");
        var _left = _ipt.offset().left;
        var _top = _ipt.offset().top;
        function filter( el ){
            var r=[];
            var site = el.replace(/.*@/, "");
            var reg = new RegExp(site);
            for(var j=0;j<_opt.length;j++){
                if(/^[a-zA-Z0-9]+$/.test( el )){
                    r.push(_opt[j]);
                }else if(/^[a-zA-Z0-9]+[\@][a-zA-Z0-9]*[\.]?[a-zA-Z0-9]*$/.test( el )){
                    if(reg.test(_opt[j])){
                        r.push(_opt[j].substr(site.length+1));
                    }
                }
            }
            return r;
        }
        _ipt.on("keyup",function(){
            var string = $(this).val();
            if(string==void(0)||string==null||string== ""){
                _div.remove();
            }else{
                _ipt.after( _div );
                _div.css({ left:_left,top:_top + _ipt.outerHeight()});
                _div.width(_ipt.outerWidth());
            }
            var r = filter(string);
            _div.empty();
            for(var i=0;i< r.length;i++){
                _div.append("<li><span>"+ string +"</span>"+ r[i] +"</li>");
            }
            _div.find("li").find("span").css("color","skyblue");
            _div.find("li").on("click",function(){
                $("input[data-email='true']").val( $(this).text());
                _div.remove();
            });
        });
       /* _ipt.on("blur",function(){
          _div.remove();
        });*/
    };
})(jQuery);
$(document).ready(function(){
    $("input[data-email='true']").autoEmail(["@qq.com","@360.com"]);
});