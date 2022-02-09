import React from 'react';
import BudgetCard from './components/BudgetCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="">
      <h1>Budgets</h1>
      <button className='btn-primary'>Add Budget</button>
      <button className='btn-outlinePrimary'>Add Expense</button>
      <h3>On contruction</h3>
      </div>
      <BudgetCard></BudgetCard>
    </div>
  );
}

export default App;
