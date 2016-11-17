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
    /*筛选导航中综合排序的子菜单 隐藏/关闭*/
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

    /*点击黑色透明背景隐藏下拉菜单*/
    $("#backdrop").click(function () {
        $(".backdrop-content").toggle();
        $(this).toggle();
    });

    /*点击隐藏底部广告*/
    $("#client-close").click(function () {
        $("div.client").hide();
    })
});