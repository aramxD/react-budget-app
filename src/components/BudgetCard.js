import React from 'react'
import { currencyFormatter } from '../utils'
import '../style/card.css'


export default function BudgetCard({name, amount, max, gray}) {
    
    const porcentaje = getProgressBar(amount, max)
    const progresBar = {"--progresBar":porcentaje} 
    const cardAlert = getProgressBarVarian(amount, max)
    
    return ( < div className = {`card ${cardAlert}`} >
        <div className="card-header">
                <div className="card-title">
                    <h2>{name}</h2>
                </div>
                <div className="card-boddy">
                    <div className='titulo-amount'>{currencyFormatter.format(amount)}</div> / 
                    <div className="titulo-max">{currencyFormatter.format(max)}</div>
                </div>
            </div>
            <div className="bar">
                <div className=  {`card-progresBar ${cardAlert}`}
                    id='progresBar'
                    style={progresBar}
                    variant={getProgressBarVarian(amount, max)}
                    min={0}
                    max={max}
                    now={amount} 
                    >
                </div>
            </div>
            <div className="card-footer">
                <button className='btn-primary'><span>Add Expense</span></button>
                <button className='btn-primary outlinePrimary'><span>View Expenses</span></button>
            </div>
        </div>
    )
}

function getProgressBar(amount, max){
    const ratio = (amount/max)*100
    const porcentaje = ratio+"%"
    return porcentaje
}




function getProgressBarVarian(amount, max){
    const ratio = amount/max
    if (ratio<.7) return 'primary'
    if (ratio<.85) return 'warning'
    return 'danger'
}