'use strict';

module.exports = (function() {
    const menu = {
        height: 100,
        rootElement: '.js-menu',
        expandTrigger: '.js-expand',
        innerLinkTrigger: '.js-link',
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
            const step = ease(timeElapsed, startPositionY, distance, duration);
            window.scrollTo(0, step);
            if (timeElapsed < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    const navigate = () => {
        document.querySelectorAll(menu.rootElement).forEach(function(root) {
            root.querySelectorAll(menu.expandTrigger).forEach (function(trigger) {
                trigger.addEventListener('click', function (){
                    root.classList.toggle(menu.expandedClass);
                })
            });
            root.querySelectorAll(menu.innerLinkTrigger).forEach(trigger => {
                trigger.addEventListener('click', event => {
                    event.preventDefault;
                    root.classList.remove(menu.expandedClass);
                    const target=document.querySelector(trigger.dataset.target);
                    scroll(target, menu.height);
                })
            })
        });
    }
    document.addEventListener('DOMContentLoaded', navigate);
    return navigate;
})();
