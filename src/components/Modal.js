import React from 'react';
import '../style/BudgetModal.css'

const Modal = props => {
    return (
        <div className="budget-modal">
        <div className="budget-modal-header">
            <div className="budget-modal-title">
                Add a Budget
            </div>
            <div className="budget-modal-close-icon">
                x
            </div>
        </div>
        <div className="budget-modal-body">
            <form action="">
                <label htmlFor="budget_name">Budget Name</label>
                <input type="text" name="budget_name" required/>
                <label htmlFor="budget_amount">Budget Amount</label>
                <input type="number" name="budget_amount" defaultValue={0} step={.01} required/>
                <input type="submit" value="" />
            </form>
        </div>
    </div>
    );
};

export default Modal