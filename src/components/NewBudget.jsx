import React from 'react'

const NewBudget = () => {
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' action="">
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Añade tu presupeusto'
                    />
                    <input type="submit" value="Añadir" />
                </div>
            </form>
        </div>
    )
}

export default NewBudget