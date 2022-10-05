import React from 'react'
import Expense from './Expense'


/*
    * Componente que recibe los
    * gastos, el modificador del
    * los gasos y la funcion de
    * eliminar los gastos y las
    * envia al componente expenses
*/
const BudgetList = ({
    expenses,
    setEditExpense,
    deleteExpense,
    filter,
    filterExpenses,
}) => {
    return (
        <div className='listado-gastos contenedor'>
            {
                filter ? (
                    <>
                        <h2>{filterExpenses.length ? 'Gastos' : 'No hay gastos en la categoria'}</h2>
                        {filterExpenses.map( expense => (
                            <Expense
                                key={expense.id}
                                expense={expense}
                                setEditExpense={setEditExpense}
                                deleteExpense={deleteExpense}
                            />
                        ))
                        }
                    </>
                ) : (
                    <>
                        <h2>{expenses.length ? 'Gastos' : 'No hay gastos aún'}</h2>
                        {expenses.map( expense => (
                            <Expense
                                key={expense.id}
                                expense={expense}
                                setEditExpense={setEditExpense}
                                deleteExpense={deleteExpense}
                            />
                        ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default BudgetList