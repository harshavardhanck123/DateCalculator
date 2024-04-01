var parent = document.createElement("div")
parent.className = "main1"

var child = document.createElement("div")
child.className = "main2"

var input_date = document.createElement("input")
input_date.setAttribute("type", "date")
input_date.id = "dob"

var button_input = document.createElement("button")
button_input.setAttribute("type", "button")
button_input.className = "btn btn-primary"
button_input.innerHTML = ("Display Date")
button_input.addEventListener("click", displaydata)

parent.append(input_date, button_input)
document.body.append(parent)
document.body.append(child)

function displaydata() {

    var input = document.getElementById("dob").value;
    console.log(input);
    if (Date.parse(input)) {
        var inputdate = new Date(input);
        var currentdate = new Date();
        var millisecdiff = parseInt(currentdate.getTime()) - parseInt(inputdate.getTime())
        console.log(millisecdiff);
        var secdiff = Math.floor(millisecdiff / 1000);
        console.log(secdiff);
        var mindiff = Math.floor(secdiff / 60);
        console.log(mindiff);
        var hoursdiff = Math.floor(mindiff / 60);
        console.log(hoursdiff);
        var daydiff = Math.floor(hoursdiff / 24);
        console.log(daydiff);
        var yeardiff = currentdate.getFullYear() - inputdate.getFullYear()
        console.log(yeardiff);
        var monthdiff = (yeardiff * 12) + (currentdate.getMonth() - inputdate.getMonth())
        console.log(monthdiff);
    
    var out1 = `<div>Given input date is ${inputdate}</div>
<div>Year : ${yeardiff}</div>
<div>Month : ${monthdiff}</div>
<div>Day : ${daydiff}</div>
<div>Hour : ${hoursdiff}</div>
<div>Minutes : ${mindiff}</div>
<div>Seconds : ${secdiff}</div>
<div>Milli Seconds : ${millisecdiff}</div>`;
    child.innerHTML = (out1)
    }
    else{
        var out1 = `No Input Given`;
        child.innerHTML = (out1)
    }
}