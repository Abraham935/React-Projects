import { useState } from 'react'
import CloseModalIcon from '../img/cerrar.svg'
import Message from './Message';

const Modal = ( {setModal, animationModal, setAnimationModal, saveExpense}) => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if([name, cost, category].includes('')){
            setMessage('One field is empty');

            setTimeout(() => {
                setMessage('');
            }, 500)

            return;
        }

        saveExpense({name, cost, category})
    } 

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

            <form 
                className={`formulario ${animationModal ? "animar" : "cerrar" }`}
                onSubmit={handleSubmit}
            >
                <legend>New expense</legend>
                {message && <Message type="error">{message}</Message>}

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