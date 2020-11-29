let inputCont = {
  inpt: document.querySelector("#numbers"),
  inptIcome: document.querySelector("#incomeIput"),
  currencySelector: document.getElementById("currency"),
  balanceSelector: document.getElementById("balance"),
  balanceValue: 0,

  checkValue(e) {
    let inputValue = this.inpt.value;
    if (inputValue < 0) {
      alert("Negative values are not allowed");
      stopPropagation(e);
    } else if (inputValue.length === 0) {
      alert("The input field cannot be empty");
      stopPropagation(e);
    } else {
      return inputValue;
    }
  },

  updaterBalance() {
    let valueChecked = this.checkValue();
    let transformValueChecked = parseInt(valueChecked, 10);

    let currencyCreatorBudget = document.createElement("h4");
    currencyCreatorBudget.innerHTML = this.currencySelector.value;

    this.balanceValue += transformValueChecked;
    this.balanceSelector.innerHTML = this.balanceValue;
    this.balanceSelector.appendChild(currencyCreatorBudget);
  },

  addValueBudget() {
    let valueChecked = this.checkValue();
    let updateDom = this.updaterBalance();
    //read the value of the input field
    let containerSelector = document.querySelector(".detailContainer");

    let inputSelector = document.getElementById("numbers");
    // creates the DOM elements
    let containerCreator = document.createElement("div");
    let valueCreator = document.createElement("h4");
    let currencyCreator = document.createElement("h4");
    let buttomMinusCreator = document.createElement("buttom");
    //assing the typed value to the DOM node
    buttomMinusCreator.innerHTML = "x";
    valueCreator.innerHTML = valueChecked;
    currencyCreator.innerHTML = this.currencySelector.value;
    //add the class .cont fot styling
    buttomMinusCreator.id = "minus";
    containerCreator.classList.add("cont");
    // Appends the DOM elements
    containerCreator.appendChild(currencyCreator);
    containerCreator.appendChild(valueCreator);
    containerCreator.appendChild(buttomMinusCreator);
    containerSelector.appendChild(containerCreator);
    // Resets the value on the input field to none
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
    //read the value in every input
    let descriptionValue = this.inputFieldDescription.value;
    let incomeValue = this.inputFieldValue.value;
    let currencyIncomeValue = this.currencyIdIncome.value;
    //creates differents html element to be append on the DOM
    let containerCreatorIncome = document.createElement("div");
    let valueCreatorIncome = document.createElement("h4");
    let descriptionCreatorIncome = document.createElement("h4");
    let currencyCreatorIncome = document.createElement("h4");
    let buttomDeleteIncome = document.createElement("buttom");

    //cheks if the input are negative or 0 if they are not the functions is executed
    if (document.getElementById("incomeInputIdValue").value < 0) {
      alert("Negative values are not allowed");
      stopPropagation(e);
    } else if (
      document.getElementById("incomeInputIdValue").value === "" ||
      document.getElementById("incomeInputIdetail").value === ""
    ) {
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

let expenseInput = {
  expenseSelector: document.getElementById("expenseContainer"),
  expenseCurrencySelector: document.getElementById("currencyExpense"),
  expenseValueSelector: document.getElementById("expenseValue"),
  expenseDescriptionSelector: document.getElementById(
    "expenseInputIdDescription"
  ),
  addExpense() {
    if (this.expenseValueSelector.value < 0) {
      alert("Negative values are not allowed");
      stopPropagation(e);
    } else if (
      this.expenseValueSelector.value === "" ||
      this.expenseDescriptionSelector.value === ""
    ) {
      alert("The input field canno be empty, please fill all the inputs");
      stopPropagation(e);
    }
    let containerCreatorExpense = document.createElement("div");
    let valueCreatorExpense = document.createElement("h4");
    let descriptionCreatorExpense = document.createElement("h4");
    let currencyCreatorExpense = document.createElement("h4");
    let buttomDeleteExpense = document.createElement("buttom");

    descriptionCreatorExpense.innerHTML = this.expenseDescriptionSelector.value;
    currencyCreatorExpense.innerHTML = this.expenseCurrencySelector.value;
    valueCreatorExpense.innerHTML = this.expenseValueSelector.value;

    containerCreatorExpense.classList.add("containerExpenseId");

    buttomDeleteExpense.innerHTML = "x";
    buttomDeleteExpense.id = "buttomDeleteIdExpense";

    this.expenseSelector.appendChild(containerCreatorExpense);
    containerCreatorExpense.appendChild(descriptionCreatorExpense);
    containerCreatorExpense.appendChild(currencyCreatorExpense);
    containerCreatorExpense.appendChild(valueCreatorExpense);
    containerCreatorExpense.appendChild(buttomDeleteExpense);

    this.expenseDescriptionSelector.value = null;
    this.expenseValueSelector.value = null;
  },

  removeContExpense(e) {
    if (e.target && e.target.id == "buttomDeleteIdExpense") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  },
};

document.body.addEventListener("click", expenseInput.removeContExpense);
