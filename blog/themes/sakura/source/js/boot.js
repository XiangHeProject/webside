var Sakura;

Sakura.boot={};

Sakura.boot.registerEvents = function(){
    Sakura.events.headertop_down();
    Sakura.events.get_to_top();
};

document.addEventListener('DOMContentLoaded', function() {
    Sakura.boot.registerEvents();
});