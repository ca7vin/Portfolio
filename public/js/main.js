// START TYPING SCRIPT
const typedTextSpan = document.querySelector(".typed-text")


const textArray = ["CALVIN", "27 years old", "#Belgian", "#developer", "#graphist", "#Molengeekois"];
const typingDelay = 150;
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
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex -1)
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

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay + 250);
})

// TYPE SCRIPT 2

const typedTextSpan2 = document.querySelector(".typed-text2")


const textArray2 = ["ca7vin@gmail.com"];
const typingDelay2 = 150;
const erasingDelay2 = 50;
const newTextDelay2 = 1500;
let textArrayIndex2 = 0;
let charIndex2 = 0;

function type2() {
    if (charIndex2 < textArray2[textArrayIndex2].length) {
        typedTextSpan2.textContent += textArray2[textArrayIndex2].charAt(charIndex2);
        charIndex2++;
        setTimeout(type2, typingDelay2);
    } else {
        setTimeout(erase2, newTextDelay2);
    }
}

function erase2() {
    if (charIndex2 > 0) {
        typedTextSpan2.textContent = textArray2[textArrayIndex2].substring(0,charIndex2 -1)
        charIndex2--;
        setTimeout(erase2, erasingDelay2)
    } else {
        textArrayIndex2++;
        if (textArrayIndex2 >= textArray.length) {
            textArrayIndex2 = 0;
        }
        setTimeout(type2, typingDelay2 + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type2, newTextDelay2 + 250);
})


// END TYPING SCRIPT
// START ZOOM SCRIPT

const zoomElement = document.querySelector(".workspace");
let zoom = 1;
const zoomSpeed = 0.1

document.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {
        zoomElement.style.transform = `scale(${(zoom += zoomSpeed)})`;
    } else if (zoomElement.getBoundingClientRect().width >= 30){
        zoomElement.style.transform = `scale(${(zoom -= zoomSpeed)})`
    }
})

// ZOOM SCRIPT 2

const zoomElement2 = document.querySelector(".workspace2");
let zoom2 = 1;
const zoomSpeed2 = -0.1

document.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {
        zoomElement2.style.transform = `scale(${(zoom2 += zoomSpeed2)})`;
    } else if (zoomElement2.getBoundingClientRect().width >= 30){
        zoomElement2.style.transform = `scale(${(zoom2 -= zoomSpeed2)})`
    }
    console.log(zoomElement2.style.transform);
})

// END ZOOM SCRIPT