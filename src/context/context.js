import React, { useReducer, createContext } from 'react';
import { contextReducer } from './contextReducer'

const initState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initState);


export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initState)


    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }

    const balance = transactions.reduce((ac, curr) => {
        return (curr.type === 'Expense' ? ac - curr.amount : ac + curr.amount)
    }, 0)

    const value = {
        deleteTransaction,
        addTransaction,
        transactions,
        balance
    }

    return (
        <ExpenseTrackerContext.Provider value={value} >
            { children}
        </ExpenseTrackerContext.Provider >
    )
}