const country = "i love my country bangladesh";
let vowel = ['a','e','i','o','u'];
let count = [];

for(let i = 0 ; i < country.length; i++){
    if( vowel.includes(country[i]) ){
        // count.push(country[i]); for finding all vowel in country
        count++;
    }
}
console.log(count);