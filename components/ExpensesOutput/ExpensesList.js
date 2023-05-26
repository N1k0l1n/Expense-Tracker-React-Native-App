import { FlatList, Text } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData){
    return <ExpenseItem {...itemData.item}/>
}

export default function ExpensesList({expenses}) {
  return <FlatList 
            data={expenses} 
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
            />;
}
