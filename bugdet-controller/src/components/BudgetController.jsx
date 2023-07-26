import React from 'react'

const BudgetController = ({budget}) => {

    const parseQuantity = () => {
        return budget.toLocaleString('en-US', {
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
                    <span>Available </span> {parseQuantity(budget)}
                </p>

                <p>
                    <span>Spent </span> {parseQuantity(budget)}
                </p>

            </div>
        </div>
    )
}

export default BudgetController