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

document.addEventListener('DOMContentLoaded', function() {
    Sakura.boot.registerEvents();
    NProgress.configure({ showSpinner: false });
});