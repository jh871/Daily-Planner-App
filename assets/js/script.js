let currentDay = $("#currentDay");

let currentTime = moment().format;


let hour = $(".hour");


// ids for timeblocks
let timeBlock = $(".time-block");
let textArea = $(".textarea");
let block9 = $("#9");
let block10 = $("#10");
let block11= $("#11");
let block12 = $("#12");
let block1 = $("#13");
let block2 = $("#14");
let block3 = $("#15");
let block4 = $("#16");
let block5 = $("#17");

let blocks = [block9, block10, block11, block12]
let saveButton = $(".saveBtn");

//display time
let date = moment().format("dddd, MMMM Do");
currentDay.html(date);


//when user types in text area and clicks save, time is used as ls key and then text is stored in string;


//change colour of timeblock by class:
/*
let time = parseInt(moment().format("H"));
console.log(typeof time);
*/
let time = 13; //take out to set correctly

let count = [block9, block10, block11, block12, block1, block2, block3, block4, block5];
count.forEach((num) => {
    if (parseInt(num[0].id) === time) {
        num.addClass("present");
    } else if (parseInt(num[0].id) < time){
        num.addClass("past");
    } else if (parseInt(num[0].id) > time) {
        num.addClass("future");
    }
});



// trying to save individual text to local storage
// let savedItem = [];

// for (i = 0; i < saveButton.length; i++){
//     let blockText = count[i].text;

//     let storageTest = localStorage.getItem(saveButton[i].id);
//     if (storageTest !== null){
//         savedItem = JSON.parse(localStorage.getItem(saveButton[i].id));
//     };
//     savedItem.push(blockText);
// }



// console.log(typeof saveButton[8].id);


// saveButton[i].on("click", saveText());



// function saveText() {
//     let storageTest = localStorage.getItem(saveButton[i].id)
// }

// for (i = 0; i < saveButton.length; i++){
// count[i].text("Hello " + count[i][0].id + "!")
// };

console.log(parseInt(count[0][0].id));


console.log(textArea[1].value)