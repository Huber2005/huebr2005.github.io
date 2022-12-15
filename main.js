var randomIMG
var randomX
var randomY
const  card1  = document.querySelector(".c1 .back img");
const  card2  = document.querySelector(".c2 .back img");
const  card3  = document.querySelector(".c3 .back img");
const  card4  = document.querySelector(".c4 .back img");
const  card5  = document.querySelector(".c5 .back img");
const  card6  = document.querySelector(".c6 .back img");
const  card7  = document.querySelector(".c7 .back img");
const  card8  = document.querySelector(".c8 .back img");
const  card9  = document.querySelector(".c9 .back img");
const card10 = document.querySelector(".c10 .back img");
const card11 = document.querySelector(".c11 .back img");
const card12 = document.querySelector(".c12 .back img");
const card13 = document.querySelector(".c13 .back img");
const card14 = document.querySelector(".c14 .back img");
const card15 = document.querySelector(".c15 .back img");
const card16 = document.querySelector(".c16 .back img");
function shuffleCard(){
    cards.forEach(card => {
        card.classList.remove("flip")
    });
    cardOne = "";
    cardTwo = "";
    accuracy = 0;
    errorspan.textContent = 0
    errors = 0;
    matched = 0;
    disableDeck = false;
    for (let y = 0; y < 4; y++){
        arr[y] = []
        for (let x = 0; x < 4; x++){
            arr[y][x] = 99
        }
    }
    var arrandom = []

    resultrnd(arrandom)

for (let i = 1; i < 16; i++){
    if (!arrandom.includes(i)){
        console.log("Missing : "+ i )
    }
}
var imagecard;

for (let y = 0; y < 4; y++){
    for (let x = 0; x < 4; x++){
        if ( arr[y][x] == 1 || arr[y][x] == 9 ){
            imagecard = "img/img-1.png"
        }else if(arr[y][x] == 2 || arr[y][x] == 10 ){
            imagecard = "img/img-7.png"
        }else if(arr[y][x] == 3 || arr[y][x] == 11 ){
            imagecard = "img/img-2.png"
        }else if(arr[y][x] == 4 || arr[y][x] == 12 ){
            imagecard = "img/img-8.png"
        }else if(arr[y][x] == 5 || arr[y][x] == 13 ){
            imagecard = "img/img-3.png"
        }else if(arr[y][x] == 6 || arr[y][x] == 14 ){
            imagecard = "img/img-4.png"
        }else if(arr[y][x] == 7 || arr[y][x] == 15 ){
            imagecard = "img/img-6.png"
        }else if(arr[y][x] == 8 || arr[y][x] == 16 ){
            imagecard = "img/img-5.png"
        }
        if (arr.indexOf(arr[y]) === 0 && arr.indexOf(arr[x]) === 0){
            card1.src = imagecard
        }else if(arr.indexOf(arr[y]) === 0 && arr.indexOf(arr[x]) === 1){
            card2.src = imagecard
        }else if(arr.indexOf(arr[y]) === 0 && arr.indexOf(arr[x]) === 2){
            card3.src = imagecard
        }else if(arr.indexOf(arr[y]) === 0 && arr.indexOf(arr[x]) === 3){
            card4.src = imagecard
        }else if(arr.indexOf(arr[y]) === 1 && arr.indexOf(arr[x]) === 0){
            card5.src = imagecard
        }else if(arr.indexOf(arr[y]) === 1 && arr.indexOf(arr[x]) === 1){
            card6.src = imagecard
        }else if(arr.indexOf(arr[y]) === 1 && arr.indexOf(arr[x]) === 2){
            card7.src = imagecard
        }else if(arr.indexOf(arr[y]) === 1 && arr.indexOf(arr[x]) === 3){
            card8.src = imagecard
        }else if(arr.indexOf(arr[y]) === 2 && arr.indexOf(arr[x]) === 0){
            card9.src = imagecard
        }else if(arr.indexOf(arr[y]) === 2 && arr.indexOf(arr[x]) === 1){
            card10.src = imagecard
        }else if(arr.indexOf(arr[y]) === 2 && arr.indexOf(arr[x]) === 2){
            card11.src = imagecard
        }else if(arr.indexOf(arr[y]) === 2 && arr.indexOf(arr[x]) === 3){
            card12.src = imagecard
        }else if(arr.indexOf(arr[y]) === 3 && arr.indexOf(arr[x]) === 0){
            card13.src = imagecard
        }else if(arr.indexOf(arr[y]) === 3 && arr.indexOf(arr[x]) === 1){
            card14.src = imagecard
        }else if(arr.indexOf(arr[y]) === 3 && arr.indexOf(arr[x]) === 2){
            card15.src = imagecard
        }else if(arr.indexOf(arr[y]) === 3 && arr.indexOf(arr[x]) === 3){
            card16.src = imagecard
        }
    }}
    cards.forEach(card => {
        card.addEventListener("click", flipCard)
    });
}
 
function randomess(){
    randomIMG = Math.floor(Math.random() * 16 + 1)
    randomX = Math.floor(Math.random() * 4 + 1)-1
    randomY = Math.floor(Math.random() * 4 + 1)-1
    return randomIMG,randomX,randomY
}

function resultrnd(arrandom){
    for (let i = 0; i < 16; i++){
        randomess(arrandom)
        if (arrandom.includes(randomIMG) || arr[randomY][randomX] != 99){
                randomess(arrandom)
                i--
            }
        else{
            arr[randomY][randomX] = randomIMG
            arrandom.push(randomIMG)
        }
  
    }
}

const cards = document.querySelectorAll(".card");
const errorspan = document.querySelector(".errors")
const accuracyspan = document.querySelector(".accuracy")
let accuracy = 0;
let errors = 0;
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let firstCardClicked = ""
function flipCard({target: clickedCard}) {
    if (firstCardClicked == ""){
        firstCardClicked = clickedCard
        console.log(firstCardClicked)
    }
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back img").src,
        cardTwoImg = cardTwo.querySelector(".back img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        right.play()
        matched++;
        
        accuracy =  ((matched * 2) / (errors  + (matched * 2))* 100);
        accuracyspan.textContent = Math.floor(accuracy)
        if(matched == 8) {
            allRight.play()
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    wrong.play()
    errors++
    errorspan.textContent = errors.toString()

    accuracy =  ((matched * 2) / (errors  + (matched * 2))* 100);
    accuracyspan.textContent = Math.floor(accuracy)
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}


if ((document.querySelector(".c1")).querySelector(".back img").src === (document.querySelector(".c2")).querySelector(".back img").src){
    var arr = []
    shuffleCard()
}

let right = new Audio();
right.src = "audios/right.mp3"

let wrong = new Audio();
wrong.src = "audios/wrong.mp3"

let allRight = new Audio();
allRight.src = "audios/completed.mp3"

cards.forEach(card => {
    card.addEventListener("click", flipCard)
});