// add whatever parameters you deem necessary
function averagePair(sortedArr, targetAvg) {
    if (sortedArr.length === 0) return false;
    let left = 0;
    let right = sortedArr.length - 1;
    while (left < right) {
        let average = (sortedArr[left] + sortedArr[right])/2;
        if (average === targetAvg) {
            return true;
        } else if (average < targetAvg) {
            left ++;
        } else {
            right --;
        }
    }
    return false;
}

module.exports = averagePair;