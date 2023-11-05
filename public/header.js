const headerWrap = document.getElementById('header-Wrap');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // 하단 스크롤 시: 헤더를 숨깁니다.
        headerWrap.style.transform = 'translateY(-100px)';
    } else {
        // 상단 스크롤 시: 헤더를 나타냅니다.
        headerWrap.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

