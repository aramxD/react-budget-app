import React, { useState } from 'react';
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal'
import AddExpenseModal from './components/AddExpenseModal';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';
import TotalBudgetCard from './components/TotalBudgetCard'
import ViewExpensesModal from './components/ViewExpensesModal';
import './App.css';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './context/BudgetsContext';



function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [ViewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const {budgets,expenses, getBudgetExpenses } = useBudgets()

 
  const openModal = ()=> {
    setShowAddBudgetModal(true)
  }

  function openAddExpenseModal(budgetId){
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  return (
    <div className="App">
      <>
      <div className="">
      <h1>Budgets</h1>
      <div className="card-footer">
      <button className='nes-btn is-primary nes-pointer' onClick={openModal}><span> Add Budget</span></button>
      <button className='nes-btn is-success nes-pointer' onClick={openAddExpenseModal}><span> Add Expense</span></button>
      </div>
      <h3>On contruction</h3>
      </div>
      {budgets.map(budget => {
        const amount = getBudgetExpenses(budget.id).reduce((total, expense)=> total + expense.amount, 0)
        return (
          <BudgetCard 
          key={budget.id}
          name={budget.name} 
          amount={amount} 
          max={budget.max} 
          onAddExpenseClick={()=> openAddExpenseModal(budget.id)}
          onViewExpensesClick={()=>setViewExpensesModalBudgetId(budget.id)}
          />
            )
          }
        )
      }
      <UncategorizedBudgetCard
        onAddExpenseClick={openAddExpenseModal}
        onViewExpensesClick={()=>setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
        />
      <TotalBudgetCard/>
      <AddBudgetModal 
        show={showAddBudgetModal} 
        handleClose={()=> setShowAddBudgetModal(false)}
        />

      <AddExpenseModal 
      show={showAddExpenseModal} 
      defaultBudgetId={addExpenseModalBudgetId}
      handleClose={()=> setShowAddExpenseModal(false)}
      />

      <ViewExpensesModal 
      show={ViewExpensesModalBudgetId} 
      budgetId={ViewExpensesModalBudgetId} 
      handleClose={()=> setViewExpensesModalBudgetId()}
        />
      </>
    </div>
  );
}

export default App;
