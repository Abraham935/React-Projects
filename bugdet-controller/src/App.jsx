import { useState } from 'react'
import Header from './components/Header'
import NewExpenseIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {

  const [budget, setBudget] = useState(0);
  const [validBudget, setValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animationModal, setAnimationModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimationModal(true);

    }, 500)
  }


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
        />
      }
    </div>
  )
}

export default App
