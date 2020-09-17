export default class NameStorage {
    private static singleton;
    private static RE_PAIR;
    private static Q;
    private static EQ;
    private static encode;
    private static decode;
    private static STORAGE;
    private static SCHEME;
    private static ORIGIN_NAME;
    private static AND;
    /**
     * 解析并初始化 name 数据。
     * 标准的 nameStorage 数据格式为 `nameStorage:origin-name?key=value`
     * @private
     */
    private static parse;
    /**
     * addEventLister implementation
     * @param element
     * @param eventName
     * @param handler
     * @private
     */
    private static addEventListener;
    /**
     * 保存数据到 window.name
     * 如果没有存储数据，则恢复原始窗口名称(window.name)。
     */
    static save(): void;
    static getInstance(): NameStorage;
    /**
     * 写入数据。
     * @param key 键名
     * @param value 键值
     */
    static setItem(key: string, value: string): void;
    /**
     * 读取数据
     * @param key
     * @return {string|null}
     */
    static getItem(key: string): string | null;
    /**
     * 移除数据。
     * @param key
     */
    static removeItem(key: string): void;
    /**
     * 清空 nameStorage。
     */
    static clear(): void;
    static valueOf(): {};
    static toString(): string;
}
