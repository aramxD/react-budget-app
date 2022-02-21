import React, {useRef} from 'react'
import '../style/BudgetModal.css'
import {useBudgets, UNCATEGORIZED_BUDGET_ID} from "../context/BudgetsContext"



export default function AddExpenseModal({handleClose, show, defaultBudgetId}) {
    const setShowAddBudgetModal = show ? "modal display-block" : "modal display-none";
    
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()
    function handleSubmit(e){
        e.preventDefault()
        
        addExpense({
                description: descriptionRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId: budgetIdRef.current.value
                })
        handleClose()
    }

    

return (
    <div  className={setShowAddBudgetModal}>
            <div className="budget-modal-header">
                <div className="budget-modal-title">
                    <h2>Add a Expense</h2>
                </div>
                <div className="budget-modal-close-icon">
                    <i className="nes-icon close is-small" onClick={()=>handleClose()}></i> 
                
                </div>
            </div>
            <div className="budget-modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-data nes-field">
                    <label htmlFor="expense_name"  >Expense Name</label>
                    <input className='nes-pointer nes-input' type="text" name="expense_name" id='expense_name' ref={descriptionRef} required/>
                    </div>

                    <div className="form-data nes-field">
                    <label htmlFor="expense_amount">Expense Amount</label>
                    <input className='nes-pointer nes-input' type="number" name="expense_amount" id='expense_amount' defaultValue={0} step={.01} ref={amountRef} required/>
                    </div>

                    <div className="form-data nes-field">
                    
                    <label htmlFor="default_select">Budget</label>
                        <div className="nes-select">
                        <select required id="default_select" defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            
                            <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                            
                            {budgets.map(budget =>(
                                <option key={budget.id} value={budget.id}>{budget.name}</option>
                            ))}
                            

                        
                        </select>   
                        </div>
                    </div>
                    <input type="submit" className='nes-btn is-primary nes-pointer' value="Submit" />
                </form>
            </div>
        </div>
  )
}
