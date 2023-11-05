// 초기 마우스 커서 위치 변수 설정
let mousePosX = 0, // 커서의 X 위치
    mousePosY = 0, // 커서의 Y 위치,
    mouseCircle = document.getElementById("mouse-cursor");

// 마우스 커서 업데이트 함수
function updateMouseCursor(e) {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
}

document.onmousemove = updateMouseCursor;

// 부드럽게 마우스 커서를 따라가도록 하는 함수
function smoothCursorFollow(delay, cursorElement) {
    let revisedMousePosX = 0;
    let revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        cursorElement.style.top = revisedMousePosY + "px";
        cursorElement.style.left = revisedMousePosX + "px";
    }

    delayMouseFollow();
}

// 호출 부분
smoothCursorFollow(15, mouseCircle);



///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



// 공통 이벤트 핸들러 함수
function handleCursorStyle(event, cursorElement, className) {
    cursorElement.classList.toggle(className, event.type === "mouseenter");
}

// 마우스 커서 요소 선택
const cursor = document.getElementById("mouse-cursor");

// 모든 링크 요소와 이미지 요소 선택
const elements = document.querySelectorAll("a, h2, .monthly-category-item");

elements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
        handleCursorStyle(event, cursor, "active");
    });

    element.addEventListener("mouseleave", function () {
        handleCursorStyle(event, cursor, "active");
    });
});




///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////



// Oasis 클래스를 가진 요소에 대한 마우스 커서 스타일 변경
const oasisSection = document.querySelector(".Oasis");
const visitsite = document.querySelector(".visit");
const categorySection = document.querySelector(".monthly-category-group");

if (oasisSection) {
    const cursor = document.getElementById("mouse-cursor");

    function handleOasisCursorStyle(event) {
        handleCursorStyle(event, cursor, "oasis");
    }

    oasisSection.addEventListener("mouseenter", handleOasisCursorStyle);
    oasisSection.addEventListener("mouseleave", handleOasisCursorStyle);
}

if (categorySection) {
    const cursor = document.getElementById("mouse-cursor");

    function handleOasisCursorStyle(event) {
        handleCursorStyle(event, cursor, "oasis");
    }

    categorySection.addEventListener("mouseenter", handleOasisCursorStyle);
    categorySection.addEventListener("mouseleave", handleOasisCursorStyle);
}


if (visitsite) {
    const cursor = document.getElementById("mouse-cursor");

    function handleOasisCursorStyle(event) {
        handleCursorStyle(event, cursor, "visitsite");
    }

    visitsite.addEventListener("mouseenter", handleOasisCursorStyle);
    visitsite.addEventListener("mouseleave", handleOasisCursorStyle);
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////


//mouse parallax 마우스 이벤트 핸들러 추가
document.addEventListener("mousemove", (e) => {
    //.layer class 요소 선택
    const layers = document.querySelectorAll('.layer');
    // 모든 요소들에 대한 반복 작업
    layers.forEach(layer => {
        // HTML 요소의 해당 데이터 속성에서 speed 값을 가져옴
        const speed = layer.getAttribute('data-speed');
        // 마우스 커서와 창의 중앙 간의 거리를 계산하고 speed로 나눠 움직임 정도를 제어
        // 마우스 커서의 현재 X 위치(e.pageX)에서 창의 가로 폭(window.innerWidth)의 중앙(window.innerWidth / 2)을 뺀 값에 speed 속성을 곱하고 100으로 나눔
        const x = (window.innerWidth / 2 - e.pageX) * speed / 100;
        // y도 동일
        const y = (window.innerHeight / 2 - e.pageY) * speed / 100;
        // 요소의 위치를 변환(transform)하여 마우스 위치에 따라 움직임을 만듦
        layer.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
    });
});