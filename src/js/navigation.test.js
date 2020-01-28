import {navigation} from './navigation';

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
});