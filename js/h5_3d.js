(function(g) {
    var d, j, c = false, b = g("#viewer"), l = g("#cube"), i = b.width(), h = b.height(), k = 0, a = 0, e = 525;
    g("#container").on("touchstart", function(n) {
        n.preventDefault();
        var m = n.originalEvent;
        d = m.targetTouches[0].pageX;
        j = m.targetTouches[0].pageY;
        c = true
    }).on("touchmove", function(u) {
        var n = u.originalEvent;
        u.preventDefault();
        if (c === true) {
            x2 = n.targetTouches[0].pageX;
            y2 = n.targetTouches[0].pageY;
            var t = x2 - d, s = y2 - j, o = t / i, m = s / h, q = Math.atan2(s, e) / Math.PI * 180, p = -Math.atan2(t, e) / Math.PI * 180, r, v = ["-webkit-", "-moz-", ""];
            k += q;
            a += p;
            k = Math.min(90, k);
            k = Math.max(-90, k);
            a %= 360;
            q = k;
            p = a;
            f(150, q, p);
            d = x2;
            j = y2
        }
    }).on("touchend", function(m) {
        c = false;
        m.preventDefault()
    });
    function f(n, m, o) {
        l.css("transform", "translateZ(-" + n + "px) rotateX(" + m + "deg) rotateY(" + o + "deg)")
    }
})(jQuery);
window.onload = function() {
};
