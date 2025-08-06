/*  Given a string, find the first character that does not repeat anywhere in the string. Return None if all characters repeat.
Input: "Hello"
Output: "H"
Input: "Swiss"
Output: "w"
*/

const word = 'Swiss';
//an object to store the counts
const count = {};
//looping  and counting each character
for (let i=0;i<word.length;i++){
    const letter =(word[i]);
    let count = 0;

    for (let j=0;j<word.length;j++){
        if(word[i]=== letter){
            count ++;
        }
    }
    console.log(letter)
}

