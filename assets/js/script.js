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

let saveButton = $(".saveBtn");
let btn9 = $("#btn9");
let btn10 = $("#btn10");
let btn11 = $("#btn11");
let btn12 = $("#btn12");
let btn13 = $("#btn13");
let btn14 = $("#btn14");
let btn15 = $("#btn15");
let btn16 = $("#btn16");
let btn17 = $("#btn17");


//display time
let date = moment().format("dddd, MMMM Do");
currentDay.html(date);

//get items from ls 
block9[0].value = localStorage.getItem("9");
block10[0].value = localStorage.getItem("10");
block11[0].value = localStorage.getItem("11");
block12[0].value = localStorage.getItem("12");
block1[0].value = localStorage.getItem("13");
block2[0].value = localStorage.getItem("14");
block3[0].value = localStorage.getItem("15");
block4[0].value = localStorage.getItem("16");
block5[0].value = localStorage.getItem("17");


// Setting the local storage for each save button (in as many lines of code as possible apparently.)
btn9.on("click", () => {
    // if (block9[0].value !== ""){
    let lsTest = localStorage.getItem("9");
    if (lsTest !== null) {
        item9 = localStorage.getItem("9");
        };
    item9 = block9[0].value;
    localStorage.setItem("9", item9);
});

btn10.on("click", () => {
        let storageTest = localStorage.getItem("10");
        if (storageTest !== null) {
            item10 = localStorage.getItem("10");
        };
        item10 = block10[0].value;
        localStorage.setItem("10", item10);
});

btn11.on("click", () => {
        let lsTest = localStorage.getItem("11");
        if (lsTest !== null) {
            item11 = localStorage.getItem("11");
            };
        item11 = block11[0].value;
        localStorage.setItem("11", item11);
});

btn12.on("click", () => {
        let lsTest = localStorage.getItem("12");
        if (lsTest !== null) {
            item12 = localStorage.getItem("12");
            };
        item12 = block12[0].value;
        localStorage.setItem("12", item12);
});

btn13.on("click", () => {
        let lsTest = localStorage.getItem("13");
        if (lsTest !== null) {
            item13 = localStorage.getItem("13");
            };
        item13 = block1[0].value;
        localStorage.setItem("13", item13);
});

btn14.on("click", () => {
        let lsTest = localStorage.getItem("14");
        if (lsTest !== null) {
            item14 = localStorage.getItem("14");
            };
        item14 = block2[0].value;
        localStorage.setItem("14", item14);
});

btn15.on("click", () => {
        let lsTest = localStorage.getItem("15");
        if (lsTest !== null) {
            item15 = localStorage.getItem("15");
            };
        item15 = block3[0].value;
        localStorage.setItem("15", item15);
});


btn16.on("click", () => {
        let lsTest = localStorage.getItem("16");
        if (lsTest !== null) {
            item16 = localStorage.getItem("16");
            };
        item16 = block4[0].value;
        localStorage.setItem("16", item16);
});

btn17.on("click", () => {
        let lsTest = localStorage.getItem("17");
        if (lsTest !== null) {
            item17 = localStorage.getItem("17");
            };
        item17 = block5[0].value;
        localStorage.setItem("17", item17);
});;


//change colour of timeblock by class:
let time = parseInt(moment().format("H"));

let countArray = [block9, block10, block11, block12, block1, block2, block3, block4, block5];

countArray.forEach((element) => {
    if (parseInt(element[0].id) === time) {
        element.addClass("present");
    } else if (parseInt(element[0].id) < time){
        element.addClass("past");
    } else if (parseInt(element[0].id) > time) {
        element.addClass("future");
    };
});