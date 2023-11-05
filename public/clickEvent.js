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

