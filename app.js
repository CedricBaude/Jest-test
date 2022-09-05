function isPalindrom(word) {
    const reversed = word.split('').reverse().join('');
    const result = word === reversed;
    console.log('result', result);
    return result;
}

const forbiddenWords = ['truffe', 'truffes', 'confiture'];

function constainsForbiddenWords(message) {
    const messageWords = message.split(' ');
    let detectedForbiddenWords = [];
    for (let index = 0; index < messageWords.length; index++) {
        const word = messageWords[index].toLocaleLowerCase();
        if (forbiddenWords.includes(word)) {
            detectedForbiddenWords.push(word);
        }
    }
    console.log('detectedForbiddenWords', detectedForbiddenWords);
    if (detectedForbiddenWords.length > 0) {
        return true;
    }
    return false;
}

function removeForbiddenWords(message) {
    const hasForbiddenWords = constainsForbiddenWords(message);
    console.log('hasForbiddenWords', hasForbiddenWords);
    if (!hasForbiddenWords) {
        return message;
    }
    const words = message.split(' ');
    const result = words.map(w => {
        if (forbiddenWords.includes(w.toLocaleLowerCase())) {
            return 'xxx';
        } else {
            return w;
        }
    });
    console.log('result', result);
    return result.join(' ');
}

module.exports = {
    isPalindrom,
    constainsForbiddenWords,
    removeForbiddenWords
}