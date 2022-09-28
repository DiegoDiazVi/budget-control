import React from 'react'

const Expense = ({expense}) => {
    const {expenseCategory, expenseAmount, expenseName, expenseDate, id} = expense;
    return (
        <div className='gasto sombra'>
            <div className="contenido-gasto">
                <div className="descripcion-gasto">
                    <p className="categoria">{expenseCategory}</p>
                    <p className="nombre-gasto">{expenseName}</p>
                    <p className="fecha-gasto">Agregado el: <span>{expenseDate}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Expense