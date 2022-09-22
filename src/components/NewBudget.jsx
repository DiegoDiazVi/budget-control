import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({budget, setBudget}) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();

        (isNaN(budget) || budget <= 0) ? setMessage('No es un presupuesto valido') : setMessage('');
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario' action="">
                <div className='campo'>
                    <label>Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Añade tu presupeusto'
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
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