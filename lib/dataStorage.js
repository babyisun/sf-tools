'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 本地化存储类库
 * 当浏览器不支持localStorage时候，使用userdata方案替代
 */

var DataStorage = {
  dataDom: null,
  dataName: location.hostname ? location.hostname : 'localUserData',
  Init: function Init() {
    if (!undefined.dataDom) {
      try {
        undefined.dataDom = document.createElement('input');
        undefined.dataDom.type = 'hidden';
        undefined.dataDom.style.display = "none";
        undefined.dataDom.addBehavior('#default#userData'); //userData的语法
        document.body.appendChild(undefined.dataDom);
        var _d = new Date(),
            _expires = _d.setDate(_d.getDate() + 365);
        undefined.dataDom.expires = new Date(_expires); //设定过期时间

        //加载userdata
        undefined.dataDom.load(undefined.dataName);
      } catch (e) {
        console.log("当前环境无法使用,The system cannot be used.");
        return false;
      }
    }
    return true;
  },
  get: function get(name) {
    if (window.localStorage) {
      return window.localStorage.getItem(name);
    } else {
      if (undefined.Init()) {
        //this.dataDom.load(this.dataName);
        return undefined.dataDom.getAttribute(name);
      }
    }
  },
  set: function set(name, value) {
    if (window.localStorage) {
      window.localStorage.setItem(name, value);
    } else {
      if (undefined.Init()) {
        //this.dataDom.load(this.dataName);
        undefined.dataDom.setAttribute(name, value);
        undefined.dataDom.save(undefined.dataName);
      }
    }
  },
  remove: function remove(name) {
    if (window.localStorage) {
      localStorage.removeItem(name);
    } else {
      if (undefined.Init()) {
        //this.dataDom.load(this.dataName);
        undefined.dataDom.removeAttribute(key);
        undefined.dataDom.save(undefined.dataName);
      }
    }
  },
  removeAll: function removeAll() {
    if (window.localStorage) {
      localStorage.clear();
    } else {
      if (undefined.dataDom) {
        $(undefined.dataDom).remove();
      }
    }
  }

};

exports.default = DataStorage;