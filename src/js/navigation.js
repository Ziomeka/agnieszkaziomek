const navigation = function() {
    const menu = {
        height: 100,
        rootElement: '.js-menu',
        expandedClass: 'navigation--expanded',
    }
    const scroll = (element, offset) => {
        const startPositionY = window.scrollY;
        const destinationPositionY = element.getBoundingClientRect().top - offset + window.scrollY;
        const distance = destinationPositionY - startPositionY;
        const duration = 800;
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
    };

    const goTo = (link) => {
        const target=document.querySelector(link);
        scroll(target, menu.height);
    }

    const navigate = () => {
        const root = document.querySelector(menu.rootElement);
        root.addEventListener('click', (event) => {
            switch(event.target.dataset.action) {
            case 'expand':
                root.classList.add(menu.expandedClass);
                break;
            case 'fold':
                root.classList.remove(menu.expandedClass);
                break;
            case 'go-to':
                event.preventDefault;
                root.classList.remove(menu.expandedClass);
                goTo(event.target.dataset.target);
            }
        });
    }
    document.addEventListener('DOMContentLoaded', navigate);
};
export { navigation };
