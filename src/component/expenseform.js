import React, { useState } from "react";
import "./expenseform.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [isEntered, setIsEntered] = useState(true);
    // can also be written as

    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //   enteredAmount: '',
    //   enteredDate: '',
    //});

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // when only one state is used

        // method 1
        //setUserInput({
        // ...userInput,
        // enteredTitle: event.target.value,
        //});

        //method 2
        //setUserInput((prevState) => {
        //    return {...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        if (!enteredTitle || !enteredAmount || !enteredDate) {
            setIsEntered(false);
        } else {
            setIsEntered(true);
        }
        console.log(isEntered);
        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return ( <
        form >
        <
        div className = "new-expense__controls" >
        <
        div className = "new-expense__control" >
        <
        label > Title < /label>{" "} <
        input type = "text"
        value = { enteredTitle }
        onChange = { titleChangeHandler }
        />{" "} < /
        div > { " " } <
        div className = "new-expense__control" >
        <
        label > Amount < /label>{" "} <
        input type = "number"
        mini = "0.01"
        step = "0.01"
        value = { enteredAmount }
        onChange = { amountChangeHandler }
        />{" "} < /
        div > { " " } <
        div className = "new-expense__control" >
        <
        label > Date < /label>{" "} <
        input type = "date"
        mini = "2019-01-01"
        max = "2022-12-31"
        value = { enteredDate }
        onChange = { dateChangeHandler }
        />{" "} < /
        div > { " " } <
        /div>{" "} <
        div className = "new-expense__actions" >
        <
        button type = "submit"
        disabled = { isEntered }
        onClick = { submitHandler } > { " " }
        Add Expense { " " } <
        /button>{" "} < /
        div > { " " } <
        /form>
    );
};

export default ExpenseForm;