import { View, StyleSheet } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
  {
    id: "e6",
    description: "A pair of Shoes",
    amount: 59.99,
    date: new Date('2022-12-23')
  },
  {
    id: "e7",
    description: "A pair of CLothes",
    amount: 89.29,
    date: new Date('2022-01-05')
  },
  {
    id: "e8",
    description: "A pair of things",
    amount: 9.29,
    date: new Date('2022-11-05')
  },
  {
    id: "e9",
    description: "A book",
    amount: 19.29,
    date: new Date('2022-08-06')
  },
  {
    id: "e10",
    description: "A thing",
    amount: 10.29,
    date: new Date('2022-03-12')
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:24,
        paddingHorizontal:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700
    }
})
