
var monitorb = document.querySelector("#gif")
var doorL = document.querySelector('#quarto')
var doorR = document.querySelector('#quarto')
var ward = document.querySelector('#quarto')
var thebed = document.querySelector('#quarto')


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
  doorL.src = "imgs/doorL.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  
  document.querySelector('#lanterna1').style.display = 'block'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'none'
}


function Right() {
  doorR.src = "imgs/doorR.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'block'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'none'
}


function Bed() {
  thebed.src = "imgs/BedOff.jpg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'block'
  document.querySelector('#lanterna4').style.display = 'none'
}


function Wardrobe() {
  ward.src = "imgs/wardrobeOff.jpeg"
  document.querySelector('#left').style.display = 'none'
  document.querySelector('#right').style.display = 'none'
  document.querySelector('#bed').style.display = 'none'
  document.querySelector('#wardrobe').style.display = 'none'
  document.querySelector('#monitorIcon').style.display = "none"
  document.querySelector('.options2').style.display = "block"
  
  document.querySelector('#lanterna1').style.display = 'none'
  document.querySelector('#lanterna2').style.display = 'none'
  document.querySelector('#lanterna3').style.display = 'none'
  document.querySelector('#lanterna4').style.display = 'block'
}


