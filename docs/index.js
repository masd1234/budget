let inputCont = {
  inpt: document.querySelector("#numbers"),
  inptIcome: document.querySelector("#incomeIput"),

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

let incomeInput = {
  inputFieldDescription: document.getElementById("incomeInputIdetail"),
  inputFieldValue: document.getElementById("incomeInputIdValue"),
  indIcomeCont: document.getElementById("incomeContainer"),
  currencyIdIncome: document.getElementById("currencyIncome"),

  addValueIncome() {
    let descriptionValue = this.inputFieldDescription.value;
    let incomeValue = this.inputFieldValue.value;
    let currencyIncomeValue = this.currencyIdIncome.value;

    let containerCreatorIncome = document.createElement("div");
    let valueCreatorIncome = document.createElement("h4");
    let descriptionCreatorIncome = document.createElement("h4");
    let currencyCreatorIncome = document.createElement("h4");
    let buttomDeleteIncome = document.createElement("buttom");

    if (document.getElementById("incomeInputIdValue").value === "" || document.getElementById("incomeInputIdetail").value === "" ) {
      alert("The input field canno be empty, please fill all the inputs");
      stopPropagation(e);
    } else {
      containerCreatorIncome.id = "incomeCont";
      buttomDeleteIncome.id = "buttomDeleteId";

      buttomDeleteIncome.innerHTML = "x";
      descriptionCreatorIncome.innerHTML = descriptionValue;
      currencyCreatorIncome.innerHTML = currencyIncomeValue;
      valueCreatorIncome.innerHTML = incomeValue;

      containerCreatorIncome.appendChild(descriptionCreatorIncome);
      containerCreatorIncome.appendChild(currencyCreatorIncome);
      containerCreatorIncome.appendChild(valueCreatorIncome);
      containerCreatorIncome.appendChild(buttomDeleteIncome);
      this.indIcomeCont.appendChild(containerCreatorIncome);

      this.inputFieldDescription.value = null;
      this.inputFieldValue.value = null;
    }
  },

  removeContIncome(e) {
    if (e.target && e.target.id == "buttomDeleteId") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  },
};

document.body.addEventListener("click", incomeInput.removeContIncome);
