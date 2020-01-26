import { scroll } from './utils/scroll';
const navigation = function() {
    const menu = {
        height: 100,
        rootElement: '.js-menu',
        expandedClass: 'navigation--expanded',
    }

    const goTo = (link) => {
        const target=document.querySelector(link);
        scroll(target, menu.height, 800);
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
    navigate();
};
export { navigation };
