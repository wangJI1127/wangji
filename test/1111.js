/**
 * 一循环数组
 * 二对比字节pid
 * 三递归数组与父id
 * 四赋值数组children属性
 * 五返回数组列表
 */
var arr = [
    { id: 1, pid: 0, name: '中国' },
    { id: 2, pid: 1, name: '湖北省' },
    { id: 3, pid: 2, name: '武汉市' },
    { id: 4, pid: 2, name: '恩施州' },
    { id: 5, pid: 1, name: '四川省' },
    { id: 6, pid: 0, name: '中国1' },
    { id: 7, pid: 0, name: '中国12' },
    { id: 8, pid: 0, name: '中国134' },
];
function tree(object, parentId) {
    let treeList = []
    let temp;
    object.map((item, index) => {
        if (item.pid === parentId) {  // 根据父节点id，找到对应的子节点
            let obj = item
            temp = tree(object, obj.id) // 对子节点递归查找子节点
            if (temp.length > 0) {
                obj.children = temp;
            }
            treeList.push(obj);
        }
    })
    return treeList
}
console.log(tree(arr, 0)) // 数组 0为默认的父id
let arr = []
function tree2arr(treeArr) {
    treeArr.map((item) => {
        let obj = { id: item.id, pId: item.pId}
        arr.push(obj)
        if (item.children) {
            tree2arr(item.children)
        }
    })
}
tree2arr(tree(arr, 0))

