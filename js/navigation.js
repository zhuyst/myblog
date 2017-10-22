$.fn.smartFloat = function() {
    var position = function(element) {
        var top = element.position().top; //当前元素对象element距离浏览器上边缘的距离
        var pos = element.css("position"); //当前元素距离页面document顶部的距离
        var height = document.body.clientHeight;
        $(window).scroll(function() { //侦听滚动时
            var scrolls = $(this).scrollTop();
            if (scrolls > top - height/4) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
                element.css({ //设置css
                    position: "fixed", //固定定位,即不再跟随滚动
                    top: height/4
                })
            }else {
                element.css({ //如果当前元素element未滚动到浏览器上边缘，则使用默认样式
                    position: pos,
                    top: top
                })
            }
        });
    };
    return $(this).each(function() {
        position($(this));
    });
};

$(document).ready(function(){
    var a = $(".blogs").height();
    $(".navigation").css("height",a);
});
