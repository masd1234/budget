// Total values
let balance = 0;
let totalIncome = 0;
let totalExpense = 0;

//Dom selectors
const totalBalanceDom = document.querySelector("#balance") as HTMLElement;
const budgetButtomDom = document.querySelector(".bubgetButtom") as HTMLButtonElement;

const totalIncomeDom = document.querySelector("#incomeBalance") as HTMLElement;
const incomeButtomDom = document.querySelector(".incomeButtom") as HTMLElement;

const totalExpenseDom = document.querySelector("#expenseBalance") as HTMLElement;
const expenseButtomDom = document.querySelector(".buttomExpense") as HTMLButtonElement;

const deleteButtom = document.querySelector(".deleteButtom")as HTMLButtonElement;

//this functions add a container depending of the buttom you click
const addValue = (idparam: string, descparam: string) => {
  // checks which input has a value and adds that value to matching dom element
  document.querySelectorAll(".inputs").forEach((inp) => {
    let inputNumber = parseInt((<HTMLInputElement>inp).value);
    const budgetDomContainer = document.getElementById("budget") as HTMLElement;
    const incomeDomContainer = document.getElementById("incomeContainer") as HTMLElement;
    const expenseDomContainer = document.getElementById("expenseContainer") as HTMLElement;

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
          
          budgetDomContainer.appendChild(container);
          balance += parseInt((<HTMLInputElement>inp).value);
          totalBalanceDom.innerHTML = balance.toString();
          (<HTMLInputElement>inp).value = "0";

          //adds the value to the income container and updates the total income dom value
        } else if (inp.id === "incomeInputIdValue") {
          container.innerHTML = `<p>${descparam}</p><p>$</p><p 
          class="value" id="income_cont">${inputNumber}</p><buttom 
          class="deleteButtom" id="minus">x</buttom>`;
          container.id = "income_container";    
          incomeDomContainer.appendChild(container);
          totalIncome += parseInt((<HTMLInputElement>inp).value);
          totalIncomeDom.innerHTML = totalIncome.toString();
          balance += parseInt((<HTMLInputElement>inp).value)
          totalBalanceDom.innerHTML = balance.toString();
          (<HTMLInputElement>inp).value = "0";

          //adds the value to the expense container and updates the total expense dom value
        } else if (inp.id === "expenseInputIdValue") {
          container.innerHTML = `<p>${descparam}</p><p>$</p><p 
          class="value" id="expense_cont">${inputNumber}</p><buttom 
          class="deleteButtom" id="minus">x</buttom>`;
          container.id = "expense_container";
          expenseDomContainer.appendChild(container);
          totalExpense -= parseInt((<HTMLInputElement>inp).value);
          totalExpenseDom.innerHTML = totalExpense.toString();
          balance -= parseInt((<HTMLInputElement>inp).value);
          totalBalanceDom.innerHTML = balance.toString();
          (<HTMLInputElement>inp).value = '0';
          
        }
      }
    }
  });
};

// reads which input have a value and return the value of the input clicked for the function add value to use.
const idReaderInput = (e: Event) => {
  //Dom input ID selectors
  const DomIdBudget = (<HTMLInputElement>document.getElementById("budgetInputIdValue")).id;

  const DomIdIcome = (<HTMLInputElement>document.getElementById("incomeInputIdValue")).id;
  let DomIdIcomeRef = (<HTMLInputElement>document.getElementById("incomeInputIdDescription")).value;

  const targetIdReaderInput = e.target as HTMLButtonElement;

  const DomIdExpense = (<HTMLInputElement>document.getElementById("expenseInputIdValue")).id;
  let DomIdExpenseRef = (<HTMLInputElement>document.getElementById(
    "expenseInputIdDescription"
  )).value;

  if (targetIdReaderInput.classList.contains(budgetButtomDom.className)) {
    return addValue(DomIdBudget, '');
  } else if (targetIdReaderInput.classList.contains(incomeButtomDom.className)) {
    return addValue(DomIdIcome, DomIdIcomeRef);
  } else if (targetIdReaderInput.classList.contains(expenseButtomDom.className)) {
    return addValue(DomIdExpense, DomIdExpenseRef);
  }
};

//delete an specific container you click and update the total dom value
const deleteValue = (e: Event) => {
    const targetDeleteValue = e.target as HTMLButtonElement;
    const parentN =  targetDeleteValue.parentNode as HTMLElement
    
  if (targetDeleteValue && targetDeleteValue.id === "minus") {
    (<HTMLDocument>parentN.parentNode).removeChild(parentN);
    Array.from(parentN.children).forEach((val) => {
      const valInner = val.textContent
      const stringToNumber = parseInt(valInner!);
      const valId = val.id;
            
      if (valId === "budget_cont") {
        balance -= stringToNumber;
        totalBalanceDom.innerHTML = balance.toString();
      } else if (valId === "income_cont") {
        balance -= stringToNumber;
        totalBalanceDom.innerHTML = balance.toString()
        totalIncome -= stringToNumber;
        totalIncomeDom.innerHTML = totalIncome.toString()
      } else if (valId === "expense_cont") {
        balance += stringToNumber;
        totalBalanceDom.innerHTML = balance.toString()
        totalExpense += stringToNumber
        totalExpenseDom.innerHTML = totalExpense.toString()
      }
    });
  }
};

// resets all the variables and totals at the DOM
const resetAllValues = () => {
  balance = 0;
  totalIncome = 0;
  totalExpense = 0;
  totalBalanceDom.innerHTML = 0+"";
  totalIncomeDom.innerHTML = 0+"";
  totalExpenseDom.innerHTML = 0+"";
  document.querySelectorAll(".cont").forEach((element) => {
    (<HTMLElement>element.parentNode).removeChild(element);
  });
};

document.addEventListener("click", deleteValue);
(<HTMLButtonElement>document.getElementById("buttomReset")
).addEventListener("click", resetAllValues);

budgetButtomDom.addEventListener("click", idReaderInput);
incomeButtomDom.addEventListener("click", idReaderInput);
expenseButtomDom.addEventListener("click", idReaderInput);
