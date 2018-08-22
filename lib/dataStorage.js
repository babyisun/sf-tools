var _this = this;

/**
 * 本地化存储类库
 * 当浏览器不支持localStorage时候，使用userdata方案替代
 */

var DataStorage = {
  dataDom: null,
  dataName: location.hostname ? location.hostname : 'localUserData',
  Init: function Init() {
    if (!_this.dataDom) {
      try {
        _this.dataDom = document.createElement('input');
        _this.dataDom.type = 'hidden';
        _this.dataDom.style.display = "none";
        _this.dataDom.addBehavior('#default#userData'); //userData的语法
        document.body.appendChild(_this.dataDom);
        var _d = new Date(),
            _expires = _d.setDate(_d.getDate() + 365);
        _this.dataDom.expires = new Date(_expires); //设定过期时间

        //加载userdata
        _this.dataDom.load(_this.dataName);
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
      if (_this.Init()) {
        //this.dataDom.load(this.dataName);
        return _this.dataDom.getAttribute(name);
      }
    }
  },
  set: function set(name, value) {
    if (window.localStorage) {
      window.localStorage.setItem(name, value);
    } else {
      if (_this.Init()) {
        //this.dataDom.load(this.dataName);
        _this.dataDom.setAttribute(name, value);
        _this.dataDom.save(_this.dataName);
      }
    }
  },
  remove: function remove(name) {
    if (window.localStorage) {
      localStorage.removeItem(name);
    } else {
      if (_this.Init()) {
        //this.dataDom.load(this.dataName);
        _this.dataDom.removeAttribute(key);
        _this.dataDom.save(_this.dataName);
      }
    }
  },
  removeAll: function removeAll() {
    if (window.localStorage) {
      localStorage.clear();
    } else {
      if (_this.dataDom) {
        $(_this.dataDom).remove();
      }
    }
  }

};

export default DataStorage;