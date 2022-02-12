import React from 'react';
import '../style/BudgetModal.css'

const AddBudgetModal=props => {
    return ( 
        <div className="budget-modal">
            <div className="budget-modal-header">
                <div className="budget-modal-title">
                    <h2>Add a Budget</h2>
                </div>
                <div className="budget-modal-close-icon">
                    x
                </div>
            </div>
            <div className="budget-modal-body">
                <form action="">
                    <div className="form-data">
                    <label htmlFor="budget_name"  >Budget Name</label>
                    <input type="text" name="budget_name" required/>
                    </div>
                    <div className="form-data">
                    <label htmlFor="budget_amount">Budget Amount</label>
                    <input type="number" name="budget_amount" defaultValue={0} step={.01} required/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}
export default AddBudgetModal