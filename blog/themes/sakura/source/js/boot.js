var Sakura;

Sakura.boot={};

Sakura.boot.registerEvents = function(){
    Sakura.events.headertop_down();
    Sakura.events.get_to_top();
    Sakura.events.NH();
    Sakura.events.MGT();
    Sakura.events.MN();
    Sakura.events.MNH();
};

Sakura.boot.refresh = function() {
    Sakura.plugins.TOC();
    Sakura.plugins.wrapImageWithFancyBox();
}

document.addEventListener('DOMContentLoaded', function() {
    Sakura.boot.registerEvents();
    Sakura.boot.refresh();
    NProgress.configure({ showSpinner: false });
});