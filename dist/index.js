"use strict";
// Total values
var balance = 0;
var totalIncome = 0;
var totalExpense = 0;
//Dom selectors
var totalBalanceDom = document.querySelector("#balance");
var budgetButtomDom = document.querySelector(".bubgetButtom");
var totalIncomeDom = document.querySelector("#incomeBalance");
var incomeButtomDom = document.querySelector(".incomeButtom");
var totalExpenseDom = document.querySelector("#expenseBalance");
var expenseButtomDom = document.querySelector(".buttomExpense");
var deleteButtom = document.querySelector(".deleteButtom");
var resetButtom = document.getElementById("buttomReset");
var hamburger = document.querySelector(".hamburger-menu");
var mobileMenu = document.querySelector(".mobile-menu");
//this functions add a container depending of the buttom you click
var addValue = function (idparam, descparam) {
    // checks which input has a value and adds that value to matching dom element
    document.querySelectorAll(".inputs").forEach(function (inp) {
        var inputNumber = parseInt(inp.value);
        var budgetDomContainer = document.getElementById("budget");
        var incomeDomContainer = document.getElementById("incomeContainer");
        var expenseDomContainer = document.getElementById("expenseContainer");
        if (inp.id === idparam) {
            var itemToDelete = 'budget_cont';
            if (idparam === 'budgetInputIdValue') {
                itemToDelete = 'budget_cont';
            }
            else if (idparam === 'incomeInputIdValue') {
                itemToDelete = 'income_cont';
            }
            else if (idparam === "expenseInputIdValue") {
                itemToDelete = 'expense_cont';
            }
            if (!inputNumber) {
                alert("The " + idparam + " cannot be 0");
            }
            else if (inputNumber < 0) {
                alert("The " + idparam + " cannot be lees thant 0");
            }
            else {
                var container = document.createElement("div");
                container.classList.add("cont");
                var templateBudget = "<p>$</p><p \n        class=\"value\" id=" + itemToDelete + ">" + inputNumber + "</p><buttom \n        class=\"deleteButtom\" id=\"minus\">x</buttom>";
                var templateIncomeExpense = "<p>" + descparam + "</p><p>$</p><p \n        class=\"value\" id=" + itemToDelete + ">" + inputNumber + "</p><buttom \n        class=\"deleteButtom\" id=\"minus\">x</buttom>";
                //adds the value to the budget container and updates the total budget balance dom value
                if (inp.id === "budgetInputIdValue") {
                    container.innerHTML = templateBudget;
                    container.id = "budget_container";
                    budgetDomContainer.appendChild(container);
                    balance += parseInt(inp.value);
                    totalBalanceDom.innerHTML = balance.toString();
                    inp.value = "";
                    //adds the value to the income container and updates the total income dom value
                }
                else if (inp.id === "incomeInputIdValue") {
                    container.innerHTML = templateIncomeExpense;
                    container.id = "income_container";
                    incomeDomContainer.appendChild(container);
                    totalIncome += parseInt(inp.value);
                    totalIncomeDom.innerHTML = totalIncome.toString();
                    balance += parseInt(inp.value);
                    totalBalanceDom.innerHTML = balance.toString();
                    inp.value = "";
                    //adds the value to the expense container and updates the total expense dom value
                }
                else if (inp.id === "expenseInputIdValue") {
                    container.innerHTML = templateIncomeExpense;
                    container.id = "expense_container";
                    expenseDomContainer.appendChild(container);
                    totalExpense -= parseInt(inp.value);
                    totalExpenseDom.innerHTML = totalExpense.toString();
                    balance -= parseInt(inp.value);
                    totalBalanceDom.innerHTML = balance.toString();
                    inp.value = '';
                }
                document.getElementById('incomeInputIdDescription').value = "";
                document.getElementById('expenseInputIdDescription').value = "";
            }
        }
    });
};
// reads which input have a value and return the value of the input clicked for the function add value to use.
var idReaderInput = function (e) {
    //Dom input ID selectors
    var DomIdBudget = document.getElementById("budgetInputIdValue").id;
    var DomIdIcome = document.getElementById("incomeInputIdValue").id;
    var DomIdIcomeRef = document.getElementById("incomeInputIdDescription").value;
    var targetIdReaderInput = e.target;
    var DomIdExpense = document.getElementById("expenseInputIdValue").id;
    var DomIdExpenseRef = document.getElementById("expenseInputIdDescription").value;
    if (targetIdReaderInput.classList.contains(budgetButtomDom.className)) {
        addValue(DomIdBudget, '');
    }
    else if (targetIdReaderInput.classList.contains(incomeButtomDom.className)) {
        addValue(DomIdIcome, DomIdIcomeRef);
    }
    else if (targetIdReaderInput.classList.contains(expenseButtomDom.className)) {
        addValue(DomIdExpense, DomIdExpenseRef);
    }
};
//delete an specific container you click and update the total dom value
var deleteValue = function (e) {
    var targetDeleteValue = e.target;
    var parentN = targetDeleteValue.parentNode;
    if (targetDeleteValue && targetDeleteValue.id === "minus") {
        parentN.parentNode.removeChild(parentN);
        Array.from(parentN.children).forEach(function (val) {
            var valInner = val.textContent;
            var stringToNumber = parseInt(valInner);
            var valId = val.id;
            if (valId === "budget_cont") {
                balance -= stringToNumber;
                totalBalanceDom.innerHTML = balance.toString();
            }
            else if (valId === "income_cont") {
                balance -= stringToNumber;
                totalBalanceDom.innerHTML = balance.toString();
                totalIncome -= stringToNumber;
                totalIncomeDom.innerHTML = totalIncome.toString();
            }
            else if (valId === "expense_cont") {
                balance += stringToNumber;
                totalBalanceDom.innerHTML = balance.toString();
                totalExpense += stringToNumber;
                totalExpenseDom.innerHTML = totalExpense.toString();
            }
        });
    }
};
// resets all the variables and totals at the DOM
var resetAllValues = function () {
    balance = 0;
    totalIncome = 0;
    totalExpense = 0;
    totalBalanceDom.innerHTML = "";
    totalIncomeDom.innerHTML = "";
    totalExpenseDom.innerHTML = "";
    document.querySelectorAll(".cont").forEach(function (element) {
        element.parentNode.removeChild(element);
    });
};
var displayMobileMenu = function () {
    hamburger.classList.toggle("non-active");
    mobileMenu.classList.toggle("active");
};
hamburger.addEventListener("click", displayMobileMenu);
resetButtom.addEventListener("click", resetAllValues);
budgetButtomDom.addEventListener("click", idReaderInput);
incomeButtomDom.addEventListener("click", idReaderInput);
expenseButtomDom.addEventListener("click", idReaderInput);
document.addEventListener("click", deleteValue);
