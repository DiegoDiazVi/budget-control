import React from 'react'
import { toCurrencyFormat } from '../helpers';
import SaveIcon from '../img/icono_ahorro.svg';
import HouseIcon from '../img/icono_casa.svg';
import FoodIcon from '../img/icono_comida.svg';
import ExpensesIcon from '../img/icono_gastos.svg';
import EntertainmentIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SuscriptionIcon from '../img/icono_suscripciones.svg';

const iconsDictionary = {
    ahorro: SaveIcon,
    hogar: HouseIcon,
    comida: FoodIcon,
    gastos: ExpensesIcon,
    ocio: EntertainmentIcon,
    salud: HealthIcon,
    suscripciones: SuscriptionIcon,
}

const Expense = ({expense}) => {
    const {expenseCategory, expenseAmount, expenseName, expenseDate, id} = expense;
    return (
        <div className='gasto sombra'>
            <div className="contenido-gasto">
                <img
                    src={iconsDictionary[expenseCategory]}
                    alt="Icono del gasto"
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{expenseCategory}</p>
                    <p className="nombre-gasto">{expenseName}</p>
                    <p className="fecha-gasto">Agregado el: <span>{expenseDate}</span></p>
                </div>
            </div>
            <p className="cantidad-gasto">{toCurrencyFormat(expenseAmount)}</p>
        </div>
    )
}

export default Expense