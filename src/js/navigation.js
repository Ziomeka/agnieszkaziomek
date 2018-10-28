(function() {
    const menu = {
        rootElement: '.js-menu',
        expandTrigger: '.js-expand',
        expandedClass: 'navigation--expanded',
    }
    document.querySelectorAll(menu.rootElement).forEach(function(root) {
        root.querySelectorAll(menu.expandTrigger).forEach (function(trigger) {
            trigger.addEventListener('click', function (){
                root.classList.toggle(menu.expandedClass);
            })
        })
    });
})();
