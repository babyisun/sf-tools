/**
 * Cookie 操作 North Shi
 */

var Cookie = {
    get: function get(name) {
        var cookieValue = "";
        var search = name + "=";
        if (document.cookie.length > 0) {
            var offset = document.cookie.indexOf(search),
                end = void 0;
            if (offset != -1) {
                offset += search.length;
                end = document.cookie.indexOf(";", offset);
                if (end == -1) end = document.cookie.length;
                cookieValue = unescape(document.cookie.substring(offset, end));
            }
        }
        return cookieValue;
    },
    set: function set(name, value, time, timetype, domain) {
        var expire = "",
            dm = "",
            timet = {
            day: 86400000,
            hour: 3600000,
            minute: 60000,
            seconds: 1000
        };
        if (time) {
            if (!timetype) timetype = "hour";
            expire = new Date(new Date().getTime() + time * timet[timetype]);
            expire = "; expires=" + expire.toGMTString();
        }
        if (domain) {
            dm = "; domain=" + domain;
        }
        document.cookie = name + "=" + escape(value) + expire + ";path=/" + dm;
    },
    remove: function remove(name) {
        this.set(name, null, -1);
    }
};

export default Cookie;