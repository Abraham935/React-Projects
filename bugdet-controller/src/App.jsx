import { useState } from 'react'

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

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimationModal(true);

    }, 500)
  }

  const saveExpense = expense => {
    expense.id = generateID();
    expense.date = Date.now();
    setExpenses([...expenses, expense ])

    console.log(expenses)

  

    
  }


  return (
    <div>
      <Header
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
        />
      }
    </div>
  )
}

export default App
