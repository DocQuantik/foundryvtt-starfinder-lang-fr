Hooks.on('init', () => {

    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'starfinder-fr',
            lang: 'fr',
            dir: 'compendium'
        });
    }
});

