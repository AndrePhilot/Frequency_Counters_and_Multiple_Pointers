function makeFreqCounter(arr) {
    let freqCounter = new Map();
    for (let letter of arr) {
        let freq = (freqCounter.get(letter)) || 0;
        freqCounter.set(letter, freq + 1);
    }
    return freqCounter;
}

// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (letters.length < message.length) return false;
    let messageFreqCounter = makeFreqCounter(message);
    let lettersFreqCounter = makeFreqCounter(letters);
    for (let key of messageFreqCounter.keys()) {
        if (!lettersFreqCounter.has(key)) return false;
        if (messageFreqCounter.get(key) > lettersFreqCounter.get(key)) return false;
    }
    return true;
}

module.exports = constructNote;