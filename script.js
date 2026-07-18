// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click", function(){

    nav.classList.toggle("active");

});




// ================= TYPING EFFECT =================


const title = document.querySelector(".hero-text h2");


const words = [
    "Social Media Marketer",
    "Front-End Developer",
    "Digital Content Creator"
];


let wordIndex = 0;
let letterIndex = 0;
let deleting = false;



function typing(){


let currentWord = words[wordIndex];


if(!deleting){

    title.textContent = currentWord.substring(0, letterIndex);

    letterIndex++;


    if(letterIndex > currentWord.length){

        deleting = true;

        setTimeout(typing,1000);

        return;

    }


}else{


    title.textContent = currentWord.substring(0, letterIndex);

    letterIndex--;


    if(letterIndex < 0){

        deleting=false;

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex=0;

        }

    }

}


setTimeout(typing,100);


}


typing();








// ================= DARK / LIGHT MODE =================


const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click",function(){


document.body.classList.toggle("light");



if(document.body.classList.contains("light")){

    themeBtn.textContent="🌙";

}else{

    themeBtn.textContent="☀️";

}


});








// ================= SCROLL ANIMATION =================



const animatedElements = document.querySelectorAll(
".card, .project, .skills span"
);



function showElements(){


animatedElements.forEach(function(element){


const position = element.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


element.classList.add("show");


}


});


}



window.addEventListener(
"scroll",
showElements
);



showElements();








// ================= CONTACT FORM VALIDATION =================



const form = document.querySelector("form");


form.addEventListener("submit",function(event){



const name = document.querySelector(
"input[name='name']"
).value;



const email = document.querySelector(
"input[name='email']"
).value;




if(name.length < 3){


event.preventDefault();


alert("Please enter your full name");


return;


}





if(!email.includes("@")){


event.preventDefault();


alert("Please enter a valid email");


return;


}





alert("Message sent successfully!");


});