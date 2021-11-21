!function (o) {
    var mqls = [ // list of window.matchMedia() queries
        { attr: "xs", mq: window.matchMedia("screen and (max-width: 479.98px)") },
        { attr: "sm", mq: window.matchMedia("screen and (min-width: 480px) and (max-width: 767.98px)") },
        { attr: "md", mq: window.matchMedia("screen and (min-width: 768px) and (max-width: 991.98px)") },
        { attr: "lg", mq: window.matchMedia("screen and (min-width: 992px) and (max-width: 1199.98px)") },
        { attr: "xl", mq: window.matchMedia("screen and (min-width: 1200px)") }
    ]

    function mediaqueryresponse(mql) {
        //console.log(mql);
        for (var i = 0; i < mqls.length; i++) { // loop through queries
            if (mqls[i].mq.matches) {
                o.setAttribute("ib-" + mqls[i].attr, "");
            } else {
                o.removeAttribute("ib-" + mqls[i].attr);
            }
        }
    }

    for (var i = 0; i < mqls.length; i++) { // loop through queries
        mqls[i].mq.addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
    }
    mediaqueryresponse();
}(document.documentElement);