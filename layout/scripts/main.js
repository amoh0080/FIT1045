"use strict"

function bookConsultation() {

  let inputNameRef = document.getElementById("inputName");
  let inputTimeNowRef = document.getElementById("inputTime");
  let inputNumberRef = document.getElementById("inputNumber");
  let inputEmailRef = document.getElementById("inputEmail");
  if ((inputNameRef.value == "")) {
    alert("Please fill in your name");
  }
  else if (inputTimeNowRef.value == "") {
    alert("Date and Time is not chosen")
  }
  else if (inputNumberRef.value == "" || inputEmailRef == "") {
    alert("Please give contact information.")
  }
  else {
    let confirmUser = confirm("Do you want to continue with the booking?")
    if (confirmUser) {
      alert("We are looking forward to meeting you", "success")
      window.location = "index.html"
    }
    else {
      return
    }
  }
  return;
}
function updateDayTime() {
  let dt = new Date;
  let timeRef = document.getElementById("timeNow");
  timeRef.innerHTML = (" " + ("0" + dt.getDate()).slice(-2)) + "/" + (("0" + (dt.getMonth() + 1)).slice(-2)) + "/" + (dt.getFullYear()) + " " + (("0" + dt.getHours()).slice(-2)) + ":" + (("0" + dt.getMinutes()).slice(-2));
}


let intervalHandle = "";
const UPDATE_TIME_MS = 1000;

intervalHandle = setInterval(updateDayTime, UPDATE_TIME_MS)


function showButton() {
    let hideRef = document.getElementById("hide");
    if (hideRef.style.display === "none") {
      hideRef.style.display = "block";
    } else {
      hideRef.style.display = "none";
    }
}
// Materials and refrences from MDN and ENG1003 unit Materials