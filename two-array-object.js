// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let result = {};
    keys.forEach((key, index) => {
        result[key] = values[index] !== undefined ? values[index] : null;
    })
    return result;
}

module.exports = twoArrayObject;