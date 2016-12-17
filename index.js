const alphabet = require("./alphabet.json");

const MIN_LETTERS = 5;
const MAX_LETTERS = 8;

const randomVowel = function randomVowel(vowels) {
    return vowels[Math.floor(Math.random()*vowels.length)];
};

const randomConsonant = function randomConsonant(consonants) {
    return consonants[Math.floor(Math.random()*consonants.length)];
};

let switcher = Math.round(Math.random());

const word = Array(Math.floor(Math.random()*(MAX_LETTERS - MIN_LETTERS + 1) + MIN_LETTERS)).fill(0);

const name = word.map(function(item){
    
   if(switcher) {
       switcher = 0;
       return item = randomVowel([...alphabet.vowels]);
   } else {
       switcher = 1;
       return item = randomConsonant([...alphabet.consonants]);
   }
}).join('');

console.log(name);
module.exports = {
    name
};