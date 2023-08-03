import React from 'react'
import NewBudget from './NewBudget'
import BudgetController from './BudgetController'

const Header = ({budget, setBudget, validBudget, setValidBudget, expenses, setExpenses}) => {

    return (
        <header>
            <h1>Expense Tracker</h1>

            { validBudget ? (
                <BudgetController
                    budget={budget}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setBudget={setBudget}
                    setValidBudget={setValidBudget} 
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