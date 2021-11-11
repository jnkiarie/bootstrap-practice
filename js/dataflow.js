// data to flow we use logical expressiiions such as if and else
let myNumber = 10;

while (myNumber < 20){
    console.log('My Number is', myNumber);
    myNumber+=1
    if (myNumber==15){
        console.log('My Number is 15')
        break
    }
    
}                    

// functions
const myFunction = (element)=>{
    
}

const manUPlayers = ["Wayne Rooney","Christiano Ronaldo","Chicharito Maritas","hos Pogba"];

//Functions

const manUPlayersEmail = (footballer) => {
    const newNames = footballer.split(" ");
    const firstName = newNames[0];
    const lastName = newNames[1];
    const firstLetter = firstName[0];
    const playerEmails = firstLetter + lastName + "@moringaschool.com";
    return playerEmails;
}

for(let i=0;i<=manUPlayers.length;i++){
    const footballer = manUPlayers[i];
    const myEmail = manUPlayersEmail(footballer);
    console.log("Player",i,"Email: is ",myEmail)    
    }


