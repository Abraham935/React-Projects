import { Children, useState } from 'react';
import Message from './Message';

const NewBudget = ({budget, setBudget, setValidBudget}) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        if(!budget || budget < 0){
            setMessage('Invalid Budget')

            return
        }
        
        setMessage('')
        console.log('true')
        setValidBudget(true)



    }
    
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label>Budget </label>
                    <input
                        className='nuevo-presupuesto'
                        type='number'
                        placeholder='Add your Budget'
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))} 
                    />
                </div>
                
                <input type='submit' value='Add'/>

                {message && <Message type={"error"}>{message}</Message>}

            </form>
        </div>
    )
}

export default NewBudget