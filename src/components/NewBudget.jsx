import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({
        budget,
        setBudget,
        setIsBudgetValid
}) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();

        if (budget <= 0) {
            setMessage('No es un presupuesto valido')
            return
        }
        setMessage('');
        setIsBudgetValid(true);

    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handleBudget} className='formulario' action="">
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