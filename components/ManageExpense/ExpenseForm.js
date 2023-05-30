import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import React, { useState } from "react";
import Button from "../ui/Button";


export default function ExpenseForm({onCancel, onSubmit, submitButtonLabel}) {

  const [inputValues, setInputValues] = useState({
    amount:'',
    date:'',
    description:''
  });

  function inputChangeHandler( inputIdentifier, enteredValue) {
    setInputValues((curInputValues) => {
        return {
            ...curInputValues,
            [inputIdentifier]: enteredValue
        };
    });
  }


  function submitHandler(){
    const expenseData={
        amount: +inputValues.amount,
        date: new Date(inputValues.date),
        description: inputValues.description
    }
    console.log('submit', expenseData);
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, 'amount'),
            value: inputValues.amount
          }}
        />
        <Input
        style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText:inputChangeHandler.bind(this, 'date'),
            value: inputValues.date
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //autoCorrect: false //default is true
          //autoCapitalize: 'none'
          onChangeText:inputChangeHandler.bind(this, 'description'),
          value: inputValues.description
        }}
      />
       <View style={styles.buttons}>
          <Button style={styles.button}  mode="flat" onPressed={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} onPressed={submitHandler}>
            {submitButtonLabel}
          </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  button:{
    minWidth:120,
    marginHorizontal: 8
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
