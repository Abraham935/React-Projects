import Expense from "./Expense"

const ExpensesList = ( {expenses}) => {


    return (
        <div className='listado-gastos contenedor'>
            <h2>{expenses.length ? 'Expenses' : 'No Expenses added at the moment'}</h2>

            {expenses.map ( expense => (
                <Expense
                key={expense.id}
                expense={expense} 
                />
            ))}
        </div>
    )
}

export default ExpensesList