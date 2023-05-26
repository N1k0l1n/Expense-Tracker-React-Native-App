import { View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date('2022-12-23')
  },
  {
    id: "e2",
    description: "A pair of CLothes",
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: "e3",
    description: "A pair of things",
    amount: 9.29,
    date: new Date('2022-11-05')
  },
  {
    id: "e4",
    description: "A book",
    amount: 19.29,
    date: new Date('2022-08-06')
  },
  {
    id: "e5",
    description: "A thing",
    amount: 10.29,
    date: new Date('2022-03-12')
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}
