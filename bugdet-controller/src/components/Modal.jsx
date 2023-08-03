/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import CloseModalIcon from '../img/cerrar.svg'
import Message from './Message';

const Modal = ( {setModal, animationModal, setAnimationModal, saveExpense, editExpense, setEditExpense}) => {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if(Object.keys(editExpense).length > 0 ){
            setName(editExpense.name)
            setCost(editExpense.cost)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if([name, cost, category].includes('')){
            setMessage('One field is empty');

            setTimeout(() => {
                setMessage('');
            }, 500)

            return;
        }

        saveExpense({name, cost, category, id, date})
        closeModal();
    } 

    const closeModal = () => {
        setAnimationModal(false)
        setEditExpense({})

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
                <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'}</legend>
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
                        <option value="Saving">Saving</option>
                        <option value="Food">Food</option>
                        <option value="Home">Home</option>
                        <option value="Fun">Fun</option>
                        <option value="Health">Health</option>
                        <option value="Subscriptions">Subscriptions</option>
                        
                    </select>
                </div>

                <input
                    type="submit"
                    value={editExpense.name ? 'Save Changes' : 'Add Expense'}
                />


            </form>

        </div>
    )
}

export default Modal