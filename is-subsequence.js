// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    if (str2.length < str1.length) return false;
    let left1 = 0;
    let left2 = 0;
    while (left2 < str2.length) {
        if (str1[left1] === undefined) break;
        if (str1[left1] === str2[left2]) {
            left1++;
            left2++;
        } else {
            left2++;
        }
    }
    if (left1 !== str1.length) return false;
    return true;
}

module.exports = isSubsequence;