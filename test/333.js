var str = 'wwwwjjjssadjjdsfasd';
var result = maxChar(str);
function maxChar(str) {
    let json = {};
    // 统计字符的个数
    for (let sChar of str){
        !json[sChar] ? json[sChar] = 1 : json[sChar] ++;
    }
    let charN = '';
    let maxNum = 0;
    //遍历json  一次比较字符的个数
    for(let j in json){
        if (json[j]>maxNum) {
            maxNum = json[j];
            charN = j;
        }
    }
    return {
        charN:charN,
        maxNum:maxNum
    }
}

console.log(result);
