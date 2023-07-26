import { useState } from 'react'
import CloseModalIcon from '../img/cerrar.svg'

const Modal = ( {setModal, animationModal, setAnimationModal}) => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');



    
    const closeModal = () => {
        setAnimationModal(false)

        setTimeout(() => {
            setModal(false)
      
          }, 500)
    }

    return (
        <div className="modal">

            <div className="cerrar-modal">
                <img
                    src={CloseModalIcon}
                    alt='Close modal' 
                    onClick={closeModal}
                />
            </div>

            <form className={`formulario ${animationModal ? "animar" : "cerrar" }`}>
                <legend>New expense</legend>

                <div className='campo'>
                    <label htmlFor='name'>Expense Name</label>
                    <input 
                        id='name'
                        type='text'
                        placeholder='Add the expense name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='name'>Cost</label>
                    <input 
                        id='name'
                        type='text'
                        placeholder='Add the cost of the expense i.e 300'
                        value={cost}
                        onChange={e => setCost(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor='name'>Category</label>
                    <select 
                        id='category'
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="fun">Fun</option>
                        <option value="Health">Health</option>
                        <option value="Subscriptions">Subscriptions</option>
                        
                    </select>
                </div>

                <input
                    type="submit"
                    value="Add Expense"
                />


            </form>

        </div>
    )
}

export default Modal