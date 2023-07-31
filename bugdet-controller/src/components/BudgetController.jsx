import {useEffect, useState} from 'react'



const BudgetController = ({budget, expenses}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.cost + total, 0);

        const totalAvailable = budget - spent;

        setSpent(totalSpent);
        setAvailable(totalAvailable);
        
        
        

    }, [expenses])

    const parseQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>graphic here</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto </span> {parseQuantity(budget)}
                </p>

                <p>
                    <span>Available </span> {parseQuantity(available)}
                </p>

                <p>
                    <span>Spent </span> {parseQuantity(spent)}
                </p>

            </div>
        </div>
    )
}

export default BudgetController