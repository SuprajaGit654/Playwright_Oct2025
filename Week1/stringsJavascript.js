let originalWord = "madam"
let reversedWord = ""
let splitWord = originalWord.split("")
console.log(splitWord)
for (let i=splitWord.length-1; i>=0; i--) {
    reversedWord = reversedWord + splitWord[i]
}
console.log(reversedWord)

if (originalWord === reversedWord) {
    console.log("It's a palindrome")   
} else {
    console.log("Not a palindrome")
}