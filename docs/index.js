let inputCont = {
  inpt: document.querySelector("#numbers"),

  checkValue(e) {
    let inputValue = this.inpt.value;
    if (inputValue.length === 0) {
      alert("The input field canno be empty");
      stopPropagation(e);
    } else {
      return inputValue;
    }
  },

  addValueBudget() {
    let valueChecked = this.checkValue();
    //reads the value of the input field
    let containerSelector = document.querySelector(".detailContainer");
    let currencySelector = document.getElementById("currency").value;
    let inputSelector = document.getElementById("numbers");
    // creates the DOM elements
    let containerCreator = document.createElement("div");
    let valueCreator = document.createElement("h4");
    let currencyCreator = document.createElement("h4");
    let buttomMinusCreator = document.createElement("buttom");
    //assing the typed value to the DOM node
    buttomMinusCreator.innerHTML = "x";
    valueCreator.innerHTML = valueChecked;
    currencyCreator.innerHTML = currencySelector;
    //add the class .cont fot styling
    buttomMinusCreator.id = "minus";
    containerCreator.classList.add("cont");

    // Appends the DOM elements
    containerCreator.appendChild(currencyCreator);
    containerCreator.appendChild(valueCreator);
    containerCreator.appendChild(buttomMinusCreator);
    containerSelector.appendChild(containerCreator);

    inputSelector.value = null;
  },

  removeContBudget(e) {
    if (e.target && e.target.id == "minus") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  },
};

document.body.addEventListener("click", inputCont.removeContBudget);

/*let values = {
  valueVariable: 119,
  valueDom: document.querySelector(".updatedValueBudget"),
  updater() {
    console.log('hola')
    console.log(this.valueVariable);
    return this.valueVariable++
  },
};*/
