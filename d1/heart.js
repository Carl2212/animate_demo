/**
 * Created by Administrator on 2016/12/12.
 */
var islike = false;
$(".heart").on("click",function(){
    if(!islike) {
        $(this).addClass("like").removeClass("unlike");
        islike = true;
    }else{
        $(this).addClass("unlike").removeClass("like");
        islike = false;
    }
});