/**
 * 本地化存储类库
 * 当浏览器不支持localStorage时候，使用userdata方案替代
 */

const DataStorage = {
  dataDom: null,
  dataName: location.hostname ? location.hostname : 'localUserData',
  Init: () => {
    if (!this.dataDom) {
      try {
        this.dataDom = document.createElement('input');
        this.dataDom.type = 'hidden';
        this.dataDom.style.display = "none";
        this.dataDom.addBehavior('#default#userData'); //userData的语法
        document.body.appendChild(this.dataDom);
        let _d = new Date(), _expires = _d.setDate(_d.getDate() + 365);
        this.dataDom.expires = new Date(_expires); //设定过期时间

        //加载userdata
        this.dataDom.load(this.dataName);
      } catch (e) {
        console.log("当前环境无法使用,The system cannot be used.");
        return false;
      }
    }
    return true;
  },
  get: (name) => {
    if (window.localStorage) {
      return window.localStorage.getItem(name);
    } else {
      if (this.Init()) {
        //this.dataDom.load(this.dataName);
        return this.dataDom.getAttribute(name);
      }
    }
  },
  set: (name, value) => {
    if (window.localStorage) {
      window.localStorage.setItem(name, value);
    } else {
      if (this.Init()) {
        //this.dataDom.load(this.dataName);
        this.dataDom.setAttribute(name, value);
        this.dataDom.save(this.dataName);
      }
    }
  },
  remove: (name) => {
    if (window.localStorage) {
      localStorage.removeItem(name);
    } else {
      if (this.Init()) {
        //this.dataDom.load(this.dataName);
        this.dataDom.removeAttribute(key);
        this.dataDom.save(this.dataName);
      }
    }
  },
  removeAll: () => {
    if (window.localStorage) {
      localStorage.clear();
    } else {
      if (this.dataDom) {
        $(this.dataDom).remove();
      }
    }
  }

};

export default DataStorage;
