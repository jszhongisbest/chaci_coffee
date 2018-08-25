//選單點選滑動效果 開始
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - 70
        }, 1000);
    });
});
//選單點選滑動效果 結束


$(document).scroll(function () {
    if ($(this).scrollTop()) { //如果捲軸拉到了最上方，按鈕淡出
        $('#gotop').fadeIn();
    } else { //如果捲軸拉開了最上方，按鈕淡入
        $('#gotop').fadeOut();
    }
});

//點選按鈕頁面自動捲到最上方
$("#gotop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});