let today = new Date().getDay();
let contactButton = document.getElementById("ctctbtn");
let closeContactButton = document.getElementById("closecontactarea");
let contactArea = document.getElementById("contactez-nous");


document.addEventListener('DOMContentLoaded', ()=>{
    let indexAdd;
    let indexDelete;
    switch (today) {
        case 0:
            indexAdd = 4;
            indexDelete = indexAdd - 1;
            break;
        case 1:
            indexAdd = 1;
            indexDelete = indexAdd - 1;
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            indexAdd = 2;
            indexDelete = indexAdd - 1;
            break;
        case 6:
            indexAdd = 3;
            indexDelete = indexAdd - 1;
    }
    document.querySelector("tbody").childNodes[0].children[indexAdd].classList.add("top-cell-day");
    document.querySelector("tbody").childNodes[0].children[indexDelete].classList.remove("top-cell-day");
})

contactButton.addEventListener("click", ()=>{
    if (contactArea.style.display === "block") {
        contactArea.style.display = "none";
    } else {
        contactArea.style.display = "block";
    }
})

closeContactButton.addEventListener("click", ()=>{
    contactArea.style.display = "none";
})