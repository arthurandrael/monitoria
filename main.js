
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


/*--------------------------------------*/


function Ligar1() {
  doorL.src = 'imgs/doorLOn.jpeg'
}
function Ligar2() {
  doorL.src = 'imgs/doorROn.jpeg'
}


function Ligar3() {
  doorL.src = 'imgs/bedOn.gif'
  
  
  function playSound(audioName) {
    let audio = new Audio(audioName)
    audio.loop = 'true'
    audio.play()
  }
  playSound('audio/freddies.mp3')
  
}
function Ligar4() {
  doorL.src = 'imgs/wardrobeOn.jpeg'
}


function Desligar1() {
  doorL.src = 'imgs/doorL.jpg'
}
function Desligar2() {
  doorL.src = 'imgs/doorR.jpg'
}
function Desligar3() {
  doorL.src = 'imgs/BedOff.jpg'
}
function Desligar4() {
  doorL.src = 'imgs/wardrobeOff.jpeg'
}


/*--------------------------------------*/



var auFreddies = document.querySelector('#freddies')