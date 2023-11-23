
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function () {
    // 클래스 'link-item' 내부의 모든 링크 가져오기
    var links = document.querySelectorAll('.link-item a');

    // 각 링크에 클릭 이벤트 리스너 추가
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // 앵커 태그의 기본 동작 방지
            console.log('링크가 클릭되었습니다.');
            // href 속성에서 대상 요소의 ID 가져오기
            var targetId = this.getAttribute('href').substring(1);

            // ID로 대상 요소 찾기
            var targetElement = document.getElementById(targetId);

            // 대상 요소로 스크롤
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center', // 대상 요소를 화면 세로 중앙으로 스크롤
                    inline: 'center' // 대상 요소를 화면 가로 중앙으로 스크롤
                });
            }
        });
    });

    let state = {
        clientX: 0,
        clientY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    };

    function onMouseMove(event) {
        const { clientX, clientY, scrollLeft, scrollTop } = state;
        const screenContainer = $('.screen-dragging-wrapper');
        screenContainer.scrollLeft(scrollLeft - event.clientX + clientX);
        screenContainer.scrollTop(scrollTop - event.clientY + clientY);
    }

    function onListenGlobalEvent() {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', offListenGloablEvent);
    }

    function offListenGloablEvent() {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', offListenGloablEvent);
        $('.dragging-group').removeClass('screen-loading');
    }

    $(document).ready(function () {
        const screenContainer = $('.screen-dragging-wrapper');

        screenContainer.scrollLeft(150);
        screenContainer.scrollTop(100);

        $('.dragging-group').mousedown(function (event) {
            $(this).addClass('screen-loading');
            state = {
                scrollLeft: screenContainer.scrollLeft(),
                scrollTop: screenContainer.scrollTop(),
                clientX: event.clientX,
                clientY: event.clientY,
            };
            onListenGlobalEvent();
        });

        // 이미지 요소에 드래그 이벤트 추가
        $('.magazine-item').on('mousedown', function (event) {
            event.preventDefault();
            state = {
                clientX: event.clientX,
                clientY: event.clientY,
                scrollLeft: screenContainer.scrollLeft(),
                scrollTop: screenContainer.scrollTop(),
            };
            onListenGlobalEvent();
        });
    });
});
