'use strict';

var Home = function() {
    $.scrollify({
        section : ".js-section",
        setHeights: false,
        interstitialSection : ".no-scrollify",
        touchScroll: false
    });
}

module.exports = Home;
