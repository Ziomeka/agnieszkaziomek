export default {
    scrollToPosition(destinationPositionY, duration) {
        const startPositionY = window.scrollY;
        const distance = destinationPositionY - startPositionY;
        let startTime = null;
        const ease = (t, b, c, d) => c * t / d + b;
        const animate = currentTime => {
            if (startTime === null) {
                startTime = currentTime;
            }
            const timeElapsed = currentTime - startTime;
            let step = ease(timeElapsed, startPositionY, distance, duration);
            if (destinationPositionY > startPositionY && step > destinationPositionY) {
                step = destinationPositionY;
            }
            if (destinationPositionY < startPositionY && step < destinationPositionY) {
                step = destinationPositionY;
            }
            window.scrollTo(0, step);
            if (step !== destinationPositionY) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    },
    scrollToElement(element, offset, duration) {
        const destinationPositionY = element ? element.getBoundingClientRect().top - offset + window.scrollY : 0;
        this.scrollToPosition(destinationPositionY, duration);
    },
    scrollToElementById(id, offset, duration) {
        const item = document.getElementById(id);
        if (item) {
            this.scrollToElement(item, offset, duration);
        }
    },
};