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
    /*ɸѡ�������ۺ�������Ӳ˵� ����/�ر�*/
    $("#comprehensive").click(function () {
        $("#comprehensive-uls").toggle();
        $(this).removeClass("comprehensive2").addClass("text-click comprehensive").siblings().removeClass("text-click");
    });


    $("#sales").click(function () {
        $(this).addClass("text-click").siblings().removeClass("text-click comprehensive");
        $("#comprehensive").addClass("comprehensive2");
        $("#comprehensive-uls").hide();
    });
    $("#sift").click(function () {
        $(this).addClass("text-click").siblings().removeClass("text-click comprehensive");
        $("#comprehensive").addClass("comprehensive2");
        $("#comprehensive-uls").hide();
    });

    $("#uls-list li").click(function () {
        $("#comprehensive").html($(this).text());
        $("#comprehensive-uls").toggle();
        $("#synthesis").removeClass("text-click");
        $("#synthesis span").removeClass("icons-checked");
        $(this).addClass("text-click").siblings().removeClass("text-click");

        $(this).children().addClass("icon icons-checked").parents().siblings().children().removeClass("icon icons-checked");
    });

    /*�����ɫ͸���������������˵�*/
    $("#backdrop").click(function () {
        $(".backdrop-content").toggle();
        $(this).toggle();
    });

    /*������صײ����*/
    $("#client-close").click(function () {
        $("div.client").hide();
    })
});