import {useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'



const BudgetController = ({budget, expenses, setBudget, setExpenses, setValidBudget}) => {

    const [percentage, setPercentage] = useState(0);
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.cost + total, 0);

        const totalAvailable = budget - totalSpent;

        //Calculate budget percentage
        const newPercentage = (( (budget - totalAvailable) / budget ) * 100).toFixed(2);

        setSpent(totalSpent);
        setAvailable(totalAvailable);
        
        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1300)

        console.log('Si')
        
        
        

    }, [expenses])

    const parseQuantity = (quantity) => {
        return quantity.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const result = confirm('¿Do you want to reset the app?')
        
        if(result){
            setExpenses([])
            setBudget(0)
            setValidBudget(false)
        }

    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: percentage > 100 ? '#DC2626': '#3B82F6',
                        trailColor: '#F5F5F5'
                    })}
                    value={percentage}
                    text={`${percentage}% Spent `}
                />
            </div>

            <div className='contenido-presupuesto'>
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Reset app
                </button>
                <p>
                    <span>Presupuesto </span> {parseQuantity(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : ''}`}>
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