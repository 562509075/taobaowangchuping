/**
 * Created by Administrator on 2016/11/14.
 */
/*����������*/
$(function () {
    /*��� ��ʾ/����*/
    $("#input-tab").click(function () {
        $("#input-nav").toggle();
    });
    /*�����ʾ��Ӧ����*/
    $("#input-nav ul li a").click(function () {
        var txt = $(this).text();
        $("#input-tab p").html(txt);
    });
    
    /*�����ʾ��Ӧ����*/
    $("#example li").click(function () {
        $("#input").html($(this).text());
    });
    /*������صײ����*/
    $("#client-close").click(function () {
        $("div.client").hide();
    });
});