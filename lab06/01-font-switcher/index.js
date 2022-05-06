const makeBigger = () => {
   let C_Element = document.querySelector(".content");
   let contentFontSize = parseFloat(
      getComputedStyle(C_Element).getPropertyValue("font-size")
   );
   C_Element.style.fontSize = contentFontSize + 2.5 + "px";
};

const makeSmaller = () => {
   let C_Element = document.querySelector(".content");
   let contentFontSize = parseFloat(
      getComputedStyle(C_Element).getPropertyValue("font-size")
   );
   C_Element.style.fontSize = contentFontSize - 2.5 + "px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);