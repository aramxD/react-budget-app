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
      <button className='btn-primary' onClick={()=> setShowAddBudgetModal(true)}><span> Add Budget</span></button>
      <button className='btn-primary outlinePrimary'><span> Add Expense</span></button>
      <h3>On contruction</h3>
      </div>

      <BudgetCard name="Entertainment" amount={199} max={1000} ></BudgetCard>
      <AddBudgetModal/>
      </>
    </div>
  );
}

export default App;
