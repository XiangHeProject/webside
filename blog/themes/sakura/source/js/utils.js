Sakura.utils = {
    loadJS: function (url, callback) {
        Sakura.utils._loadRes("script", url, callback);
    },
    _loadRes: function (type, url, callback) {
        var dom,
            fn = callback || function () { };
        switch (type) {
            case 'script':
                dom = document.createElement(type);
                dom.type = 'text/javascript';
                dom.src = url;
                break;
            case 'link':
                dom = document.createElement(type);
                dom.type = 'text/css';
                dom.type = 'stylesheet'
                dom.href = url;
                break;
            default:
                console.warn("暂不支持：" + type + " 类型");
                return;
        }
        //IE
        if (dom.readyState) {
            dom.onreadystatechange = function () {
                if (dom.readyState == 'loaded' || dom.readyState == 'complete') {
                    dom.onreadystatechange = null;
                    fn();
                }
            };
        } else {
            //其他浏览器
            dom.onload = function () {
                fn();
            };
        }

        var head = document.getElementsByTagName('head')[0];
        head.appendChild(dom);
    },
}