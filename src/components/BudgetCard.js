import React from 'react'
import { currencyFormatter } from '../utils'


export default function BudgetCard({name, amount, max}) {
    return ( < div className = 'card' >
        <div className="card-header">
                <div className="card-title">
                    <h2>{name}</h2>
                </div>
                <div className="card-boddy">
                    {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
                </div>
            </div>
            <div className="card-bar"></div>
            <div className="card-footer">
                <button className='btn-primary'><span>Add Expense</span></button>
                <button className='btn-primary outlinePrimary'><span>View Expenses</span></button>
            </div>
        </div>
    )
}