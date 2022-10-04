import React from 'react'
import { useState, useEffect} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { toCurrencyFormat } from '../helpers';
import 'react-circular-progressbar/dist/styles.css';

/*
    * Componente que muestra el dashboard
    * con grafica del presupuesto
*/
const BudgetControl = ({budget, expenses}) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const spentTotal = expenses.reduce((total, expense) => expense.expenseAmount + total, 0);
        const availableTotal = budget - spentTotal;
        setAvailable(availableTotal);
        setSpent(spentTotal);
    }, [expenses]);

/*
    * Muestra el dashboard
*/
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar value={30} text={'Gastado'}/>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {toCurrencyFormat(budget)}
                </p>
                <p>
                    <span>Disponible: </span> {toCurrencyFormat(available)}
                </p>
                <p>
                    <span>Gastado: </span> {toCurrencyFormat(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl