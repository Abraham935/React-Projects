import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import { generateID } from './helpers';

import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length > 0){
      setModal(true)

      setTimeout(() => {
      setAnimationModal(true);

    }, 500)
    }
  }, [editExpense])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimationModal(true);

    }, 500)
  }

  const deleteExpense= (id) => {
    const expensesUpdated = expenses.filter(expense => expense.id !== id)

    setExpenses(expensesUpdated);

  }

  const saveExpense = expense => {

    if(expense.id) {
      const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState )
      setExpenses(updatedExpenses);

    } else {
      expense.id = generateID();
      expense.date = Date.now();
      setExpenses([...expenses, expense ])
      
    }

    console.log(expenses)
    
  }


  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget} 
      />

      {validBudget && (
        <>
          <main>
            <ExpensesList 
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
            />
          </main>

          <div className='nuevo-gasto'>
            <img
              src={NewExpenseIcon}
              alt='New expense icon'
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && 
        <Modal
          setModal={setModal}
          animationModal={animationModal}
          setAnimationModal={setAnimationModal}
          saveExpense={saveExpense}
          editExpense={editExpense}       
        />
      }
    </div>
  )
}

export default App
