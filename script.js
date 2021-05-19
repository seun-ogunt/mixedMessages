console.log("Mixed Messages Program");
let Messages = {
    firstSet : ["Wake up and Check phone", "Skipping breakfast", "Spending money on things I dont need", "Binge watching Netlix" ],
    secondSet : ["Feeling of connection", "Sense of Control", "Boost of Mood", "Relaxation & Pleasure"],
    thirdSet : ["Journal & Drink", "Drink a delicious smoothie", "Put extra money towards dream vacation", "Workout for 30mins"],
    generateRandomMessage(){
        let first = this.firstSet
        let index1 = Math.floor(Math.random()*first.length);
        let second = this.secondSet;
        let index2 = Math.floor(Math.random()*second.length);
        let third = this.thirdSet;
        let index3 = Math.floor(Math.random()*third.length);
        return `First Message: ${first[index1]}\nSecond Message: ${second[index2]}\nThird Message: ${third[index3]}`;    
    }
}
let sentence = Messages.generateRandomMessage();
console.log(sentence);