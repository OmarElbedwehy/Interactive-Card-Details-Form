
document.querySelectorAll("input").forEach((ele)=>{
    ele.setAttribute("required", "")
})

let card_name_input = document.querySelector("#name");
let card_name = document.querySelector(".user-card-name");

card_name_input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
        if (isNaN(e.target.value)) {
            card_name.textContent = e.target.value;
            document.querySelector("#name_worn").style.display = "none";
            card_name_input.style.outline = "1px solid #000";
        } else {
            card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)";
            document.querySelector("#name_worn").style.display = "block"
            document.querySelector("#name_worn").textContent = "Wrong Format, Don't Insert Numbers"
        }
    } else {
        card_name.textContent = "Jane Appleseed";
        card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)";
        document.querySelector("#name_worn").style.display = "block";
        document.querySelector("#name_worn").textContent = "Can't be blank";
    }
})

let card_num = document.querySelector("#card_num");
let card_num_input = document.querySelector("#card-num");

card_num_input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
        let regExp = /(\d{4}\w)+/g;
        if (e.target.value.match(regExp)) {
            card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)"
            document.querySelector("#card_num_worn").style.display = "block"
            document.querySelector("#card_num_worn").textContent = "Wrong Format, numbers only"
        } else {
            card_name_input.style.outline = "1px solid #000";
            document.querySelector("#card_num_worn").style.display = "none";
            if (e.target.value.length == 4) {
                e.target.value += " ";
            }
            if (e.target.value.length == 9) {
                e.target.value += " ";
            }
            if (e.target.value.length == 14) {
                e.target.value += " ";
            }
            card_num.textContent = e.target.value;
            if (e.target.value.match(/[a-z]/)) {
                card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)"
                document.querySelector("#card_num_worn").style.display = "block"
                document.querySelector("#card_num_worn").textContent = "Wrong Format, numbers only"
            }
            if (e.target.value.match(/[A-Z]/)) {
                card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)"
                document.querySelector("#card_num_worn").style.display = "block"
                document.querySelector("#card_num_worn").textContent = "Wrong Format, numbers only"
            }
        }
    } else {
        card_name_input.style.outline = "1px solid hsl(0, 100%, 66%)"
        document.querySelector("#card_num_worn").style.display = "block"
        document.querySelector("#card_num_worn").textContent = "Can't be blank"
    }
})

let month_date_input = document.querySelector("#month_input");
let year_date_input = document.querySelector("#year_input");
let date = document.querySelector(".card-date");

let month_value;
let year_value;

month_date_input.addEventListener("input", (e) => {
    if (e.target.value !== "") {
        if (e.target.value.length >= 2) {
            e.target.value = e.target.value.slice(0, 2);
        }
        document.querySelector("#exp_worn").style.display = "none";
        month_value = e.target.value;
        if (month_value.length == 1){
            month_value = `0${month_value}`
        }
        if (year_value == undefined){
            year_value = "00"
        }
        date.textContent = `${month_value}/${year_value}`;
    } else {
        document.querySelector("#exp_worn").style.display = "block";
        document.querySelector("#exp_worn").textContent = "Can't be blank"
        month_value = "00";
        date.textContent = `${month_value}/${year_value}`;
    }
    year_date_input.addEventListener("input", (ee) => {
        ee.target.value = ee.target.value.slice(0, 4)
        if (month_value !== "00") {
            if (ee.target.value !== "") {
                document.querySelector("#exp_worn").style.display = "none";
                year_value = ee.target.value;
                if (year_value.length == 1){
                    year_value = `0${year_value}`
                }
                date.textContent = `${month_value}/${year_value}`;
            } else {
                document.querySelector("#exp_worn").style.display = "block";
                document.querySelector("#exp_worn").textContent = "Can't be blank"
                year_value = "00";
                date.textContent = `${month_value}/${year_value}`
            }
        } else {
            ee.target.value = e.target.value.slice(0);
        }
    })
})

let cvc_input = document.querySelector("#cvc");
let cvc = document.querySelector(".back-code");

cvc_input.addEventListener("input", (e)=>{
    if (e.target.value !== ""){
        document.querySelector("#cvc_worn").style.display = "none";
        e.target.value = e.target.value.slice(0, 3)
        cvc.textContent = e.target.value;
    }else{
        document.querySelector("#cvc_worn").style.display = "block";
        document.querySelector("#cvc_worn").textContent = "Can't be blank";
        cvc.textContent = "123";
    }
    cvc_input.addEventListener("blur", ()=>{
        if (cvc.textContent.length < 3){
            document.querySelector("#cvc_worn").style.display = "block";
            document.querySelector("#cvc_worn").textContent = "Length of numbers should be 3";
        }
    })
})

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault()
})

document.querySelector("button").addEventListener("click", ()=>{
    let inputs = document.querySelectorAll("input");
    let completed = [];
    let worns = document.querySelectorAll(".worn");
    let worns_arr = [];
    let worn_complete;
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value !== ""){
            completed.push(inputs[i])
        }
    }
    for (let i = 0; i < worns.length; i++){
        if (worns[i].style.display == "none"){
            worn_complete = "completed";
        }else{
            worns_arr.push(worns[i]);
        }
    }
    if (completed.length == 5 && worns_arr.length == 0){
        document.querySelector("#INPUTS").remove()
        document.querySelector(".completd-state").style.display = "block";
        document.querySelector("button").textContent = "Continue";
        document.querySelector("button").style.fontWeight = "bold";
        document.querySelector("button").style.pointerEvents = "none";
    }else{
        alert("Somthing Went Wrong")
    }
})