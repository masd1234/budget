let totalValuesBalance = {
  balanceSelector: document.getElementById("balance"),
  valueIncomeTotalSelector: document.getElementById("incomeBalance"),
  valueExpenseTotalSelector: document.getElementById("expenseBalance"),
  balanceValue: 0,
  valueIncomeTotal: 0,
  valueExpenseTotal: 0,

  resetValues() {
    this.balanceValue = 0;
    this.valueIncomeTotal = 0;
    this.valueExpenseTotal = 0;
    this.balanceSelector.innerHTML = 0;
    this.valueIncomeTotalSelector.innerHTML = 0;
    this.valueExpenseTotalSelector.innerHTML = 0;
    document.querySelectorAll(".cont").forEach((cont) => {
      cont.style.display = "none";
    });
  },
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

  selectorBudgetDom() {
    let containerSelector = document.querySelector(".detailContainer");
    let inputSelector = document.getElementById("budgetInputIdValue");

    return {
      containerSelector,
      inputSelector,
    };
  },

  // adds new budgets containers with values
  addValueBudget() {
    let valueChecked = this.checkValue();
    let updateDom = this.updaterBalance();
    let selectedBudegDom = this.selectorBudgetDom();

    // creates the DOM element
    let containerCreator = document.createElement("div");
    containerCreator.classList.add("cont");
    containerCreator.id = "budget_cont";
    containerCreator.innerHTML = `<h4>$</h4><h4 class="value">${valueChecked}</h4><buttom id="minus">x</button>`;
    selectedBudegDom.containerSelector.appendChild(containerCreator);
    // Resets the value on the input field to none
    selectedBudegDom.inputSelector.value = null;
  },

  removeContBudget(e) {
    if (e.target && e.target.id == "minus") {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);

      e.target.parentNode.childNodes.forEach((val) => {
        if (val.classList.contains("value")) {
          let stringToNumber = parseInt(val.innerHTML);
          totalValuesBalance.balanceSelector.innerHTML =
            totalValuesBalance.balanceValue -= stringToNumber;
        }
      });
    }
  },
};

//Income Input
let incomeInput = {
  inputFieldDescription: document.getElementById("incomeInputIdetail"),
  inputFieldValue: document.getElementById("incomeInputIdValue"),
  indIcomeCont: document.getElementById("incomeContainer"),
  currencyIdIncome: document.getElementById("currencyIncome"),

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

  //check if the value is less than zero or the inputs field are empty
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
    totalValuesBalance.valueIncomeTotalSelector.innerHTML =
      totalValuesBalance.valueIncomeTotal;

    totalValuesBalance.valueIncomeTotalSelector.appendChild(
      currencyCreatorIncome
    );
    totalValuesBalance.balanceSelector.innerHTML = `${valRead.currencyIncomeValue} ${totalValuesBalance.balanceValue}`;
  },

  //adds individual values to the income section
  addValueIncome() {
    let valRead = this.valueReader();
    let validated = this.valueIncomeValidator();
    //creates html element to be append on the DOM
    let containerCreatorIncome = document.createElement("div");
    //cheks if the input are negative or 0 if they are not the functions is executed
    containerCreatorIncome.classList.add("cont");
    containerCreatorIncome.id = "incomeCont";
    containerCreatorIncome.innerHTML = `<h4>${valRead.descriptionValue}</h4>
      <h4 >${valRead.currencyIncomeValue}</h4><h4 class='value'  id="idIncomeAdded">${valRead.incomeValue}</h4>
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
      e.target.parentNode.childNodes.forEach((val) => {
        if (val.id === "idIncomeAdded") {
          let stringToNumber = parseInt(val.innerHTML);
          totalValuesBalance.valueIncomeTotalSelector.innerHTML =
            totalValuesBalance.valueIncomeTotal -= stringToNumber;
          totalValuesBalance.balanceSelector.innerHTML =
            totalValuesBalance.balanceValue -= stringToNumber;
        }
      });
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

  //updates the total values on the expense container
  updateBalanceExpense() {
    let ValueExpenseUpdate = this.expenseValueSelector.value;
    let transformValueExpense = parseInt(ValueExpenseUpdate, 10);
    let currencyCreatorExpense = document.createElement("h4");

    totalValuesBalance.valueExpenseTotal += transformValueExpense;
    totalValuesBalance.valueExpenseTotalSelector.innerHTML =
      totalValuesBalance.valueExpenseTotal;

    totalValuesBalance.balanceValue -= transformValueExpense;

    currencyCreatorExpense.innerHTML = this.expenseCurrencySelector.value;
    totalValuesBalance.valueExpenseTotalSelector.appendChild(
      currencyCreatorExpense
    );
    totalValuesBalance.balanceSelector.innerHTML = `${this.expenseCurrencySelector.value} ${totalValuesBalance.balanceValue}`;
  },

  //reads the value in every input
  valueReaderExpense() {
    let descriptionValueExpense = this.expenseDescriptionSelector.value;
    let expenseValue = this.expenseValueSelector.value;
    let currencyExpenseValue = this.expenseCurrencySelector.value;
    return {
      descriptionValueExpense,
      expenseValue,
      currencyExpenseValue,
    };
  },

  //check if the value is less than zero or the inputs field are empty
  valueExpenseValidator() {
    let valReadExpense = this.valueReaderExpense();
    if (valReadExpense.expenseValue < 0) {
      alert("Negative values are not allowed");
      stopPropagation(e);
    } else if (
      valReadExpense.expenseValue === "" ||
      valReadExpense.descriptionValueExpense === ""
    ) {
      alert("The input field canno be empty, please fill all the inputs");
      stopPropagation(e);
    } else {
      return valReadExpense;
    }
  },

  //add expense values to the DOM
  addExpense() {
    let readerExpense = this.valueReaderExpense();
    let valueExpenseValidated = this.valueExpenseValidator();

    let containerCreatorExpense = document.createElement("div");
    let descriptionValueExpense = readerExpense.descriptionValueExpense;
    let currencyValueExpense = readerExpense.currencyExpenseValue;
    let valueValueExpense = readerExpense.expenseValue;

    containerCreatorExpense.classList.add("cont");
    containerCreatorExpense.id = "containerExpenseId";

    containerCreatorExpense.innerHTML = `<h4>${descriptionValueExpense}</h4>
    <h4>${currencyValueExpense}</h4><h4 id="idExpenseAdded">${valueValueExpense}</h4>
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
      e.target.parentNode.childNodes.forEach((val) => {
        if (val.id === "idExpenseAdded") {
          let stringToNumber = parseInt(val.innerHTML);
          totalValuesBalance.valueExpenseTotalSelector.innerHTML =
            totalValuesBalance.valueExpenseTotal -= stringToNumber;
          totalValuesBalance.balanceSelector.innerHTML =
            totalValuesBalance.balanceValue += stringToNumber;
        }
      });
    }
  },
};

//event listeners to delete individual containers in Budge, income and expenses section

document.body.addEventListener("click", incomeInput.removeContIncome);
document.body.addEventListener("click", inputCont.removeContBudget);
document.body.addEventListener("click", expenseInput.removeContExpense);
