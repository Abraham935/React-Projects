import React from 'react'
import NewBudget from './NewBudget'
import BudgetController from './BudgetController'

const Header = ({budget, setBudget, validBudget, setValidBudget, expenses}) => {

    return (
        <header>
            <h1>Expense Tracker</h1>

            { validBudget ? (
                <BudgetController
                    budget={budget}
                    expenses={expenses} 
                />
            ): (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setValidBudget={setValidBudget}
            />
            )}
            
        </header>
    )
}

export default Header