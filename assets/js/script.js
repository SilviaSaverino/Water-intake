const waterEffect = document.getElementById("bounce");
const main = document.getElementById("main");
const smallCup = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const waterLeftToDrink = document.getElementById("remained");
const container = document.getElementsByClassName("container");
const funFact = document.getElementById("funFact");

waterEffect.addEventListener("click", () => {
  main.classList.add("show");
});

smallCup.forEach((cup, idx) => {
  console.log(idx);
  cup.addEventListener("click", () => fillUpCups(idx));
});

fillUpBigCup();

function fillUpCups(idx) {
  if (
    smallCup[idx].classList.contains("full") &&
    !smallCup[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }
  /*The nextElementSibling property returns the next element in the same tree level.
  Key points to keep in mind:
  - The property is only available on the Element interface, which represents an HTML element.
  - It returns the next sibling element as an object if it exists, or null if there is no next sibling element.
  - The property only considers elements at the same hierarchical level (the same parent node).
  - It does not include text nodes, comments, or other non-element nodes that might be present between the elements.
  - If you want to access any type of sibling node, including non-element nodes, you can use the more generic nextSibling property.*/

  smallCup.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  fillUpBigCup();
}

function fillUpBigCup() {
  const selectedFullCups = document.querySelectorAll(".cup-small.full").length;
  console.log(selectedFullCups);

  const totalCups = smallCup.length;
  console.log(totalCups);

  if (selectedFullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(selectedFullCups / totalCups) * 160}px`;
    /*the height is calculated dividing the selected cups by the total number of small cups(8) and the
    result is multiplied with the height of the big cup (160px) */
    percentage.innerText = `${(selectedFullCups / totalCups) * 100}%`;
  }

  if (selectedFullCups === totalCups) {
    waterLeftToDrink.style.visibility = "hidden";
    waterLeftToDrink.style.height = 0;
    showFunFactButton();
  } else {
    waterLeftToDrink.style.visibility = "visible";
    liters.innerText = `${2 - (250 * selectedFullCups) / 1000}L`;
    /* the above calculates the consumed water in liters, 
    Each of the 250ml cups is divided by 1000 to convert it to liters.
    So subtracting the amount from the goal of 2 liters we obtain the remaining amount. */
  }
}

function showFunFactButton() {
  funFact.classList.remove("hide");
  funFact.classList.add("zoom")
}
