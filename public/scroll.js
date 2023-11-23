gsap.registerPlugin(ScrollTrigger);

let startScroll = 50;
let isScrollingDown = true;
let magazineSlide = document.querySelector('.magazine-slide');

if (magazineSlide) {
    let tween = gsap.to(magazineSlide, {
        xPercent: -50,
        repeat: -1,
        duration: 15,
        ease: 'linear',
        // progress: 0.5,
});

    gsap.set('.magazine-slide-group', { xPercent: 0 });

    window.addEventListener("scroll", function () {
        if (window.scrollY > startScroll) {
        isScrollingDown = true;
        } else {
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,
    });

        startScroll = window.scrollY;
    });
}



//////////////////////////////////////////////////////////////////////




function setupScrollScaling(elementSelector, startScalePosition, endScalePosition, minScale, maxScale) {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const clippedImage = document.querySelector(elementSelector);

        if (!clippedImage) return;

        const t = Math.min(1, Math.max(0, (scrollPosition - startScalePosition) / (endScalePosition - startScalePosition)));
        const scale = minScale + t * (maxScale - minScale);
        const clipPathValue = 30 - t * 30;

        Object.assign(clippedImage.style, {
            transform: `scale(${scale})`,
            clipPath: `inset(0% ${clipPathValue}%)`,
        });

        console.log(scrollPosition);
    });
}

// Apply default settings
setupScrollScaling(".clipped-image-2", 0, 100, 0.8, 1);




///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////



// function setupScrollClipPath(elementSelector, startClipPathPosition, endClipPathPosition, startClipPathValue, endClipPathValue) {
//     window.addEventListener("scroll", () => {
//         const scrollPosition = window.scrollY;
//         const clippedElements = document.querySelectorAll(elementSelector);

//         if (clippedElements.length === 0) return;

//         const t = Math.min(1, Math.max(0, (scrollPosition - startClipPathPosition) / (endClipPathPosition - startClipPathPosition)));
//         const clipPathValue = startClipPathValue + t * (endClipPathValue - startClipPathValue);

//         clippedElements.forEach((element) => {
//             element.style.clipPath = `inset(0% ${clipPathValue} 0% 0%)`;
//         });
//     });
// }

// setupScrollClipPath(".clipped-left", 11700, 12000, 100, 0);


// setupScrollClipPath(".top-inset", 1600, 1700, 100, 0);
// setupScrollClipPath(".top-image .fashion-item-image:nth-of-type(1)", 3600, 3800, 100, 0);
// setupScrollClipPath(".top-image .fashion-item-image:nth-of-type(2)", 3800, 4000, 100, 0);

// setupScrollClipPath(".bottom-image .fashion-item-image:nth-of-type(2)", 4000, 4200, 100, 0);
// setupScrollClipPath(".bottom-image .fashion-item-image:nth-of-type(1)", 4200, 4400, 100, 0);

// setupScrollClipPath(".senior-couple-photo-2 ", 6900, 7100, 100, 0);

// setupScrollClipPath(".question-2-2 .top-inset:nth-of-type(1)", 8700, 8900, 100, 0);
// setupScrollClipPath(".question-2-2 .top-inset:nth-of-type(2)", 8900, 9100, 100, 0);

// setupScrollClipPath(".seventh-mockup-scrolling img:last-child", 16900, 17000, 100, 0);

// setupScrollClipPath(".tablet img", 12300, 12800, 100, 0);
// setupScrollClipPath(".back-img-scroll", 14000, 14500, 100, 0);
// setupScrollClipPath(".moss-intro-mockup-detail", 17800, 18300, 100, 0);


// setupScrollClipPath(".clipped-left", 11700, 12000, 100, 0);



function setupScrollClipPathOnView(elementSelector, startClipPathValue, endClipPathValue) {
    const clippedElements = document.querySelectorAll(elementSelector);

    function checkAndSetClipPath() {
        clippedElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                const t = Math.min(1, Math.max(0, (rect.top - window.innerHeight) / (rect.height - window.innerHeight)));
                const clipPathValue = startClipPathValue + t * (endClipPathValue - startClipPathValue);
                element.style.clipPath = `inset(0% ${clipPathValue} 0% 0%)`;
            }
        });
    }

    // Initial check when the page loads
    checkAndSetClipPath();

    // Add event listener for scroll events
    window.addEventListener("scroll", checkAndSetClipPath);
}

// Usage
setupScrollClipPathOnView(".clipped-left", 100, 0);
// Add similar calls for other elements


setupScrollClipPathOnView(".top-inset", 100, 0);
setupScrollClipPathOnView(".top-image .fashion-item-image:nth-of-type(1)", 100, 0);
setupScrollClipPathOnView(".top-image .fashion-item-image:nth-of-type(2)", 100, 0);

setupScrollClipPathOnView(".bottom-image .fashion-item-image:nth-of-type(2)", 100, 0);
setupScrollClipPathOnView(".bottom-image .fashion-item-image:nth-of-type(1)", 100, 0);


setupScrollClipPathOnView(".question-2-2 .top-inset:nth-of-type(1)", 100, 0);
setupScrollClipPathOnView(".question-2-2 .top-inset:nth-of-type(2)", 100, 0);

// setupScrollClipPathOnView(".seventh-mockup-scrolling img:last-child", 100, 0);

// setupScrollClipPathOnView(".tablet img", 100, 0);
// setupScrollClipPathOnView(".back-img-scroll", 100, 0);
// setupScrollClipPathOnView(".moss-intro-mockup-detail", 100, 0);


setupScrollClipPathOnView(".clipped-left", 100, 0);
// Add similar calls for other elements

//////////////////////////////////////////////////////////////////////


window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const svgElement = document.querySelector(".telescope-effect > .telescope"); 
    const h1 = document.querySelector(".text-fadeout");
    const textFadeinGroup = document.querySelector(".fadein-item");

    // 요소가 없을 경우 null을 반환하므로, 해당 요소가 존재하는지 확인
    if (!svgElement || !h1 || !textFadeinGroup) {
        return; // 요소가 없을 때 이벤트 리스너를 종료
    }

    const startScrollPosition = 1100;
    const scaleFactor = 3 - ((scrollY - startScrollPosition) / 100); 
    const scaleValue = Math.max(0.8, scaleFactor);
    // SVG의 크기를 조정
    svgElement.style.transform = `scale(${scaleValue})`;

    const opacityFadeout = Math.max(0, 1 - (scrollY - 1200) / 100); 
    const opacityFadein = Math.max(0, (scrollY - 1200) / 100);

    h1.style.opacity = opacityFadeout;
    textFadeinGroup.style.opacity = opacityFadein;

    console.log(scrollY);
});






//////////////////////////////////////////////////////////////////////