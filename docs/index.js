let totalValuesBalance = {
  balanceSelector: document.getElementById("balance"),
  balanceValue: 0,
  valueIncomeTotal: 0,
  valueExpenseTotal: 0,
};

//budget Input

let inputCont = {
  inpt: document.getElementById("budgetInputIdValue"),
  inptIcome: document.querySelector("#incomeIput"),
  currencySelector: document.getElementById("currency"),

  //value verification 0 or negavite values are not allowed
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
    totalValuesBalance.balanceValue += transformValueChecked;
    totalValuesBalance.balanceSelector.innerHTML =
      totalValuesBalance.balanceValue;
    totalValuesBalance.balanceSelector.appendChild(currencyCreatorBudget);
  },

  addValueBudget() {
    let valueChecked = this.checkValue();
    let updateDom = this.updaterBalance();
    //read the value of the input field
    let containerSelector = document.querySelector(".detailContainer");

    let inputSelector = document.getElementById("budgetInputIdValue");
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
    valueCreator.id = "c";
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

//Income Input

let incomeInput = {
  inputFieldDescription: document.getElementById("incomeInputIdetail"),
  inputFieldValue: document.getElementById("incomeInputIdValue"),
  indIcomeCont: document.getElementById("incomeContainer"),
  currencyIdIncome: document.getElementById("currencyIncome"),
  valueIncomeTotalSelector: document.getElementById("incomeBalance"),

  updateBalanceIncome() {
    let incomeValueIncomeUpdate = this.inputFieldValue.value;
    let transformValueIncome = parseInt(incomeValueIncomeUpdate, 10);
    let currencyCreatorIncome = document.createElement("h4");

    currencyCreatorIncome.innerHTML = this.currencyIdIncome.value;

    totalValuesBalance.valueIncomeTotal += transformValueIncome;
    totalValuesBalance.balanceValue += transformValueIncome;

    this.valueIncomeTotalSelector.innerHTML =
      totalValuesBalance.valueIncomeTotal;

    this.valueIncomeTotalSelector.appendChild(currencyCreatorIncome);

    totalValuesBalance.balanceSelector.innerHTML = `${this.currencyIdIncome.value} ${totalValuesBalance.balanceValue}`;
  },

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
      valueCreatorIncome.id = "idIncomeAdded";

      buttomDeleteIncome.innerHTML = "x";
      descriptionCreatorIncome.innerHTML = descriptionValue;
      currencyCreatorIncome.innerHTML = currencyIncomeValue;
      valueCreatorIncome.innerHTML = incomeValue;

      containerCreatorIncome.appendChild(descriptionCreatorIncome);
      containerCreatorIncome.appendChild(currencyCreatorIncome);
      containerCreatorIncome.appendChild(valueCreatorIncome);
      containerCreatorIncome.appendChild(buttomDeleteIncome);
      this.indIcomeCont.appendChild(containerCreatorIncome);

      this.updateBalanceIncome();

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

//expense Input

let expenseInput = {
  expenseSelector: document.getElementById("expenseContainer"),
  expenseCurrencySelector: document.getElementById("currencyExpense"),
  expenseValueSelector: document.getElementById("expenseValue"),
  expenseDescriptionSelector: document.getElementById(
    "expenseInputIdDescription"
  ),
  valueExpenseTotalSelector: document.getElementById("expenseBalance"),

  updateBalanceExpense() {
    let ValueExpenseUpdate = this.expenseValueSelector.value;
    let transformValueExpense = parseInt(ValueExpenseUpdate, 10);
    let currencyCreatorExpense = document.createElement("h4");

    totalValuesBalance.valueExpenseTotal += transformValueExpense;
    this.valueExpenseTotalSelector.innerHTML =
      totalValuesBalance.valueExpenseTotal;

    totalValuesBalance.balanceValue -= transformValueExpense;

    currencyCreatorExpense.innerHTML = this.expenseCurrencySelector.value;
    this.valueExpenseTotalSelector.appendChild(currencyCreatorExpense);
    totalValuesBalance.balanceSelector.innerHTML = `${this.expenseCurrencySelector.value} ${totalValuesBalance.balanceValue}`;
  },

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
    this.updateBalanceExpense();

    this.expenseDescriptionSelector.value = null;
    this.expenseValueSelector.value = null;
  },

  removeContExpense(e) {
    if (e.target && e.target.id == "buttomDeleteIdExpense") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  },
};

document.body.addEventListener("click", incomeInput.removeContIncome);

document.body.addEventListener("click", inputCont.removeContBudget);

document.body.addEventListener("click", expenseInput.removeContExpense);
