/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let cost_per_day = 35;
let number_of_days = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const daySelectors = document.querySelectorAll("ul.day-selector li");

function addClickedClassAndIncrementCounter(event) {
  const clickedButton = event.target;
  if (!clickedButton.classList.contains("clicked")) {
    clickedButton.classList.add("clicked");
    number_of_days++;
    calculate();
  }
}

daySelectors.forEach((selector) => {
  selector.addEventListener("click", addClickedClassAndIncrementCounter);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clear_button = document.getElementById("clear-button");

function clear() {
  cost_per_day = 35;
  number_of_days = 0;
  full_button.classList.add("clicked");
  half_button.classList.remove("clicked");
  daySelectors.forEach((selector) => {
    selector.classList.remove("clicked");
  });
  calculate();
}

clear_button.addEventListener("click", clear);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
let half_button = document.getElementById("half");

function halfDay() {
  cost_per_day = 20;
  half_button.classList.add("clicked");
  full_button.classList.remove("clicked");
  calculate();
}

half_button.addEventListener("click", halfDay);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
let full_button = document.getElementById("full");

function fullDay() {
  cost_per_day = 35;
  full_button.classList.add("clicked");
  half_button.classList.remove("clicked");
  calculate();
}
full_button.addEventListener("click", fullDay);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
  let total_cost = cost_per_day * number_of_days;
  document.getElementById("calculated-cost").innerHTML = total_cost;
}
