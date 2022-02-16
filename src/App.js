import React, { useState } from 'react';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal'
 
import './App.css';



function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)


  return (
    <div className="App">
      <>
      <div className="">
      <h1>Budgets</h1>
      <div className="card-footer">
      <button className='nes-btn is-primary nes-pointer' onClick={()=> setShowAddBudgetModal(true)}><span> Add Budget</span></button>
      <button className='nes-btn is-success nes-pointer'><span> Add Expense</span></button>
      </div>
      <h3>On contruction</h3>
      </div>
 
      <BudgetCard name="Entertainment" amount={699} max={1000} ></BudgetCard>
      <AddBudgetModal handleClose={()=> setShowAddBudgetModal(false)}/>
      </>
    </div>
  );
}

export default App;
