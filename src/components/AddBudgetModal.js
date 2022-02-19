import React, {useRef} from 'react'
import '../style/BudgetModal.css'
import {useBudgets} from "../context/BudgetsContext"



export default function AddBudgetModal({handleClose, show}) {
    const setShowAddBudgetModal = show ? "modal display-block" : "modal display-none";
    console.log(show)
    const nameRef = useRef()
    const maxRef = useRef()
    const { addBudget } = useBudgets()
    function handleSubmit(e){
        e.preventDefault()
        addBudget({
                name: nameRef.current.value,
                max: parseFloat(maxRef.current.value)
            })
        
        handleClose()

}

return (
    <div  className={setShowAddBudgetModal}>
            <div className="budget-modal-header">
                <div className="budget-modal-title">
                    <h2>Add a Budget</h2>
                </div>
                <div className="budget-modal-close-icon">
                <i className="nes-icon close is-medium"></i>
                </div>
            </div>
            <div className="budget-modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-data nes-field">
                    <label htmlFor="budget_name"  >Budget Name</label>
                    <input className='nes-pointer' type="text" name="budget_name" id='budget_name' ref={nameRef} required/>
                    </div>
                    <div className="form-data nes-field">
                    <label htmlFor="budget_amount">Budget Amount</label>
                    <input className='nes-pointer' type="number" name="budget_amount" id='budget_amount' defaultValue={0} step={.01} ref={maxRef} required/>
                    </div>
                    <input type="submit" className='nes-btn is-primary nes-pointer' value="Submit" />
                </form>
            </div>
        </div>
  )
}
