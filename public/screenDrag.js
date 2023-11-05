// 스크린 드래깅 관련 코드

// HTML에서 클래스 이름이 'link-item'인 모든 요소를 선택합니다.
const linkItem = document.querySelectorAll('.link-item');

// HTML에서 클래스 이름이 'screen-dragging'인 요소를 선택합니다.
const screenDragging = document.querySelector('.screen-dragging');


// 스크린 드래그 변수 초기화
let screenDragOffsetX = 0;
let screenDragOffsetY = 0;

// screenDragging 요소를 드래그하는 이벤트 핸들러 추가
screenDragging.addEventListener('mousedown', (event) => {
    // 드래그 시작 위치 저장
    screenDragOffsetX = event.clientX - screenDragging.scrollLeft;
    screenDragOffsetY = event.clientY - screenDragging.scrollTop;
});

// 'linkItem' 배열의 각 요소에 대해 반복적으로 작업을 수행합니다.
linkItem.forEach((item, index) => {
    linkItem[index].addEventListener('click', (event) => {
        event.preventDefault(); // 기본 링크 동작을 중지합니다.
        const targetId = linkItem[index].querySelector('a').getAttribute('href').substring(1);
        const targetItem = document.getElementById(targetId);

        if (targetItem) {
            const top = targetItem.offsetTop;
            const left = targetItem.offsetLeft;

            // 스크린의 가로 중앙 위치 계산
            const screenWidth = screenDragging.clientWidth;
            const screenCenterX = screenWidth / 2;

            // 스크린의 세로 중앙 위치 계산
            const screenHeight = screenDragging.clientHeight;
            const screenCenterY = screenHeight / 2;

            // 콘텐츠 중앙으로 스크롤하는 위치 계산
            const scrollX = left - screenCenterX + targetItem.clientWidth / 2;
            const scrollY = top - screenCenterY + targetItem.clientHeight / 2;

            // 드래그 위치를 고려하여 스크린을 스크롤
            screenDragging.scrollTo({ top: scrollY + screenDragOffsetY, left: scrollX + screenDragOffsetX, behavior: 'smooth' });
        }
    });
});

// ID가 'dragging'인 요소를 GSAP 라이브러리를 사용하여 드래그 가능하게 만듭니다.
Draggable.create("#dragging", {
    cursor: "move", // 마우스 커서가 요소 위로 이동할 때 'move'로 설정하여 드래그 기능을 활성화합니다.
    onDrag: function() {
        // 드래그 중인 요소의 현재 위치를 저장
        screenDragOffsetX = this.x;
        screenDragOffsetY = this.y;
    }
});