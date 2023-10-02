console.log('Hello World!');

var monitorb = document.querySelector("#gif")

function monitor() {
  if (monitorb.style.display == "block") {
    monitorb.style.display = "none"
  }
  
  else {
      monitorb.style.display = "block"
  }
}



var leftDoor = document.querySelector('#left')
var rightDoor = document.querySelector('#right')
var bed = document.querySelector('#bed')
var wardrobe = document.querySelector('#wardrobe')