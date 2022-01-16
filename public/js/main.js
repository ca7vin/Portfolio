
let switchLight = document.getElementById('btnSwitchL')
let switchDark = document.getElementById('btnSwitchD')
let body = document.body
let allP = document.querySelectorAll("p")
let allH5 = document.querySelectorAll("h5")
let allProgressDiv = document.querySelectorAll(".progress")

// START TYPING SCRIPT
const typedTextSpan = document.querySelector(".typed-text")


const textArray = ["CALVIN", "27 years old", "#Belgian", "#developer", "#graphist", "#Molengeekois"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
})

// TYPE SCRIPT 2

const typedTextSpan2 = document.querySelector(".typed-text2")


const textArray2 = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat nihil id quaerat quibusdam ab libero neque ad cum nemo a at laudantium, dolores asperiores aut quae aliquid aperiam beatae illum sed dolor voluptatum ipsam pariatur consequatur assumenda! Suscipit, illum? Ratione quia, soluta voluptas modi, eveniet, libero laboriosam assumenda architecto nobis dolores rem maiores dolorum quis fuga eos placeat nesciunt quibusdam?"];
const typingDelay2 = 50;
const erasingDelay2 = 50;
const newTextDelay2 = 1500;
let textArrayIndex2 = 0;
let charIndex2 = 0;

function type2() {
    if (charIndex2 < textArray2[textArrayIndex2].length) {
        typedTextSpan2.textContent += textArray2[textArrayIndex2].charAt(charIndex2);
        charIndex2++;
        setTimeout(type2, typingDelay2);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type2, newTextDelay2 + 250);
})
window.addEventListener('load', () => {
        body.style.animation = "animate-in 3s forwards";
})

// document.onreadystatechange = function(){
//     if (document.readyState === "complete") {
//         body.style.animation = "animate-in 3s forwards";
//     }
//     else {
//        window.onload = function () {
//         body.style.animation = "animate-in 3s forwards";
//        };
//     };
// }

// body.addEventListener("onload", () =>{
//         body.style.animation = "animate-in 3s forwards";
//         console.log("coucou");
// })


// END TYPING SCRIPT
// START ZOOM SCRIPT

// const zoomElement = document.querySelector(".workspace");
// let zoom = 1;
// const zoomSpeed = 0.1

// document.addEventListener("wheel", function(e) {
//     if (e.deltaY > 0) {
//         zoomElement.style.transform = `scale(${(zoom += zoomSpeed)})`;
//     } else if (zoomElement.getBoundingClientRect().width >= 30){
//         zoomElement.style.transform = `scale(${(zoom -= zoomSpeed)})`
//     }
// })

// ZOOM SCRIPT 2

// const zoomElement2 = document.querySelector(".workspace2");
// let zoom2 = 1;
// const zoomSpeed2 = -0.1

// document.addEventListener("wheel", function(e) {
//     if (e.deltaY > 0) {
//         zoomElement2.style.transform = `scale(${(zoom2 += zoomSpeed2)})`;
//     } else if (zoomElement2.getBoundingClientRect().width >= 30){
//         zoomElement2.style.transform = `scale(${(zoom2 -= zoomSpeed2)})`
//     }
//     console.log(zoomElement2.style.transform);
// })

// END ZOOM SCRIPT


// ANIMATE OPACITY

console.log(window);
window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 650) {
        $("#profilePic").animate({
            opacity: "100%"
        }, 1500)
        $("#aboutH2").animate({
            opacity: "100%"
        }, 2000)
    }
    if (window.scrollY >= 1500) {
        $("i").animate({
            opacity: "100%"
        }, 500)
        // ANIMATE PROGRESSBAR
        let progress1 = document.getElementsByClassName("progress1")[0]
        let progress2 = document.getElementsByClassName("progress2")[0]
        let progress3 = document.getElementsByClassName("progress3")[0]
        let progress4 = document.getElementsByClassName("progress4")[0]
        let progress5 = document.getElementsByClassName("progress5")[0]
        
        progress1.animate([
            {
                width: "65%",
            }
        
        ],{
            duration: 1000,
            iteration: 1,
            fill: "forwards"
        })
        
        progress2.animate([
            {
                width: "65%",
            }
        
        ],{
            duration: 1500,
            iteration: 1,
            fill: "forwards"
        })
        
        progress3.animate([
            {
                width: "65%",
            }
        
        ],{
            duration: 2000,
            iteration: 1,
            fill: "forwards"
        })
        
        progress4.animate([
            {
                width: "65%",
            }
        
        ],{
            duration: 2500,
            iteration: 1,
            fill: "forwards"
        })
        
        progress5.animate([
            {
                width: "65%",
            }
        
        ],{
            duration: 3000,
            iteration: 1,
            fill: "forwards"
        })
        // ANIMATE PROGRESS END
    }
    if (window.scrollY >= 3000) {
        $("Input").animate({
            opacity: "100%"
        }, 1500)
        $("textArea").animate({
            opacity: "100%"
        }, 1500)
        $("#contactH2").animate({
            opacity: "100%"
        }, 1000)
        $("#btnCont").animate({
            opacity: "100%"
        }, 2000)
    }
    // ANIMATE BACKGRND
    if (window.scrollY >= 2400){
        $("#BackgroundProH2").animate({
            opacity: "100%"
        })
        $("h2").animate({
            opacity: "100%"
        }, 1500)
        $("h5").animate({
            opacity: "100%"
        }, 2000)
        $("p").animate({
            opacity: "100%"
        }, 2500)
    }
})

// 

body.style.backgroundColor = "Black"
allP.forEach(element => {
    element.style.color = "white"
    console.log(element.style.backgroundColor);
});
allH5.forEach(element => {
    element.style.color = "white"
    console.log(element.style.backgroundColor);
});

switchLight.addEventListener('click', () => {
    body.style.backgroundColor = "White"
    allP.forEach(element => {
        element.style.color = "Black"
    });
    allH5.forEach(element => {
        element.style.color = "Black"
    });
    allProgressDiv.forEach(element => {
        element.style.backgroundColor = "#d3d3d3"
    });
}) 
switchDark.addEventListener('click', () =>{
    body.style.backgroundColor = "Black"
    allP.forEach(element => {
        element.style.color = "white"
        console.log(element.style.backgroundColor);
    });
    allH5.forEach(element => {
        element.style.color = "white"
        console.log(element.style.backgroundColor);
    });
    allProgressDiv.forEach(element => {
        element.style.backgroundColor = "#242424"
        console.log(element.style.backgroundColor);
    });
})



