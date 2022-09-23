import React from 'react'

/*
    * Componente que muestra el dashboard
    * con grafica del presupuesto
*/
const BudgetControl = ({budget}) => {
/*
    * Funcion que usa la api de JS
    * para pasar el presupuesto a
    * formato moneda colombiana
*/
    const toCurrencyFormat = (money) => {
        return money.toLocaleString('es-CO',{
                style: 'currency',
                currency: 'COP'
            });
    }
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