
/* =====================================
   SPENDWISE JAVASCRIPT FOUNDATION
===================================== */

// 1. APPLICATION VARIABLES

const currency = "KSh";

let monthlyBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;


// 2. FUNCTION TO CALCULATE REMAINING BALANCE

function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// 3. FUNCTION TO FORMAT CURRENCY

function formatCurrency(amount) {
    return currency + " " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


// 4. FUNCTION TO DISPLAY RESULTS

function displayResults() {

    remainingBalance = calculateBalance(
        monthlyBudget,
        totalExpenses
    );

    console.log("========== SPENDWISE BUDGET SUMMARY ==========");

    console.log("Monthly Budget: " + formatCurrency(monthlyBudget));

    console.log("Total Expenses: " + formatCurrency(totalExpenses));

    console.log("Remaining Balance: " + formatCurrency(remainingBalance));

    if (remainingBalance < 0) {
        console.log("Status: Warning! You have exceeded your budget.");
    } else {
        console.log("Status: You are within your budget.");
    }

    console.log("==============================================");

    // Update dashboard information

    document.getElementById("totalBudget").textContent =
        formatCurrency(monthlyBudget);

    document.getElementById("remainingBalance").textContent =
        formatCurrency(remainingBalance);

    const expenseSummary = document.getElementById("expenseSummary");

    if (remainingBalance < 0) {
        expenseSummary.textContent = "Budget exceeded!";
        expenseSummary.classList.add("over-budget");
    } else {
        expenseSummary.textContent = "You are within your budget.";
        expenseSummary.classList.remove("over-budget");
    }
}


// 5. FUNCTION TO COLLECT USER INPUT

function collectBudgetInput() {

    // Ask the user for monthly budget

    const budgetInput = prompt(
        "Enter your monthly budget in KSh:"
    );

    // Stop if the user cancels

    if (budgetInput === null) {
        console.log("Budget entry cancelled.");
        return;
    }

    // Convert input into a number

    const enteredBudget = Number(budgetInput);

    // Validate budget

    if (
        budgetInput.trim() === "" ||
        !Number.isFinite(enteredBudget) ||
        enteredBudget <= 0
    ) {
        alert("Please enter a valid budget greater than zero.");
        return;
    }

    // Ask the user for total expenses

    const expensesInput = prompt(
        "Enter your total expenses in KSh:"
    );

    if (expensesInput === null) {
        console.log("Expense entry cancelled.");
        return;
    }

    const enteredExpenses = Number(expensesInput);

    // Validate expenses

    if (
        expensesInput.trim() === "" ||
        !Number.isFinite(enteredExpenses) ||
        enteredExpenses < 0
    ) {
        alert("Please enter valid expenses of zero or more.");
        return;
    }

    // Store the collected information

    monthlyBudget = enteredBudget;
    totalExpenses = enteredExpenses;

    // Calculate and display results

    displayResults();

    alert(
        "Your budget has been calculated successfully!"
    );
}


// 6. CONNECT BUTTON TO JAVASCRIPT

const budgetButton = document.getElementById("budgetButton");

budgetButton.addEventListener("click", collectBudgetInput);


// 7. INITIAL CONSOLE MESSAGE

console.log("Welcome to SpendWise!");
console.log("Your budgeting application is ready.");
console.log("Click Enter Budget Details to get started.");
