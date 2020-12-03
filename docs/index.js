let totalValuesBalance = {
  balanceSelector: document.getElementById("balance"),
  balanceValue: 0,
  valueIncomeTotal: 0,
  valueExpenseTotal: 0,
};

//budget Input
let inputCont = {
  inpt: document.getElementById("budgetInputIdValue"),
  currencySelector: document.getElementById("currency"),

  //check if the valu is less than zero or the inputs field are empty
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

  //updates the total balance
  updaterBalance() {
    let valueChecked = this.checkValue();
    //transfor the value from a string to a number
    let transformValueChecked = parseInt(valueChecked, 10);
    let currencyCreatorBudget = document.createElement("h4");
    currencyCreatorBudget.innerHTML = this.currencySelector.value;
    totalValuesBalance.balanceValue += transformValueChecked;
    totalValuesBalance.balanceSelector.innerHTML =
      totalValuesBalance.balanceValue;
    totalValuesBalance.balanceSelector.appendChild(currencyCreatorBudget);
  },

  // adds new budgets containers with values
  addValueBudget() {
    let valueChecked = this.checkValue();
    let updateDom = this.updaterBalance();
    let containerSelector = document.querySelector(".detailContainer");
    let inputSelector = document.getElementById("budgetInputIdValue");
    // creates the DOM element
    let containerCreator = document.createElement("div");
    containerCreator.classList.add("cont");
    containerCreator.innerHTML = `<h4>$</h4><h4>${valueChecked}</h4><buttom id="minus">x</button>`;
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

  //reads the value in every input
  valueReader() {
    let descriptionValue = this.inputFieldDescription.value;
    let incomeValue = this.inputFieldValue.value;
    let currencyIncomeValue = this.currencyIdIncome.value;
    return {
      descriptionValue,
      incomeValue,
      currencyIncomeValue,
    };
  },

  //check if the valu is less than zero or the inputs field are empty
  valueIncomeValidator() {
    let valRead = this.valueReader();
    if (valRead.incomeValue < 0) {
      alert("Negative values are not allowed");
      stopPropagation(e);
    } else if (valRead.incomeValue === "" || valRead.descriptionValue === "") {
      alert("The input field canno be empty, please fill all the inputs");
      stopPropagation(e);
    } else {
      return valRead;
    }
  },

  //updates the total Income and the balance section
  updateBalanceIncome() {
    let valRead = this.valueReader();
    let transformValueIncome = parseInt(valRead.incomeValue, 10);
    let currencyCreatorIncome = document.createElement("h4");
    currencyCreatorIncome.innerHTML = valRead.currencyIncomeValue;
    totalValuesBalance.valueIncomeTotal += transformValueIncome;
    totalValuesBalance.balanceValue += transformValueIncome;
    this.valueIncomeTotalSelector.innerHTML =
      totalValuesBalance.valueIncomeTotal;
    this.valueIncomeTotalSelector.appendChild(currencyCreatorIncome);
    totalValuesBalance.balanceSelector.innerHTML = `${valRead.currencyIncomeValue} ${totalValuesBalance.balanceValue}`;
  },

  //adds individual values to the income section
  addValueIncome() {
    let valRead = this.valueReader();
    let validated = this.valueIncomeValidator();

    //creates html element to be append on the DOM
    let containerCreatorIncome = document.createElement("div");
    //cheks if the input are negative or 0 if they are not the functions is executed

    containerCreatorIncome.id = "incomeCont";
    containerCreatorIncome.innerHTML = `<h4>${valRead.descriptionValue}</h4>
      <h4>${valRead.currencyIncomeValue}</h4><h4 id="idIncomeAdded">${valRead.incomeValue}</h4>
      <buttom id="buttomDeleteId">x</button>`;

    this.indIcomeCont.appendChild(containerCreatorIncome);
    this.updateBalanceIncome();

    //sets the values of the input field to empty
    this.inputFieldDescription.value = null;
    this.inputFieldValue.value = null;
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

    let descriptionValueExpense = this.expenseDescriptionSelector.value;
    let currencyValueExpense = this.expenseCurrencySelector.value;
    let valueValueExpense = this.expenseValueSelector.value;

    containerCreatorExpense.classList.add("containerExpenseId");

    containerCreatorExpense.innerHTML = `<h4>${descriptionValueExpense}</h4>
    <h4>${currencyValueExpense}</h4><h4 id="idIncomeAdded">${valueValueExpense}</h4>
    <buttom id="buttomDeleteIdExpense">x</button>`;

    this.expenseSelector.appendChild(containerCreatorExpense);

    this.updateBalanceExpense();

    //sets the values of the input field to empty
    this.expenseDescriptionSelector.value = null;
    this.expenseValueSelector.value = null;
  },

  removeContExpense(e) {
    if (e.target && e.target.id == "buttomDeleteIdExpense") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    }
  },
};

//event listeners to delete individual containers in Budge, income and expenses section

document.body.addEventListener("click", incomeInput.removeContIncome);

document.body.addEventListener("click", inputCont.removeContBudget);

document.body.addEventListener("click", expenseInput.removeContExpense);
