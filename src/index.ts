export default class NameStorage {
    private static singleton: NameStorage;
    private static RE_PAIR = /^([^=]+)(?:=(.*))?$/;
    private static Q = '?';
    private static EQ = '=';
    private static encode = encodeURIComponent;
    private static decode = decodeURIComponent;
    private static STORAGE = {};
    private static SCHEME: string = 'nameStorage:';
    private static ORIGIN_NAME: string;
    private static AND: string = '&';
    /**
     * 解析并初始化 name 数据。
     * 标准的 nameStorage 数据格式为 `nameStorage:origin-name?key=value`
     * @private
     */
    private static parse() {
        const name = window.name;
        if (name && name.indexOf(this.SCHEME) === 0) {
            const match = name.split(/[:?]/);
            match.shift();                      // scheme: match[0];
            this.ORIGIN_NAME = this.decode(match.shift()) || '';  // match[1]
            const params = match.join('');        // match[2,...]
            const pairs = params.split(this.AND);
            for (let i = 0, pair, key, value, l = pairs.length; i < l; i++) {
                pair = pairs[i].match(this.RE_PAIR);
                if (!pair || !pair[1]) {
                    continue;
                }
                key = this.decode(pair[1]);
                value = this.decode(pair[2]) || '';
                this.STORAGE[key] = value;
            }
        } else {
            this.ORIGIN_NAME = name || '';
        }

    }

    /**
     * addEventLister implementation
     * @param element
     * @param eventName
     * @param handler
     * @private
     */
    private static addEventListener(element, eventName, handler) {
        if (!element) {
            return;
        }

        if (element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + eventName, (evt) => {
                handler.call(element, evt);
            });
        }
    }

    /**
     * 保存数据到 window.name
     * 如果没有存储数据，则恢复原始窗口名称(window.name)。
     */
    public static save() {
        const pairs = [];
        let empty = true;
        let value;
        for (const key in this.STORAGE) {
            if (!this.STORAGE.hasOwnProperty(key)) {
                continue;
            }
            empty = false;
            value = this.STORAGE[key] || '';
            pairs.push(this.encode(key) + this.EQ + this.encode(value));

        }
        window.name = empty ? this.ORIGIN_NAME :
            this.SCHEME + this.encode(this.ORIGIN_NAME) + this.Q + pairs.join(this.AND);
    }

    public static getInstance() {
        if (window) {
            if (window.name) {
                if (NameStorage.singleton === null) {
                    NameStorage.singleton = new NameStorage();
                    this.parse();
                    this.addEventListener(window, 'beforeunload', () => {
                        this.save();
                    });
                }
                return NameStorage.singleton;
            }
        }
        console.warn('未在web中');
        return null;

    }

    /**
     * 写入数据。
     * @param key 键名
     * @param value 键值
     */
    public static setItem(key: string, value: string) {
        if (!key || 'undefined' === typeof value) {
            return;
        }
        this.STORAGE[key] = String(value);
        this.save();
    }

    /**
     * 读取数据
     * @param key
     * @return {string|null}
     */
    public static getItem(key: string): string | null {
        return this.STORAGE.hasOwnProperty(key) ? this.STORAGE[key] : null;

    }

    /**
     * 移除数据。
     * @param key
     */
    public static removeItem(key: string) {
        if (!this.STORAGE.hasOwnProperty(key)) {
            return;
        }
        this.STORAGE[key] = null;
        delete this.STORAGE[key];
        this.save();
    }

    /**
     * 清空 nameStorage。
     */
    public static clear() {
        this.STORAGE = {};
        this.save();
    }

    public static valueOf() {
        return this.STORAGE;
    }

    public static toString() {
        const name = window.name;
        return name.indexOf(this.SCHEME) === 0 ? name : this.SCHEME + name;
    }

}

