/**
 * 解决低版本浏览器让输入文本框显示提示文本
 * @param elems 元素数组
 */
GlobalManage.resetFields = function(elems) {
    if (Modernizr.input.placeholder) return;
    for (var i=0; i<elems.length; i++) {
        var element = elems[i];
        if (!element.getAttribute('placeholder')) continue;
        element.onfocus = function() {
            if (this.value == this.getAttribute('placeholder')) {
                this.value = "";
            }
        }
        element.onblur = function() {
            if (this.value == "") {
                this.value = this.getAttribute('placeholder');
            }
        }
        element.onblur();
    }
}

    // 解决低版本文本框提示问题
    var arr = [];
    arr.push(document.getElementById("searchBox"));
    GlobalManage.resetFields(arr);