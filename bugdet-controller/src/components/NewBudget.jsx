import { Children, useState } from 'react';
import Message from './Message';

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        if(!Number(budget) || Number(budget) < 0){
            setMessage('Invalid Budget')
        } else {
            console.log('Is a number')
        }

    }
    
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label>Budget </label>
                    <input
                        className='nuevo-presupuesto'
                        type='text'
                        placeholder='Add your Budget'
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)} 
                    />
                </div>
                
                <input type='submit' value='Add'/>

                {message && <Message type={"error"}>{message}</Message>}

            </form>
        </div>
    )
}

export default NewBudget