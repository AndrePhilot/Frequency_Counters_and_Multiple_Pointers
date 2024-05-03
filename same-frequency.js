// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    const str1 = String(int1);
    const str2 = String(int2);
    if (str1.length !== str2.length) return false;
    let digitCounts = {};
    for (let digit of str1) {
        digitCounts[digit] = (digitCounts[digit] || 0) + 1;
    }

    for (let digit of str2) {
        if (!digitCounts[digit]) return false;
        digitCounts[digit]--;
    }
    return true;
}

module.exports = sameFrequency;