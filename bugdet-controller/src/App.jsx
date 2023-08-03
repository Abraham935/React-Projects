import { useState, useEffect } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
import ExpensesList from './components/ExpensesList';
import Filters from './components/Filters';

import { generateID } from './helpers';

import NewExpenseIcon from './img/nuevo-gasto.svg'

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false)

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [editExpense, setEditExpense] = useState({})

  const [filter, setFilter] = useState('')
  const [filterExpenses, setFilterExpenses] = useState([])



  useEffect(() => {
    if(Object.keys(editExpense).length > 0){
      setModal(true)

      setTimeout(() => {
      setAnimationModal(true);

    }, 500)
    }
  }, [editExpense])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if(filter){
      //Filter expenses by category
      const filterExpenses = expenses.filter(expense => expense.category === filter)

      setFilterExpenses(filterExpenses)
    }


  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLS > 0){
      setValidBudget(true);
    }
  }, [])

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
      setEditExpense({})

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
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget} 
      />

      {validBudget && (
        <>
          <main>
            <Filters
              filter={filter}
              setFilter={setFilter}

            />
            <ExpensesList 
              expenses={expenses}
              setEditExpense={setEditExpense}
              deleteExpense={deleteExpense}
              filter={filter}
              filterExpenses={filterExpenses}
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
          setEditExpense={setEditExpense}       
        />
      }
    </div>
  )
}

export default App
