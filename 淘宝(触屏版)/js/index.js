/**
 * Created by Administrator on 2016/11/10.
 */
    /*�����ֲ�*/
$(function () {
    var nowFrame = 0;
    /*var lis = document.getElementsByTagName('li');*/
    var lis = $("#lunbo li");
    /*��ҳ���Ժ���Ƶ�һ��*/
    for(var i=0;i<lis.length;i++){
        if(i==nowFrame){	//nowFrame
            lis[i].style.display='block';
        }else{
            lis[i].style.display='none';
        }
    }
    setInterval(function(){
        nowFrame++;
        if(nowFrame>=lis.length){
            nowFrame=0;
        }
        for(var i=0;i<lis.length;i++){
            if(i==nowFrame){
                lis[i].style.display='block';
            }else{
                lis[i].style.display='none';
            }
        }
    },2000);
});

/*������ض������*/
$(function () {
    $("#client-close").click(function () {
        $("#client").hide();
        setTimeout($("#allcontent").removeClass("contentall"),2000);
    });
});

/*�������¹���*/
function textScroll(){
    $(function(){
        $('#tbheadline li').eq(1).fadeOut(100,function(){
            //   alert($(this).clone().html());
            //��¡:���ÿ�¡�Ļ���remove()��û�ˡ�
            $(this).clone().appendTo($(this).parent()).fadeIn(100).siblings().hide();
            $(this).remove();
        });
    });
}
setInterval('textScroll()',2000);