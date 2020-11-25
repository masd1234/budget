let inputCont = {
  inpt: document.querySelector("#numbers"),

  checkValue() {
    let inputValue = this.inpt.value;
    if (inputValue.length === 0) {
      alert("The input field canno be empty");
      stopPropagation();
    } else {
      return inputValue;
    }
  },

  addValueBudget() {
    let valueChecked = this.checkValue();
    //reads the value of the input field
    let containerSelector = document.getElementById("budget");
    // creates the DOM elements
    let containerCreator = document.createElement("div");
    let valueCreator = document.createElement("h4");
    //assing the typed value to the DOM node
    valueCreator.innerHTML = valueChecked;
    //add the class .cont fot styling
    containerCreator.classList.add("cont");
    // Appends the DOM elements
    containerCreator.appendChild(valueCreator);
    containerSelector.appendChild(containerCreator);
  },

  addValueIncome() {
    let valueChecked = this.checkValue();
    //reads the value of the input field
    let containerSelector = document.getElementById("budget");
    // creates the DOM elements
    let containerCreator = document.createElement("div");
    let valueCreator = document.createElement("h4");
    //assing the typed value to the DOM node
    valueCreator.innerHTML = valueChecked;
    //add the class .cont fot styling
    containerCreator.classList.add("cont");
    // Appends the DOM elements
    containerCreator.appendChild(valueCreator);
    containerSelector.appendChild(containerCreator);
  },
};
