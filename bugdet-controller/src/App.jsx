import { useState } from 'react'

import Header from './components/Header'
import Modal from './components/Modal';
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

  const saveExpense = (expense => {
    expense.id = generateID();
    console.log(expense)
    setExpenses([...expenses, expense])

    setAnimationModal(false)

    setTimeout(() => {
        setModal(false)
  
      }, 500)
  })


  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        validBudget={validBudget}
        setValidBudget={setValidBudget} 
      />

      {validBudget && (<div className='nuevo-gasto'>
        <img
          src={NewExpenseIcon}
          alt='New expense icon'
          onClick={handleNewExpense}
        />
      </div>
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
