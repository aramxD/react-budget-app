import React, { useState } from 'react';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal'
 
import './App.css';
import { useBudgets } from './context/BudgetsContext';



function App() {
  const [show, showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const {budgets} = useBudgets()

  return (
    <div className="App">
      <>
      <div className="">
      <h1>Budgets</h1>
      <div className="card-footer">
      <button className='nes-btn is-primary nes-pointer' onClick={()=> setShowAddBudgetModal(show=true)}><span> Add Budget</span></button>
      <button className='nes-btn is-success nes-pointer'><span> Add Expense</span></button>
      </div>
      <h3>On contruction</h3>
      </div>
      {budgets.map(budget => (

      <BudgetCard 
      key={budget.id}
      name={budget.name} 
      amount={10} 
      max={budget.max} />

      ))}
      
      <AddBudgetModal handleClose={()=> setShowAddBudgetModal(false)}/>
      </>
    </div>
  );
}

export default App;
