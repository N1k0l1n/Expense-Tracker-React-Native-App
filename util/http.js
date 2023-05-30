import axios from "axios";

export function storeExpense(expenseData){
    axios.post('https://expenses-a652f-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    );
}