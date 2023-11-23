function isElementInViewport(el) {
    if (el) { // 요소가 존재하는지 확인
        const rect = el.getBoundingClientRect();
        return (
            rect.bottom > 0 &&
            rect.right > 0 &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    // 요소가 없을 경우 false 반환
    return false;
}

function trackAndAnimate(element, animationClass) {
    if (isElementInViewport(element)) {
        element.classList.add(animationClass);
    }
}


const fadeinElements = document.querySelectorAll('.fadein');
const animationElements = [
    { element: document.querySelector('.triangle'), animationClass: 'triangle-animate' },
    { element: document.querySelector('.inverted'), animationClass: 'inverted-animate' },
    { element: document.querySelector('.square'), animationClass: 'square-animate' },
    { element: document.querySelector('.round'), animationClass: 'round-animate' }
];

function onScroll() {
    const scrollPosition = window.scrollY; // 현재 스크롤 위치를 가져옵니다.
    console.log('현재 스크롤 위치:', scrollPosition);


    // common fadin-up
    fadeinElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });


    // appintro.html -> body type icon animation
    animationElements.forEach((item) => {
        if (item.element) {
            trackAndAnimate(item.element, item.animationClass);
        }
    });


    // category fadin-down
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('down-fade');
        }
    });


    // common fadin-left
    const mockupLeftElements = document.querySelectorAll('.left');
    mockupLeftElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fadein-left');
        }
    });


    // common fadin-right
    const mockupRightElements = document.querySelectorAll('.right');
    mockupRightElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fadein-right');
        }
    });

    // common fadin-down
    const mockupDownElements = document.querySelectorAll('.down');
    mockupDownElements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('fadein-down');
        }
    });


    // index.html -> image-animate
    const imageAnimations = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ].map((n) => ({
        element: document.querySelector(`.image-animate-${n}`),
        animationClass: `image-active-${n}`
    }));

    imageAnimations.forEach((item) => item.element && trackAndAnimate(item.element, item.animationClass));
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);













