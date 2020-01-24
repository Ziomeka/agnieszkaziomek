const scrollToTop = function() {
    const scrollToTop = () => {
        const elements = {
            trigger: '.js-scroll-to-top',
            visibleClass: '.scroll-to-top--visible',
        };
        const minOffsetY = window.innerHeight;
        const reachingEndTolerance = 10;
        let prevPageOffsetY = window.pageYOffset;

        const trigger = document.querySelector(elements.trigger);
        if (trigger) {
            trigger.addEventListener('click', () => {
                window.scrollTo(0, 0);
                prevPageOffsetY = 0;
            });
        }

        window.addEventListener('scroll', () => {
            prevPageOffsetY = manageScrollToTop(
                trigger,
                elements.visibleClass.slice(1),
                prevPageOffsetY,
                minOffsetY,
                reachingEndTolerance
            );
        });
    };

    const checkScrollToTopVisibilty = (pageOffsetY, prevPageOffsetY, minOffsetY, reachingEndTolerance) => {
        const pageHeight = document.documentElement.getBoundingClientRect().height;
        const isScrollingUp = pageOffsetY <= prevPageOffsetY;
        const isScrolledLowEnough = pageOffsetY > minOffsetY;
        const isEnd = pageHeight - window.innerHeight - reachingEndTolerance < pageOffsetY;
        let isScrollToTopVisible = false;
        if (isScrolledLowEnough && (isScrollingUp || isEnd)) {
            isScrollToTopVisible = true;
        }
        return isScrollToTopVisible;
    };

    const displayScrollTopButton = (button, isVisible, buttonVisibleClass) => {
        if (button) {
            if (isVisible) {
                button.classList.add(buttonVisibleClass);
            } else {
                button.classList.remove(buttonVisibleClass);
            }
        }
    };

    const manageScrollToTop = (button, buttonVisibleClass, prevPageOffsetY, minOffsetY, reachingEndTolerance) => {
        const pageOffsetY = window.pageYOffset;
        const isScrollToTopVisible =
            checkScrollToTopVisibilty(pageOffsetY, prevPageOffsetY, minOffsetY, reachingEndTolerance);
        displayScrollTopButton(button, isScrollToTopVisible, buttonVisibleClass);
        return pageOffsetY;
    };

    scrollToTop();
};

export { scrollToTop };