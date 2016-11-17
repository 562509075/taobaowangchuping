/**
 * Created by Administrator on 2016/11/14.
 */
/*顶部搜索栏*/
$(function () {
    /*点击 显示/隐藏*/
    $("#input-tab").click(function () {
        $("#input-nav").toggle();
    });
    /*点击显示相应文字*/
    $("#input-nav ul li a").click(function () {
        var txt = $(this).text();
        $("#input-tab p").html(txt);
    });
    
    /*点击显示相应文字*/
    $("#example li").click(function () {
        $("#input").html($(this).text());
    });
    /*点击隐藏底部广告*/
    $("#client-close").click(function () {
        $("div.client").hide();
    });
});