
const findMissingLetterIn = (txt) =>{
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(txt[0])

    for(let i = 0 ; i < txt.length; i++ ){

        if( txt[i] != alpha[start + i]){
            return alpha[start + i]
        }
    }
    return 'No Missing Letter In Sequence'


}
const findMissingLetterIn2 = (txt) =>{
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let start = alpha.indexOf(txt[0])

    for(let i = 0 ; i < txt.length; i++ ){

        if( !txt[i].includes(alpha[start + i]) ){
            return alpha[start + i]
        }
    }
    return 'No Missing Letter In Sequence'


}



console.log(findMissingLetterIn2("defgi")); // h
console.log(findMissingLetterIn2("abcdeghi")); // f
console.log(findMissingLetterIn2("xyz")); // No Missing Letter In Sequence


//////////////////////////////////////////////////////////////////////////////////////

const convert = (number) =>{
    const convertNumber= number.toString().split('').map((item)=> parseInt(item)).reverse()
    return convertNumber
}
const convert2 = (number) =>{
    let str = number.toString()
    let arr = str.split('')
    arr= arr.map((x)=> parseInt(x))
    arr = arr.reverse()
    return arr
}
const convert3 = (num) =>{
    let str = num.toString()
    let emptyArray = []
    // Loop On String
    for (let i = 0; i < str.length; i++) {
        emptyArray.push(+str[i]);
    }

    // Reverse Array Order
    let result = emptyArray.reverse();
    return result
}
const convert4 = (num) =>{
    let str = num.toString()
    let emptyArray = []
    // Loop On String
    for (let i = 0; i < str.length; i++) {
        emptyArray.unshift(+str[i]);
    }

    // Reverse Array Order
    return emptyArray
}

console.log(convert4(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert4(529132)); // [2, 3, 1, 9, 2, 5]


//////////////////////////////////////////////////////////////////////////////////////

const longestWordIn = (sentence) =>{
    const splitArray = sentence.split(' ')
    let longestLen = 0;
    let longestWord;

    for(let i = 0 ; i < splitArray.length; i++){
        if(splitArray[i].length > longestLen){
            longestWord= splitArray[i]
            longestLen= splitArray[i].length
        }
    }
    return longestWord
}
const longestWordIn2 = (sentence) =>{
    const splitArray = sentence.split(' ')
    let longestWord = splitArray.reduce((a,b) => b.length > a.length ? b : a )

    return longestWord
}


console.log(longestWordIn2('in programming we love el zero'))



//////////////////////////////////////////////////////////////////////////////////////

const removeDuplicateWordsFrom = (words) =>{
    let wordsList= words.split(' ')
    let emptyArr= []

    for( let i = 0; i < wordsList.length; i++){

        if(emptyArr.indexOf(wordsList[i]) === -1){
            emptyArr.push(wordsList[i])
        }

    }
    return emptyArr.join(' ')

}
const removeDuplicateWordsFrom2 = (words) =>{
    let wordsList= words.split(' ')

    let newSet = new Set(wordsList)
    console.log('newSet', newSet)
    const setArray = [... newSet]

    return setArray.join(' ')

}
const removeDuplicateWordsFrom3 = (words) =>{


    return [... new Set(words.split(' '))].join(' ')

}


console.log(removeDuplicateWordsFrom3("Hello Elzero Web Web Hello School"));

//////////////////////////////////////////////////////////////////////////////////////

const removeCharFrom = (words, c) =>{
    return words.split('').filter(x => x !== c.toLowerCase() && x !== c.toUpperCase()).join('')
}


console.log(removeCharFrom("ElddzeroD WebDD ddSchool", "d"));
console.log(removeCharFrom("ElxzeroX Web Sxchool", "x"));
console.log(removeCharFrom("Elzero@ Web@@ @@School", "@"));



//////////////////////////////////////////////////////////////////////////////////////
