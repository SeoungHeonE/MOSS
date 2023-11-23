document.addEventListener("DOMContentLoaded", function() {
    const toggleCategory = document.querySelector(".monthly-category-wrapper p");
    const categoryGroup = document.querySelector(".monthly-category-group");
    const closeBtn = document.querySelector(".monthly-category-group .close");

    toggleCategory.addEventListener("click", function() {
        categoryGroup.classList.toggle("visible");
        toggleCategory.parentElement.classList.toggle("hidden");
    });

    closeBtn.addEventListener("click", function() {
        categoryGroup.classList.remove("visible");
        toggleCategory.parentElement.classList.remove("hidden");
    });
});











document.querySelector('.hidden-btn').addEventListener('click', function () {
    var magazineCategoryItem = document.querySelector('.magazine-category');
    var hiddenBtn = document.querySelector('.hidden-btn');

    // magazine-category-item이 현재 보이는지 여부를 확인
    var isVisible = magazineCategoryItem.classList.contains('visible');

    // magazine-category-item을 좌측으로 -726px 이동하여 화면에서 감추거나, 다시 표시
    if (isVisible) {
        magazineCategoryItem.classList.remove('visible');
        magazineCategoryItem.classList.add('hidden');
        // hiddenBtn.style.left = '0'; // Move hidden-btn to the left when hiding
        // 변경된 부분: SVG 변경
        hiddenBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="46" height="119" viewBox="0 0 46 119" fill="none"><path d="M2.99995 116L41.1708 63.6227C42.9613 61.1658 42.9613 57.8342 41.1708 55.3773L2.99996 3" stroke="#CCCCCC" stroke-width="6" stroke-linecap="round"/></svg>';
    } else {
        magazineCategoryItem.classList.remove('hidden');
        magazineCategoryItem.classList.add('visible');
        // hiddenBtn.style.left = '725px'; // Move hidden-btn to its original position when showing
        // 변경된 부분: SVG 변경
        hiddenBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="47" height="119" viewBox="0 0 47 119" fill="none"><path d="M43.0875 3L4.91662 55.3773C3.12612 57.8342 3.12612 61.1658 4.91662 63.6227L43.0875 116" stroke="#CCCCCC" stroke-width="6" stroke-linecap="round"/></svg>';
    }
});

