/**
 * Created by yunwa on 2016/10/13.
 * 原生js事件
 */
var EventUtil = {
    /**
     * 添加事件
     * @param el    需要添加事件的元素
     * @param type  事件类型
     * @param handler 事件处理方法
     * @returns {*}
     */
    addEvent: function (el, type, handler) {
        return el.addEventListener ? el.addEventListener(type, handler, false) : el.attachEvent('on' + type, handler);
    },
    /**
     * 移除事件
     * @param el    需要添加事件的元素
     * @param type  事件类型
     * @param handler 事件处理方法
     * @returns {*}
     */
    removeEvent: function (el, type, handler) {
        return el.removeEventListener ? el.removeEventListener(type, handler, false) : el.detachEvent('on' + type, handler);
    }
}