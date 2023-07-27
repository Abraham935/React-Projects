
import { dateParse } from "../helpers"

const Expense = ( {expense} ) => {

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">

                <div className="descripcion-gasto">
                    <p className="categoria">{expense.category}</p>
                    <p className="nombre-gasto">{expense.name}</p>
                    <p className="fecha-gasto">
                        Added on: {''}
                        <span>{ dateParse(expense.date)}</span>
                    </p>

                </div>
            </div>

            <p className="cantidad-gasto">${expense.cost}</p>

        </div>
    )
}

export default Expense