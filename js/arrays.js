// //Defining Arrays
// const myFruitsArray = ["Orange", "kiwi", "Mango", "banana"];
// //accessing items inside arrays
// //making use of index

// const orange = myFruitsArray[0];
// //console.log(orange)
// myFruitsArray.forEach(fruit=>{
//     //console.log(fruit);
// })

// //Build a deck of cards
const suits = ["Hearts","Diamonds","Spades","Flowers"];
const faceValues = ["a","2","3","4","5","6","7","8","9","10","J","Q","K"];

// suits.forEach(suit=>{
//     console.log(suit);
// });

// for(i=0;i<suits.length;i++){
//     for(j=0;j<faceValues.length;j++){
//         let newCard = ['Suits',suits[i],'Face',faceValues[j]];
//         //console.log(newCard)
//         console.log(newCard.)
//     }
// }
suits.forEach(suit=>{
    faceValues.forEach(face=>{
        let newCard = {'Suits':suit, 'face':face}
        console.log(newCard);
    })
})