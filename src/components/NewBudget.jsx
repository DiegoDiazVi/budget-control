import React, { useState } from 'react'
import Message from './Message';


/*
    * Se reciben los props del componente Header
*/
const NewBudget = ({
        budget,
        setBudget,
        setIsBudgetValid
}) => {

/*
    * State del menssaje en caso de que sea erroneo
    * luego de ingresar el presupeusto
*/

    const [message, setMessage] = useState('');

/*
    * Funcion que recibe el evento del
    * submit y valida el presupuesto
    * en caso de ser erroneo
    * muestra el mensaje de error
    * si es correcto cambia el state
    * de la flag de presupuesto
*/
    const handleBudget = (e) => {
        e.preventDefault();

        if (budget <= 0) {
            setMessage('No es un presupuesto valido')
            return
        }
        setMessage('');
        setIsBudgetValid(true);

    }
/*
    * Renderiza el formulario donde se ingresa el
    * presupuesto y cambia el state del presupeusto
    * al valor ingresado
    *
    * ----- Message -------
    * En caso de que el presupuesto sea invalido
    * muestra el componente Message, envia la prop
    * tipo y el componente tendra el valor del state
    * de message
*/
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu presupeusto'
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                    />
                    <input
                        type="submit"
                        value="Añadir"
                    />
                    {message && <Message tipo='error'>{message}</Message> }
                </div>
            </form>
        </div>
    )
}

export default NewBudget