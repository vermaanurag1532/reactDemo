import React, { useState } from "react";

import NewExpense from "./component/newexpense";
import ExpenseItem from "./component/expenseitem";

const Dummy_expenses = [{
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expense, setExpenses] = useState(Dummy_expenses);

    const addExpenseHandler = (expense) => {
        setExpenses((preExpenses) => {
            return [...preExpenses, expense];
        });
    };

    return ( <
            div >
            <
            NewExpense onAddExpense = { addExpenseHandler }
            />{" "} {
            expense.map((expenses, index) => ( <
                ExpenseItem title = { expenses.title }
                amount = { expenses.amount }
                date = { expenses.date }
                key = { index }
                />
            ))
        } { " " } <
        /div>
);
}

export default App;