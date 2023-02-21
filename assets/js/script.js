let currentDay = $("#currentDay");

let currentTime = moment().format;


let hour = $(".hour");



let timeBlock = $(".time-block");
let textArea = $(".textarea");
let block9 = $("#9am");
let block10 = $("#10am");
let block11= $("#11am");
let block12 = $("#12pm");
let block1 = $("#1pm");
let block2 = $("#2pm");
let block3 = $("#3pm");
let block4 = $("#4pm");
let block5 = $("#5pm");

let saveButton = $(".saveBtn");

//display time
let date = moment().format("dddd, MMMM Do");
currentDay.html(date);


//when user types in text area and clicks save, time is used as ls key and then text is stored in string;
// color of block will changed based on whether it is future, present or past

