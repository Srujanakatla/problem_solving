function countWordOccurrences(words) {
    let wordCount = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
}

let wordsArray = ["apple", "banana", "Apple", "orange", "banana", "orange", "banana"];
console.log(countWordOccurrences(wordsArray));


function countVowelsInWords(words) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = [];

    for (let i = 0; i < words.length; i++) {
        let count = 0;
        for (let j = 0; j < words[i].length; j++) {
            if (vowels.includes(words[i][j].toLowerCase())) {
                count++;
            }
        }
        vowelCount.push(count);
    }
    return vowelCount;
}

let wordsWithVowels = ["apple", "banana", "orange"];
console.log(countVowelsInWords(wordsWithVowels));


function countConsonantsInWords(words) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonantCount = [];

    for (let i = 0; i < words.length; i++) {
        let count = 0;
        for (let j = 0; j < words[i].length; j++) {
            let letter = words[i][j].toLowerCase();
            if (!vowels.includes(letter) && /[a-z]/.test(letter)) {
                count++;
            }
        }
        consonantCount.push(count);
    }
    return consonantCount;
}

let wordsWithConsonants = ["apple", "banana", "orange"];
console.log(countConsonantsInWords(wordsWithConsonants));
