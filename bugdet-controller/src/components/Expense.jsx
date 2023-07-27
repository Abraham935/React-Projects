

const Expense = ( {expense} ) => {

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">

                <div className="descripcion-gasto">
                    <p className="categoria">{expense.category}</p>
                    <p className="nombre-gasto">{expense.name}</p>

                </div>
            </div>

        </div>
    )
}

export default Expense