import React, { useState } from "react";

import ExpenseDate from "./expensedate";
import Card from "./card";
import "./expenseitem.css";

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("updated!");
    };

    return ( <
        Card className = "expense-item" >
        <
        ExpenseDate date = { props.date }
        />{" "} <
        div className = "expense-item__description" >
        <
        h2 > { title } < /h2>{" "} <
        div className = "expense-item__price" > $ { props.amount } < /div>{" "} <
        /div> <
        button onClick = { clickHandler } > change title < /button> <
        /Card>
    );
}

export default ExpenseItem;