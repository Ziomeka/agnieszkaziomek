import scroll from './utils/scroll';
const navigation = function() {
    const menu = {
        height: 100,
        rootElement: '.js-menu',
        expandedClass: 'navigation--expanded',
        animationDuration: 800,
    }

    const root = document.querySelector(menu.rootElement);
    root.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        switch(action) {
        case 'expand':
            root.classList.add(menu.expandedClass);
            break;
        case 'fold':
            root.classList.remove(menu.expandedClass);
            break;
        case 'go-to':
            event.preventDefault;
            root.classList.remove(menu.expandedClass);
            const targetId = event.target.dataset.target.slice(1);
            scroll.scrollToElementById(targetId, menu.height, menu.animationDuration);
            break;
        case 'scroll-top':
            scroll.scrollToPosition(0, menu.animationDuration);
        }
    });
};
export { navigation };
