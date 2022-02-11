import React from 'react';
import BudgetCard from './components/BudgetCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="">
      <h1>Budgets</h1>
      <button className='btn-primary'><span> Add Budget</span></button>
      <button className='btn-primary outlinePrimary'><span> Add Expense</span></button>
      <h3>On contruction</h3>
      </div>
      <BudgetCard name="Entertainment" amount={200} max={1000} ></BudgetCard>
    </div>
  );
}

export default App;
