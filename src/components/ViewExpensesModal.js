import React  from 'react'
import '../style/BudgetModal.css'
import {UNCATEGORIZED_BUDGET_ID, useBudgets} from "../context/BudgetsContext"
import { currencyFormatter } from '../utils';



export default function ViewExpensesModal({handleClose, budgetId, show, setShowAddBudgetModal}) {
    const onViewExpenseClick = show ? "modal-list display-block" : "modal-list display-none";
    
    const { getBudgetExpenses, budgets, deleteBudget, deleteExpense } = useBudgets()

    const expenses = getBudgetExpenses(budgetId)
    const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find(b => b.id === budgetId)


return (
    <div  className={onViewExpenseClick}>
        <div className="">
            <div className="budget-modal-close-icon">
                <i className="nes-icon close is-small" onClick={()=>handleClose()}></i> 
                </div>
            <div className="budget-modal-header ">
                <div className="budget-modal-title ">
                    
                    <h2>{budget?.name}</h2>

                    {budgetId !== UNCATEGORIZED_BUDGET_ID &&(
                        <button className='nes-btn is-error nes-pointer ' onClick={()=>{
                            deleteBudget(budget)
                            handleClose()
                        }}><span> Delete</span></button>
                    )}
                    
                </div>
                
                
                
            </div>
            <div className="budget-modal-body">
                <h3>Expenses List</h3>
                <div className="lists">
                    <ul className=" nes-list is-circle expenses-list">
                        
                        {expenses.map(expense=> (
                        <li key={expense.id}>
                            <div className='view-expenses-row'>
                                <div className="view-expenses-description">
                                    {expense.description}
                                </div>
                                <div className="view-expenses-amount">
                                    {currencyFormatter.format(expense.amount)}
                                </div>
                                <div className="view-expenses-btn">
                                    <button className='nes-btn is-error is-small' onClick={()=>deleteExpense(expense)} >x</button>
                                </div>
                            </div>
                        </li>
                        
                        ))}
                        
                        
                    </ul>
</              div>
            </div>
            </div>
        </div>
  )
}
