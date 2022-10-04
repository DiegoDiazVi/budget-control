import React from 'react'
import { useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { toCurrencyFormat } from '../helpers';
import 'react-circular-progressbar/dist/styles.css';

/*
    * Componente que muestra el dashboard
    * con grafica del presupuesto
*/
const BudgetControl = ({budget, expenses}) => {

    /*
        * states de lo disponible,
        * lo gastado y el porcentaje
    */
    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    /*
        * Efecto que se dispara cada que
        * los gastos cambian y de esta forma
        * se hacen los calculos de cuanto
        * tengo disponible y cuanto tengo
        * gastado, tambien calcula el
        * porcentaje de la grafica.
    */
    useEffect(() => {
        const spentTotal = expenses.reduce((total, expense) => expense.expenseAmount + total, 0);
        const availableTotal = budget - spentTotal;
        const percentageTotal = ((availableTotal / budget) * 100).toFixed(2);
        setAvailable(availableTotal);
        setSpent(spentTotal);
        setTimeout(() => {
            setPercentage(percentageTotal);
        }, 1000);
    }, [expenses]);

    /*
        * Muestra el dashboard
        * y la grafica del componente
        * importado CircularProgressBar
        * con la propiedad predeterminada
        * buildStyles que tambien se importa
    */
    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6',
                    })}
                    value={percentage}
                    text={`${percentage}% Gastado`}
                />
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