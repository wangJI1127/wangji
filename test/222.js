function getUrlParam() {
    let url = window.location.search;
    let paramObject = {};
    if (url.indexOf("?") !== -1) {
        let str = url.substr(1);
        let strArr = str.split("&");
        for (let strItem of strArr){
            paramObject[strItem.split("=")[0]] = unescape(strItem.split("=")[1]);
        }
    }
    return paramObject;
}
