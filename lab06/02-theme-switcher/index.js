/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeHighContrast = () => {
   document.querySelector("body").className = "high-contrast";
};

const changeDefault = () => {
   document.querySelector("body").className = "";
};

const changeOcean = () => {
   document.querySelector("body").className = "ocean";
};

const changeDesert = () => {
   document.querySelector("body").className = "desert";
};

document.querySelector("#high-contrast").addEventListener('click', changeHighContrast);
document.querySelector("#default").addEventListener('click', changeDefault);
document.querySelector("#ocean").addEventListener('click', changeOcean);
document.querySelector("#desert").addEventListener('click', changeDesert);
