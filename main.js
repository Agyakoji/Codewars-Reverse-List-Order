// Create a function  that takes in a list and returns a list with a reverse order

// This reverses the list without permanently mutating the list
function reversedList(list){
    let returnReverseList = [...list].reverse()
    return returnReverseList
}
alert(reversedList([1,2,3,4,5]))

        // This reverses the list and permanently mutates the list
// function reverseList(num){
//     return num.reverse()
// }
// alert(reverseList([1,2,3,4,5]))
