$(document).ready(function () {
    $(".hamberger-wrapper").each(function () {
        const menu = $(this);
        const hambergerMenu = menu.find(".hamberger-menu");

        menu.on("click", function () {
            hambergerMenu.toggleClass("open");

            // .hamberger-menu를 토글할 때 #nav-menu도 토글합니다.
            const hambergerGroup = $('.hamberger-group');
            hambergerGroup.toggleClass('active', hambergerMenu.hasClass('open'));

            // 트랜지션을 위해 지연시간을 두고 opacity를 변경
            setTimeout(() => {
                hambergerGroup.css('opacity', hambergerMenu.hasClass('open') ? 1 : 0);
            }, 10);
        });
    });
});

