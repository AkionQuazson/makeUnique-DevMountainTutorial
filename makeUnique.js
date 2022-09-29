// Write your solution below:
const makeUnique = (str) => {
    let previousLetters = [];
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (!previousLetters.includes(char)) {
            previousLetters.push(char);
            result += char;
        }
    }
    return result;
}

console.log(makeUnique('helloworld'));
console.log(makeUnique('iwanttoclimbamountain'));
console.log(makeUnique('I would love to idealize her'));
console.log(makeUnique('20 days ago, 100 people were revived'));