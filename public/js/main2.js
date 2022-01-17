// ANIME LOAD
let myPath = document.getElementsByTagName('path')[0];
let length = myPath.getTotalLength();

anime({
    targets: '#svgGroup',
    strokeDashoffset: [anime.setDashoffset, length],
    easing: 'easeInOutSine',
    duration: 10000,
    direction: 'alternate',
    loop: true
  });


let body = document.body
body.style.backgroundColor = "Black"

let btnEnter = document.querySelector("button")
let progressLoad = document.querySelector(".progress-bar")
btnEnter.style.opacity = "0"
window.addEventListener("load", () => {
  progressLoad.animate([
    {
        width: "100%",
    }

],{
    duration: 1000,
    iteration: 1,
    fill: "forwards"
})
  setTimeout(() => {
    btnEnter.style.animation = "animate-in 3s forwards"
  }, 1500);
})

btnEnter.addEventListener("click", () => {
  body.style.animation = "animate-out 3s forwards";
  
  setTimeout(() =>{
    location.href = "../../index.html";
  }, 3000)
});


var logEl = document.createElement('p.battery-log');
logEl.classList.add('text-warning')
let progressZone = document.querySelector("#progressZone")
var battery = {
  charged: '0%',
}

progressZone.appendChild(logEl);
anime({
  targets: battery,
  charged: '100%',
  round: 1,
  easing: 'linear',
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});