const waterEffect = document.getElementById("bounce");
const main = document.getElementById("main");

const smallCup = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liter");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

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

  const totalCups = smallCup.length
  console.log(totalCups)

  if(selectedFullCups === 0) {
    percentage.style.visibility = "hidden"
    percentage.style.height = 0
  } else {
    percentage.style.visibility = "visible"
    percentage.style.height = `${selectedFullCups / totalCups * 160}px`
  }
}
