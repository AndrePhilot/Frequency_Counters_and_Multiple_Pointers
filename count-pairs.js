// add whatever parameters you deem necessary
function countPairs(arr, num) {
    let hashSet = {};
    let pairCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let complement = num - arr[i];
        if (hashSet[complement]) pairCount++;
        hashSet[arr[i]] = true;
    }
    return pairCount;
}

module.exports = countPairs;