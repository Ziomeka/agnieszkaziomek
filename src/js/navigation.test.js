'use strict';

const navigate = require('./navigation.js');

describe('Navigation', () => {
    const template = `<nav class="js-menu">
            <button class="js-expand">o</button>
            <button class="js-expand">x</button>
            <ul>
                <li>
                    <a class="js-link">1</a>
                </li>
                <li>
                    <a class="js-link">2</a>
                </li>
            </ul>
        </nav>`;
    let triggers;
    beforeEach(() => {
        document.body.innerHTML = template;
        triggers = document.querySelectorAll('.js-expand');
        navigate();
    });

    test('Should exist', () => {
        expect(navigate).not.toBeNull();
        expect(navigate).not.toBeUndefined();
    });

    test('should expand element, when open button is clicked, and close when close button is clicked', () => {
        const target = document.querySelector('.js-menu');
        triggers[0].click();
        expect(target.classList.contains('navigation--expanded')).toBe(true);
        triggers[1].click();
        expect(target.classList.contains('navigation--expanded')).toBe(false);
    });
});