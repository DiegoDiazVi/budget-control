import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { toCurrencyFormat } from '../helpers';

/*
    * Componente que muestra el dashboard
    * con grafica del presupuesto
*/
const BudgetControl = ({budget, expenses}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0)

    useEffect(() => {
        const spentTotal = expenses.reduce((total, expense) => expense.expenseAmount + total, 0);
        setSpent(spentTotal);
    }, [expenses]);

/*
    * Muestra el dashboard
*/
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {toCurrencyFormat(budget)}
                </p>
                <p>
                    <span>Disponible: </span> {toCurrencyFormat(0)}
                </p>
                <p>
                    <span>Gastado: </span> {toCurrencyFormat(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl