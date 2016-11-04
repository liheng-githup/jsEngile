var ArrayBufferUtil;
(function(global){
    global.ArrayBufferUtil = {
        arrayBufferToBase64: arrayBufferToBase64,
        base64ToArrayBuffer: base64ToArrayBuffer
    };

    /**
     * 二进制序列转换成base64
     * @param buffer
     * @returns {string}
     */
    function arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
    }

    /**
     * base64转成二进制序列
     * @param base64
     * @returns {ArrayBuffer}
     */
    function base64ToArrayBuffer(base64) {
        var binary_string =  window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array( len );
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    /*function arrayBufferToBase64( buffer, callback ) {
        var blob = new Blob([buffer],{type:'application/octet-binary'});
        var reader = new FileReader();
        reader.onload = function(evt){
            var dataurl = evt.target.result;
            callback(dataurl.substr(dataurl.indexOf(',')+1));
        };
        reader.readAsDataURL(blob);
    }

    //example:
    var buf = new Uint8Array([11,22,33]);
    arrayBufferToBase64(buf, console.log.bind(console)); //"CxYh"*/

})(this)