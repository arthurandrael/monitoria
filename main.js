

var monitorb = document.querySelector("#gif")

function Monitor() {
  if (monitorb.style.display == "block") {
    monitorb.style.display = "none"
  }
  
  else {
      monitorb.style.display = "block"
  }
}


/*---------------------------------------*/


var leftDoor = document.querySelector('#left')
var rightDoor = document.querySelector('#right')
var bed = document.querySelector('#bed')
var wardrobe = document.querySelector('#wardrobe')


/*---------------------------------------*/


function Left() {
  document.querySelector('#quarto').src = "imgs/doorL.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
}


function Right() {
  document.querySelector('#quarto').src = "imgs/doorR.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
}


function Bed() {
  document.querySelector('#quarto').src = "imgs/BedOff.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
}


function Wardrobe() {
  document.querySelector('#quarto').src = "imgs/wardrobeOff.jpeg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
}


/*---------------------------------------*/


function Back() {
  document.querySelector('#quarto').src = "imgs/quarto.jpeg"
  document.querySelector('#left').style.display = 'block'
  document.querySelector('#right').style.display = 'block'
  document.querySelector('#bed').style.display = 'block'
  document.querySelector('#wardrobe').style.display = 'block'
  document.querySelector('#monitorIcon').style.display = "block"
  document.querySelector('.options2').style.display = "none"
}