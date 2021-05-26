// Total values
let balance = 0;
let totalIncome = 0;
let totalExpense = 0;

//Dom selectors
const totalBalanceDom = document.querySelector("#balance");
const budgetButtomDom = document.querySelector(".bubgetButtom");

const totalIncomeDom = document.querySelector("#incomeBalance");
const incomeButtomDom = document.querySelector(".incomeButtom");

const totalExpenseDom = document.querySelector("#expenseBalance");
const expenseButtomDom = document.querySelector(".buttomExpense");

const deleteButtom = document.querySelector(".deleteButtom");

//this functions add a container depending of the buttom you click
const addValue = (idparam, descparam) => {
  // checks which input has a value and adds that value to matching dom element
  document.querySelectorAll(".inputs").forEach((inp) => {
    let inputNumber = parseInt(inp.value);

    if (inp.id === idparam) {
      if (!inputNumber) {
        alert(`The ${idparam} cannot be 0`);
      } else if (inputNumber < 0) {
        alert(`The ${idparam} cannot be lees thant 0`);
      } else {
        const container = document.createElement("div");
        container.classList.add("cont");
        //adds the value to the budget container and updates the total budget balance dom value
        if (inp.id === "budgetInputIdValue") {
          container.innerHTML = `<p>$</p><p 
        class="value" id="budget_cont">${inputNumber}</p><buttom 
        class="deleteButtom" id="minus">x</buttom>`;
          container.id = "budget_container";
          const budgetDomContainer = document.getElementById("budget");
          budgetDomContainer.appendChild(container);
          balance += parseInt(inp.value);
          totalBalanceDom.innerHTML = balance;
          inp.value = null;
          //adds the value to the income container and updates the total income dom value
        } else if (inp.id === "incomeInputIdValue") {
          container.innerHTML = `<p>${descparam}</p><p>$</p><p 
          class="value" id="income_cont">${inputNumber}</p><buttom 
          class="deleteButtom" id="minus">x</buttom>`;
          container.id = "income_container";
          const incomeDomContainer = document.getElementById("incomeContainer");
          incomeDomContainer.appendChild(container);
          totalIncome += parseInt(inp.value);
          totalIncomeDom.innerHTML = totalIncome;
          totalBalanceDom.innerHTML = balance += parseInt(inp.value);
          inp.value = null;
          //adds the value to the expense container and updates the total expense dom value
        } else if (inp.id === "expenseInputIdValue") {
          container.innerHTML = `<p>${descparam}</p><p>$</p><p 
          class="value" id="expense_cont">${inputNumber}</p><buttom 
          class="deleteButtom" id="minus">x</buttom>`;
          container.id = "expense_container";
          const expenseDomContainer =
            document.getElementById("expenseContainer");
          expenseDomContainer.appendChild(container);
          totalExpense -= parseInt(inp.value);
          totalExpenseDom.innerHTML = totalExpense;
          totalBalanceDom.innerHTML = balance -= parseInt(inp.value);
          inp.value = null;
        }
      }
    }
  });
};

// reads which input have a value and return the value of the input clicked for the function add value to use.
const idReaderInput = (e) => {
  //Dom input ID selectors
  const DomIdBudget = document.getElementById("budgetInputIdValue").id;

  const DomIdIcome = document.getElementById("incomeInputIdValue").id;
  let DomIdIcomeRef = document.getElementById("incomeInputIdDescription").value;

  const DomIdExpense = document.getElementById("expenseInputIdValue").id;
  let DomIdExpenseRef = document.getElementById(
    "expenseInputIdDescription"
  ).value;

  DomIdIcomeRef = null;
  console.log(DomIdIcomeRef);

  if (e.target.classList.contains(budgetButtomDom.classList)) {
    return addValue(DomIdBudget);
  } else if (e.target.classList.contains(incomeButtomDom.classList)) {
    return addValue(DomIdIcome, DomIdIcomeRef);
  } else if (e.target.classList.contains(expenseButtomDom.classList)) {
    return addValue(DomIdExpense, DomIdExpenseRef);
  }
};

//delete an specific container you click and update the total dom value
const deleteValue = (e) => {
  if (e.target && e.target.id === "minus") {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    e.target.parentNode.childNodes.forEach((val) => {
      const stringToNumber = parseInt(val.innerHTML);
      if (val.id === "budget_cont") {
        totalBalanceDom.innerHTML = balance -= stringToNumber;
      } else if (val.id === "income_cont") {
        totalBalanceDom.innerHTML = balance -= stringToNumber;
        totalIncomeDom.innerHTML = totalIncome -= stringToNumber;
      } else if (val.id === "expense_cont") {
        totalBalanceDom.innerHTML = balance += stringToNumber;
        totalExpenseDom.innerHTML = totalExpense += stringToNumber;
      }
    });
  }
};

// resets all the variables and totals at the DOM
const resetAllValues = () => {
  balance = 0;
  totalIncome = 0;
  totalExpense = 0;
  totalBalanceDom.innerHTML = 0;
  totalIncomeDom.innerHTML = 0;
  totalExpenseDom.innerHTML = 0;
  document.querySelectorAll(".cont").forEach((element) => {
    element.parentNode.removeChild(element);
  });
};

document.addEventListener("click", deleteValue);
document
  .getElementById("buttomReset")
  .addEventListener("click", resetAllValues);

budgetButtomDom.addEventListener("click", idReaderInput);
incomeButtomDom.addEventListener("click", idReaderInput);
expenseButtomDom.addEventListener("click", idReaderInput);
