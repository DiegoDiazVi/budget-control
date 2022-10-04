import React from 'react'
import Expense from './Expense'


/*
    * Componente que recibe los
    * gastos, el modificador del
    * los gasos y la funcion de
    * eliminar los gastos y las
    * envia al componente expenses
*/
const BudgetList = ({expenses, setEditExpense, deleteExpense}) => {
    return (
        <div className='listado-gastos contenedor'>
            <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {expenses.map( expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                    setEditExpense={setEditExpense}
                    deleteExpense={deleteExpense}
                />
            ))}
        </div>
    )
}

export default BudgetList