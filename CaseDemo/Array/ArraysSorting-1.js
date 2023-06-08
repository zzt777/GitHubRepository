function getRankings(arr) {
    // 对数组进行排序，使用排序后的索引来表示不同数据项的排名
    const sortedIndexes = arr.map((val, idx) => idx).sort((a, b) => arr[b] - arr[a]);

    // 创建一个以原始数据值为键，排名为值的 Map 数据结构
    const rankings = new Map();
    sortedIndexes.forEach((sortedIdx, rank) => {
    const originalValue = arr[sortedIdx];
    if (!rankings.has(originalValue)) {
    rankings.set(originalValue, rank + 1);
    }
    });

    // 返回一个按原始数组顺序排列的排名数组
    return arr.map(val => rankings.get(val));
}