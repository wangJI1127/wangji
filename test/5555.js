function toThousands(num) {
    let resultArr = [];
    let counter = 0;  // 计数器
    num = (num || 0).toString().split('');
    for (let i = num.length - 1; i >= 0; i--) {
        counter++;
        // 读取最后一个字符在数组的首位插入
        resultArr.unshift(num[i]);
        // 每三个字符插入一个 ,
        if (!(counter % 3) && i !== 0) { resultArr.unshift(','); }
    }
    return resultArr.join('');
}

console.log(toThousands(3124242));
console.log(toThousands('52141csafasf244'));
