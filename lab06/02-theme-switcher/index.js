/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeHighContrast = () => {
   let contentElement = document.querySelector("body");
   contentElement.className = "high-contrast";
   //console.log(computeFontSize + 2 + "px")
};

const changeDefault = () => {
   let contentElement = document.querySelector("body");
   contentElement.className = "";
   //console.log(computeFontSize + 2 + "px")
};

const changeOcean = () => {
   let contentElement = document.querySelector("body");
   contentElement.className = "ocean";
   //console.log(computeFontSize + 2 + "px")
};

const changeDesert = () => {
   let contentElement = document.querySelector("body");
   contentElement.className = "desert";
   //console.log(computeFontSize + 2 + "px")
};

document.querySelector("#high-contrast").addEventListener('click', changeHighContrast);
document.querySelector("#desert").addEventListener('click', changeDesert);
document.querySelector("#ocean").addEventListener('click', changeOcean);
document.querySelector("#default").addEventListener('click', changeDefault);