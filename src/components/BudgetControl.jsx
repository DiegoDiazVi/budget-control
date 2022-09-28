import React from 'react'
import { toCurrencyFormat } from '../helpers';

/*
    * Componente que muestra el dashboard
    * con grafica del presupuesto
*/
const BudgetControl = ({budget}) => {

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
                    <span>Gastado: </span> {toCurrencyFormat(0)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl