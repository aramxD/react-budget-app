import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../context/BudgetsContext'
import BudgetCard from './BudgetCard'

export default function UncategorizedBudgetCard() {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce(
        (total, expense) => total + expense.amount,
        0
    )

    const max = budgets.reduce(
        (total, budgets) => total + budgets.max,
        0
    )

    if (max === 0) return null
    return ( <
        BudgetCard name = "Total"
        amount = { amount }
        max = { max }
        hideButtons /
        >
    )
}