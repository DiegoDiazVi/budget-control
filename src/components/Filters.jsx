import React, { useEffect, useState } from 'react'


const Filters = ({filter, setFilter}) => {

    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label htmlFor="">Filtrar Gasto</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                    <option value="">-- Selecciona --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="hogar">Hogar</option>
                        <option value="ocio">Ocio</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters