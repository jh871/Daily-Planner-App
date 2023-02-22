let currentDay = $("#currentDay");

let currentTime = moment().format;


let hour = $(".hour");



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
// color of block will changed based on whether it is future, present or past
/*
let time = parseInt(moment().format("H"));
console.log(typeof time);
*/
let time = 13;


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

