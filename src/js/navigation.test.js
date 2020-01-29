import {navigation} from './navigation';
import scroll from './utils/scroll';

describe('Navigation', () => {
    const template = `<nav class="js-menu">
            <button data-action="expand">o</button>
            <button data-action="fold">x</button>
            <ul>
                <li>
                    <a data-action="go-to" data-target="#link1">1</a>
                </li>
                <li>
                    <a data-action="go-to" data-target="#link2">2</a>
                </li>
            </ul>
            <button data-action="scroll-top" >&uArr;</button>
        </nav>`;
    beforeEach(() => {
        document.body.innerHTML = template;
        navigation();
    });

    test('Should exist', () => {
        expect(navigation).not.toBeNull();
        expect(navigation).not.toBeUndefined();
    });

    test('Should expand element, when expand button is clicked, and fold when fold button is clicked', () => {
        const target = document.querySelector('.js-menu');
        const expandTrigger = document.querySelectorAll("[data-action = 'expand']")[0];
        const foldTrigger = document.querySelectorAll("[data-action = 'fold']")[0];
        expandTrigger.click();
        expect(target.classList.contains('navigation--expanded')).toBe(true);
        foldTrigger.click();
        expect(target.classList.contains('navigation--expanded')).toBe(false);
    });

    test('Should scroll to proper element when link with got-to action is clicked', () => {
        const link = document.querySelectorAll("[data-action = 'go-to']")[0];
        scroll.scrollToElementById = jest.fn();
        link.click();
        expect(scroll.scrollToElementById).toHaveBeenCalledWith('link1', 100, 800);
    });

    test('Should scroll to page top when srcoll-top button is clicked', () => {
        const scrollTop = document.querySelectorAll("[data-action = 'scroll-top']")[0];
        scroll.scrollToPosition = jest.fn();
        scrollTop.click();
        expect(scroll.scrollToPosition).toHaveBeenCalledWith(0, 800);
    });

});