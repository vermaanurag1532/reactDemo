import React from "react";

import Chart from '../chart/Chart';

const ExpenseChart = (props) => {
    const ChartDataPoints = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'may', value: 0 },
        { label: 'june', value: 0 },
        { label: 'july', value: 0 },
        { label: 'aug', value: 0 },
        { label: 'sept', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 },
    ];
    console.log(props.expenses);
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        ChartDataPoints[expenseMonth].value += expense.amount;
    }
    return <chart dataPoints = { ChartDataPoints }
    />
};

export default ExpenseChart;