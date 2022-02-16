import React, { useContext, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import useLocalStorage from '../hooks/useLocalStorage'

const BudgetsContext = React.createContext()

export function useBudgets() {
    return useContext(BudgetsContext)
}

export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage('budgets', [])
    const [expenses, setExpenses] = useLocalStorage('expenses', [])


    function getBudgetExpenses(budgetId) {
        return expenses.filter(expenses => expenseId === budgetId)
    }

    function addExpenses({ description, amount, budgetId }) {

        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        })
    }

    function addBudget({ name, max }) {
        alert('inicia funcion');
        setBudgets(prevBudgets => {
            if (prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        })
    }
    

    function deleteBudget({ id }) {
        // TODO: Agregar la redireccion de gastos a "sin categoria"
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }

    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    return ( <BudgetsContext.Provider value = {{

        budgets,
        expenses,
        getBudgetExpenses,
        addExpenses,
        addBudget,
        deleteBudget,
        deleteExpense

    }} > { children } </BudgetsContext.Provider> )
}